import Table from "../components/Table";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import BannerImage from "../assets/images/OneFifty_Availabilities/Banner.png"
import Footer from "../components/Footer";

let footerData = {
    backgroundColor : "white"
}

let BannerData = {
    backgroundImage : BannerImage,
    backgroundColor : "normal",
    heading : "Your Bushwick Apartment <span>is</span> Waiting",
    description: "Use the table below to search for an apartment for rent at One Fifty Brooklyn that perfectly aligns with your lifestyle."
}

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

export default function Availabilities() {
    return (
        <>
              <Banner data={BannerData}/>
            <Table data={TableData} />
            <div className="button-wrap" style={{
                paddingBottom: "50px",
                textAlign: "center",
                backgroundColor: "#fff",
            }}>
                <Link className="avaiabilities-button">Welcome to the 3D Tour</Link>
            </div>
            <Footer data = {footerData}/>
        </>
    )
}