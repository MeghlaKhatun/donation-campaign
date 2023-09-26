
import PropTypes from 'prop-types'


const Banner = ({handleSearch}) => {
    

    return (
         <div className="hero mt-4 mb-8 md:mb-[70px] lg:mb-[100px]">
            <img className="w-full h-full" src={"https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR0AHbqAQZ5P1K0kG5_P-VxhlasEpScy9u95cT63q_3nN6F1GqY_mmEyoiU"} alt="" />
        <div className="hero-overlay  bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="">
            <h1 className="text-[#0B0B0B] text-3xl lg:text-[48px] font-bold text-center pt-6 md:pt-0">I Grow By Helping People In Need</h1> 



            {/* search-field */}

            <form onSubmit={handleSearch}>
            <div className="mt-10">

            <input className="text-black border outline-none rounded-lg py-3 md:py-4 pl-4 pr-[40px] md:pr-[200px] lg:pr-[350px]" type="text" placeholder="Search here...." name="text" id="" />    

            </div>

            <div className="md:absolute mt-6 md:mt-[-57px]  md:ml-[370px] lg:ml-[570px]">

               <input className="bg-[#FF444A] text-[16px] font-semibold py-3 md:py-4 px-7 text-white rounded-lg " type="submit" value="Search" />
                
                {/* <button className="bg-[#FF444A] text-[16px] font-semibold py-3 md:py-4 px-7 text-white rounded-lg">Search</button> */}
            </div>
            </form>
          
           
            
            </div>
        </div>
        </div>
       
    );
};

Banner.propTypes = {
    handleSearch:PropTypes.func,
      
  }

export default Banner;