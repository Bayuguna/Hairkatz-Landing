import AButton from "@/components/atoms/button/button";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "@public/logo.png";
import app from "@/utils/constant/app";

interface NavbarProps {
  menuItems: {
    label: string;
    link: string;
  }[];
}

const ANavbar = (props: NavbarProps) => {
  return (
    <div className="fixed w-full px-20 py-5 z-40">
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="" className="w-9 h-9" />
          <div className="text-3xl font-bold leading-normal">
            {app.APP_NAME}
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <ul className="flex gap-8 text-lg font-extralight">
            {props.menuItems.map((item, index) => (
              <Link
                to={item.link}
                key={"menu-" + index}
                className="bg-transparent">
                <div className="relative group">
                  <li key={"menu-" + item.label} className="">
                    {item.label}
                  </li>
                  <div
                    className="hidden group-hover:flex absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-2/3 border border-primary bg-primary rounded-full blur-[2px]
                  delay-100 duration-1000 transform scale-0 group-hover:scale-100 transition-transform ">
                    {" "}
                  </div>
                </div>
              </Link>
            ))}
          </ul>
          <div>
            <AButton
              label="Daftar Akademi"
              suffixIcon={BsArrowRight}
              size="large"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ANavbar;
