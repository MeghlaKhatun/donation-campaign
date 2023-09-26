
import PropTypes from 'prop-types'

const Donate = ({done}) => {
    const {price,title,img,category,category_bg,text_color,card_bg}=done;
    
  return (
        <div style={{background:card_bg}} className='flex flex-col md:flex-row  shadow-xl  md:h-[220px] rounded-lg'>
            <div className='flex-1'>
            <img className='h-full w-full rounded-lg' src={img} />
            </div>

            <div className='flex-1'>
            <h3 style={{background:category_bg, color:text_color}} className='text-sm font-medium ml-4 md:ml-6 text-black py-1 px-3 w-1/2 md:w-1/3 rounded mt-6 text-center'>{category}</h3>
            <h1 className='text-[16px] md:text-2xl font-medium md:font-semibold ml-4 md:ml-6 mt-3 text-[#0B0B0B]'>{title}</h1>
             <h3 style={{color:text_color}} className='md:mt-2 text-[16px] font-semibold ml-4 md:ml-6'>${price}.00</h3>
            <div className="  ml-4 md:ml-6 mt-2 md:mt-6 mb-[26px]">
             <button style={{background:text_color}} className=" text-sm md:text-[18px] text-white font-normal md:font-semibold px-2 md:px-4 py-1 md:py-3 rounded-lg">View Details</button>
             </div>

            </div>
        </div>
  )
}

Donate.propTypes = {
    done:PropTypes.object,
}

export default Donate