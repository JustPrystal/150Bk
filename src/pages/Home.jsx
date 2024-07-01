import sec2Image1 from "../assets/images/OneFifty_HomePage_v1/section_2_image_1_separate.png";
import sec2Image2 from "../assets/images/OneFifty_HomePage_v1/section_2_image_2_separate.png";
import sec3ContentImage from "../assets/images/OneFifty_HomePage_v1/section_3_image_1.png";
import sec3Image1 from "../assets/images/OneFifty_HomePage_v1/section_3_image_2_separate.png";
import sec3Image2 from "../assets/images/OneFifty_HomePage_v1/section_3_image_3_separate.png";
import TwoColumn from "../components/TwoColumn";
import Banner from "../components/Banner";
import BannerImage from "../assets/images/OneFifty_HomePage_v1/Banner.png"
import Table from "../components/Table";
import HomeFirstBlock from "../components/HomeFirstBlock";
import HomeFirstBlockImage1 from "../assets/images/OneFifty_HomePage_v1/section_1_image_1.png"
import HomeFirstBlockImage2 from "../assets/images/OneFifty_HomePage_v1/section_1_image_2.png"
import HomeFirstBlockImage3 from "../assets/images/OneFifty_HomePage_v1/section_1_image_3.png"
import Footer from "../components/Footer";

let footerData = {
  backgroundColor : "white"
}

let HomeFirstBlockData = {
  heading : "Escape The Ordinary",
  description : "Every apartment at One Fifty Brooklyn is ready to take your breath away. Clean, bright, and airy, these upscale apartments feature crisp, contemporary design elements that come together to create a modern-day escape from the ordinary. ",
  contentImage : HomeFirstBlockImage1,
  image1 : HomeFirstBlockImage2,
  image2 : HomeFirstBlockImage3,
}

let BannerData = {
  backgroundImage: BannerImage,
  backgroundColor : "normal",
  heading: "The Best <span>in</span> Brooklyn",
  description: "Welcome to One Fifty - one of Brooklyn’s newest and most premier addresses. Located at 150 Noll Street in Bushwick, One Fifty’s state-of-the-art apartments and high-end amenities make it the best Brooklyn has to offer."
}
const twoCoulmnData = [
  {
    variant: "brown",
    heading: "Elevate Your Everyday",
    description: "We believe your living space should elevate every aspect of your life. That’s why One Fifty offers incredible amenities like an on-site fitness center with yoga studio, a billiard room, and a rooftop screening area for watching movies on warm summer nights.",
    isContentImage: false,
    images: [sec2Image1, sec2Image2],
    imagesDirection: "column",
    flexDirection: "row-reverse",
    contentWidth: "calc( 40% - 25px )",
    imageWidth: "calc( 60% - 25px )",
    padding: "40px 40px 60px"

  },
  {
    variant: "green",
    heading: "Expand Your Horizons",
    description: "You’ll be surrounded by excitement in Bushwick – one of Brooklyn’s most eclectic and authentically New York neighborhoods. Delicious eateries, local hot-spots, live music venues, and easy access to public transportation make this area one of Brooklyn’s finest.",
    isContentImage: true,
    contentImage: sec3ContentImage,
    images: [sec3Image1, sec3Image2],
    imagesDirection: "row",
    flexDirection: "row",
    padding: "80px 40px 60px"

  },
]

let TableData = [
  [
    {
      residence: "6B",
      type: "1-bed",
      bedBath: "1 Bed | 1 Bath",
      outdoor: "",
      price: "3,625",
      tour3d: "View",
      tour3dLink: "",
      floorPlan: ""
    },
    {
      residence: "6R",
      type: "1-bed",
      bedBath: "1 Bed | 1 Bath",
      outdoor: "",
      price: "3,625",
      tour3d: "View",
      tour3dLink: "",
      floorPlan: ""
    },
    {
      residence: "7R",
      type: "1-bed",
      bedBath: "1 Bed | 1 Bath",
      outdoor: "",
      price: "3,625",
      tour3d: "View",
      tour3dLink: "",
      floorPlan: ""
    },
  ],
]

export default function Home() {
  return (
    <>
      <Banner data={BannerData}/>
      <HomeFirstBlock data={HomeFirstBlockData}/>
      {
        twoCoulmnData.map((section, index) => {
          return <TwoColumn key={index} data={section} />;
        })
      }
      <Table data={TableData}/>
      <Footer data={footerData}/>
    </>
  );
}