import Table from "../components/Table";
import { Link } from "react-router-dom";

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
            <Table data={TableData} />
            <div className="button-wrap" style={{
                marginBottom: "50px",
                textAlign: "center",
                backgroundColor: "#fff",
            }}>
            <Link className="avaiabilities-button">Welcome to the 3D Tour</Link>
            </div>
        </>
    )
}