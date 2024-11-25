import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Catalogo() {
  const session = await getServerSession();

  if(!session){
    redirect("/")
  }

  return (
    <>
      <h1>Estoque</h1>
    </>
  );
}
