import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from './page.module.css';
import { Button, Input } from "@chakra-ui/react";
import { Textarea } from '@chakra-ui/react'
import InputImage from "@/component/inputImage/inputImage";
import { FaPlus } from "react-icons/fa";

export default async function Estoque() {
  const session = await getServerSession();

  if(!session){
    redirect("/")
  }

  return (
    <div className={styles.page_content}>
      <div className={styles.wrapp}>
        <h1>Título</h1>
        <Input />
        <h1>Descrição</h1>
        <Textarea />
      </div>
      <div className={styles.wrapp}>
        <h1>Fotos o produto</h1>
        <InputImage />
      </div>
    </div>
  );
}
