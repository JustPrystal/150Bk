import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BannerImage from "../assets/images/OneFifty_HomePage_v1/Banner.png"

let BannerData = {
  backgroundImage: BannerImage,
}

export default function ErrorPage() {
  return (
    <>
      <Banner data={BannerData}/>
      <Footer/>
    </>
  );
}