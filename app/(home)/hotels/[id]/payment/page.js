import PaymentForm from "@/app/components/payment/PaymentForm";
import { auth } from "@/auth";
import { getHotelById, getUserByEmail } from "@/database/queries";
import { getDayDifference } from "@/utils/data-util";
import { redirect } from "next/navigation";

export default async function page({
  params: { id },
  searchParams: { checkin, checkout },
}) {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }
  const loggedInUser = await getUserByEmail(session.user.email);
  const hotelInfo = await getHotelById(id, checkin, checkout);

  const hasCheckInCheckOut = checkin && checkout;
  let cost = (hotelInfo?.highRate + hotelInfo?.lowRate) / 2;
  if (hasCheckInCheckOut) {
    const days = getDayDifference(checkin, checkout);
    cost = cost * days;
  }
  return (
    <section className="container">
      <div className="p-6 rounded-lg max-w-xl mx-auto my-12 mt-[100px]">
        <h2 className="font-bold text-2xl">Payment Details</h2>
        <p className="text-gray-600 text-sm">
          You have picked{" "}
          <b>
            {hotelInfo?.name} By {hotelInfo?.city}
          </b>{" "}
          and base price is <b>${cost}</b> for
          {hasCheckInCheckOut && getDayDifference(checkin, checkout)} days
        </p>
        <PaymentForm
          loggedInUser={loggedInUser}
          hotelInfo={hotelInfo}
          checkin={checkin}
          checkout={checkout}
        />
      </div>
    </section>
  );
}
