import AButton from "@/components/atoms/button/button";
import { BsArrowRight } from "react-icons/bs";
import bg_dashboard from "@public/bg_dashboard.png";
import ShinyButton from "@/components/magicui/shiny-button";
import ShimmerButton from "@/components/magicui/shimmer-button";
import { BorderBeam } from "@/components/magicui/border-beam";

// const sections = [
//   { id: "section1", content: "Section 1" },
//   { id: "section2", content: "Section 2" },
//   { id: "section3", content: "Section 3" },
//   { id: "section4", content: "Section 4" },
// ];

const HeadlineSection = () => {
  // const [currentSection, setCurrentSection] = useState(0);

  // const handleScroll = (event: any) => {
  //   if (event.deltaY > 0) {
  //     console.log("wheel event added plus" + event.deltaY);
  //     setCurrentSection((prev) => Math.min(prev + 1, sections.length - 1));
  //   } else {
  //     console.log("wheel event added minus" + event.deltaY);
  //     setCurrentSection((prev) => Math.max(prev - 1, 0));
  //   }
  // };

  // React.useEffect(() => {
  //   window.addEventListener("wheel", handleScroll);
  //   return () => window.removeEventListener("wheel", handleScroll);
  // }, []);

  return (
    <>
      <div className="h-[1461px] pt-28 pb-16 flex-col justify-center items-center gap-24 inline-flex">
        <div className="flex-col justify-center items-center gap-8 flex">
          <div className="flex-col justify-center items-center gap-6 flex">
            <ShinyButton
              text="Shiny Button"
              className="border border-slate-100"
            />
            <div className="h-[38px] px-4 py-2 bg-white/5 rounded-full shadow border border-[#ffa900] backdrop-blur-[41px] justify-center items-center gap-2 inline-flex relative">
              <span className="text-transparent bg-gradient-to-l from-[#FFA900] to-[#CD113B] bg-clip-text">
                Optimasi Barbershop Anda Bersama Kami
              </span>
            </div>
            <div className="w-[846px] text-center text-[#8c8c8c] text-[64px] font-semibold font-['Plus Jakarta Sans'] leading-[76.80px]">
              Maksimalkan Setiap Menit Barbershop Anda
            </div>
            <div className="w-[602px] text-center text-[#f2f2f2] text-xl font-normal font-['Plus Jakarta Sans'] leading-relaxed">
              Sistem kami membantu mengurangi waktu tunggu dan memastikan setiap
              slot waktu dimanfaatkan dengan optimal
            </div>
          </div>
          <div className="justify-center items-start gap-4 inline-flex">
            <AButton
              label="Mulai Gratis"
              suffixIcon={BsArrowRight}
              size="large"
            />
          </div>
        </div>
        <div className="self-stretch h-[859px] relative">
          <div className="w-[755.82px] h-[552.95px] left-[161px] top-[90px] absolute bg-[#ff1818] rounded-full blur-[325.57px]" />
          {/* <div className="w-[926px] h-[859px] left-[43px] top-0 absolute bg-gradient-to-b from-[#1c1d21] to-[#1c1d21] rounded-[21px] blur-[3.41px]" /> */}
          <div className="w-[400px] md:w-[1206.67px] md:h-[1228.32px] left-1/2 -translate-x-1/2 top-[-0px] absolute  rounded-[17.84px] ">
            <img
              className="left-2 md:left-10 top-0 absolute "
              src={bg_dashboard}
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="absolute inset-0 flex w-full bg-black z-20">
      <div className="relative flex h-screen w-full justify-center items-center overflow-hidden">
        <div
          className="absolute inset-0 z-20 bg-gradient-to-t lg:bg-gradient-to-tr from-primary from-10% via-transparent via-60% to-transparent bg-opacity-10"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="2000"></div>
        <div
          className="space-y-4 z-10 "
          style={{
            backgroundImage: `url(${bg_barber})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.3,
            width: "100%",
            height: "100%",
          }}></div>
        <div className="absolute inset-0 z-20 pt-10">
          <div className="flex flex-col h-full justify-center items-center uppercase">
            <span
              className="text-[80px] lg:text-[120px] text-center"
              data-aos="fade-up"
              data-aos-duration="2000">
              Welcome
            </span>
            <span
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
              className="text-[18px]  text-center px-4">
              Number one barber shop in town
            </span>
          </div>
        </div>
      </div>
    </div> */
}

export default HeadlineSection;
