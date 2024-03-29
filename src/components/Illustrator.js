import illustrator from '../img/pics/illustrator.webp';
import bg from '../img/cat.webp';
export default function Illustrator() {
  return (
    <div className='about-bg' style={{ backgroundImage: `url(${bg})` }}>
      <div className='row mx-2 justify-content-center main'>
        <div className='col d-inline-flex justify-content-center'>
          <p className='over-text subheading rounded'>About The Illustrator</p>
        </div>
      </div>
      <hr />
      <div className='about-card main text'>
        <div>
          <img src={illustrator} className='card-img' alt='Aleksandra' />
        </div>
        <div className='over-text rounded'>
          <p className='indent'>
            Aleksandra Adamska Rzepka resides in Poland and is the illustrator for the Hatty and Barty Adventure series
            books. She is already published in several books including one of her own and her work can be seen both at{' '}
            <a className='p-link' href='https://www.facebook.com/aleksandra.adamska.rzepka/'>
              Facebook
            </a>{' '}
            and at{' '}
            <a className='p-link' href='https://alexrzepka.blogspot.com/'>
              Blogspot
            </a>
            . In her free time, she loves reading novels, fantasy, and instructional guides. She also enjoys winter
            sports- skiing and ice-skating; and in the summer, she likes spending time in the mountains.
          </p>
        </div>
      </div>
    </div>
  );
}
