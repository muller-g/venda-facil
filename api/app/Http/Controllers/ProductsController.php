<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImages;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductsController extends Controller
{

    public function index()
    {
        $products = Product::with('images')->get();

        return response()->json($products);
    }

    public function store(Request $request)
    {

        $images = $request->allFiles()['images'];

        $request->validate([
            'title' => 'required|string',
            'description' => 'required|string',
            'price' => 'required',
            'qtd' => 'required|integer',
            'sku' => 'required|string',
        ]);

        $product = Product::create([
            'title' => $request->get('title'),
            'description' => $request->get('description'),
            'price' => $request->get('price'),
            'qtd' => $request->get('qtd'),
            'sku' => $request->get('sku'),
        ]);

        if(count($images) > 0){
            foreach($images as $image){
                $filename = Str::uuid() . '.' . $image->getClientOriginalExtension();
                $path = $image->storeAs('products/' . $product->id, $filename, 'public');

                ProductImages::create([
                    'product_id' => $product->id,
                    'original_name' => $image->getClientOriginalName(),
                    'type' => $image->getClientMimeType(),
                    'format' => $image->getClientOriginalExtension(),
                    'saved_name' => $filename,
                    'path' => $path
                ]);
            }
        }

        return response()->json(['message' => 'Success']);
    }
}
