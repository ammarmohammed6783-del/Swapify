import Feed from "../components/Feed"
import Nav from "../components/Nav"
import Navigation from "../components/Navigation"

const Explore = () => {

    let info = {
        heading: "Explore Items",
        headingText: "Discover 12 items available for trade",
        categories: ["electronics", "tools", "toys", "clothing", "music", "photography", "books", "others"]
    }

    return (
        <div>
            <Nav />
            <div className='flex mt-14'>
                <Navigation />
                <div className="">
                    <Feed infos={info}/>
                </div>
            </div>
        </div>
    )
}

export default Explore
