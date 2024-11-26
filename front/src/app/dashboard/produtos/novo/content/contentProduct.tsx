'use client';
import InputImage from "@/component/inputImage/inputImage";
import { Button, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import styles from './contentProduct.module.css';
import axios from 'axios';

export default function ContentProduct(){
    const format = (val: any) => `$` + val
    const parse = (val: any) => val.replace(/^\$/, '')

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('0');
    const [qtd, setQtd] = useState('');
    const [sku, setSku] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    async function saveProduct(){
        setLoading(true)
        let formData = new FormData()

        formData.append('title', title)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('qtd', qtd)
        formData.append('sku', sku)

        images.map((item: any) => {
            formData.append('images[]', item)
        });

        await axios.post(process.env.NEXT_PUBLIC_API_ROUTE + '/product', formData)
        .then((res: any) => {
            console.log(res)
            setLoading(true)
        })
    } 

    return(
        <div className={styles.page_content}>
            <div className={styles.wrapp}>
                <h1>Título</h1>
                <Input onChange={(e) => setTitle(e.target.value)}/>
                <h1>Descrição</h1>
                <Textarea onChange={(e) => setDescription(e.target.value)}/>
                <div className={styles.wrapp_items}>
                    <div className={styles.item_wrapp}>
                        <h1>Preço</h1>
                        <NumberInput
                            onChange={(valueString) => setPrice(parse(valueString))}
                            value={format(price)}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </div>
                    <div className={styles.item_wrapp}>
                        <h1>Quantidade</h1>
                        <NumberInput 
                            defaultValue={1} 
                            clampValueOnBlur={false}
                            onChange={(e) => setQtd(e)}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                            </NumberInput>
                    </div>
                    <div className={styles.item_wrapp}>
                        <h1>SKU</h1>
                        <Input onChange={(e) => setSku(e.target.value)}/>
                    </div>
                </div>
                <div className={styles.button_wrapp}>
                    <Button>Voltar</Button>
                    <Button isLoading={loading} colorScheme='teal' onClick={saveProduct}>Cadastrar</Button>
                </div>
            </div>
            <div className={styles.wrapp}>
                <h1>Fotos do produto</h1>
                <InputImage setImages={setImages}/>
            </div>
        </div>
    )
}