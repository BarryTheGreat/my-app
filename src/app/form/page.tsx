import { PrismaClient } from "@prisma/client";
import Form from "../components/Form";

export default async function Home() {
  const prisma = new PrismaClient();
  const users = await prisma.user.findMany();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Form />
      {users.map((user) => (
        <div key={user.id}>
          <div>{user.email}</div>
          <div>{user.firstname}</div>
          <div>{user.lastname}</div>
        </div>
      ))}
    </main>
  );
}
