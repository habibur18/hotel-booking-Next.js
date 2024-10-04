import { getAllHotels } from "@/database";
import HotelCard from "./HotelCard";

const HotelList = async () => {
  const hotels = await getAllHotels();
  console.log(hotels);
  return (
    <div className="col-span-9">
      <div className="space-y-4">
        <HotelCard />
      </div>
    </div>
  );
};

export default HotelList;
