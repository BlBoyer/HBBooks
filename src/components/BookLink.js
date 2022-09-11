export default function BookLink({book})
{
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    var bookName = book.name.slice(0,1).toUpperCase() + book.name.slice(1,5) + ' ' + nums.indexOf(book.name.slice(5).toLowerCase());
    return (
        <div className="d-flex">
            <div className="me-2 align-self-start"><p><strong>{bookName}</strong></p></div>
            <div className="breakable-links">
                {book["urls"].map((urlObj, ind) => 
                <a href={Object.entries(urlObj)[0][1]} className="mx-1" key={ind}>{Object.entries(urlObj)[0][0]}</a>
                )}
            </div>
        </div>
    )
}