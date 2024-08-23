import logo from "@public/logo.png";

const AFooter = () => {
  return (
    <div className="w-full h-[298.54px] p-16 bg-[#1f2122] justify-center items-start gap-4 inline-flex">
      <div className="w-[262px] flex-col justify-start items-start gap-6 inline-flex">
        <div className="justify-start items-start inline-flex">
          <div className="justify-start items-center gap-[5.05px] flex">
            <img src={logo} alt="logo" className="w-8 h-8 relative" />
            <div className="flex-col justify-center items-start inline-flex">
              <div className="text-[#f2f2f2] text-2xl font-bold font-['Plus Jakarta Sans'] leading-normal">
                HAIRKATZ
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[114.69px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Denpasar - Bali
          </div>
          <div className="self-stretch text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            cs@hairkatz.com
          </div>
          <div className="self-stretch text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            +62 361 278777
          </div>
          <div className="justify-start items-center gap-[12.46px] inline-flex">
            <div className="w-[18.69px] h-[18.69px] relative" />
            <div className="w-[18.69px] h-[18.69px] relative" />
            <div className="w-[18.69px] h-[18.69px] relative" />
          </div>
        </div>
      </div>
      <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch h-[38px] pb-4 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="text-[#f2f2f2] text-base font-semibold font-['Plus Jakarta Sans'] leading-snug">
              Use cases
            </div>
          </div>
        </div>
        <div className="w-[89px] h-[22px] pr-[7px] py-px justify-start items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Wireframing
          </div>
        </div>
        <div className="w-[89px] h-[22px] py-px justify-end items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Brainstorming
          </div>
        </div>
        <div className="w-[89px] h-[22px] py-px justify-end items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Online whiteboard
          </div>
        </div>
      </div>
      <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch h-[38px] pb-4 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="text-[#f2f2f2] text-base font-semibold font-['Plus Jakarta Sans'] leading-snug">
              Use cases
            </div>
          </div>
        </div>
        <div className="w-[89px] h-[22px] py-px justify-end items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Brainstorming
          </div>
        </div>
        <div className="w-[89px] h-[22px] py-px justify-end items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Online whiteboard
          </div>
        </div>
        <div className="w-[89px] h-[22px] py-px justify-end items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Team collaboration
          </div>
        </div>
      </div>
      <div className="w-[200px] flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch h-[38px] pb-4 flex-col justify-start items-start gap-2.5 flex">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="text-[#f2f2f2] text-base font-semibold font-['Plus Jakarta Sans'] leading-snug">
              Use cases
            </div>
          </div>
        </div>
        <div className="w-[89px] h-[22px] pr-[7px] py-px justify-start items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Wireframing
          </div>
        </div>
        <div className="w-[89px] h-[22px] py-px justify-center items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Diagramming
          </div>
        </div>
        <div className="w-[89px] h-[22px] py-px justify-end items-center inline-flex">
          <div className="text-[#f2f2f2] text-sm font-normal font-['Plus Jakarta Sans'] leading-tight">
            Online whiteboard
          </div>
        </div>
      </div>
    </div>
  );
};

export default AFooter;
