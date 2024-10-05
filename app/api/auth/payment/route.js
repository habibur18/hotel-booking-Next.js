import { bookingModel } from "@/models/booking-model";
import { dbConnect } from "@/services/mongoConnect";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { hotelId, userId, checkin, checkout } = await request.json();
  await dbConnect();
  const payload = {
    hotelId: new mongoose.Types.ObjectId(hotelId),
    userId: new mongoose.Types.ObjectId(userId),
    checkin,
    checkout,
  };
  try {
    await bookingModel.create(payload);
    return new NextResponse("success", {
      status: 201,
    });
  } catch (e) {
    return NextResponse(e.message, {
      status: 500,
    });
  }
  return NextResponse.json(payload);
}
