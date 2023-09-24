import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";


const Cards = () => {
    const cards=useLoaderData();

    return (
        <div>
             <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 mb-16">
                {
                    cards.map(card =><Card key={card.id} card={card}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Cards;