import Feed from "../components/Feed"

const Explore = () => {

    let info = {
        heading: "Explore Items",
        headingText: "Discover 12 items available for trade",
        categories: ["electronics", "tools", "toys", "clothing", "music", "photography", "books", "others"]
    }

    return (
        <div>
            <Feed infos={info} />
        </div>
    )
}

export default Explore
