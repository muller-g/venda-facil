'use client';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import styles from "./tableContent.module.css";

interface Product {
    id?: string;
    code?: string;
    name?: string;
    description?: string;
    image?: string;
    price?: number;
    category?: string;
    quantity?: number;
    inventoryStatus?: string;
    rating?: number;
}

export default function CheckboxRowSelectionDemo() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<Product[] | null>(null);

    const columns = [
      {
        name: 'id',
        selector: (row: any) => row.id,
      },
      {
        name: 'Code',
        selector: (row: any) => row.code,
      },
      {
        name: 'Name',
        selector: (row: any) => row.name,
      },
      {
        name: 'Description',
        selector: (row: any) => row.description,
      },
      {
        name: 'Image',
        selector: (row: any) => row.image,
      },
      {
        name: 'Price',
        selector: (row: any) => row.price,
      },
      {
        name: 'Category',
        selector: (row: any) => row.category,
      },
      {
        name: 'Quantity',
        selector: (row: any) => row.quantity,
      },
      {
        name: 'inventoryStatus',
        selector: (row: any) => row.inventoryStatus,
      },
    ];
    useEffect(() => {
        setProducts([
          {
            id: '1',
            code: 'abc123',
            name: 'Produto 1',
            description: '',
            image: 'https://via.placeholder.com/150',
            price: 19.99,
            category: 'Categoria A',
            quantity: 100,
            inventoryStatus: 'In Stock',
            rating: 4.5,
          },
          {
            id: '2',
            code: 'def456',
            name: 'Produto 2',
            description: '',
            image: 'https://via.placeholder.com/150',
            price: 25.99,
            category: 'Categoria B',
            quantity: 50,
            inventoryStatus: 'In Stock',
            rating: 4.0,
          },
          {
            id: '3',
            code: 'ghi789',
            name: 'Produto 3',
            description: '',
            image: 'https://via.placeholder.com/150',
            price: 15.49,
            category: 'Categoria C',
            quantity: 0,
            inventoryStatus: 'Out of Stock',
            rating: 3.8,
          },
          {
            id: '4',
            code: 'jkl012',
            name: 'Produto 4',
            description: '',
            image: 'https://via.placeholder.com/150',
            price: 49.99,
            category: 'Categoria A',
            quantity: 75,
            inventoryStatus: 'In Stock',
            rating: 5.0,
          },
          {
            id: '5',
            code: 'mno345',
            name: 'Produto 5',
            description: '',
            image: 'https://via.placeholder.com/150',
            price: 8.99,
            category: 'Categoria B',
            quantity: 200,
            inventoryStatus: 'In Stock',
            rating: 4.2,
          },
          {
            id: '6',
            code: 'pqr678',
            name: 'Produto 6',
            description: '',
            image: 'https://via.placeholder.com/150',
            price: 32.99,
            category: 'Categoria C',
            quantity: 120,
            inventoryStatus: 'In Stock',
            rating: 4.7,
          },
          {
            id: '7',
            code: 'stu901',
            name: 'Produto 7',
            description: '',
            image: 'https://via.placeholder.com/150',
            price: 14.99,
            category: 'Categoria A',
            quantity: 80,
            inventoryStatus: 'In Stock',
            rating: 4.1,
          },
          {
            id: '8',
            code: 'vwx234',
            name: 'Produto 8',
            description: '',
            image: 'https://via.placeholder.com/150',
            price: 27.50,
            category: 'Categoria B',
            quantity: 40,
            inventoryStatus: 'Low Stock',
            rating: 3.9,
          },
        ]);
    }, []);

    return (
        <div className={styles.table_content}>
            <DataTable
              columns={columns}
              data={products}
              selectableRows
              onSelectedRowsChange={() => ''}
            />
        </div>
    );
}
