import { useEffect } from 'react';
import {useState} from 'react';
//give an options parameter for carousel options, like cycle, arrow, etc.
export default function Carousel({images, identifier})
{
    //test images is array of images
    var [active, setActive] = useState(0);
    var [isLoaded, setLoaded] = useState(false);
    //var display = document.getElementById(identifier);
    //setInterval change image, or translate mosaic
    //we're going to translate the old pic out as it fades out, and fade the new one in or vice versa.
    useEffect(()=>{
        let interval = null;
        if (isLoaded){
            setInterval(()=>
            {
/*                 console.log(display.classList.contains('fade-in'));
                if (!display.classList.contains('fade-in')){
                    display.classList.add('fade-in');
                } */
                //remove the class before switching the src but only on interval, which once changed will add the class again
                //display.classList.remove('fade-in');
                switch(active)
                {
                    case 0: setActive(1); break;
                    case 1: setActive(2); break;
                    case 2: setActive(0); break;
                }
            }, 4000);
        }
        if (!isLoaded)
        {
        setLoaded(true);
        }
    }, [active, isLoaded]);
    return (
        <div className="row justify-content-center myCarousel mt-3 mb-5">
            <div className="col-8 bg-light">
                <div className="row justify-content-center">
                    <div className="col-7">
                    <img src={images[active]} id={identifier} className="img img-fluid fade-in" alt="book picture" />
                    </div>
                </div>
            </div>
        </div>

    );
}