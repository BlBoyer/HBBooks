import { useState, useEffect } from 'react';
//give an options parameter for carousel options, like cycle, arrow, etc.
export default function Carousel({images, identifier})
{
    //test images is array of images
    var [active, setActive] = useState(0);
    var [count, setCount] = useState(0);
    var [timer, setTimer] = useState(4000);
    //var display = document.getElementById(identifier);
    //setInterval change image, or translate mosaic
    //we're going to translate the old pic out as it fades out, and fade the new one in or vice versa.
    useEffect(()=>
    {
        var interval=setInterval(()=>
        {
            setCount(count=>count+1);
        }, timer);
        return ()=>clearInterval(interval);
    },[]);
    useEffect(()=>{
        console.log(`useEffect ${count}, current img state: ${active}`);
        //this is switching too early on the first two iterations
        if (count==1)
        {
            setTimer(4000);
        }
        //try to make the count higher by one to give things time to catch up, there should be a better answer than this.
        if (count > 0)
        {
            switch(active)
            {
                case(0):setActive(1);break;
                case(1):setActive(2);break;
                case(2):setActive(0);break;
            }
        }
    }, [count]);
    return (
        <div className="row justify-content-center myCarousel mt-3 mb-5">
            <div className="col-8 bg-light">
                <div className="row justify-content-center">
                    <div className="col-7 d-flex justify-content-center">
                    <img src={images[active]} id={identifier} className="img img-fluid fade-in" alt="book picture" />
                    </div>
                </div>
            </div>
        </div>

    );
}