import Card from "./components_components/Card-product"
import Category from "./components_components/Category"
import Description from "./components_components/Description"
import Ready from "./components_components/Ready"

interface FeedProps {
    infos: {
        heading: string,
        categories: string[]
    }
}

function Feed({ infos }: FeedProps) {
    return (
        <div className="mx-20">
            <Description />
            <div className="my-10">
                <div className="my-10">
                    <h2 className="text-2xl font-medium my-2">{infos.heading}</h2>
                    <div className="flex gap-1">
                        {
                            infos.categories.map((cat, index) => (
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
            <Ready />
        </div>
    )
}

export default Feed