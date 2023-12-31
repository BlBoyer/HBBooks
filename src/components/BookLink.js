export default function BookLink({ book }) {
  const langs = {
    'eng': 'English',
    'deu': 'Deutsche',
    'esp': 'Español',
    'rus': 'Русский',
    'ukr': 'Українська',
    'zho': 'Zhōng Wén',
  };
  const nums = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
  ];
  var bookName =
    book.name.slice(0, 1).toUpperCase() + book.name.slice(1, 5) + ' ' + nums.indexOf(book.name.slice(5).toLowerCase());
  return (
    <div className='d-flex'>
      <div className='me-2 align-self-start'>
        <p>
          <strong>{bookName}</strong>
        </p>
      </div>
      <div className='breakable-links'>
        {book['urls'].map(function (urlObj, ind) {
          if (Object.entries(urlObj)[0][1].length > 0) {
            return (
              <a
                href={`https://www.amazon.com/dp/${Object.entries(urlObj)[0][1]}`}
                title={langs[Object.entries(urlObj)[0][0]]}
                className='mx-1'
                key={ind}>
                {Object.entries(urlObj)[0][0]}
              </a>
            );
          } else {
            return (
              <a href='' className='mx-1 nav-item pe-none' key={ind}>
                &#199;S!
              </a>
            );
          }
        })}
      </div>
    </div>
  );
}
