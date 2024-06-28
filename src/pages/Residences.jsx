import sec1ContentImage from "../assets/images/OneFifty_Residences/section_1_image_1.png";
import sec1Image from "../assets/images/OneFifty_Residences/section_1_image_2.png";
import sec2Image from "../assets/images/OneFifty_Residences/section_2.png";
import sec3ContentImage from "../assets/images/OneFifty_Residences/section_3_image_1.png";
import sec3Image from "../assets/images/OneFifty_Residences/section_3_image_2.png";
import TwoColumn from "../components/TwoColumn";




const twoCoulmnData = [
    {
        variant: "white-orange",
        heading: "Studio",
        description: "Feeling cramped is never an issue at these Brooklyn studio apartments. Contemporary design elements like soft, neutral colors and hardwood flooring combine to make each studio unit at One Fifty feel even more open. Generous kitchens and designer bathrooms make these Studio apartments feel more like an upscale retreat.",
        isContentImage: true,
        contentImage: sec1ContentImage,
        images: sec1Image,
        flexDirection: "row",
        padding: "60px 40px 40px",
    },
    {
        variant: "brown",
        heading: "One Bedroom",
        description: "One Fifty offers the one bedroom Brooklyn apartment you’ve been searching for. Clean and contemporary in design, every unit features a spacious open-concept floorplan with a generous kitchen island for extra seating. Hardwood flooring highlights the bright, airy aesthetic, while on-trend touches like Stainless Steel appliances and marble backsplashes make them feel even more luxurious.",
        isContentImage: false,
        images: sec2Image,
        flexDirection: "row-reverse",
        contentWidth: "calc( 40% - 25px )",
        imageWidth: "calc( 60% - 25px )",
        padding: "40px 40px 60px",
    },
    {
        variant: "white-brown",
        heading: "Two Bedroom",
        description: "The large two-bedroom apartments for rent at One Fifty will redefine the way you think about life in the city. Perfect for anyone wanting an extra bedroom or a designated home office, these expansive floorplans offer generous closets for storage, designer fixtures, and luxurious finishes. In the designer kitchens, large islands offer extra seating while Stainless Steel appliances and marble backsplashes further elevate the upscale ambiance.",
        isContentImage: true,
        contentImage: sec3ContentImage,
        images: sec3Image,
        flexDirection: "row",
        padding: "80px 40px 40px",

    },
]

export default function Residences(){
    return(
        <>
            {
                twoCoulmnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
        </>
    )
}