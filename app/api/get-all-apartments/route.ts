import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const dbClient = new PrismaClient();

export const GET = async () => {
  try {
    const allrentalApartments = await dbClient.apartment.findMany();
    return NextResponse.json({ data: allrentalApartments, status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
    return NextResponse.json({
      message:
        "Irgendetwas ist mit dem Server schiefgelaufen. Bitten versuchen Sie nochmals.",
      status: 500,
    });
  }
};
