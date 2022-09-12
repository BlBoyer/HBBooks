import authorIllustrator from '../img/pics/authorIllustrator.jpg';
export default function Story()
{
    return (
        <div>
            <div className="row mx-2 justify-content-center main">
            <p className="col fit subheading">About The Books</p>
            </div>
            <hr />
            <div className="about-card main text">
                <div>
                    <img src={authorIllustrator} className="card-img" alt="Story" />
                </div>
                <div>
                    <p className="indent">
                        Several years ago, while editing the book <a className="p-link" href="https://www.amazon.com/Break-Free-How-Get-Stay/dp/1732463719">Break Free</a> by Vladimir Savchuk, a thought entered my mind, that I should write my own book.
                        I remembered that when my children Elizabeth and Benjamin were little that I had created characters named Hatty and Barty that became their staple of bedtime story fare for several years running.
                        This book: <a className="p-link" href="https://www.amazon.com/dp/1736840207">Hatty and Barty Adventures: Month One</a>  is a collection of these stories.</p>
                        <p className="indent">
                        It takes a team to put a book together and I wish to recognize those who have helped to bring this day to fruition.
                        First of all, to my children, Elizabeth and Benjamin who were my inspiration for these characters and who made it fun for me to tell bedtime stories. These stories remind me of those many nights especially when I came up with the infamous phrase “to be continued” and the first words out of your mouths were “No dad!” Finish it!”
                        Second, to my illustrator Aleksandra Adamska Rzepka. You are an amazingly gifted artist! I am so fortunate to have found you and so glad that you agreed to illustrate my books! You are a godsend who brought my characters to life with your superb artwork! Thank you so much!
                        Third, to my tireless translator team:</p>
                        <ol>
                            <li><b>Iryna Zimba</b> You translated my book into 3 languages via your linguistic skills. You are incredible. Hebrew, Russian and Ukrainian! You also arranged for the Chinese translator and German translator to come on board. Thank you so much!</li>
                            <li><b>Nataliya Kirienko</b> You translated my book into Chinese! I am impressed by your skill!</li>
                            <li><b>Aleksandra Ermakova</b> You translated my book into German! Thank you for doing this for me!</li>
                            <li><b>Auxiliadora del Socorro Lopez Artola</b> You translated my book into Spanish! I am grateful for this!</li>
                        </ol>
                        <p>
                        <b>Elizabeth Boyer</b>, in addition to editing my book you also wrote a foreword and helped with the vagaries related to publishing the book! I’m eternally in your debt! Thank you for being my daughter!
                        <br/><br/>
                        <b>Benjamin Boyer</b>, in addition to inspiring me when you were little, you also wrote a foreword for my book’s later editions. And now you are also preparing the HattyandBarty.com website for me. Thank you for being my son!
                        <br/><br/>
                        <b>My nephew</b>, who did a ton of behind the scenes stuff to help make this happen and continues to help with other stuff! A big thank you, you will remain anonymous as you wished!
                        <br/><br/>
                        <b>Jeanine Tuttle</b> for editing after book 5.
                        <br/><br/>
                        <b>Abner Solano</b>. Thanks for connecting me to the Spanish Translator.
                        <br/><br/>
                        <b>Elena Shelest</b>, thank you for letting me edit your book The Seven Lives of Grace and for tips related to being an author. (We both know this is your pseudonym but I can keep a secret  ) 
                        <br/><br/>
                        <b>Maria Bondarenko</b> for generating ideas.
                        <br/><br/>
                        And finally, to those who read this book and the books that will soon follow this one! Thank you for being part of my world!
                        <br/><br/>
                        Grant
                    </p>
                </div>
            </div>
        </div>
    )
}

