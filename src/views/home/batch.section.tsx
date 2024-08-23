interface BatchCardProps {
  name: string;
  description: string;
  date: string;
  slot: number;
  available: boolean;
}
const data: BatchCardProps[] = [
  {
    name: "BATCH 1",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "29 Oct 2024",
    slot: 0,
    available: false,
  },
  {
    name: "BATCH 2",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "29 Oct 2024",
    slot: 8,
    available: true,
  },
  {
    name: "BATCH 3",
    description:
      "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
    date: "29 Oct 2024",
    slot: 8,
    available: true,
  },
];

const BatchSection = () => {
  return (
    <div>
      <div className="w-full justify-center items-center gap-[33px] inline-flex px-28">
        {data.map((item, index) => (
          <CardBatch key={"batch-" + index} {...item} />
        ))}
        <div className="flex-col justify-start items-start inline-flex">
          <div className="h-[376px] rounded-2xl border-2 flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch h-[376px] p-8 bg-[#1d1d1d] rounded-2xl border-8 flex-col justify-center items-center gap-8 flex">
              <div className="self-stretch h-[232px] flex-col justify-center items-start gap-6 flex">
                <div className="self-stretch text-[#f2f2f2] text-[32px] font-normal font-['Plus Jakarta Sans'] leading-[38.40px]">
                  BATCH 3
                </div>
                <div className="self-stretch text-[#f2f2f2] text-base font-normal font-['Plus Jakarta Sans'] leading-snug">
                  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  Lorem Ipsum Lorem Ipsum{" "}
                </div>
                <div className="self-stretch text-[#f2f2f2] text-base font-normal font-['Plus Jakarta Sans'] leading-snug">
                  29 Oct 2024
                </div>
                <div className="self-stretch h-[34px] flex-col justify-start items-start gap-3 flex">
                  <div className="self-stretch text-[#f2f2f2] text-base font-normal font-['Plus Jakarta Sans'] leading-snug">
                    8 Slot Available
                  </div>
                </div>
              </div>
              <div className="self-stretch p-4 rounded-full border border-[#d9d9d9] justify-center items-center gap-2 inline-flex">
                <div className="text-[#f2f2f2] text-base font-normal font-['Plus Jakarta Sans'] leading-none">
                  Book Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardBatch = (props: BatchCardProps) => {
  return (
    <div className=" rounded-2xl border flex-col justify-start items-start gap-2.5 inline-flex">
      <div className="self-stretch h-[376px] p-8 bg-[#1d1d1d] rounded-2xl border-8 flex-col justify-center items-center gap-8 flex">
        <div className="self-stretch h-[232px] flex-col justify-center items-start gap-6 flex">
          <div className="self-stretch text-[#767676] text-[32px] font-normal font-['Plus Jakarta Sans'] leading-[38.40px]">
            {props.name}
          </div>
          <div className="self-stretch text-[#767676] text-base font-normal font-['Plus Jakarta Sans'] leading-snug">
            {props.description}
          </div>
          <div className="self-stretch text-[#767676] text-base font-normal font-['Plus Jakarta Sans'] leading-snug">
            {props.date}
          </div>
          <div className="self-stretch h-[34px] opacity-0 flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-[#767676] text-base font-normal font-['Plus Jakarta Sans'] leading-snug">
              {props.slot === 0
                ? "No Available Slot"
                : `${props.slot} Slot Available`}
            </div>
          </div>
        </div>
        <div className="self-stretch p-4 bg-[#b3b3b3] rounded-full justify-center items-center gap-2 inline-flex">
          <div className="text-[#757575] text-base font-normal font-['Plus Jakarta Sans'] leading-none">
            {props.available ? "Book Now" : "Sold Out"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchSection;
