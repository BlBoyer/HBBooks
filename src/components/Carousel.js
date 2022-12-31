import { useState, useEffect } from 'react';
const img1 = require('../img/monthOne.jpg');
const img2 = require('../img/monthTwo.jpg');
const img3 = require('../img/monthThree.jpg');
const img4 = require('../img/monthFour.jpg');
const img5 = require('../img/monthFive.jpg');
const img6 = require('../img/monthSix.jpg');
const img7 = require('../img/monthSeven.jpg');
//give an options parameter for carousel options, like cycle, arrow, etc.
export default function Carousel({identifier})
{
    const images=[img1,img2,img3, img4, img5, img6, img7];
    //test images is array of images
    var [active, setActive] = useState(0);
    var [count, setCount] = useState(0);
    //var [started, setStarted] = useState(false);
    //we're going to translate the old pic out as it fades out, and fade the new one in or vice versa.
/*     useEffect(()=>{
        document.getElementById(identifier).addEventListener('animationstart', setStarted(true));
    },[]); */
    useEffect(()=>
    {
        //if (started)
        //{
            var interval=setInterval(()=>
            {
                setCount(count=>count+1);
            }, 4000);
        //}
        return ()=>clearInterval(interval);
    },[]);
    useEffect(()=>{
        //this is switching too early on the first two iterations on slow connections
        if (count > 0)
        {
            if (active==images.length-1)
            {
                setActive(0);
            } else 
            {
                setActive(active=> active+=1);
            }
        }
    }, [count]);
    return (
        <div className="row justify-content-center myCarousel mt-3 mb-5">
            <div className="col slider-back">
                <div className="row justify-content-center">
                    <div className="col-7 d-flex justify-content-center">
                    <img src={images[active]} loading="lazy" id={identifier} className="img img-fluid" alt="book picture" />
                    </div>
                </div>
            </div>
        </div>

    );
}