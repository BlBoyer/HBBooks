import Carousel from '../components/Carousel';
import img1 from '../img/monthOne.jpg';
import img2 from '../img/monthTwo.jpg';
import img3 from '../img/monthThree.jpg';
export default function Books({capsule})
{
    const imageArr=[img1,img2,img3];
    return (
        <div>
            <div className="row mx-2 justify-content-center main">
            <p className="col fit mb-3 subheading">Books</p>
            </div>
            <Carousel images={imageArr} identifier="disp1" />
            <div className="row justify-content-center mb-2 main text">
                <p className="col-5">
                    The Hatty Barty series has been translated to various languages. You can find copies of the books for sale on Amazon, using the links below.
                </p>
            </div>
            <div className="row justify-content-center mb-2 main text">
                <div className="col-5">
                    <a className="nav-link" href="https://www.amazon.com/s?k=Hatty+Barty&i=stripbooks&rh=p_27%3AGrant+Boyer&s=relevanceexprank&Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=6&unfiltered=1&ref=sr_adv_b">
                        <u>Hatty and Barty Books</u></a>             
                    <a className="nav-link" href="https://www.amazon.com/Grant-Boyer/e/B09QF7T215/">
                        <u>All books by Grant Boyer</u></a>
                    </div>
            </div>
        </div>
    );
}