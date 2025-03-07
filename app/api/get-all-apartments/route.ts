import { NextResponse } from "next/server";
import { dbClient } from "../../utils/dbClient";

export const GET = async () => {
  try {
    const allApartments = await dbClient.apartment.findMany();
    return NextResponse.json({ data: allApartments, status: 200 });
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
