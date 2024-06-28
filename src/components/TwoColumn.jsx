export default function TwoColumn({data}){

    const {heading, description, images, isContentImage, contentImage, flexDirection, imageWidth, contentWidth, variant, padding} = data;

    return(
        <>
            <section className={variant + " two-column " + flexDirection} style={{
                padding: padding,
            }} >
                <div className="container" style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: flexDirection,
                    justifyContent: "space-between",
                    alignItems: "center",
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
                    <div className="images-wrap" style={{
                        width: imageWidth,
                    }} >
                        <img src={images} alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}