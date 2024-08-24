import { Component } from "react";
import LandingLayout from "../../components/template/landing_layout";
import HeadlineSection from "./headline.section";
import TenderSection from "./tender.section";
import AcademySection from "./academy.section";
import BatchSection from "./batch.section";

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
