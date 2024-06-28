import TwoColumn from "../components/TwoColumn";
import sec1ContentImage from "../assets/images/OneFifty_Building_v2/section_1_image_1.png";
import sec1Image from "../assets/images/OneFifty_Building_v2/section_1_image_2.png";
import sec2Image from "../assets/images/OneFifty_Building_v2/section_2.png";
import sec3ContentImage from "../assets/images/OneFifty_Building_v2/section_3_image_1.png";
import sec3Image from "../assets/images/OneFifty_Building_v2/section_3_image_2.png";
import sec4ContentImage from "../assets/images/OneFifty_Building_v2/section_4_image_1.png";
import sec4Image from "../assets/images/OneFifty_Building_v2/section_4_image_2.png";
import sec5ContentImage from "../assets/images/OneFifty_Building_v2/section_5_image_2.png";
import sec5Image from "../assets/images/OneFifty_Building_v2/section_5_image_1.png";
import sec6Image from "../assets/images/OneFifty_Building_v2/section_6.png";
import sec7Image from "../assets/images/OneFifty_Building_v2/section_7_image_1.png";
import sec8Image from "../assets/images/OneFifty_Building_v2/section_7_image_2.png";
import sec9Image from "../assets/images/OneFifty_Building_v2/section_8.png";
import Banner from "../components/Banner";
import BannerImage from "../assets/images/OneFifty_Building_v2/Banner.png"

let BannerData = {
    backgroundImage : BannerImage,
    heading : "Elevate Your Everyday",
    description: "We believe your living space should elevate every aspect of your life. That’s why One Fifty offers incredible amenities like an on-site fitness center with yoga studio, a billiard room, and a rooftop screening area for watching movies on warm summer nights."
}

const twoCoulmnData = [
    {
        variant: "white-orange",
        heading: "Fitness Center",
        description: "Achieve your fitness goals around your own schedule. The on-site Fitness Center offers brand new cardio machines and fitness equipment just steps from your front door.",
        contentImage: sec1ContentImage,
        images: sec1Image,
        flexDirection: "row",
        contentWidth: "calc( 40% - 25px )",
        imageWidth: "calc( 60% - 25px )",
        padding: "40px",
    },
    {
        variant: "brown",
        heading: "Mailroom",
        description: "All your packages and deliveries will be waiting for you in the building’s secure Mailroom.",
        contentImage: "",
        images: sec2Image,
        flexDirection: "row-reverse",
        padding: "40px 40px 60px",
        
    },
    {
        variant: "green",
        heading: "Lounge with Fireplace",
        description: "The building’s communal Lounge is great for gathering with a group or simply stepping away from your main living space. On warm winter nights, curl up in front of the roaring fireplace.",
        contentImage: sec3ContentImage,
        images: sec3Image,
        flexDirection: "row",
        padding: "40px",        
    },
    {
        variant: "white-brown",
        heading: "Courtyard",
        description: "Step outside for a breath of fresh air in the Courtyard – an open-air gathering space with separate seating areas.",
        contentImage: sec4ContentImage,
        images: sec4Image,
        flexDirection: "row",
        contentWidth: "calc( 40% - 25px )",
        imageWidth: "calc( 60% - 25px )",
        padding: "20px 40px 30px",
    },
    {
        variant: "white-brown",
        heading: "Rooftop Screening Area",
        description: "On warm summer nights, nothing beats an outdoor movie under the stars at the building’s Rooftop Screening Area",
        isContentImage: true,
        contentImage: sec5ContentImage,
        images: sec5Image,
        flexDirection: "row-reverse",
        contentWidth: "calc( 40% - 25px )",
        imageWidth: "calc( 60% - 25px )",
        padding: "20px 40px 30px",
    },
    {
        variant: "brown",
        heading: "Business Centre",
        description: "Separate where you work from where you live by taking advantage of the on-site Business Center, which features high-speed internet access, comfortable seating areas, and a professional atmosphere.",
        isContentImage: false,
        images: sec6Image,
        flexDirection: "row",
        contentWidth: "calc( 40% - 25px )",
        imageWidth: "calc( 60% - 25px )",
        padding: "40px 40px 60px",        
    },
    {
        variant: "white-brown",
        heading: "Billiard Room",
        description: "Perfect for gathering with friends or entertaining guests, the on-site Billiard Room is ready to serve as a stylish extension of your living space.",
        isContentImage: false,
        images: sec7Image,
        flexDirection: "row-reverse",
        padding: "40px 40px 10px",
    },
    {
        variant: "white-brown",
        heading: "Yoga Studio",
        description: "A boutique-style Yoga Studio allows you to find your center and create a well-rounded fitness routine without ever leaving home.",
        isContentImage: false,
        images: sec8Image,
        flexDirection: "row",
        padding: "10px 40px 20px",
    },
    {
        variant: "green",
        heading: "Laundry Room",
        description: "Every floor in One Fifty features its own personal Laundry Room, meaning you’ll have access to washers and dryers whenever you need them.",
        isContentImage: false,
        images: sec9Image,
        flexDirection: "row-reverse",
        contentWidth: "calc( 40% - 25px )",
        imageWidth: "calc( 60% - 25px )",
        padding: "60px 40px",
    },
]

export default function Building(){
    return(
        <>
              <Banner data={BannerData}/>
            {
                twoCoulmnData.map((section, index) => {
                    return <TwoColumn key={index} data={section} />;
                })
            }
        </>
    )
}