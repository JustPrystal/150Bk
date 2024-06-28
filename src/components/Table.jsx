import { useState } from "react";



export default function Table({ data }) {

    const [showFloorPlan, setShowFloorPlan] = useState({
        link: "",
        show: false,
    });
    const handleClickOnFloorPlan = (link) => {
        setShowFloorPlan({
            link: link,
            show: true,
        });
    };
    
    return (
        <>
            <div className="table">
                <div className="inner">
                    <div className="table-row table-head">
                        <div className="residence cell head">Residence</div>
                        <div className="bed-bath cell head">Type</div>
                        <div className="price cell head">Price</div>
                        <div className="tour3d cell head">Floor Plans</div>
                    </div>
                    {data.map((group, index) => (
                        <div className="table-group" key={index}>
                            {group.map((row, rowIndex) => {
                                return (
                                    <div className="table-row" key={rowIndex}>
                                        <div className="residence cell">
                                            <span className="mobile">Residence</span>
                                            {row.residence}
                                        </div>
                                        <div className="bed-bath cell">
                                            <span className="label mobile">Type</span>
                                            {row.bedBath}
                                        </div>
                                        <div className="price cell">
                                            <span className="label mobile">Price</span>${row.price}
                                        </div>
                                        <div
                                            className={
                                                row.floorPlan ? "view floorplan cell" : "floorplan cell"
                                            }
                                            onClick={
                                                row.floorPlan
                                                    ? () => handleClickOnFloorPlan(row.floorPlan)
                                                    : undefined
                                            }
                                        >
                                            <span className="label mobile">Floor Plan</span>
                                            {row.floorPlan ? "View" : "Coming Soon"}

                                        </div>
                                    </div>

                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}