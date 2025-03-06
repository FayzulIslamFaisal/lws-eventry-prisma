import Image from "next/image";
import Link from "next/link";
import ActionButtons from "./ActionButtons";

const EventListCard = () => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <Image
        src={"/events/google-io-2023-1.png"}
        alt="Event 1"
        className="w-full"
        width={500}
        height={500}
      />

      <div className="p-3">
        <Link href="/details/1" className="font-bold text-lg">
          event?.name
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">event?.location</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>event?.interested_ids?.length Interested</span>
          <span className="px-2">|</span>
          <span>event?.going_ids?.length Going</span>
        </div>

        <ActionButtons />
      </div>
    </div>
  );
};

export default EventListCard;
