import type { ReactNode } from "react"
import Card from "./content/Card-product"
import Category from "./content/Category"
import Description from "./content/Description"
import Ready from "./content/Ready"
import FooterInfo from "./content/FooterInfo"
import cards from "../data/Cards_info";

interface FeedProps {
    infos: {
        heading: string
        headingText: string
        categories?: string[]
    }
    children?: ReactNode
    showDescription?: boolean
}

function Feed({ infos, children, showDescription = true }: FeedProps) {
    return (
        <div className="mx-20">

            {/* Optional Description */}
            {showDescription && <Description />}

            <div className="my-10">

                {/* Heading Section */}
                <div className="my-10">
                    <div className="flex items-center justify-between w-full">
                        <div>
                            <h2 className="text-2xl font-medium my-2">{infos.heading}</h2>
                            <p className="text-gray-500">{infos.headingText}</p>
                        </div>

                        {/* Injected custom content */}
                        {children}
                    </div>

                    {/* Categories */}
                    <div className="flex gap-1">
                        {infos.categories?.map((cat, index) => (
                            <Category key={index} text={cat} />
                        ))}
                    </div>
                </div>

                {/* Featured Cards */}
                <div className="flex gap-3">
                    {
                        cards.map((ele, index) => (
                            <Card key={index} data={ele} />
                        ))
                    }
                </div>
            </div>

            {/* Recently Added */}
            <div>
                <h2 className="text-2xl font-medium my-5">Recently Added</h2>
                <div className="flex gap-3">
                    {
                        cards.map((ele, index) => (
                            <Card key={index} data={ele} />
                        ))
                    }
                </div>
            </div>

            {/* Ready Section */}
            <Ready />
            <FooterInfo />
        </div>
    )
}

export default Feed