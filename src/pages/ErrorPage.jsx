import Banner from "../components/Banner";
import Footer from "../components/Footer";
import BannerImage from "../assets/images/OneFifty_HomePage_v1/Banner.png"
import Header from "../components/Header";

let footerData = {
  backgroundColor : "none"
}

let BannerData = {
  backgroundImage: BannerImage,
  heading: "404",
  description: "This page doesn't exist.",
  buttonUrl: "/",
  buttonText: "Back to Home"
}

export default function ErrorPage() {
  return (
    <>
    <Header/>
      <Banner data={BannerData}/>
    <Footer data={footerData}/>
    </>
  );
}