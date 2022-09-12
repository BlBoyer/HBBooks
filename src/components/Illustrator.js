import illustrator from '../img/pics/illustrator.jpg';
export default function Illustrator()
{
    return (
        <div>
            <div className="row mx-2 justify-content-center main">
            <p className="col fit subheading">About The Illustrator</p>
            </div>
            <hr />
            <div className="about-card main text">
                <div>
                    <img src={illustrator} className="card-img" alt="Aleksandra" />
                </div>
                <div>
                    <p className="indent">
                    Aleksandra Adamska Rzepka
                    Resides in Poland and is the illustrator for the Hatty and Barty Adventure Series Books.
                    She is already published in several books including one of her own and her work can be seen both at 
                    <a href="https://www.facebook.com/aleksandra.adamska.rzepka/">Facebook</a>
                     and at <a href="https://alexrzepka.blogspot.com/">Blogspot</a>. In her free time, she loves reading novels, 
                     fantasy, and instuctional guides. She also enjoys 
                     winter sports- skiing, and ice-skating; and in the summer, she likes spending time in the mountains.
                    </p>
                </div>
            </div>
        </div>
    )
}

