# Introduction

[![deployment-status](https://github.com/BlBoyer/HBBooks/actions/workflows/pages/pages-build-deployment/badge.svg?branch=production)](https://github.com/BlBoyer/HBBooks/actions/workflows/pages/pages-build-deployment)

**HBBooks** is a front-end web application built with the ReactJS library. It was written for Grant Boyer to serve as an introduction and directory to his '**Hatty and Barty**' books, that are for sale on [**Amazon**](https://www.amazon.com/s?k=Hatty+Barty&i=stripbooks&rh=p_27%3AGrant+Boyer&s=relevanceexprank&Adv-Srch-Books-Submit.x=23&Adv-Srch-Books-Submit.y=6&unfiltered=1&ref=sr_adv_b). The project features three distinct routes: One for the introduction, one dedicated to the currently available books, and one dedicated to the inspriration of, and people involved in, the creation of the books.  
&nbsp;

# App Design

The project is separated into pages and components. The pages represent the routes, they are:

- Layout
- Welcome
- Books
- About  
  &nbsp;

  - The layout page is the shared content of the app. It contains the main header, the site navigation, styles, and also, it contains the routing mechanism for the app. &nbsp;

  - The welcome page contains the introduction for the app.  
    &nbsp;

  - The books page contains a carousel component of the book cover images and links to the books currently for sale, organized by language.  
    &nbsp;

  - The about page contains three components with 'about' information for the books, the author, and the illustrator.  
    &nbsp;

The app is styled with bootstrap and custom css. You can find the custom styles in:

> src > styles > styles.css

&nbsp;

# Features

- Hash Routing with lazy components
- Custom Carousel component
- About component
- Book data  
  &nbsp;

# Instructions

## Entering New Book Data

### _Links_

To add a link to a book on amazon, navigate to the '**data**' folder. A JSON file containing all the books is located in it. It's fairly straightforward from there:

- Find the book by the '**name**' key.
- Add the link to the corresponding language key.

\*Languages are denoted by their international abbreviations.

### _Image Carousel_

To add a new book image, the process is slightly more difficult depending on the image you have to add. If the image needs edited, follow the [**steps to prep an image**](#prep-an-image). Otherwise, continue these steps:

- Add the new image to the [**image folder**](/src/img/)
  > src > img
- Open the [**Carousel component**](/src/components/Carousel.js)
- At the top-level add an import for the image, like so:  
  `const img[x] = require('../img/month [image name].webp');`
- Now add the image variable (`img[x]`) to the image array:  
  `const images = [img1,img2,img[x]];`
- That's it! Verify the image is being displayed by running the app. See [**How to run the App**](#local-environment)

### _Prep an Image_

To prepare an image for use with the image carousel, you need to have to have an image editing program installed. My recommended option is the open-source application [**GIMP**](https://www.gimp.org/downloads/). You can also use Microsoft's **Paint** bitmap editor, or any other editor of your choice.

- Once the image is loaded in the editor, it needs to be cropped to the front cover of the book.  
  \*If you have the full cover, which you most likely will, don't include the strip in the middle.
- After cropping the image to the front cover, it will need to be resized to scale properly in the app.
- Before resizing the image, make sure to uncheck any options in your editor to keep the original aspect ratio. They need to be scaled independently.
- Set the size of the image **in pixels** to `1250` width and `1600` height.
- Now you can follow the [**steps**](#image-carousel) to add the image to the app.

<mark>&nbsp;\*If you do not resize the image, it will not look correctly in the app.&nbsp;</mark>  
&nbsp;

# Deployment

To deploy the application to the production enviroment (GoDaddy.com):

- Run the [**deploy script**](#production-environment).  
  \*This will deploy the app to GitHub Pages.
- In the GitHub repository, go to to **Settings** near the top of the page.
- Find and select the **Pages** option in the left-hand pane.
- At the top of the page, it will display: &nbsp;**`Your site is live at: https://github-pages-url`**
- Scroll down until you see **Custom Domain**.
- Enter '**hattyandbarty.com**' in the domain field.
- Click '**Save**'.
- The url will change for your live site
- You can see the progress of the deployment at the **Actions** page, once the deployment has completed, the site will be live.

### _Environment Variables_

The dotenv cli package is included to use environment variables. You'll need to create your own files for the build to work on a local server.

- In the main directory of the project, create a file named **'.env.development.local'**.
- Open the file in our editor and add the text:  
  **PUBLIC_URL = "http://localhost:5001"**

The url of the deployed app is used to determine asset locations of the app. The development url will be on port 5001, and the [**serve script**](#local-environment) will use that url for the server. The production environment url is in the **CNAME** file. If the hosting environment changes, the **CNAME** file will need updated accordingly.  
&nbsp;

# Scripts

You can use npm to deploy to different environments.

### _Local Environment_

To run the app locally, use the '**`npm start`**' command  
\- This is the builtin way to host a react app locally, it does not serve a build.

To deploy the app to a local node server, use the command '**`npm run serve`**'  
\- This will build the app and use the server.js server to host the app locally.

### _Production Environment_

To deploy the app to the production environment, use '**`npm run deploy`**'  
\- This will build the app for production and deploy to GH-Pages.

You can view the script in the package.json file.

<font color="red">**NOTE:**  
The app is deployed from the **'production'** branch. This branch should not be modified directly- it contains the production build of the app. Running the [**deployment script**](#production-environment) will create a production build of the app from the working branch and push it to the **'production'** branch on GitHub. </font>  
&nbsp;

# Download the project

To use the project on your computer, you'll need to download the [**Git command-line interface**](https://git-scm.com/downloads), [**Node, and the node package manager**](https://nodejs.org/en/download/). Once finished, you can run use use the '**`git clone`**' command to copy the repository to your machine, see [**this guide**](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).
