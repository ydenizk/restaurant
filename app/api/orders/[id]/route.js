import { NextResponse ,NextRequest} from "next/server";
import { prisma } from  "./../../../utils/connect";

export const PUT = async (req, { params }) => {
  const { id } = params;

  try {
    const body = await req.json();

    await prisma.order.update({
      where: { id: id },
      data: { status: body },
    });

    return new NextResponse(JSON.stringify({ message: "order updated..." }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "sth went wongg...." }), {
      status: 500,
    });
  }
};
