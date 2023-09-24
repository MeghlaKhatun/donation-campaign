import { Link } from "react-router-dom";

const Banner = () => {
    return (
         <div className="hero mt-4 mb-8 md:mb-[70px] lg:mb-[100px]">
            <img className="w-full h-full" src={"https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0AHbqAQZ5P1K0kG5_P-VxhlasEpScy9u95cT63q_3nN6F1GqY_mmEyoiU"} alt="" />
        <div className="hero-overlay  bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="">
            <h1 className="text-[#0B0B0B] text-3xl lg:text-[48px] font-bold text-center pt-6 md:pt-0">I Grow By Helping People In Need</h1> 
            <div className="mt-10">
            <input className="border outline-none rounded-lg py-3 md:py-4 pl-4 pr-[100px] md:pr-[200px] lg:pr-[350px]" type="text" placeholder="Search here...." name="" id="" />         
            </div>

            <div className="absolute mt-[-50px] md:mt-[-57px] ml-[270px] md:ml-[370px] lg:ml-[570px]">
                <Link><button className="bg-[#FF444A] text-[16px] font-semibold py-3 md:py-4 px-7 text-white rounded-lg">Search</button></Link>
            </div>
           
            
            </div>
        </div>
        </div>
    );
};

export default Banner;