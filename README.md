# Introduction
__HBBooks__ is a front-end web application built with the ReactJS library. It was written for Grant Boyer to serve as an introduction and directory to his '__Hatty and Barty__' books, that are for sale on Amazon. The project features three distinct routes: One for the introduction, one dedicated to the currently available books, and one dedicated to the inspriration of, and people involved in, the creation of the books.  
&nbsp;  

# App Design
The project is separated into pages and components. The pages represent the routes, they are:  
* Layout
* Welcome
* Books
* About  
&nbsp;  

The layout page, is the shared content of the app. It contains the main header, the site navigation, styles, and also, it contains the routing mechanism for the app.
&nbsp;  

The welcome page ccontains the introduction for the app.  
&nbsp;  

The books page contains a carousel component of the book cover images and links to the books currently for sale, organized by language.  
&nbsp;  

The about page contains three components with 'about' information for the books, the author, and the illustrator.  
&nbsp;  

# Features
* Hash Routing with lazy components
* Custom Carousel component
* About component
* Book data  
&nbsp;  

# Instructions
## Entering New Book Data

### *Links*
To add a link to a book on amazon, navigate to the '__data__' folder. A JSON file containing all the books is located in it. It's fairly straightforward from there:  
* Find the book by the '__name__' key.
* Add the link to the corresponding language key.  

*Languages are denoted by their international abbreviations.  

### *Image Carousel*
To add a new book image, the process is slightly more difficult depending on the image you have to add. If the image needs edited, follow the [__steps to prep an image__](#prep-an-image). Otherwise, continue these steps:  
* Add the new image to the [__image folder__](/src/img/)  
src > img
* Open the [__Carousel component__](/src/components/Carousel.js)
* At the top-level add an import for the image, like so:  
  `const img`__[x]__` = require('../img/month`__[image name]__`.jpg');` 
* Now add the image variable (`img`__[x]__) to the image array:  
`const images = [img1,img2,img`__[x]__`];`
* That's it! Verify the image is being displayed by running the app. See [__How to run the App__](#run-the-app-in-a-local-environment)

### *Prep an Image*
To prepare an image for use with the image carousel, you need to have to have an image editing program installed. My recommended option is the open-source application [__GIMP__](https://www.gimp.org/downloads/). You can also use Microsoft's bitmap editor, or any other editor of your choice.
* Once the image is loaded in the editor, it needs to be cropped to the front cover of the book.  
*If you have the full cover, which you most likely will, don't include the strip in the middle.
* After cropping the image to the front cover, it will need to be resized to scale properly in the app.
* Before resizing the image, make sure to uncheck any options in your editor to keep the original aspect ratio. They need to be scaled independently.
* Set the size of the image __in pixels__ to `1250` width and `1600` height.
* Now you can follow the [__steps__](#image-carousel) to add the image to the app.  

<mark>&nbsp;*If you do not resize the image, it will not look correctly in the app.&nbsp;</mark>