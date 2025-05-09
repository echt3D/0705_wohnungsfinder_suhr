import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const dbClient = new PrismaClient();

export const PATCH = async (req: Request) => {
  const body = await req.json();
  const { apartmentId, state, area, floor, rooms, description, notes } = body;

  try {
    const foundApartment = await dbClient.apartment.findFirst({
      where: { apartmentId },
    });

    if (!foundApartment) {
      return NextResponse.json(
        { error: "no existing apartment" },
        { status: 500 }
      );
    }
    const updatedApartment = await dbClient.apartment.update({
      where: { apartmentId },
      data: {
        state,
        area,
        floor,
        rooms,
        description,
        notes,
      },
    });
    return NextResponse.json({
      data: updatedApartment,
      status: 200,
    });
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
