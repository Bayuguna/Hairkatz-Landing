import AButton from "@/components/atoms/button/button";
import { BsArrowRight } from "react-icons/bs";
import background from "@public/background.png";

const AcademySection = () => {
  return (
    <div className="w-full px-16 flex-col justify-center items-start gap-16 inline-flex">
      <div className="self-stretch py-16 justify-end items-center gap-24 inline-flex">
        <div className="w-[648px] h-[519.25px] relative">
          <div className="w-[456.88px] h-[334.24px] left-[68.91px] top-[-0px] absolute bg-[#ff1818] rounded-full blur-[196.80px]" />
          <div className="w-[559.75px] h-[519.25px] left-[25.99px] top-[-0px] absolute bg-gradient-to-b from-[#1c1d21] to-[#1c1d21] rounded-xl blur-[2.06px]">
            <img src={background} className="h-[519.25px]" />
          </div>
          <div className="w-[251.08px] h-[80.90px] p-[5.18px] left-0 top-[91.51px] absolute bg-[#292c2d]/10 rounded shadow border border-white flex-col justify-start items-start gap-[5.18px] inline-flex">
            <div className="justify-start items-center gap-[29.26px] inline-flex">
              <div className="justify-start items-start gap-[5.18px] flex">
                <img
                  className="w-[25.63px] h-[25.63px] rounded-full border border-[#ff4242]"
                  src="https://via.placeholder.com/26x26"
                />
                <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                  <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                    A.A. Michael Syne
                  </div>
                  <div className="text-center text-white text-[4.14px] font-medium font-['Poppins'] leading-[5.18px]">
                    DJ9092123
                  </div>
                  <div className="justify-start items-center gap-[2.07px] inline-flex">
                    <div className="text-center text-white text-[3.62px] font-medium font-['Poppins'] leading-[5.18px]">
                      +6289999900000
                    </div>
                    <div className="p-px rounded-[1.04px] justify-start items-center gap-[8.29px] flex">
                      <div className="w-[5.18px] h-[5.18px] justify-center items-center flex">
                        <div className="w-[5.18px] h-[5.18px] relative flex-col justify-start items-start flex" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-[5.18px] flex">
                <div className="p-[5.18px] bg-[#212121] rounded-[3.11px] justify-start items-start gap-[5.18px] flex">
                  <div className="justify-start items-start gap-[10.36px] flex">
                    <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                      <div className="text-white text-[3.62px] font-medium font-['Poppins']">
                        Total Bookings
                      </div>
                      <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                        310
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                      <div className="text-[#27cf5d] text-[3.62px] font-medium font-['Poppins']">
                        Complete
                      </div>
                      <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                        310
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                      <div className="text-[#ff8c05] text-[3.62px] font-medium font-['Poppins']">
                        Cancel
                      </div>
                      <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                        2
                      </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                      <div className="text-[#ff4f4f] text-[3.62px] font-medium font-['Poppins']">
                        No Show
                      </div>
                      <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-[5.18px] bg-[#111315] rounded-[3.11px] justify-start items-start gap-[10.36px] inline-flex">
              <div className="p-[5.18px] bg-gradient-to-b from-[#ff2d4b] to-[#ff2d92] rounded-[3.11px] flex-col justify-start items-start gap-[2.07px] inline-flex">
                <div className="text-white text-[3.62px] font-medium font-['Poppins']">
                  Points
                </div>
                <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                  420
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                <div className="text-white text-[3.62px] font-medium font-['Poppins']">
                  Total Spent
                </div>
                <div className="text-[#27cf5d] text-[6.21px] font-medium font-['Poppins']">
                  Rp 3.250.000
                </div>
                <div className="flex-col justify-center items-start gap-px flex">
                  <div className="text-center text-white text-[3.62px] font-medium font-['Poppins'] leading-[5.18px]">
                    310 Transactions
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                <div className="text-white text-[3.62px] font-medium font-['Poppins']">
                  Promotions Earned
                </div>
                <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                  Rp 200.500
                </div>
                <div className="flex-col justify-center items-start gap-px flex">
                  <div className="text-center text-white text-[3.62px] font-medium font-['Poppins'] leading-[5.18px]">
                    23 Promotions
                  </div>
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                <div className="text-white text-[3.62px] font-medium font-['Poppins']">
                  Expenses for Services
                </div>
                <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                  Rp 3.000.000
                </div>
              </div>
              <div className="flex-col justify-start items-start gap-[2.07px] inline-flex">
                <div className="text-white text-[3.62px] font-medium font-['Poppins']">
                  Expenses for Products
                </div>
                <div className="text-white text-[6.21px] font-medium font-['Poppins']">
                  Rp 250.000
                </div>
              </div>
            </div>
          </div>
          <div className="w-[283.43px] h-[106.41px] left-[364.57px] top-[93.39px] absolute">
            <div className="w-[283.43px] h-[106.41px] left-0 top-0 absolute bg-[#292c2d]/10 rounded-[3.10px] border border-white backdrop-blur-[23.12px]" />
            <div className="w-[211.36px] h-[95.05px] left-[66.64px] top-[5.17px] absolute bg-[#212121] rounded-[3.10px]" />
            <div className="w-[55.77px] h-[95.05px] left-[5.43px] top-[5.17px] absolute bg-[#212121] rounded-[3.10px]" />
            <div className="w-[196.38px] h-[66.17px] left-[74.89px] top-[27.51px] absolute">
              <div className="w-[174.10px] h-[59.29px] left-[19.62px] top-[1.76px] absolute"></div>
              <div className="w-[173.93px] h-[59.44px] left-[19.70px] top-[1.68px] absolute"></div>
              <div className="w-[18.44px] h-[63.39px] left-0 top-0 absolute">
                <div className="left-[15.62px] top-[58.39px] absolute text-right text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  0
                </div>
                <div className="left-[2.06px] top-[44.47px] absolute text-right text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  87500000
                </div>
                <div className="left-[1px] top-[29.65px] absolute text-right text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  175000000
                </div>
                <div className="left-[0.44px] top-[14.82px] absolute text-right text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  262500000
                </div>
                <div className="left-0 top-0 absolute text-right text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  350000000
                </div>
              </div>
              <div className="w-[179.84px] h-[5px] left-[16.53px] top-[61.17px] absolute">
                <div className="left-0 top-0 absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Jan
                </div>
                <div className="left-[15.57px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Feb
                </div>
                <div className="left-[31.76px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Mar
                </div>
                <div className="left-[47.92px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Apr
                </div>
                <div className="left-[62.97px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  May
                </div>
                <div className="left-[78.88px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Jun
                </div>
                <div className="left-[95.93px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Jul
                </div>
                <div className="left-[110.37px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Aug
                </div>
                <div className="left-[126.89px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Sep
                </div>
                <div className="left-[142.36px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Oct
                </div>
                <div className="left-[158.29px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Nov
                </div>
                <div className="left-[173.84px] top-[-0px] absolute text-center text-[#ababab] text-[3.10px] font-normal font-['Poppins']">
                  Dec
                </div>
              </div>
              <div className="w-[174.10px] h-[59.44px] left-[19.62px] top-[1.68px] absolute">
                <div className="w-[174.10px] h-[59.44px] left-0 top-0 absolute"></div>
              </div>
              <div className="w-[173.99px] h-[59.42px] left-[19.62px] top-[1.68px] absolute">
                <div className="w-[173.99px] h-[59.42px] left-0 top-0 absolute"></div>
              </div>
            </div>
            <div className="w-[44.42px] h-[74.13px] left-[11.11px] top-[11.49px] absolute flex-col justify-start items-start gap-[10.33px] inline-flex">
              <div className="h-[22.07px] flex-col justify-start items-start gap-px flex">
                <div className="text-[#ababab] text-[3.62px] font-medium font-['Poppins']">
                  Total Sales
                </div>
                <div className="justify-start items-center gap-px inline-flex">
                  <div className="text-white text-[6.20px] font-medium font-['Poppins']">
                    Rp
                  </div>
                  <div className="text-white text-[6.20px] font-medium font-['Poppins']">
                    150,320,000
                  </div>
                </div>
                <div className="justify-center items-center gap-px inline-flex">
                  <div className="w-[5.17px] h-[5.17px] justify-center items-center flex">
                    <div className="w-[5.17px] h-[5.17px] relative flex-col justify-start items-start flex" />
                  </div>
                  <div className="text-center text-[#27cf5d] text-[3.62px] font-medium font-['Poppins'] leading-[5.17px]">
                    40%
                  </div>
                  <div className="text-center text-[#aaaaaa] text-[3.10px] font-medium font-['Poppins'] leading-[5.17px]">
                    vs last month
                  </div>
                </div>
              </div>
              <div className="h-[15.03px] flex-col justify-start items-start gap-px flex">
                <div className="text-[#ababab] text-[3.62px] font-medium font-['Poppins']">
                  Gross Profit
                </div>
                <div className="justify-start items-center gap-px inline-flex">
                  <div className="text-white text-[6.20px] font-medium font-['Poppins']">
                    Rp
                  </div>
                  <div className="text-white text-[6.20px] font-medium font-['Poppins']">
                    101,235,405
                  </div>
                </div>
              </div>
              <div className="h-[15.03px] flex-col justify-start items-start gap-px flex">
                <div className="text-[#ababab] text-[3.62px] font-medium font-['Poppins']">
                  Gross Margin
                </div>
                <div className="justify-start items-center gap-px inline-flex">
                  <div className="text-white text-[6.20px] font-medium font-['Poppins']">
                    67%
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[39.59px] h-[7.49px] left-[74.89px] top-[10.72px] absolute justify-start items-start gap-[5.17px] inline-flex" />
            <div className="w-[37.45px] h-[9.30px] left-[197.58px] top-[10.72px] absolute rounded-sm flex-col justify-start items-start inline-flex">
              <div className="px-[3.10px] py-[2.07px] rounded-sm border border-white backdrop-blur-[3.87px] justify-start items-center gap-[2.07px] inline-flex">
                <div className="text-white text-[3.62px] font-medium font-['Poppins'] leading-[5.17px]">
                  Custom Date
                </div>
                <div className="w-[5.17px] h-[5.17px] justify-center items-center flex">
                  <div className="w-[5.17px] h-[5.17px] relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
            <div className="w-[24.80px] h-[9.30px] left-[240.19px] top-[10.72px] absolute rounded-sm flex-col justify-start items-start inline-flex">
              <div className="px-[3.10px] py-[2.07px] rounded-sm border border-white backdrop-blur-[3.87px] justify-start items-center gap-[2.07px] inline-flex">
                <div className="text-white text-[3.62px] font-medium font-['Poppins'] leading-[5.17px]">
                  Yearly
                </div>
                <div className="w-[5.17px] h-[5.17px] justify-center items-center flex">
                  <div className="w-[5.17px] h-[5.17px] relative flex-col justify-start items-start flex" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[549px] flex-col justify-center items-start gap-8 inline-flex">
          <div className="self-stretch h-[232px] flex-col justify-center items-start gap-3 flex">
            <div className="self-stretch">
              <span className="text-[#ff1c1c] text-7xl font-bold font-['Plus Jakarta Sans'] leading-[86.40px]">
                HAIRKATZ
                <br />
              </span>
              <span className="text-white text-7xl font-bold font-['Plus Jakarta Sans'] leading-[86.40px]">
                AKADEMI
              </span>
            </div>
            <div className="self-stretch text-[#f2f2f2] text-xl font-normal font-['Plus Jakarta Sans'] leading-normal">
              Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
              Ipsum Lorem Ipsum{" "}
            </div>
          </div>
          <div className="w-[787.26px] h-[185.06px] origin-top-left rotate-[-33.04deg] opacity-60 bg-[#ff1818] rounded-full blur-[268.40px]" />
          <AButton label="Book Now" suffixIcon={BsArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default AcademySection;
