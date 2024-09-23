import "./App.css";
import FirstCard from "./Components/FirstCard"; // why?
import SecondCard from "./Components/SecondCard";
import ThirdCard from "./Components/ThirdCard";
import FourthCard from "./Components/FourthCard";
import FivesCard from "./Components/FivesCard";
import { useEffect, useState } from "react";
function App() {
  // why| |?
  //   \  /
  //    V
  const [pages, setPages] = useState<string[]>([
    // why?
    <FirstCard />,
    <SecondCard />,
    <ThirdCard />,
    <FourthCard />,
    <FivesCard />,
  ]);
  const [numOfElement, setNumOfElement] = useState<number | null | string>(0);
  useEffect(() => {
    localStorage.getItem("num") &&
      setNumOfElement(JSON.parse(localStorage.getItem("num")));
    localStorage.clear();
  }, []);

  return (
    <>
      <div className="container sect-home">
        <header className="flex bg-white items-center gap-[9px] pb-[28px]">
          <button className="bg-[#F8F8F8] px-[19px] py-[12px] rounded-[99px]">
            <i className="text-[#757D8A] fa-solid fa-arrow-left-long"></i>
          </button>
          <h6 className="font-[16px] ml-[10px]">Account verification</h6>
          <p className="px-[6px] py-[3px] bg-[#5552D914] text-[#6F6FFF] rounded-[3px]">
            In progress
          </p>
        </header>
        <div className="w-[1000px] h-[1px] bg-[#ECEEEB]"></div>
        <section className="main py-[43px] flex justify-between">
          <div className="steps fixed z-10 bg-white flex gap-[26px]">
            <div className="structure bg-[#D9D9D970] rounded-[109px] flex flex-col p-[4px] gap-[22px] h-[282px]">
              <a
                className="px-[9px] py-[4px] bg-white rounded-[40px]"
                href="#"
                onClick={() => {
                  setNumOfElement(0);
                }}
              >
                1
              </a>
              <a
                className="px-[10px] py-[4px] rounded-[40px]"
                href="#"
                onClick={() => {
                  setNumOfElement(0);
                }}
              >
                <div className="w-[10px] h-[10px] bg-[#D9D9D970] rounded-[40px]"></div>
              </a>
              <a
                className="px-[10px] py-[4px] rounded-[40px]"
                href="#"
                onClick={() => {
                  setNumOfElement(1);
                }}
              >
                <div className="w-[10px] h-[10px] bg-[#D9D9D970] rounded-[40px]"></div>
              </a>
              <a
                className="px-[10px] py-[4px] bg-white rounded-[40px]"
                href="#"
                onClick={() => {
                  setNumOfElement(2);
                }}
              >
                2
              </a>
              <a
                className="px-[10px] py-[4px] bg-white rounded-[40px]"
                href="#"
                onClick={() => {
                  setNumOfElement(3);
                }}
              >
                3
              </a>
              <a
                className="px-[10px] py-[4px] bg-white rounded-[40px]"
                href="#"
                onClick={() => {
                  setNumOfElement(4);
                }}
              >
                4
              </a>
            </div>
            <div className="sects">
              <div className="flex flex-col">
                <h6 className="pb-[21px] pt-[10px]">Business structure</h6>
                <p className="pb-[10px] text-[#737373] pl-[11px]">
                  Business representative
                </p>
                <p className="pb-[28px] text-[#737373] pl-[11px]">
                  Business details
                </p>
              </div>
              <h6 className="mb-[32px]">Bank details</h6>
              <h6 className="mb-[32px]">2 step authentication</h6>
              <h6 className="mb-[32px]">Overview</h6>
            </div>
          </div>
          <div className="cards ml-[400px] bg-background p-6 rounded-lg w-[410px] mr-[468px] flex flex-col gap-[30px] h-[624px]">
            {pages[numOfElement]}
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
