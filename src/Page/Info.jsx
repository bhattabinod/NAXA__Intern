import React from "react";
import Freelance from "../Images/freelancer.png";
import Datacollection from "../Images/data-collection.png";
import Laptop from "../Images/Laptop_Workspace.png";
import Rectangle1 from "../Images/Rectangle 2075.png";
import Rectangle2 from "../Images/Rectangle 2085.png";
import Workshop from "../Images/workshop.png";
import Location from "../Images/location1.png";
import Nepal from "../Images/nepal_emblem.png";
import Finance from "../Images/Finance.svg";
import Line from "../Images/Line.svg";
import Mahalekha from "../Images/Mahalekha.svg";
import Provincial from "../Images/Provincial_Government.svg";
import Karnali from "../Images/KarnaliPradesh.svg";
import Sthaniya from "../Images/Sthaniya.svg";
import Project from "../Images/ProjectDatabase.svg"
import England from "../Images/England.png"
import Place from "../Images/place.png"
import Call from "../Images/call.png"
import Email from "../Images/email.png"

const Info = () => {
  return (
    <>
        {/* -------------------------------------------Header Part----------------------------------------- */}

        <div className="flex justify-between md:grid md:grid-cols-1 lg:flex sm:grid sm:grid-cols-1 bg-blue-500 mx-20">
            <div className="flex items-center sm:flex sm:justify-center md:flex md:justify-center lg:flex lg:justify-start mx-10">
            <img
                className="h-20 w-18 ml-3"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png"
                alt=""
            />
            <div className="grid grid-cols-1 gap-0 m-3 text-white">
                <h2 className="font-extrabold">कर्णाली प्रदेश सरकार</h2>
                <h2 className="font-semibold">
                मुख्यमन्त्री तथा मन्त्रिपरिषदको कार्यालय
                </h2>
                <p>Project Information Management System</p>
            </div>
            </div>
            <div className="flex items-center mx-10 md:flex md:justify-center sm:flex sm:justify-center lg:flex lg:gap-0 text-white">
            <p className="mx-3">Data</p>
            <p className="mx-3">About</p>
            <button className="lg:h-20 lg:w-20">
                <img src={Rectangle1} alt="" />
            </button>
            <button className="mx-3 text-white border-white">Login</button>
            </div>
        </div>

        {/* ----------------------------------------------------Page I--------------------------------------------------   */}

        <div className="bg-blue-500 lg:grid lg:grid-cols-2 lg:gap-3 xl:grid xl:grid-cols-2 xl:gap-1 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 p-3 mx-20 rounded-b-lg lg:h-full">
            <div className="justify-center lg:py-20  lg:text-balance lg:ml-10 xl:text-start md:my-10 md:text-center sm:my-10 sm:text-start lg:text-start ">
                <h1 className="lg:mt-0 lg:font-bold md:mt-10 md:justify-center font-bold text-white mb-3 xl:font-bold">
                    Interactive Digital Portal of Projects in karnali Province of Nepal
                </h1>
                <h2 className="text-white font-extralight">
                    A digital portal to identify the enabling factors of the development
                    supported by development partners in Karnali Province of Nepal.
                </h2>
            </div>

            <div className="lg:place-self-center xl:place-self-end md:place-self-center sm:place-self-center ">
                <img className=" mt-20 md:mt-10 sm:mt-10 mb-4 lg:h-96 lg:w-25 lg:mx-5 rounded xl:h-96 xl:w-25 xl:mx-5" src={Laptop} alt="" />
            </div>
        </div>

        {/* -----------------------------------------------------Page-II-------------------------------------------------------- */}

        <div className="flex p-12 bg-yellow-100 mt-5 mx-20 rounded-t-lg sm:grid sm:grid-cols-1 md:grid      md:grid-cols-1 lg:grid lg:grid-cols-1 xl:grid xl:grid-cols-2 ">
            <div className="mt-20 ml-15 justify-center">
            <h1 className="font-extralight">
                This portal is developed to identify the enabling factors of the
                development supported by development partners in Karnali Province of
                Nepal.
            </h1>
            <p className="my-3">
                In the last few years, there has been a huge concern among the civil
                societies, government and international development partners about
                improving the quality of the life of people in Karnali. Nepal
                government along with the support of donor countries and
                multilateral funding agencies has invested huge resources to the
                implementing development project through NGO/INGO and others. Many
                organizations including NGO/INGOs have spent a significant amount of
                resources towards assessing development initiatives through project
                intervention at provincial and municipal level. The focus of all
                these investments and efforts is to create the equitable prosperous
                society but such investment is not always based on the proper
                assessment of the local needs and expectations.
            </p>
            </div>

            <div className="lg:place-self-center xl:place-self-end md:place-self-center sm:place-self-center ">
                <img className=" mt-20 md:mt-10 sm:mt-10 mb-4 lg:h-auto lg:w-auto xl:h-auto xl:w-auto lg:mx-5 rounded xl:mx-5" src={Rectangle2} alt="" />
            </div>
         </div>

        {/* --------------------------------------------------Objectives------------------------------------------------- */}

      <div className="bg-yellow-100 mx-20 font-bold sm:text-center md:text-start lg:text-start xl:text-start">
        <p className="font-bold mx-5">Objective</p>
      </div>
      <div className="flex bg-yellow-100 mx-20 rounded-b-lg">
        <div className="sm:place-self-center sm:align-middle">
          <img className="my-4 mx-10" src={Freelance} alt="" />
          <p className="mx-5 mb-10 sm:text-start">
            Identifying the key actors to operate Project Database Portal
          </p>
        </div>
        <div>
          <img className="my-4" src={Datacollection} alt="" />
          <p className="mr-5">
            Collection of project related data from federal, provincial, &
            municipal levels & validate into Project Database Portal
          </p>
        </div>
        <div>
          <img className="ml-5 my-4" src={Workshop} alt="" />
          <p className="ml-5 mr-5">
            Capacitate provincial & municipal officials to handle Project
            Database Portal
          </p>
        </div>
      </div>

      {/* --------------------------------------------Data Source--------------------------------------------------------- */}

      <div className="bg-blue-200 mx-40 text-center mt-3 my-3 rounded">
        <div>
          <h1 className="mt-20"> Data Source</h1>
          <p>
            A digital portal to identify the enabling factors of the development
            supported by development partners in Karnali Province of Nepal.
          </p>
        </div>

        <div className="my-5 mb-3 text-red-600">FEDERAL GOVERNMENT</div>

        <div className="lg:grid lg:grid-cols-1 justify-center items-center mx-20 ">
            <div className="lg:flex lg:gap-8 justify-center items-center sm:grid sm:grid-cols-1 sm:gap-3">
                <div className="lg:flex lg:gap-3 sm:grid sm:grid-cols-1">
                    <img className="h-10 w-15 justify-center mt-2.5 lg:mt-2.5 sm:place-self-start" src={Nepal} alt=""/>
                    <img className="sm:place-self-start lg:mt-3" src={Finance} alt="" />
                </div>

                <div className="lg:flex lg:gap-3 sm:grid sm:grid-cols-1">
                    <img className="h-10 w-15 justify-center mt-2.5 lg:mt-2.5 sm:place-self-start" src={Nepal} alt=""/>
                    <img className="sm:place-self-start lg:mt-3" src={Line} alt="" />
                </div>
            </div>

            <div className="lg:flex lg:gap-8 justify-center items-center sm:grid sm:grid-cols-1 sm:gap-3 lg:mt-3">
                <div className="sm:grid sm:grid-cols-1 lg:flex lg:gap-3">
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt=""/>
                    <div className="font-bold mt-2.5 text-black sm:font-medium sm:font-serif">
                        <h2 className="text-start">Government of Nepal</h2>
                        <h3 className="text-start">Aid Management Information System for Nepal</h3>
                    </div>
                </div>

                <div className="lg:flex lg:gap-3 sm:grid sm:grid-cols-1">
                    <img className="h-10 w-15 justify-center mt-2.5 lg:mt-2.5 sm:place-self-start" src={Nepal} alt=""/>
                    <img className="sm:place-self-start lg:mt-3" src={Mahalekha} alt="" />
                </div>
            </div>
    </div>
        
            <div className="mt-5 mb-3 text-red-600">PROVINCIAL GOVERNMENT</div>

            <div className="justify-center items-center mx-20 sm:grid sm:grid-cols-1">
                <div className="lg:flex lg:gap-5 justify-center items-center sm:grid sm:grid-cols-1 sm:gap-3">
                    <div className="lg:flex lg:gap-2 sm:grid sm:grid-cols-1 sm:gap-0">
                        <img className="h-10 w-15 justify-center mt-2.5"src={Nepal} alt=""/>
                        <img className="lg:h-9 lg:w-13 mt-2 mr-5 " src={Karnali} alt="" />
                    </div>

                    <div className="flex gap-2">
                        <img className="lg:h-10 lg:w-15 mt-2 sm:h-auto sm:w-auto " src={Provincial} alt="" />
                    </div>

                    <div className="lg:flex gap-2 sm:grid sm:grid-cols-1" >
                        <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                        <img  src={Mahalekha} alt="" />
                    </div>            
                </div>
            </div>

            <div className="mt-5 mb-2  text-red-600">MUNICIPAL GOVERNMENT</div>

            <div className="justify-center items-center mx-20 sm:grid sm:grid-cols-1">
                <div className="lg:flex lg:gap-12 justify-center items-center sm:grid sm:grid-cols-1 sm:gap-3">

                    <div className="flex gap-2 sm:grid sm:grid-cols-1" >
                        <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                        <img  className="sm:mb-3" src={Sthaniya} alt="" />
                    </div>            
                </div>
            </div>

        </div>


       {/* --------------------------------------------Interactive Digital Portal----------------------------- */}

       <div className="xl:flex xl:gap-0 items-center mx-40 bg-blue-500 rounded h-44 mt-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:h-auto">
            <div className="sm:place-self-center lg:place-self-center">
                <img className="xl:ml-10" src={Location} alt="" />
            </div>
            <div className="xl:text-start xl:text-black">
                <p className=" sm:text-white font-bold lg:ml-20 sm:text-center xl:text-black xl:text-justify xl:ml-44">Interactive digital portal of projects in Karnali Province of Nepal </p>
            </div>
            
            <div className=" justify-center sm:place-self-center sm:h-12 lg:place-self-center">
                <button className="border-white xl:ml-60 lg:text-right sm:place-self-center sm:text-center sm:justify-center ">Explore Map</button>

{/* --------------------------------------------Interactive Digital Portal----------------------------- */}

        <div className="xl:flex items-center mx-40 bg-blue-500 rounded h-44 mt-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:h-auto">
            <div className="sm:place-self-center lg:place-self-center">
                <img className="xl:ml-10" src={Location} alt="" />
            </div>
            <div>
                <p className="text-white font-bold lg:ml-20 sm:text-center xl:text-center">Interactive digital portal of projects in Karnali Province of Nepal </p>
            </div>
            
            <div className=" justify-center sm:place-self-center sm:h-12 lg:place-self-center">
                <button className="border-white xl:ml-80 lg:text-right sm:place-self-center sm:text-center sm:justify-center ">Explore Map</button>
            </div>
        </div>

        {/* -------------------------------------------------Footer--------------------------------------------------- */}

        <div className="  lg:mx-40 my-5 grid grid-cols-2 gap-8  sm:grid sm:grid-cols-1 sm:mx-32 lg:grid lg:grid-cols-2">
            <div className="lg:flex lg:gap-14 justify-center sm:grid sm:grid-cols-1 sm:gap-5 sm:w-auto sm:h-auto ">
                <div className="flex gap-2 lg:justify-center lg:items-center sm:justify-center sm:items-center">
                    <img className="h-10 w-15 justify-center mt-2.5"src={Nepal} alt=""/>
                    <img className="h-9 w-13 mt-2 mr-5 " src={Karnali} alt="" />
                </div>

                <div class="flex flex-1 lg:place-self-center sm:hidden">
                    <div class="inline-block h-[40px] min-h-[1em] w-0.5 self-stretch bg-black dark:bg-black/10 mr-5 ml-5 mt-2">
                    </div>
                </div>

                <div className="flex gap-2 lg:justify-center lg:items-center sm:justify-center sm:items-center">
                    <img className="h-9 w-13 mt-2 mr-5 " src={Project} alt="" />
                </div>
            </div>

            <div className="lg:flex lg:gap-20 justify-end items-end sm:grid sm:grid-cols-1 sm:gap-3 lg:mt-3">
            <div className="ml-5 sm:text-center sm:place-self-center">
                    <div className="flex gap-2" >
                        <h2 className="mb-2" >Map</h2>
                    </div>
                    
                    <div className="flex gap-2" >
                        <h2 className="mb-2" >Data</h2>
                    </div>
                    
                    <div className="flex gap-2" >
                        <h2 className="mb-2" >About</h2>
                    </div>
                </div>

                <div className="ml-5 sm:text-center sm:place-self-center">
                    <div className="flex gap-2 mb-2" >
                        <img className="h-auto w-auto" src={Place} alt="" />
                        <h2 className="mb-2" >Search Projects</h2>
                    </div>
                    
                    <div className="flex gap-2 mb-2" >
                        <img className="h-auto w-auto"  src={Call} alt="" />
                        <h2 className="mb-2" >+977-01 4563 235, 01 4575 246</h2>
                    </div>
                    
                    <div className="flex gap-2 mb-2" >
                        <img className="h-auto w-auto" src={Email} alt="" />
                        <h2 className="mb-2" >mail@mail.com</h2>
                    </div>
                </div>
            </div>
        </div>

    {/* ------------------------------------Footer - Final--------------------------------------------------- */}

        <div className="mx-40" >
        <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-700 to-transparent opacity-25 dark:via-neutral-700" />
        </div>

        <div className="mx-40 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 sm:gap-5 xl:grid xl:grid-cols-2">
            <div className="flex gap-2 sm:text-center sm:place-self-center md:place-self-center xl:place-self-start">
                <img className="h-6 w-6" src={England} alt="" />
                <p className="ml-2">English</p>
            </div>

            <div className=" md:text-center justify-end items-end mb-4 sm:grid sm:grid-cols-1 sm:text-center xl:flex xl:gap-3">
                <p>Privacy Policy</p>
                <p>Terms</p>
                <p>Copyright © 2022 Project Database Portal</p>
            </div>
        </div>
        
    </>
  );
};

export default Info;
