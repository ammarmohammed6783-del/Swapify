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

    return (
        <div>
            <Nav />
            <div className='flex mt-14'>
                <Navigation />
                <div className="mx-auto w-7/10">
                    <div className="flex justify-between items-center my-5">
                        <div>
                            <h2 className="text-2xl font-medium my-2">My Items</h2>
                            <p className="text-gray-500">Manage your Listed items</p>
                        </div>
                        <button className="bg-black text-white px-4 py-2 rounded-lg h-10 flex items-center gap-2">
                            <IoMdAdd/> Add New Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items
