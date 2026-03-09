import Feed from "../components/Feed"
import Nav from "../components/Nav"
import Navigation from "../components/Navigation"

const Home = () => {

    let info = {
        heading: "Explore Items",
        headingText: "Discover 12 items available for trade",
        categories: ["gaming tools", "cameras", "sports items", "others"]
    }

    return (
        <div>
            <Nav />
            <div className='flex mt-14'>
                <Navigation />
                <Feed infos={info}/>
            </div>
        </div>
    )
}

export default Home
