import { useState } from "react";
import Nav from "../components/Nav"
import Navigation from "../components/Navigation"

import { IoMdAdd } from "react-icons/io";

const Items = () => {

    // let Descrip = false;   then add this to feed showDescription={Descrip} 

    /* 
        you can add children inside your feed


        <button className="bg-black text-white px-4 py-2 rounded h-10">
            Add New Item
        </button>
        

        <Feed infos={info} showDescription={Descrip} >
            <button className="bg-black text-white px-4 py-2 rounded h-10">
                Add New Item
            </button>
        </Feed>
    */

    const [total, setTotal] = useState(0);
    const [active, setActive] = useState(10);
    const [views, setViews] = useState(0);
    const [tradeOffers, setTradeOffers] = useState(0);

    let cards = [
        {
            value: total,
            text: "Total Items"
        },
        {
            value: active,
            text: "Active Listings"
        },
        {
            value: views,
            text: "Total Views"
        },
        {
            value: tradeOffers,
            text: "Trade Offers"
        },
    ];

    return (
        <div>
            <Nav />
            <div className='flex mt-14'>
                <Navigation />
                <div className="mx-auto w-7/10">
                    <div className="flex justify-between items-center my-5">
                        <div>
                            <h2 className="text-3xl font-bold my-2">My Items</h2>
                            <p className="text-gray-500">Manage your Listed items</p>
                        </div>
                        <button className="bg-black text-white px-4 py-2 rounded-lg h-10 flex items-center gap-2">
                            <IoMdAdd /> Add New Item
                        </button>
                    </div>
                    <div className="flex">
                        {
                            cards.map((ele, index) => (
                                <Card key={index} info={ele} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items;


type CardInfo = {
    value: number;
    text: string;
};

function Card({ info } : {info: CardInfo}) {
    return (
        <div className="rounded-lg p-5 m-1 border border-gray-300 w-full">
            <p className="font-bold text-2xl">{info.value}</p>
            <p>{info.text}</p>
        </div>
    )
}
