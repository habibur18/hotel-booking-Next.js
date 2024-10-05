import Gallery from "@/app/components/hotel/details/Gallery";
import Overview from "@/app/components/hotel/details/Overview";
import Summary from "@/app/components/hotel/details/Summary";
import { getHotelById } from "@/database/queries";

export default async function SingleHotelPage({
  params: { id },
  searchParams: { checkin, checkout },
}) {
  const hotelInfo = await getHotelById(id, checkin, checkout);
  return (
    <div>
      <Summary hotelInfo={hotelInfo} checkin={checkin} checkout={checkout} />
      <Gallery gallery={hotelInfo?.gallery} />
      <Overview overview={hotelInfo?.overview} />
    </div>
  );
}
