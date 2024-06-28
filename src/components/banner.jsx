import { Link } from "react-router-dom";
import React from "react";

const Banner = ({data}) => {
    const {  
        backgroundImage,
        heading,
        description,
        buttonUrl, 
        buttonText
    } = data;
    return ( 
        <>
            <div className="banner">
                <img src={backgroundImage} alt="" className="background-image" />
                <div className="inner">
                    {(heading || description) && <div className="content" >
                        <h1 className="heading" dangerouslySetInnerHTML={{ __html: heading }}/>
                        <p className="description">{description}</p>
                        {
                            buttonUrl && buttonText && (
                                <Link to="/">Back to Home</Link>
                            )
                        }
                    </div>}
                </div>
            </div>
        </>
     );
}
 
export default Banner;