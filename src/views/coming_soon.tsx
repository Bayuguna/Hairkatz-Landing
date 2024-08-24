import { BiBell } from "react-icons/bi";
import bg_barber from "@public/bg_barber.jpg";

import logo from "@public/logo.png";
import bg_dashboard from "@public/bg_dashboard.png";
import AButton from "@/components/atoms/button/button";
import { Link } from "react-router-dom";

// const firebaseConfig = {
//   apiKey: "AIzaSyC9TS2--2D3Ry8oTTDVXrN8OgVOmPikvqk",
//   authDomain: "hairkatz.firebaseapp.com",
//   databaseURL:
//     "https://hairkatz-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "hairkatz",
//   storageBucket: "hairkatz.appspot.com",
//   messagingSenderId: "993858939850",
//   appId: "1:993858939850:web:b6780f11d43298f1fdfd33",
//   measurementId: "G-C1NBZN2VMZ",
// };

// const app = initializeApp(firebaseConfig);
// export const db = getDatabase(app);

const ComingSoonPage = () => {
  return (
    <div className="w-full h-sceen overflow-hidden relative bg-gradient-to-b from-[#292a30] via-[#1c1d21] to-[#1c1d21] flex justify-center">
      <img
        src={bg_barber}
        className="w-full h-full object-cover"
        style={{ opacity: 0.06 }}
      />

      <div className="w-full h-[134px] left-1/2 -translate-x-1/2 top-[157px] absolute flex justify-center">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="2500">
          <img src={logo} className="w-[110px] md:w-[120px] xl:w-[130px]" />
        </div>
      </div>
      <div className="w-full h-[134px] left-1/2 -translate-x-1/2 top-[260px] xl:top-[220px] absolute flex justify-center items-center z-50">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="2000"
          data-aos-delay="500">
          <div className="left-1/2 -translate-x-1/2 top-1/3 absolute opacity-25 text-center text-[130px] md:text-[150px] xl:text-[200px] font-extrabold font-['Plus Jakarta Sans'] tracking-widest font-outline-2 text-transparent">
            BIG
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-delay="1500">
            <div className="left-1/2 -translate-x-1/2 top-4 translate-y-3/4 xl:top-1/2 xl:translate-y-2/3 absolute text-center text-white text-[20px] md:text-[30px] xl:text-[40px] font-light font-['Plus Jakarta Sans'] tracking-[9px]">
              something
              <br />
              <span className="text-transparent bg-gradient-to-b from-white to-[#FF0000] bg-clip-text">
                is coming
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[100px] xl:h-[1228.32px] left-1/2 -translate-x-1/2 top-[552.91px] xl:top-[582.91px] absolute">
        <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="2000">
          <div className="w-[340px] md:w-[380px] xl:w-[440px] h-[469.73px] left-1/2 -translate-x-1/2 top-[-0px] absolute bg-[#ff1818] rounded-full blur-[276.57px]" />
          <div className="w-[400px] md:w-[800px] xl:w-[1006.67px] xl:h-[1228.32px] left-1/2 -translate-x-1/2 top-[-0px] absolute  rounded-[17.84px] ">
            <img
              className="left-2 xl:left-10 top-0 absolute "
              src={bg_dashboard}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-8">
        <Link to={"https://forms.gle/n7snLptLqXQJCaT27"} target="_blank">
          <AButton
            label="Subscribe Now"
            onClick={() => {}}
            suffixIcon={BiBell}
            size="large"
          />
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonPage;
