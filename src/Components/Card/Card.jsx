
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Card = ({card}) => {
  console.log(card)
    const {id,img,category,title,category_bg,card_bg,text_color}=card;

    
    
  return (
    <div >
        <div style={{background:card_bg}} className='rounded-lg'>
           <Link to={`/card/${id}`}>
           <img className='w-full' src={img} alt="" />
            
            <h3 style={{background:category_bg, color:text_color}} className='text-sm font-medium mx-4 text-black py-1 px-3 w-1/3 rounded mt-4 text-center'>{category}</h3>
            <h2 style={{color:text_color }} className='text-xl font-semibold mx-4 pt-2 pb-4'> {title}</h2>
           </Link>
            

        </div>
        
    </div>
  )
}

Card.propTypes = {
  card:PropTypes.array,
    
}

export default Card