import { BiBell } from "react-icons/bi";
import bg_barber from "@public/bg_barber.jpg";

import bg_dashboard from "@public/bg_dashboard.png";
import confetti from "canvas-confetti";
import PulsatingButton from "@/components/magicui/pulsating-button";
import ALogo from "@/components/atoms/logo/logo";

const ComingSoonPage = () => {
  const handleClick = () => {
    const duration = 2 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    setTimeout(() => {
      window.open("https://forms.gle/n7snLptLqXQJCaT27", "_blank");
    }, duration);
  };
  return (
    <div className="w-full h-screen overflow-hidden relative bg-gradient-to-b from-[#292a30] via-[#1c1d21] to-[#1c1d21] flex flex-col items-center">
      <img
        src={bg_barber}
        className="w-full h-screen object-cover fixed"
        style={{ opacity: 0.06 }}
      />

      <div className="w-full flex justify-center pt-32">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="2500">
          <div>
            <ALogo />
          </div>
          {/* <img src={logo} className="w-[110px] md:w-[120px] xl:w-[130px]" /> */}
        </div>
      </div>
      <div className=" z-50 relative">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-delay="1500">
          <div className="opacity-15 text-center text-[150px] md:text-[200px] xl:text-[230px] font-extrabold font-plusjakartasans tracking-widest font-outline-2 text-transparent">
            BIG
          </div>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-white text-[30px] md:text-[38px] xl:text-[40px] font-light font-plusjakartasans tracking-[9px] uppercase">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-delay="1000">
            something
          </div>
          {/* <br /> */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-delay="2500">
            <span className="text-transparent bg-gradient-to-b from-white from-[35%] to-[#FF0000] bg-clip-text">
              is coming
            </span>
          </div>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="3000">
        <div className=" z-50">
          <PulsatingButton
            label="Register Now"
            onClick={() => {
              handleClick();
            }}
            suffixIcon={BiBell}
            size="large"
          />
        </div>
      </div>

      <div className="w-full h-[100px] xl:h-[1228.32px] absolute top-[70%]">
        <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="2500">
          <div className="w-[360px] md:w-[400px] xl:w-[440px] h-[469.73px] left-1/2 -translate-x-1/2 top-[-0px] absolute bg-[#ff1818] rounded-full blur-[276.57px]" />
          <div className="w-[380px] md:w-[800px] xl:w-[1006.67px] xl:h-[1228.32px] left-1/2 -translate-x-1/2 top-[-0px] absolute  rounded-[17.84px] ">
            <img
              className="left-2 xl:left-10 top-0 absolute "
              src={bg_dashboard}
            />
          </div>
        </div>
      </div>
      {/* <div className="fixed bottom-10 xl:bottom-8 z-50">
        <PulsatingButton
          label="Register Now"
          onClick={() => {
            handleClick();
          }}
          suffixIcon={BiBell}
          size="large"
        />
      </div> */}
    </div>
  );
};

export default ComingSoonPage;
