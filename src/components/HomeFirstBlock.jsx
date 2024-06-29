export default function HomeFirstBlock({data}){

    const {heading, description, contentImage, image1, image2} = data;

    return(
        <>
            <section className="home-first-block">
                <div className="container">
                    <div className="content-and-image-wrap">
                        <h2 className="heading">
                            {heading}
                        </h2>
                        <div className="image-and-paragraph-wrap">
                            <div className="paragraph-wrap">
                                <p>{description}</p>
                            </div>
                            <div className="image-wrap">
                                <img src={contentImage} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="images-wrap">
                        <div className="image1-wrap image-wrap">
                            <img src={image1} alt="" />
                        </div>
                        <div className="image2-wrap image-wrap">
                            <img src={image2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}