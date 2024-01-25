import { PrismaClient } from "@prisma/client";
import Form from "../components/Form";

export default async function Home() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-br from-amber-200 to-amber-600">
      <Form />
    </main>
  );
}
