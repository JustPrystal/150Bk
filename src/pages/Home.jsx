import sec2Image from "../assets/images/OneFifty_HomePage_v1/section_2.png";
import sec3ContentImage from "../assets/images/OneFifty_HomePage_v1/section_3_image_1.png";
import sec3Image from "../assets/images/OneFifty_HomePage_v1/section_3_image_2.png";
import TwoColumn from "../components/TwoColumn";
import Banner from "../components/Banner";
import BannerImage from "../assets/images/OneFifty_HomePage_v1/Banner.png"

let BannerData = {
  backgroundImage : BannerImage,
  heading : "The Best <span>in</span> Brooklyn",
  description: "Welcome to One Fifty - one of Brooklyn’s newest and most premier addresses. Located at 150 Noll Street in Bushwick, One Fifty’s state-of-the-art apartments and high-end amenities make it the best Brooklyn has to offer."
}
const twoCoulmnData = [
  {
    variant: "brown",
    heading: "Elevate Your Everyday",
    description: "We believe your living space should elevate every aspect of your life. That’s why One Fifty offers incredible amenities like an on-site fitness center with yoga studio, a billiard room, and a rooftop screening area for watching movies on warm summer nights.",
    isContentImage: false,
    images: sec2Image,
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
    images: sec3Image,
    flexDirection: "row",
    padding: "80px 40px 60px"

  },
]

export default function Home() {
  return (
    <>
      <Banner data={BannerData}/>
      {
        twoCoulmnData.map((section, index) => {
          return <TwoColumn key={index} data={section} />;
        })
      }
    </>
  );
}