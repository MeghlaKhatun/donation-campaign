import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../Utility/LocalStorage";
import Donate from "../Donate/Donate";

const Donation = () => {
    const donation =useLoaderData();
    const [donate,setDonate]=useState([]);
    const [seeAll,setSeeAll]=useState(4);

    useEffect(()=>{
        const getDonation=getLocalStorage();
        if(donation.length>0){
            const donateArr=[];
            for(const id of getDonation){
                const matchDonate=donation.find(donate=>donate.id === id);
                if (matchDonate){
                    donateArr.push (matchDonate)
                }
            }
            setDonate(donateArr);
        }
    },[donation])



    return (
        <div className="max-w-7xl mx-auto">

       
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto mt-[83px] justify-between gap-6 px-10 lg:px-0 mb-12">
            {
                donate.slice(0,seeAll).map(done=><Donate key={done.id} done={done}></Donate>)
            }        
      </div>
      {
        donate.length>4 && <div className="flex justify-center">
        <div className= {seeAll === donate?.length && "hidden"}>
                <button onClick={()=>setSeeAll(donate?.length)} className="text-[16px] font-semibold text-white bg-[#009444] rounded-lg py-4 px-7">See All</button>
        </div>
      </div>
      }
      

     
      </div>
    );
};

export default Donation;