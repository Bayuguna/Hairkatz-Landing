import { Component, ReactNode } from "react";
import LandingLayout from "../../components/template/landing_layout";
import AButton from "../../components/atoms/button/button";
import ACardAcademy from "@/components/molecules/card_academy/card_academy";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import HeadlineSection from "./headline.section";
import TenderSection from "./tender.section";
import AcademySection from "./academy.section";
import BatchSection from "./batch.section";

interface HomePageProps {
  title: string;
  handleClick?: () => void;
}

class HomeContent extends Component<HomePageProps> {
  render(): ReactNode {
    return (
      <section id={this.props.title}>
        <div className="w-full h-screen flex justify-center items-center">
          {this.renderContent() || null}
        </div>
      </section>
    );
  }

  renderContent(): ReactNode {
    return null;
  }
}

class AboutUs extends HomeContent {
  renderContent() {
    return (
      <div className="flex flex-col items-center">
        <p>About Us</p>{" "}
        <AButton
          onClick={this.props.handleClick}
          label="Click Me About Us"></AButton>
      </div>
    );
  }
}

class ContactUs extends HomeContent {
  renderContent() {
    return (
      <div className="flex flex-col items-center">
        <p>Contact Us</p>{" "}
        <button onClick={this.props.handleClick}>Click Me Contact Us</button>
      </div>
    );
  }
}

interface PackageContentProps {
  title: string;
  subscribeClick?: () => void;
}

class PackageContent extends Component<PackageContentProps> {
  render() {
    return (
      <div className="py-4 px-2">
        <ACardAcademy>{this.renderPackageContent()}</ACardAcademy>
      </div>
    );
  }

  renderPackageContent(): ReactNode {
    return null;
  }
}

class PackageExclusive extends PackageContent {
  renderPackageContent() {
    return (
      <div>
        <p>{this.props.title}</p>
        {this.props.subscribeClick && (
          <button onClick={this.props.subscribeClick}>Subscribe</button>
        )}
      </div>
    );
  }
}

class PackageBasic extends PackageContent {
  renderPackageContent() {
    return (
      <div>
        <p>{this.props.title}</p>
        {this.props.subscribeClick && (
          <button onClick={this.props.subscribeClick}>Subscribe</button>
        )}
      </div>
    );
  }
}

class PackageCustom extends PackageContent {
  renderPackageContent() {
    return (
      <div>
        <p>{this.props.title}</p>
        {this.props.subscribeClick && (
          <button onClick={this.props.subscribeClick}>Subscribe</button>
        )}
      </div>
    );
  }
}

class Wrapper extends Component {
  render() {
    return <div className="">{this.renderContent()}</div>;
  }

  renderContent() {
    return <div></div>;
  }
}

class Headline extends Wrapper {
  renderContent() {
    return <HeadlineSection />;
  }
}

class Tender extends Wrapper {
  renderContent() {
    return <TenderSection />;
  }
}

class Academy extends Wrapper {
  renderContent() {
    return <AcademySection />;
  }
}

class Batch extends Wrapper {
  renderContent() {
    return <BatchSection />;
  }
}

const HomePage = () => {
  return (
    <div className="relative">
      <LandingLayout>
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-col justify-center items-center">
            <Headline />
            <Tender />
            <Academy />
            <Batch />
          </div>
        </div>
      </LandingLayout>
    </div>
  );
};

export default HomePage;
