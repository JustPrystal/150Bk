import Form from "../components/Form";
import Banner from "../components/Banner";
import BannerImage from "../assets/images/OneFifty_Contact/Banner.png"
import Footer from "../components/Footer";

let footerData = {
  backgroundColor : "green"
}

let BannerData = {
    backgroundImage : BannerImage,
    backgroundColor : "normal",
    heading : "You Deserve <span>the</span> Best",
    description: "Ready for a change? Use the contact form below and click “submit” to receive more information about renting an apartment at One Fifty and starting your next chapter in Bushwick, Brooklyn. "
}

export default function Contact() {
  return (
    <>
      <Banner data={BannerData}/>
      <Form/>
      <Footer data = {footerData}/>
    </>
  );
} 