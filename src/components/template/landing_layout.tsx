import { ReactNode } from "react";
import ANavbar from "../organisms/navbar/navbar";
import menuNav from "@/utils/data/menu_nav";
import AFooter from "../organisms/footer";

interface LandingLayoutProps {
  children: ReactNode;
}

const LandingLayout = (props: LandingLayoutProps) => {
  return (
    <div className="h-screen overflow-auto">
      <ANavbar menuItems={menuNav} />
      <div className="flex flex-col w-full justify-center z-30">
        {props.children}
      </div>
      <div className="py-8">
        <AFooter />
      </div>
    </div>
  );
};

export default LandingLayout;
