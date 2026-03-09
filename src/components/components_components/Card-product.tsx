import { IoLocationOutline } from "react-icons/io5";

const Card = () => {

    let intrests = ["electronics", "tools", "toys", "clothing", "music"]

    return (
        <div className="w-3/12 border border-gray-300 rounded-lg overflow-hidden">
            <img src="" alt="" className="bg-black w-full h-50" />
            <div className="p-3">
                <h3 className="font-bold">Vintage Film Camera</h3>
                <p className="text-gray-600">beautiful Vintage 35mm film camera in excellent working condition</p>
                <p className="flex items-center gap-1 py-1"><IoLocationOutline /> Cairo</p>
                <p>intersted in:</p>
                <div className="flex flex-wrap gap-1">
                    {
                        intrests.map((ele, index) => (
                            <Intersted text={ele}/>
                        ))
                    }
                </div>
                <button className="bg-black text-white flex items-center gap-2 rounded-lg py-1 px-2 my-2">Propose Trade</button>
            </div>
        </div>
    )
}


const Intersted = ({text} : {text: string}) => {
    return (
        <div className="bg-gray-200 font-medium px-2 border border-gray-300 rounded-lg w-fit">
            {text}
        </div>
    )
}

export default Card
