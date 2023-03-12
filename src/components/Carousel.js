import { useState, useEffect } from 'react';
const img1 = require('../img/monthOne.webp');
const img2 = require('../img/monthTwo.webp');
const img3 = require('../img/monthThree.webp');
const img4 = require('../img/monthFour.webp');
const img5 = require('../img/monthFive.webp');
const img6 = require('../img/monthSix.webp');
const img7 = require('../img/monthSeven.webp');
const img8 = require('../img/monthEight.webp');
//give an options parameter for carousel options, like cycle, arrow, etc.
export default function Carousel({ identifier }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
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
            <img src={images[active]} loading='lazy' id={identifier} className='img img-fluid' alt='book picture' />
          </div>
        </div>
      </div>
    </div>
  );
}
