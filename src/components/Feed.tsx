import Card from "./components_components/Card-product"
import Category from "./components_components/Category"
import Description from "./components_components/Description"

function Feed() {
    let categories = ["electronics", "tools", "toys", "clothing", "music", "photography", "books", "others"]
    return (
        <div className="mx-20">
            <Description />
            <div className="my-10">
                <div className="my-10">
                    <h2 className="text-2xl font-medium my-2">Browse Categories</h2>
                    <div className="flex gap-1">
                        {
                            categories.map((cat, index) => (
                                <Category key={index} text={cat} />
                            ))
                        }
                    </div>
                </div>
                <div className="flex gap-3">
                    <Card /><Card /><Card /><Card />
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-medium my-5">Recently Added</h2>
                <div className="flex gap-3">
                    <Card /><Card /><Card /><Card />
                </div>
            </div>
        </div>
    )
}

export default Feed