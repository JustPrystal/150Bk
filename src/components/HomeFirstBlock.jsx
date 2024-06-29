export default function HomeFirstBlock({data}){

    const {heading, image, paragraph, image2,} = data;

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
                                <p>{paragraph}</p>
                            </div>
                            <div className="image-wrap">
                                <img src={image} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="image2-wrap">
                        <img src={image2} alt="img" />
                    </div>
                </div>
            </section>
        </>
    )
}