import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'
import { setLocalStorage } from "../../Utility/LocalStorage";

const CardDetails = () => {
    const cardDetails=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    console.log(cardDetails,id)
    
   const card=cardDetails?.find(card=>card.id == idInt);
   const {img,title,price,description,text_color}=card;

   const handleToast=()=>{
    setLocalStorage(idInt);
    Swal.fire(
        'Successful',
        'Your donation successful',
        'success'
      )
   }

    return (
       
        <div className="max-w-7xl mx-auto mt-[83px] mb-16 px-10 lg:px-0">
            <div >
                <img className="w-full h-full rounded-lg" src={img} alt="" />

                    <div className="h-[70px] md:h-[150px] lg:h-[200px] bg-black opacity-30 mt-[-70px] md:mt-[-150px] lg:mt-[-200px] rounded-lg">
                    
                    </div>
                    <div>
                        <button onClick={handleToast} style={{background:text_color}} className="py-1 md:py-3 px-4 md:px-6 text-white text-[16px] md:text-xl font-medium md:font-semibold rounded absolute mt-[-50px] md:mt-[-100px] lg:mt-[-130px] ml-[40px]">Donate ${price}</button>
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl mt-8 md:mt-[56px] mb-6 text-[#0B0B0B] font-bold">{title}</h2>
                    <h3 className="text-[16px] text-[#0B0B0BB2] font-normal">{description}</h3>

                
            </div>
            
        </div>
    );
};

export default CardDetails;