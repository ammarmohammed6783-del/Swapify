const Category = ({text} : {text: string}) => {
    return (
        <div className="px-3 border border-gray-300 rounded-lg w-fit">
            {text}
        </div>
    )
}

export default Category
