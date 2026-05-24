import React from 'react';
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
            <div className="d-flex flex-row justify-content-center align-items-center w-100 mb-3">
                <span className='me-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="maroon" class="icon icon-tabler icons-tabler-filled icon-tabler-alert-square-rounded">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 2l.642 .005l.616 .017l.299 .013l.579 .034l.553 .046c4.687 .455 6.65 2.333 7.166 6.906l.03 .29l.046 .553l.041 .727l.006 .15l.017 .617l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.455 4.687 -2.333 6.65 -6.906 7.166l-.29 .03l-.553 .046l-.727 .041l-.15 .006l-.617 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.687 -.455 -6.65 -2.333 -7.166 -6.906l-.03 -.29l-.046 -.553l-.041 -.727l-.006 -.15l-.017 -.617l-.004 -.318v-.648l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.455 -4.687 2.333 -6.65 6.906 -7.166l.29 -.03l.553 -.046l.727 -.041l.15 -.006l.617 -.017c.21 -.003 .424 -.005 .642 -.005zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
                    </svg>
                </span>
                <span><em>Russian and Ukranian translations are currently being reworked.</em></span>
            </div>
            <div className="row justify-content-center my-2 main text">
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