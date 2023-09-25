import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import { useEffect, useState } from "react";


const Cards = () => {
  
    const cards = useLoaderData();
    const [filteredCards, setFilteredCards] = useState([]);
  

console.log("filter",filteredCards)
    const handleSearch = e=>{
        e.preventDefault();
        console.log(e.target.text.value)
        const searchKey = e.target.text.value.trim().toLowerCase();
        const filtered = cards.filter(card => card.category.toLowerCase().indexOf(searchKey) !== -1);
        console.log(filtered)
        setFilteredCards(filtered);
    }
    useEffect(() => {
        setFilteredCards(cards);
    }, [cards]);

    return (
        <div>
             <Banner handleSearch={handleSearch}></Banner>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-6 mb-16 px-10 lg:px-0">
                {
                   filteredCards.map(card =><Card key={card.id} card={card}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Cards;