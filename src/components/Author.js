import author from '../img/pics/author.webp';
import bg from '../img/tadpoles.webp';
export default function Author() {
  return (
    <div className='about-bg' style={{ backgroundImage: `url(${bg})` }}>
      <div className='row mx-2 justify-content-center main'>
        <div className='col d-inline-flex justify-content-center'>
          <p className='over-text subheading rounded'>About The Author</p>
        </div>
      </div>
      <hr />
      <div className='about-card main text'>
        <div>
          <img src={author} className='card-img' alt='Grant Boyer' />
        </div>
        <div className='indent over-text rounded'>
          <p className='indent'>
            Writing was not my passion growing up. The first inkling I had that I might have some talent in this genre
            was when I was in junior college taking a required course, English composition 101. The Professor gave us an
            assignment to write a fiction story for the final exam. I wrote a story about a nuclear holocaust and how
            the people who survived it found my story in the rubble. I burned the edges of my paper to add some realism
            to it before I turned it in. My professor liked my story so well he gave me an A on the final exam and used
            my story as an example to all of his creative writing classes thereafter. He continually tried to get me to
            join his creative writing class after this but at that time in my life I was more interested in business and
            music so never joined his class.
          </p>
          <p className='indent'>
            After this, I worked in government and as part of my career report writing was essential. I wrote many
            technical/legal reports there. During my employment at the second government agency, my two children were
            born. I traveled a lot for that job but when I was home, I started telling bedtime stories verbally to help
            put them to sleep.
          </p>
          <p className='indent'>
            One night I came up with a new story and named the characters Hatty and Barty. It was a hit from the
            beginning and after this they would only allow me to tell them Hatty and Barty stories. The Hatty and Barty
            stories were created before email so when I traveled out of town I started writing these stories down and
            mailing them to my children so they wouldn't have to miss out in my absence. During that same time, poetry
            writing became a rare habit, and eventually I began writing an annual Christmas poem.
          </p>
          <p className='indent'>
            I have edited books for two of my friends: Break Free- by Vladimir Savchuk, and The Seven Lives of Grace- by
            Elena Shelest.
          </p>
          <p className='indent'>
            Many years later, I decided it was time to gather these stories together when I was going through old papers
            and put them into books. Since I had told these stories for years, I had many stories stored both on paper
            and in the deepest recesses of my memories. I put these together and am continuing to put these stories into
            books with the ultimate goal to complete a series of twelve books, each book representing one month's worth
            of bedtime stories so that there will be a year's worth of bedtime stories for children once all twelve
            books are in print.
          </p>
          <p className='indent'>
            This activity is ongoing since getting the copyrights registered and setting everything in motion is both
            time consuming and a learning process.
          </p>
          <p className='indent'>
            I am so lucky to have found Aleksandra Adamska Rzepka who is an excellent professional illustrator from
            Poland. She has made my stories come to life in a most amazing way. Her other artwork can be found{' '}
            <a
              className='p-link'
              href='https://alexrzepka.blogspot.com/?fbclid=IwAR2jMaslQVpkgHnD3eFocitQItLdepdqVDTAzLarAS69a0xgHtJAgyZerR0'>
              here
            </a>
            .
          </p>
          <p className='indent'>
            My daughter and sister have provided assistance in editing these books, and my nephew did the cover design
            work. My son is working on creating the website for these books. Along the way, I also found translators to
            make these books available in Spanish, German, Chinese, Ukrainian and Russian. The books are available in
            bookstores and on{' '}
            <a
              className='p-link'
              href='https://www.amazon.com/s?k=hatty+and+barty+books&crid=HR39EH1LXR2K&sprefix=hatty+and+barty+book%2Caps%2C369&ref=nb_sb_noss'>
              Amazon.
            </a>
          </p>
          <p className='indent'>
            Other books by this author include the Mayas's Adventures series at{' '}
            <a className='p-link' href='http://www.mayasadventures.org'>
              www.mayasadventures.org
            </a>
            <br />
            <br />
            Grant Boyer
          </p>
        </div>
      </div>
    </div>
  );
}
