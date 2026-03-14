import Feed from "../components/Feed"

const Home = () => {

    let info = {
        heading: "Explore Items",
        headingText: "Discover 12 items available for trade",
        categories: ["gaming tools", "cameras", "sports items", "others"]
    }

    return (
        <div>
            <Feed infos={info}/>
        </div>
    )
}

export default Home
