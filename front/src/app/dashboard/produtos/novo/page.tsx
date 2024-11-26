import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import ContentProduct from "./content/contentProduct";

export default async function Estoque() {
  const session = await getServerSession();

  if(!session){
    redirect("/")
  }

  return (
    <ContentProduct />
  );
}
