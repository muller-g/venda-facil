import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import styles from '../page.module.css';
import TableContent from "./table/tableContent";
import Link from "next/link";
import { MdCreateNewFolder } from "react-icons/md";

export default async function Estoque() {
  const session = await getServerSession();

  if(!session){
    redirect("/")
  }

  return (
    <div className={styles.page_content}>
      <div className={styles.wrapp}>
        <h1>Estoque</h1>
        <Link href='/dashboard/produtos/novo'>
          <MdCreateNewFolder /> Cadastrar produto 
        </Link>
      </div>
      <TableContent/>
    </div>
  );
}
