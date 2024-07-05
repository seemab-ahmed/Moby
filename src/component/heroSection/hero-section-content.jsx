import Starimage from "../../images/Frame.svg";
import foximg from "../../images/fox.svg";
import marketimg from "../../images/market.svg";
import cbsimg from "../../images/cbs.svg";
import usimg from "../../images/us.svg";
import starr from "../../images/starr.svg";
import investor from "../../images/investor.svg";
import wall from "../../images/wall.svg";
import monkey from "../../images/monkey.svg";
import nbcimg from "../../images/nbc.svg"
import cnbcimg from "../../images/cnbc.svg";
import HeroImage from "../../images/HeroImg.gif"
import { ReactComponent as RocketIcon } from "../../images/rocket-icon.svg";
import { ReactComponent as Iphone1 } from "../../images/iPhone1.svg";
import { ReactComponent as Iphone2 } from "../../images/iphone2.svg";
import { ReactComponent as Iphone3 } from "../../images/iPhone3.svg";
import { ReactComponent as ChartJs } from "../../images/chartjs.svg";
import { ReactComponent as PriceIcon1 } from "../../images/PriceIcon1.svg";
import { ReactComponent as PriceIcon2 } from "../../images/PriceIcon2.svg";
import { ReactComponent as ArrowIcon } from "../../images/Icon.svg";
import { ReactComponent as DivideIcon} from "../../images/divideIcon.svg";

import React, { useState } from "react";

export const HeroSectionContent = () => {
  const [isYearly, setIsYearly] = useState(true);
  return (
    <div className="py-16 yflex flex-col bg-backgroundDark font-rethink overflow-hidden">
      <div className="flex flex-col gap-4">
        <h2 className="text-white flex justify-center text-center w-full text-[48px] font-bold">
          Become a smarter <br /> investor in just 5 minutes
        </h2>
        <h4 className="bg-backgroundDark text-[#ccc] flex justify-center w-full text-[16px] text-center">
          Moby gives you exclusive stock picks on market updates the matter.{" "}
          <br />
          Keep it simple, all in one app.
        </h4>
        <div className="flex justify-center">
          <button className="py-4 px-6 bg-primaryblue hover:bg-[#467794] text-[16px] rounded-md text-backgroundDark flex gap-2">
           <p>
           Get started with Moby Premium Today
           </p>
            <span>
              <RocketIcon />
            </span>
          </button>
        </div>
        <p className="bg-backgroundDark text-[#ccc] flex justify-center w-full text-[16px] text-center">
          30-day money back gurantee
        </p>
        <img src={HeroImage} alt="Logo" className="pt-5" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-center w-full text-center">
          <img src={Starimage} alt="icon" className="pt-5" />
        </div>

        <p className="bg-backgroundDark text-[#ccc] flex justify-center w-full text-[16px] text-center leading-none  opacity-50">
          Over 1,000 5-star reviews on iOS App <br />
          Store and Google
        </p>
      </div>

      <div className="py-10 flex m-auto max-w-[1160px] justify-center items-center gap-8">
      <hr className="text-[#fff] w-full opacity-10" />
      <p className="bg-backgroundDark text-[#929191] text-[18px] text-center w-[150px]">

          Partners
        </p>
       <hr className="text-[#fff] w-full opacity-10" />
      </div>

      <div className="flex justify-center w-full text-center gap-[52px] pb-20 flex-wrap">
        <img src={cnbcimg} alt="icon" className="pt-5" />
        <img src={foximg} alt="icon" className="pt-5" />
        <img src={marketimg} alt="icon" className="pt-5" />
        <img src={usimg} alt="icon" className="pt-5" />
        <img src={nbcimg} alt="icon" className="pt-5" />
        <img src={cbsimg} alt="icon" className="pt-5" />
      </div>

      {/* ----------------------------------------------------------------------- */}

      {/* ---------------------------------------------------------------------------------------------------------- */}
      <div className="bg-white">
        <div className="flex justify-center flex-col items-center mb-20">
          <h1 className="text-[32px] font-bold pt-10 p-3">How Moby Works</h1>

          <div className="flex flex-col lg:flex-row justify-between gap-3 text-center max-w-[1160px] w-full flex-wrap">
            <div className=" bg-[#EBF9FC] pt-6 px-6 rounded-xl flex flex-1 w-full flex-col items-center gap-3 relative min-h-[800px] lg:w-1/2 xlg:w-1/3 ">
              <h1 className="rounded-full bg-primaryblue py-2 px-5 w-6 flex justify-center">
                1
              </h1>
              <p className="font-bold text-[20px]">
                Access Daily Market Reports
              </p>
              <p className="text-[16px]">
                Gain insight to daily market updates with exclusive news
                articles, company updates, and easy research so you can
                understand what’s happening in the markets and how you can trade
                with easy to understand reports.
              </p>
              <div className="absolute bottom-0" >
                <Iphone1 />
              </div>
            </div>

            <div className="bg-[#EBF9FC] px-6 pt-6 rounded-xl flex flex-1 flex-col items-center gap-3 relative min-h-[800px] w-full lg:w-1/2 xlg:w-1/3">
              <h1 className="rounded-full bg-primaryblue py-2 px-5 w-6 flex justify-center ">
                2
              </h1>
              <p className="font-bold text-[20px]">
                Hand Picked Stock Picks for You
              </p>
              <p className="text-[16px]">
                Moby took expert analysts from institutions like Morgan Stanley
                and Goldman Sachs and paired them with journalists who know how
                to distill complex financial jargon into easily-comprehensible
                and actionable advice.
              </p>
              <div className="flex gap-3 text-[14px] font-medium">
                <div className="bg-primaryblue rounded-lg p-4 text-center flex-1">
                  <p>
                    Moby’s stock picks are beating the S&P500 by more than 11.9%
                    over the past 4 consectutive years*
                  </p>
                </div>
                <div className="bg-primaryblue rounded-lg p-6 text-center flex-1 ">
                  <p>
                    Moby stock picks are profitable at least 71% of the time*
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0">
                <Iphone2 />
              </div>
            </div>

            <div className=" bg-[#EBF9FC] px-6 pt-6 rounded-xl flex flex-1 flex-col items-center gap-3 relative min-h-[800px] w-full  xlg:w-1/3">
              <h1 className="rounded-full bg-primaryblue py-2 px-5 w-6 flex justify-center">
                3
              </h1>
              <p className="font-bold text-[20px]">Build a Better Portfolio</p>
              <p className="text-[16px]">
                Moby also provides several model portfolios so you can get
                started investing right away (without waiting for new stock
                picks to come out).
              </p>
              <div className="flex flex-col gap-1 text-[14px] w-full ">
                <p className="bg-[#E0F401] rounded-full p-4 font-medium">
                  Over 7+ addtional features
                </p>
                <div className="flex gap-2">
                  <p className="bg-[#9E00FF] rounded-full p-4 flex-1">
                    Crypto Screener
                  </p>
                  <p className=" bg-primaryblue rounded-full p-4 flex-1">
                    Model Portfolio's
                  </p>
                </div>
                <p className="bg-[#D34444] rounded-full p-4">
                  Political Trade Tracking
                </p>
                <p className=" bg-primaryblue rounded-full p-4">
                  Economic Calendar
                </p>
              </div>
              <div className="absolute bottom-0">
                <Iphone3 />
              </div>
            </div>
          </div>
        </div>

        <hr className="text-[#ccc] m-auto max-w-[1160px]" />

        <div className=" mx-auto max-w-[1160px] py-20 flex flex-col gap-16">
          <div className="flex justify-between gap-4">
            <div className="mb-6 flex-1 flex flex-col flex-start">
              <p className="text-[16px] text-[#0248CF] font-medium">
                Moby Premium At $200/year
              </p>
              <h1 className="text-[32px] font-bold text-[#01111D] leading-none">
                Moby’s goal is to <br /> outperform the market.
              </h1>
              <button className="px-3 py-4 bg-primaryblue text-white rounded-xl mt-4 max-w-[190px] text-[16px]">
                Try Premium today
              </button>
            </div>
            <div className="flex-1 m-auto">
              <p className="text-[16px] text-black font-medium">
                As Moby stock picks are beating the S&P 500 by more than 11.9%
                each year, over the past 4 consecutive years, each new trade
                alert comes with a short but thorough report on what makes our
                picks a good investment opportunity.
              </p>
              <br />
              <p className="text-[16px] text-black font-medium">
                We keep it simple. 3 new stock picks per week.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="rounded-xl p-6 bg-[#EBF9FC]">
                <div className="flex justify-center mb-4 w-full ">
                  <button className="px-3 py-4 bg-primaryblue text-white rounded-xl mr-2 flex-1">
                    Premium Subscription (ROI)
                  </button>
                  <button className="px-6 py-4 border border-1 border-[#ccc] text-gray-700 rounded-xl font-medium flex-1">
                    Past Moby Stock Picks
                  </button>
                </div>

                <div className="space-y-4 gap-2">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-700">
                        Initial Amount
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl bg-none focus:outline-none bg-[#EBF9FC] text-[20px] font-bold"
                        placeholder="$ 770"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700">
                        Target return
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl  focus:outline-none bg-[#C8F2FB] text-[#6791E2] text-[20px] font-bold "
                        placeholder="11.9%"
                        value="11.9%"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-700">
                        S&P 500 Return
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl bg-none focus:outline-none bg-[#EBF9FC] text-[20px] font-bold "
                        placeholder="% 10"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700">
                        Average Return on Premium Plan
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl focus:outline-none bg-[#C8F2FB] text-[#6791E2] text-[20px] font-bold"
                        placeholder="7 Weeks"
                        value="7 Weeks"
                        readOnly
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-700">Term</label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl bg-none focus:outline-none bg-[#EBF9FC] text-[20px] font-bold"
                        placeholder="4 years"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700">
                        Projected Annual Fees
                      </label>
                      <div className="flex gap-1 ">
                      <input
                        type="text"
                        className="w-[120px] px-6 py-4 border-[#04CBF840] border rounded-xl focus:outline-none bg-[#EBF9FC] text-[20px] font-bold "
                        placeholder="$ 200"
                      />
                      <div className="flex-1 px-4 py-4 rounded-xl focus:outline-none bg-[#04CBF8] text-[24px] text-white text-center">
                        $
                      </div>
                      <div className="flex-1 px-4 py-4 border-[#04CBF840] border rounded-xl focus:outline-none bg-[#EBF9FC] flex justify-center items-center">
                       <DivideIcon />
                      </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-700">
                        Additional contributions
                      </label>
                      <input
                        type="text"
                        className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl bg-none focus:outline-none bg-[#EBF9FC] text-[20px] font-bold"
                        placeholder="$ 100"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700">Frequency</label>
                      <select className="w-full px-6 py-4 border-[#04CBF840] border rounded-xl bg-none focus:outline-none bg-[#EBF9FC] text-[20px] font-bold">
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex flex-col items-center">
              <div className="flex gap-3 w-full px-4 lg:px-1">
                <div className="bg-[#212121] rounded-2xl px-6 py-4 flex-1">
                  <div className="text-[#9d9a9a] text-[14px]">
                    S&P 500 Return
                  </div>
                  <div className="text-[24px] text-white font-semibold">
                    <span className="text-[#9d9a9a]">$</span>2,602
                  </div>
                </div>
                <div className=" bg-primaryblue rounded-2xl px-6 py-4 flex-1">
                  <div className="text-[#e6e6e6] font-bold text-[14px]">
                    Moby Return
                  </div>
                  <div className="text-[24px] text-white font-semibold">
                    <span className="text-[#e6e6e6]">$</span> $3,227.22
                  </div>
                </div>
              </div>
              <ChartJs className="w-fill-available" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EBF9FC] ">
        <div className="pb-10 min-w-[900px] overflow-auto md:overflow-hidden">
                <h1
                  colSpan="8"
                  className="text-center py-4 text-[32px] text-[#01111D] font-bold pb-10"
                >
                  As of Closing Prices for the Month of March
                </h1>

              <hr className="text-[#ccc] m-auto max-w-[1160px] pb-10" /> 

          <div className="m-auto max-w-[1160px] flex flex-col gap-2">
              <div className="flex gap-4 text-center justify-center">
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  Year of Picks
                </p>
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  Start Range
                </p>
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  End Range
                </p>
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  Stock Picks
                </p>
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  Average Return
                </p>
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  Return vs SP500
                </p>
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  Picks with Return 0%
                </p>
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  % Profitable
                </p>
                <p className="px-3 py-4 leading-none text-left font-bold text-[18px] flex-1 text-ceter">
                  Max % Return
                </p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p className="px-2 py-2 flex-1 text-ceter">
                  2023 Picks
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">1/1/2023</p>
                <p className="px-2 py-2 flex-1 text-ceter">
                  12/31/2023
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">140</p>
                <p className="px-2 py-1 font-medium bg-[#C8F2FB] rounded-xl flex-1 text-ceter">
                  30.1%
                </p>
                <p className="px-2 py-1 font-medium bg-[#C8F2FB] rounded-xl flex-1 text-ceter">
                  9.9%
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">103</p>
                <p className="px-2 py-2 flex-1 text-ceter">74%</p>
                <p className="px-2 py-2 flex-1 text-ceter">523.7%</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p className="px-2 py-2 flex-1 text-ceter">
                  2022 Picks
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">1/1/2022</p>
                <p className="px-2 py-2 flex-1 text-ceter">
                  12/31/2022
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">67</p>
                <p className="px-2 py-1 font-medium bg-[#C8F2FB] rounded-xl flex-1 text-ceter">
                  35.5%
                </p>
                <p className="px-2 py-1 font-medium bg-[#C8F2FB] rounded-xl flex-1 text-ceter">
                  7.1%
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">52</p>
                <p className="px-2 py-2 flex-1 text-ceter">78%</p>
                <p className="px-2 py-2 flex-1 text-ceter">609.9%</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p className="px-2 py-2 flex-1 text-ceter">
                  2021 Picks
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">1/1/2021</p>
                <p className="px-2 py-2 flex-1 text-ceter">
                  12/31/2021
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">104</p>
                <p className="px-2 py-1 font-medium bg-[#C8F2FB] rounded-xl flex-1 text-ceter">
                  28.2%
                </p>
                <p className="px-2 py-1 font-medium bg-[#C8F2FB] rounded-xl flex-1 text-ceter">
                  6.7%
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">63</p>
                <p className="px-2 py-2 flex-1 text-ceter">61%</p>
                <p className="px-2 py-2 flex-1 text-ceter">611.5%</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p className="px-2 py-2 flex-1 text-ceter">
                  2020 Picks
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">1/1/2020</p>
                <p className="px-2 py-2 flex-1 text-ceter">
                  12/31/2020
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">78</p>
                <p className="px-2 py-1 font-medium bg-[#C8F2FB] rounded-xl flex-1 text-ceter">
                  85.6%
                </p>
                <p className="px-2 py-1 font-medium bg-[#C8F2FB] rounded-xl flex-1 text-ceter">
                  26.4%
                </p>
                <p className="px-2 py-2 flex-1 text-ceter">59</p>
                <p className="px-2 py-2 flex-1 text-ceter">76%</p>
                <p className="px-2 py-2 flex-1 text-ceter">9.9%</p>
              </div>
              <div className="flex gap-4 text-center justify-center">
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                <span className=""> Since 2020</span>  
                </p>
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                  
                <span > 1/1/2016</span> 
                  </p>
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                  
                <span >   12/31/2023</span> 
                
                </p>
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                <span >  389</span> 
                  </p>
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                <span >   41.7%</span> 
                
                </p>
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                <span >   11.9%</span> 
                </p>
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                <span > 277</span> 
                 </p>
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                <span >   71%</span> 
                  </p>
                <p className="px-2 py-2 text-white bg-primaryblue rounded-xl flex-1 text-ceter ">
                <span >  991.4%</span> 
                </p>
              </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------ */}

      {/* ------------------------------------ */}

      <div className=" text-white p-8">
        <h2 className="text-[32px] font-bold text-center mt-10 mb-10">
          Moby Pricing and Plans
        </h2>
        <div className="flex justify-center items-center mb-6 gap-6">
          <span className="mr-2 opacity-30">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-primaryblue rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
          </label>
          <span className="ml-2">Yearly</span>
        </div>
        <div className="flex flex-col md:flex-row justify-center m-auto max-w-[960px] flex-wrap">
          <div className="bg-gray-800 p-6 mr-4 rounded-xl border border-1 border-[#3d3a3a] flex-1 w-full ">
          <PriceIcon1 />
            <div className="flex justify-between items-center mb-4 mt-3">
              <h3 className="text-[24px] font-bold">Start Free today</h3>
              <span className=" bg-[#04CBF8] px-4 py-2 font-bold rounded-full">Free</span>
            </div>
            <ul className="mb-6 flex flex-col gap-4">
              <li className="flex items-center mb-2">
                <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
                Daily Market updates
              </li>
              <li className="flex items-center mb-2">
                <span className="h-2 w-2 bg-white rounded-full mr-2"></span>
                Newsletter
              </li>
              <br />
              <br />
              <br />
            </ul>
            <button className="w-full bg-gray-700 text-white rounded-xl px-6 py-4 bg-[#3d3d3d]">
              Get Started
            </button>
          </div>
          <div className="bg-blue-500 text-black p-6 bg-[#04CBF8] rounded-xl flex-1 w-full ">
          <PriceIcon2 />
            <div className="flex justify-between items-center mb-4 mt-3">
              <h3 className="text-[24px] font-bold">Premium</h3>
              <span className="text-white font-bold px-4 py-2 bg-black rounded-full">$175</span>
            </div>
            <ul className="mb-6 flex flex-col gap-4">
              <li className="flex items-center mb-2">
                <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                Hand Selected Stock Picks
              </li>
              <li className="flex items-center mb-2">
                <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                Full Access Market Reports
              </li>
              <li className="flex items-center mb-2">
                <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                Moby Analyst Team Model Portfolio’s
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-black rounded-full mr-2"></span>
                Political Trading Screener ~ Custom Alerts
              </li>
            </ul>
            <button className="w-full bg-black text-white py-4 px-6 rounded-xl mb-4">
              Try it for Free 30 Days
            </button>
            <p className="text-[14px] text-center opacity-30">
              $175 on purchase at discount, with money back guarantee for first
              30 days
            </p>
            <p className="text-[14px] text-center">
              Exclusive 25% discount on purchase
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------------testimonial ---------- */}

      <div className="bg-gray-900 text-white p-8">
      <h2 className="text-[32px] font-bold text-center mt-16 mb-10">
      Testimonials that speak louder than words
        </h2>

        <hr className="text-[#fff] opacity-10 m-auto max-w-[1160px] pb-10" />
        
        <div className="flex flex-col lg:flex-row justify-center max-w-[1160px] gap-3 m-auto">
          <div className="w-full lg:w-1/3 rounded-3xl p-8 bg-[#3d3d3d] relative ">
          <img src={investor} alt="Logo" className="pt-5" />
            <div className="flex items-center mb-4">
              <div className="flex justify-between w-full">
              <img src={starr} alt="logo"  className=""/>
              <span className="text-yellow-500 font-bold rounded-full px-4 py-2 bg-[#5c5c5c]">4.1/5</span>
              </div>
            </div>
            <hr className="text-[#fff] opacity-10 m-auto pb-10" />
            <p className="mb-4 text-[24px] font-bold leading-none">
              Moby Finance Review: Jargon Free Investment Research
            </p>
            <p className="text-[14px] pb-10 ">
              Moby gives you a leg up by providing access to top-tier investing
              research that is broken down into understandable formats. For
              active investors looking for a jargon-free platform, Moby might be
              the right fit.
            </p>
            <div className="flex gap-2 absolute bottom-6 cursor-pointer">
            <p className=" text-primaryblue inline-block">
              Read all 
            </p> <ArrowIcon />
            </div>
          </div>
          <div className="w-full lg:w-1/3 rounded-3xl p-8 bg-[#3d3d3d] relative">
          <img src={wall} alt="Logo" className="pt-5" />
            <div className="flex items-center mb-4">
            <div className="flex justify-between w-full">
              <img src={starr} alt="logo"  className=""/>
              <span className="text-yellow-500 font-bold rounded-full px-4 py-2 bg-[#5c5c5c]">4.1/5</span>
              </div>
            </div>
            <hr className="text-[#fff] opacity-10 m-auto pb-10" />
            <p className="mb-4 text-[24px] font-bold leading-none">
              Motley Fool vs Moby: Which Stock Picking Service is Better?
            </p>
            <p className="text-[14px] pb-10 ">
              Each of them has a different investing approach, but every stock
              picking service has the same goal: Outperformance. To that end,
              Motley Fool has been almost unbeatable for over 20 years (more on
              this below). But Moby has its own track record...
            </p>
            <div className="flex gap-2 absolute bottom-6 cursor-pointer">
            <p className=" text-primaryblue inline-block">
              Read all 
            </p> <ArrowIcon />
            </div>
          </div>
          <div className="w-full lg:w-1/3 rounded-3xl p-8  bg-[#3d3d3d] relative">
          <img src={monkey} alt="Logo" className="pt-5" />
            <div className="flex items-center mb-4">
            <div className="flex justify-between w-full">
              <img src={starr} alt="logo"  className=""/>
              <span className="text-yellow-500 font-bold rounded-full px-4 py-2 bg-[#5c5c5c]">4.1/5</span>
              </div>
            </div>
            <hr className="text-[#fff] opacity-10 m-auto pb-10" />
            <p className="mb-4 text-[24px] font-bold leading-none">Moby Invest App Review 2024</p>
            <p className="text-[14px] pb-10 ">
              Moby App is more than just a market research tool; it’s an
              educational platform that empowers investors with the knowledge
              and insights needed to make informed decisions. Crafted with a
              mobile-first approach, Moby brings the expertise of Wall Street to
              your fingertips, offering comprehensive tools for a successful
              investing journey.
            </p>
            <div className="flex gap-2 absolute bottom-6 cursor-pointer">
            <p className=" text-primaryblue inline-block">
              Read all 
            </p> <ArrowIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
