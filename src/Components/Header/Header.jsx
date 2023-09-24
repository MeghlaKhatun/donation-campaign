import { NavLink } from "react-router-dom";
import './header.css'

const Header = () => {
    return (

        <div  className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between md:px-10 lg:px-0 mt-14 items-center">
            <div>
                <img src="/image/Logo.png" alt="" />
            </div>
            <nav className="flex mt-10 md:mt-0 gap-6 md:gap-12">
            <NavLink className="text-[#0B0B0B] text-[18px] font-normal" to="/">Home</NavLink>
            <NavLink className="text-[#0B0B0B] text-[18px] font-normal" to="/donation">Donation</NavLink>
            <NavLink className="text-[#0B0B0B] text-[18px] font-normal" to="/statistics">Statistics</NavLink>
            </nav>
            
        </div>
    );
};

export default Header;