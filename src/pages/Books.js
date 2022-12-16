import React from 'react';
import Carousel from '../components/Carousel';
import Loading from '../components/Loading';
import BookLink from '../components/BookLink';
const books = require('../data/books.json');
const BookCarousel = React.lazy(()=>import('../components/Carousel'));
export default function Books({capsule})
{
    return (
        <div className="backgroundBlue">
            <div className="row mx-2 justify-content-center main">
            <p className="col fit mb-3 subheading">Books</p>
            </div>
            <React.Suspense fallback={<Loading />} >
                <BookCarousel identifier="disp1" />
            </React.Suspense>
            <div className="row justify-content-center mb-2 main text">
                <p className="col d-inline-flex over-text rounded">
                    The Hatty Barty series has been translated to various languages. You can find copies of the books for sale on Amazon, using the links below:
                </p>
            </div>
            <div className="row justify-content-center mx-4 mb-5 main text">
                <div className="col">
                        {books["books"].map((book,ind)=><div key={ind}><BookLink book={book} /></div>)}
                </div>
            </div>
            <div className="row justify-content-center mb-2 main text">
                <div className="col-11">
                    <a className="nav-link" href="https://www.amazon.com/s?k=Hatty+Barty&i=stripbooks&rh=p_27%3AGrant+Boyer&s=relevanceexprank&Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=6&unfiltered=1&ref=sr_adv_b">
                        <u>Hatty and Barty Books</u></a>             
                    <a className="nav-link" href="https://www.amazon.com/Grant-Boyer/e/B09QF7T215/">
                        <u>All books by Grant Boyer</u></a>
                </div>
            </div>
        </div>
    );
}