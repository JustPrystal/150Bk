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
import MapContainer from "../components/Map";
import MapLegend from '../components/MapLegend';
import { useState } from "react";

let footerData = {
    backgroundColor : "white"
}

let BannerData = {
    backgroundImage : BannerImage,
    backgroundColor : "normal",
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

let MaplegendData = [
    {
        heading: "Transportation",
        list: [
            {
                place: "L at Morgan Av",
                coords: [-73.93371, 40.7060759]
            },
            {
                place: "L DeKalb Av",
                coords: [-73.918533, 40.703873]
            },
            {
                place: "J M Z Central Av",
                coords: [-73.9273632, 40.6978289]
            },
            {
                place: "J M Z Flushing Av",
                coords: [-73.9412453, 40.7003285]
            },
            {
                place: "b 60 bus",
                coords: [-73.9293664, 40.7028061]
            },
            {
                place: "b 57",
                coords: [-73.9286428, 40.7047701]
            }
        ]
    },
    {
        heading: "Parks and Greenspaces",
        list: [
            {
                place: "Green Central Knoll",
                coords: [-73.9332266, 40.7018454]
            },
            {
                place: "Fermi Playground",
                coords: [-73.9285034, 40.7005044]
            },
            {
                place: "Maria Hernandez Park",
                coords: [-73.9238125, 40.7031875]
            }
        ]
    },
    {
        heading: "Eateries and Entertainment",
        list: [
            {
                place: "Your Way Cafe",
                coords: [-73.9301245, 40.7034267]
            },
            {
                place: "The Little Whiskey",
                coords: [-73.929902, 40.7027829]
            },
            {
                place: "Mika",
                coords: [-73.9319682, 40.7050544]
            },
            {
                place: "Dayglow",
                coords: [-73.9309699, 40.7035439]
            },
            {
                place: "Tabaré Bushwick",
                coords: [-73.9306778, 40.7037805]
            },
            {
                place: "Seitan's Helper",
                coords: [-73.931137, 40.7041162]
            },
            {
                place: "The Narrows",
                coords: [-73.9308091, 40.7040829]
            },
            {
                place: "Shaking Crab (Williamsburg)",
                coords: [-73.9305029, 40.7042208]
            },
            {
                place: "Elsewhere",
                coords: [-73.923169, 40.709411]
            },
            {
                place: "House of Yes",
                coords: [-73.9236, 40.7068]
            },
            {
                place: "Yia Yia's Taverna",
                coords: [-73.9309074, 40.7040449]
            },
            {
                place: "Forever Thai",
                coords: [-73.9310911, 40.7039938]
            }
        ]
    },
    {
        heading: "Art and Culture",
        list: [
            {
                place: "Urban Jungle",
                coords: [-73.9296724, 40.7049811]
            },
            {
                place: "Material World Records & Tapes",
                coords: [-73.9298525, 40.704071]
            },
            {
                place: "Brooklyn Art Cave",
                coords: [-73.936791, 40.6980702]
            },
            {
                place: "The Bushwick Collective",
                coords: [-73.9221845, 40.7075174]
            },
            {
                place: "Mark A. West Jr. Museum & Center for the Arts",
                coords: [-73.9331477, 40.7058633]
            },
            {
                place: "Jack Pelican Presents",
                coords: [-73.9325033, 40.6987781]
            },
            {
                place: "Greater Ridgewood Historical Society",
                coords: [-73.9200508, 40.7109292]
            }
        ]
    }
  ]

export default function Neighborhoood(){
    const [poi, setPoi] = useState([])
    const [poiTitle, setPoiTitle] = useState("")
    const [showPopup, setShowPopup] = useState(false);
    const [flyData, setFlyData] = useState({
      point : "",
      condition : false 
    });
    return(
        <>
            <Banner data={BannerData}/>
            {
                twoCoulmnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
            <MapContainer title={poiTitle} coords={poi} showPopup={showPopup} flyData={flyData} setFlyData={setFlyData}/>
            <MapLegend data={MaplegendData} setPoi={setPoi} setFlyData={setFlyData} flyData={flyData} setPoiTitle={setPoiTitle} setShowPopup={setShowPopup}/>
            <Footer data = {footerData}/>
        </>
    )
}