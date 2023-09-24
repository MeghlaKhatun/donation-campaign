import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const CardDetails = () => {
    const cardDetails=useLoaderData();
    const {id}=useParams();
    const idInt=parseInt(id);
    
   const card=cardDetails?.find(card=>card.id === idInt);
   const {img,title,price,description}=card;

   const handleToast=()=>{
    Swal.fire(
        'Successful',
        'You clicked the button!',
        'success'
      )
   }

    return (
        <div className="max-w-7xl mx-auto mt-[83px] mb-16">
            <div >
                <img className="w-full h-[60vh] rounded-lg" src={img} alt="" />

                    <div className="h-[15vh] bg-black opacity-30 mt-[-145px] rounded-b">
                    
                    </div>
                    <div>
                        <button onClick={handleToast} className="py-4 px-6 text-white bg-[#FF444A] text-xl font-semibold rounded absolute mt-[-100px] ml-[40px]">Donate ${price}</button>
                    </div>
                    <h2 className="text-4xl mt-[56px] mb-6 text-[#0B0B0B] font-bold">{title}</h2>
                    <h3 className="text-[16px] text-[#0B0B0BB2] font-normal">{description}</h3>

                
            </div>
            
        </div>
    );
};

export default CardDetails;