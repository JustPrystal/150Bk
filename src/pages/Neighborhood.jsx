import TwoColumn from "../components/TwoColumn";
import sec1Image1 from "../assets/images/OneFifty_Neighborhood/section_1_image_1_separate.png";
import sec1Image2 from "../assets/images/OneFifty_Neighborhood/section_1_image_2_separate.png";
import sec2Image from "../assets/images/OneFifty_Neighborhood/section_2.png";
import sec3Image1 from "../assets/images/OneFifty_Neighborhood/section_3_image_1_separate.png";
import sec3Image2 from "../assets/images/OneFifty_Neighborhood/section_3_image_2_separate.png";
import sec4Image from "../assets/images/OneFifty_Neighborhood/section_4.png";
import Banner from "../components/Banner";
import BannerImage from "../assets/images/OneFifty_Neighborhood/Banner.png"
import Footer from "../components/Footer";

let footerData = {
    backgroundColor : "white"
}

let BannerData = {
    backgroundImage : BannerImage,
    heading : "Expand Your Horizons",
    description: "You’ll be surrounded by excitement in Bushwick – one of Brooklyn’s most eclectic and authentically New York neighborhoods. Delicious eateries, local hot-spots, live music venues, and easy access to public transportation make this area one of Brooklyn’s finest."
}

const twoCoulmnData = [
    {
        variant: "white-blue",
        heading: "Eateries & Entertainment",
        description: "In Bushwick, you’re close to all the action. A location with a strong melting-pot mentality, local Taquerias serve up authentic homemade dishes while global restaurants like Ichiran offer Japanese Ramen whenever a craving hits. Along with an array of bars, breweries, and local restaurants, this area is famous for its bustling live music scene. Venues like Elsewhere, Our Wicked Lady, and House of Yes are just moments from your front door, meaning you’ll never run out of places to go or bands to see.",
        isContentImage: false,
        images: [sec1Image1, sec1Image2],
        imagesDirection: "column",
        flexDirection: "row",
        padding: "40px 40px 60px",
    },
    {
        variant: "brown",
        heading: "Art & Culture",
        description: "Bushwick has quickly become an area popular for its arts scene. The neighborhood’s rich cultural heritage is always on display in the form of street art, graffiti murals, and other public art fixtures. Warehouses converted to art galleries line the city streets. Plus, the nearby Bushwick Collective is a community-centric hangout that combines graffiti, street-art, music, food trucks, and wares from local vendors.",
        isContentImage: false,
        images: [sec2Image],
        imagesDirection: "column",
        flexDirection: "row-reverse",
        contentWidth: "calc( 40% - 25px )",
        imageWidth: "calc( 60% - 25px )",
        padding: "20px 40px 40px",
        
    },
    {
        variant: "white-brown",
        heading: "Parks & Greenspaces",
        description: "When you’re looking to relax or stretch your legs in the city, Bushwick is home to great parks with fun playgrounds and expansive greenspaces. Green Central Knoll – located just down the block from One Fifty – features a kid-approved playground, sports fields, and a splash pad open during hot summer months. Nearby is also popular Maria Hernandez Park, an expansive greenspace that comes complete with walking paths, playgrounds, and benches situated under large, shady trees.",
        isContentImage: false,
        images: [sec3Image1, sec3Image2],
        imagesDirection: "column",
        flexDirection: "row",
        padding: "40px",
        
    },
    {
        variant: "white-brown",
        heading: "Transportation",
        description: "Getting around the city is easy when you’re stationed in Bushwick. One Fifty is located just a couple blocks from the Morgan Avenue LTA station, which services the L Train.  This area is also well-served by public transit, including the J, M, and Z trains as well as nine bus routes.",
        isContentImage: false,
        images: [sec4Image],
        imagesDirection: "column",
        flexDirection: "row-reverse",
        padding: "40px 40px 60px",

    },
]

export default function Neighborhoood(){
    return(
        <>
            <Banner data={BannerData}/>
            {
                twoCoulmnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
            <Footer data = {footerData}/>
        </>
    )
}