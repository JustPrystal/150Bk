export default function TwoColumn({data}){

    const {heading, description, images, isContentImage, contentImage, flexDirection, imageWidth, contentWidth, variant, padding, imagesDirection} = data;

    return(
        <>
            <section className={variant + " two-column " + flexDirection} style={{
                padding: padding,
            }} >
                <div className="container" style={{
                    display: "flex",
                    flexDirection: flexDirection,
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                }} >
                    <div className="content-image-wrap" style={{
                        width: contentWidth,
                    }} >
                        <div className="content-wrap">
                            <h2 className="heading">
                                {heading}
                            </h2>
                            <p className="description">
                                {description}
                            </p>
                        </div>
                        { (isContentImage) && <div className="image-wrap">
                            <img src={contentImage} alt="content-img" />
                        </div> } 
                    </div>
                    <div className={"images-wrap " + imagesDirection} style={{
                        width: imageWidth,
                        display: "flex",
                        flexDirection: imagesDirection,
                        gap: "50px",
                        alignItems: "center",
                        justifyContent: "center",
                    }} >
                        {
                            images.map((image, index) =>(
                                <div className="image-wrap">
                                    <img src={image} alt="img" key={index}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}