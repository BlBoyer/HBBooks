import { useState, useEffect } from 'react';
const image1 = require('../img/monthOne.webp');
const image2 = require('../img/monthTwo.webp');
const image3 = require('../img/monthThree.webp');
const image4 = require('../img/monthFour.webp');
const image5 = require('../img/monthFive.webp');
const image6 = require('../img/monthSix.webp');
const image7 = require('../img/monthSeven.webp');
const image8 = require('../img/monthEight.webp');
const image9 = require('../img/monthNine.webp');
//preload
const img1 = new Image();
img1.src = image1;
const img2 = new Image();
img2.src = image2;
const img3 = new Image();
img3.src = image3;
const img4 = new Image();
img4.src = image4;
const img5 = new Image();
img5.src = image5;
const img6 = new Image();
img6.src = image6;
const img7 = new Image();
img7.src = image7;
const img8 = new Image();
img8.src = image8;
const img9 = new Image();
img9.src = image9;
//give an options parameter for carousel options, like cycle, arrow, etc.
export default function Carousel({ identifier }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  //test images is array of images
  var [active, setActive] = useState(0);
  var [count, setCount] = useState(0);

  useEffect(() => {
    var interval = setInterval(() => {
      setCount(count => count + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count > 0) {
      if (active == images.length - 1) {
        setActive(0);
      } else {
        setActive(active => (active += 1));
      }
    }
  }, [count]);

  return (
    <div className='row justify-content-center myCarousel mt-3 mb-5'>
      <div className='col slider-back'>
        <div className='row justify-content-center'>
          <div className='col-7 d-flex justify-content-center'>
            <img src={images[active].src} id={identifier} className='img img-fluid' alt='book picture' />
          </div>
        </div>
      </div>
    </div>
  );
}
