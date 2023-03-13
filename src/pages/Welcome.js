import banner from '../img/banner.webp';
export default function Welcome({ ...capsule }) {
  return (
    <div className='backgroundGray'>
      <div className='row mx-0 justify-content-center main'>
        <p className='col fit subheading'>Welcome</p>
        <img src={banner} alt='excerpt pic from book cover' className='img-fluid px-0' />
      </div>
      <br />
      <div className='col mx-2'>
        <div className='row justify-content-center main'>
          <p className='col-3 subheading lg subheading-adj mt-5 mb-5'>Introduction by the Author</p>
          <br />
        </div>
        <div className='row justify-content-center mb-2 main text'>
          <div className='col'>
            <p className='indent'>
              When my children were little I told them bedtime stories most every night. One evening I created the
              characters Hatty and Barty and told them a story about these new fictional children. Both of my children
              loved this story so much that from that night forward they would only let me tell them stories about Hatty
              and Barty.
            </p>
            <p className='indent'>
              I told these Hatty and Barty stories for several years. It was quite a stretch to my creativity after a
              while to keep coming up with new ideas and story subject matter but somehow I always managed to do so and
              always enjoyed telling them.
            </p>
            <p className='indent'>
              Sometimes when I was tired, I would get to the crucial point in the story and then tell my children "to be
              continued". Their response would be "No Dad, finish the story!" Usually I wouldn't relent and then the
              next night sometimes I would forget the story I had started the night before and this would create greater
              consternation.
            </p>
            <p className='indent'>
              <em>You</em> the reader, have one benefit that my children did not always have; and that is all of the
              bedtime stories in these books, created many years ago, have an ending even though some still include the
              infamous "to be continued" phrase in them.
            </p>
            <p>
              I hope that you and your children will enjoy these stories as much as my children did listening to them
              when they were growing up.
              <br />
              <br />
              Grant Boyer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
