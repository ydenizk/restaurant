import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../utils/connect";
import { getAuthSession } from "@/app/utils/auth";

//products fetch
export const GET = async (req) => {
    const session=await getAuthSession()

  try {

    if(session.user.isAdmin){
        const orders =await  prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), { status: 200 });   
    }
    const orders =await prisma.order.findMany({
        where:{userEmail:session.user.email}
    });
return new NextResponse(JSON.stringify(orders),{status:200})
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Sth wrong...." }), {
      status: 500,
    });
  }
};
