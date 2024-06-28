import sec2Image from "../assets/images/OneFifty_HomePage_v1/section_2.png";
import sec3ContentImage from "../assets/images/OneFifty_HomePage_v1/section_3_image_1.png";
import sec3Image from "../assets/images/OneFifty_HomePage_v1/section_3_image_2.png";
import TwoColumn from "../components/TwoColumn";


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
    <div>
      {
        twoCoulmnData.map((section, index) => {
          return <TwoColumn key={index} data={section} />;
        })
      }
    </div>
  );
}