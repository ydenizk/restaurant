import { NextResponse, NextRequest } from "next/server";
import { prisma } from "../../utils/connect";

//products fetch
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat");
  //yukarıdakı yapı standart JS de,query alma URL objecty vasıtasıytla
  //https://developer.mozilla.org/en-US/docs/Web/API/URL/searchParams kontrol et
  try {
    const products = await prisma.product.findMany({
      where: {
        catTitle: cat,
      },
    });
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Sth wrong...." }), {
      status: 500,
    });
  }
};
