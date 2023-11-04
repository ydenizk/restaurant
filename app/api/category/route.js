import { NextResponse } from "next/server";
import { prisma } from "@/app/utils/connect";

//const prisma = new PrismaClient()
//Category fetch
export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Sth wrong...." }), {
      status: 500,
    });
  }
};
