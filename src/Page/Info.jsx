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

const Info = () => {
  return (
    <>
      <div className="md:flex md:justify-between bg-blue-500 mx-20">
        <div className="flex items-center mx-10">
          <img
            className="h-20 w-18 ml-3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem_of_Nepal.svg/1200px-Emblem_of_Nepal.svg.png"
            alt=""
          />
          <div className="m-3 text-white">
            <h2 className="font-extrabold">कर्णाली प्रदेश सरकार</h2>
            <h2 className="font-semibold">
              मुख्यमन्त्री तथा मन्त्रिपरिषदको कार्यालय
            </h2>
            <p>Project Information Management System</p>
          </div>
        </div>
        <div className="md:flex items-center mx-10 text-white">
          <p className="mx-3">Data</p>
          <p className="mx-3">About</p>
          <button>
            <img src={Rectangle1} alt="" />
          </button>
          <button className="mx-3 text-white border-white">Login</button>
        </div>
      </div>
      <div className="md:flex bg-blue-500 p-3 mx-20 rounded-b-lg h-full">
        <div className="justify-center mx-10 my-20">
          <h1 className="mt-20 font-bold text-white mb-3">
            Interactive Digital Portal of Projects in karnali Province of Nepal
          </h1>
          <h2 className="text-white">
            A digital portal to identify the enabling factors of the development
            supported by development partners in Karnali Province of Nepal{" "}
          </h2>
        </div>
        <img
          className="mt-20 mb-4 mx-4 h-23 w-29 rounded"
          src={Laptop}
          alt=""
        />
      </div>

      <div className="md:flex p-12 bg-yellow-100 mt-5 mx-20 rounded-t-lg">
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
        <img
          className="my-20 mr-5 ml-10 h-30 w-25 rounded-md"
          src={Rectangle2}
          alt=""
        />
      </div>
      <div className="bg-yellow-100 mx-20 font-bold">
        <p className="font-bold mx-5">Objective</p>
      </div>
      <div className="md:flex bg-yellow-100 mx-20 rounded-b-lg">
        <div>
          <img className="my-4 mx-5" src={Freelance} alt="" />
          <p className="mx-5 mb-10">
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

    <div className="bg-blue-200 mx-40 text-center mt-3 my-3 rounded">
        <div>
        <h1 className="mt-20"> Data Source</h1>
        <p>A digital portal to identify the 
            enabling factors of the development supported by development partners in Karnali Province of Nepal.</p>
        </div>

        <div className="my-5 mb-3 text-red-600">FEDERAL GOVERNMENT</div>
            {/* <div className="grid grid-cols-2 gap-5 text-center mx-60 "> */}
            <div>
             <div className="flex flex-row gap-14  justify-center items-center">
             <div className="flex gap-2" >
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                    <img src={Finance} alt="" />
                </div>

                <div className="flex gap-2" >
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                    <img  src={Line} alt="" />
                </div>
             </div>

                 {/* <div className="flex gap-2" >
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                    <img  src={Mahalekha} alt="" />
                </div> */}

                {/* <div className="flex gap-2" >
                    <img  src={Nepal} alt="" />
                    <img  src={Mahalekha} alt="" />
                </div> */}

            </div>
        <div className="mt-5 mb-3 text-red-600" >PROVINCIAL GOVERNMENT</div>

        <div className="grid grid-cols-2 gap-5 text-center mx-80">
                <div className="flex gap-2" >
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                    <img className = "h-10 w-15 mt-2 "src={Finance} alt="" />
                </div>
                <div className="flex gap-2" >
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                    <img className = "h-10 w-15 mt-2 "src={Mahalekha} alt="" />
                </div>
            </div>

        <div className="mt-5 mb-3  text-red-600" >MUNICIPAL GOVERNMENT</div>

        <div className="grid grid-cols-3 gap-10 text-center mx-60 mb-5">
        <div className="flex gap-2" >
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                    <img className = "h-10 w-15 mt-2 "src={Finance} alt="" />
                </div>

                    <div className="flex gap-2" >
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                    <img className = "h-10 w-15 mt-2 "src={Mahalekha} alt="" />
                </div>

                <div className="flex gap-2" >
                    <img className="h-10 w-15 justify-center mt-2.5" src={Nepal} alt="" />
                    <img className = "h-10 w-15 mt-2 "src={Mahalekha} alt="" />
                </div>

            </div>

    </div>

    <div className="flex items-center mx-40 bg-blue-500 rounded">
        <div><img className="ml-10" src={Location} alt="" /></div>
        <div>
        <p className="text-white font-bold ml-20">Interactive digital portal of projects in Karnali Province of Nepal</p>
        </div>
        <div className="float-right justify-center">
            <button className="border-white ml-80 text-right">Explore</button>
        </div>
      
    </div>
        <div className="mt-20 p-20 bg-red-200 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-5">
      <div className="bg-gray-500 col-span-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro, sequi autem expedita, consectetur temporibus fugit doloribus reiciendis deleniti rem inventore aut hic placeat, aperiam aliquid molestiae asperiores. Expedita, eos?
            s
        </div>
      <div className="bg-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro, sequi autem expedita, consectetur temporibus fugit doloribus reiciendis deleniti rem inventore aut hic placeat, aperiam aliquid molestiae asperiores. Expedita, eos?
            s
        </div>
      <div className="bg-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro, sequi autem expedita, consectetur temporibus fugit doloribus reiciendis deleniti rem inventore aut hic placeat, aperiam aliquid molestiae asperiores. Expedita, eos?
            s
        </div>
      <div className="bg-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro, sequi autem expedita, consectetur temporibus fugit doloribus reiciendis deleniti rem inventore aut hic placeat, aperiam aliquid molestiae asperiores. Expedita, eos?
            s
        </div>
      <div className="bg-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro, sequi autem expedita, consectetur temporibus fugit doloribus reiciendis deleniti rem inventore aut hic placeat, aperiam aliquid molestiae asperiores. Expedita, eos?
            s
        </div>
      <div className="bg-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae porro, sequi autem expedita, consectetur temporibus fugit doloribus reiciendis deleniti rem inventore aut hic placeat, aperiam aliquid molestiae asperiores. Expedita, eos?
            s
        </div>

        </div>
    </>
  );
};

export default Info;
