import img1 from '../img/monthOne.jpg';
import img2 from '../img/monthTwo.jpg';
import img3 from '../img/monthThree.jpg';
export default function Books({capsule})
{
    return (
        <div>
            <div className="row mx-2 justify-content-center main">
            <p className="col-1 subheading mb-3">Books</p>
            </div>
            <div className="row justify-content-center">
                <div id="carousel" className="col-6 carousel slide" data-interval="1000" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active"><img src={img1} className="d-block w-50 img-fluid" /></div>
                        <div className="carousel-item"><img src={img2} className="d-block w-50 img-fluid" /></div>
                        <div className="carousel-item"><img src={img3} className="d-block w-500 img-fluid" /></div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mb-2 main text">
                <p className="col-5">
                    The Hatty Barty series has been translated to various languages. You can find copies of the books for sale on Amazon, using the links below.
                </p>
                <a href="https://www.amazon.com/s?k=Hatty+Barty&i=stripbooks&rh=p_27%3AGrant+Boyer&s=relevanceexprank&Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=6&unfiltered=1&ref=sr_adv_b">
                    Hatty and Barty Books</a>                
                <a href="https://www.amazon.com/Grant-Boyer/e/B09QF7T215/">All books by Grant Boyer</a>
            </div>
        </div>
    );
}