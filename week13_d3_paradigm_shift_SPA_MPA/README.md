# Single-Page Applications

## Read the following articles:

[Single-page application Wikipedia](https://en.wikipedia.org/wiki/Single-page_application)


[Single-Page Application and Multi-Page Application Pros and Cons](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58)

## Answer the following articles in relation with the articles above:

1. What is a Single-Page Application (SPA)?

A Single-Page Application (SPA) is a web application or website in which an HTML file is served once. After serving the application once, the file is dynamically rewritten with new data retrieved from the server without loading entire new pages. The purpose of this is to achieve faster transitions and user interaction.

2. What is a Multi-Page Application (MPA)?

A Multi-Page Application (MPA) is a web application or website in which every change in the site's data renders a new page from the server in the browser. Multiple-Page Applications are harder to develop because the amount of content that transfers betwqeen the browseer and the server is much larger and they contain a lot of user interface levels. 

3. When we built our Unit 2 apps, were they a SPA or MPA, why?

The applications we built during project two were MPA because we used Express.js which is a framework used with Node.js in order to build Multi-Page Applications. Additionally, with every user interaction, the user was redirected to a new URL and the webpage reloaded, making it an MPA. If the screen had not been refreshed with all interactions, it the projects would have been SPA.

4. Give two pros of a SPA
    * SPA is very fast because the reesources for thee webpae are only loaded a single time and the page does not have to refreesh to show new content.
    * SPA makes the development of mobile applications easier than  Multi-Page applications because developers can use the samee backend code for the web and mobile applications.

5. Give two cons of a SPA
    * SPA is slower to download into the user's web browser because all of the content is being downloaded simultaneously instead of one page at a time and the browser must download a lot of client framework data. 
    * SPA is less secure than the traditional MPA because of Cross-Site Scripting, in which attackers can add cleint-side scripts into a web application by other users.

6. Give two pros of a MPA
    * MPA is the perfect approach if your website is targeting users that need clear explanation of where to go in the application since level menu navigation is a key part of MPA.
    * MPA is the best and easiest strategy for Search Engine Optimization because it allows you to make each page have its own keyword. This allows your application to have a higher chance of having a high rank on search engines.

7. Give two cons of a MPA
    * MPA takes a much longer time to develop because the developer must use frameworks for either client and server side. This results in  a much more complex development process.
    * MPA has a much slower speed and performance because the server needs to reload resources with every new user interaction. This is because every time somthing is retrieeved, the browser has to reload the page, resulting in a worse user experience. 

## Read the following two articles:

[The Secret Startup That Saved the Worst Website in America](https://www.theatlantic.com/technology/archive/2015/07/the-secret-startup-saved-healthcare-gov-the-worst-website-in-america/397784/)

[sites built with angular 1.x](https://www.madewithangular.com/categories/angularjs)

## After reading the above articles, in your own words answer:

1. What were the three great technical accomplishments of MPL?

The three major accomplishments of Marketplace Lite (MPL) were that they acted as a proactive and agile team, quickly responding to the problems Healthcare.gov had and resolving the small issues in its infrastructure; they built Healthcare.gov's App2, an insurance application in which users could sign up twice as fast as the previous application in place; and they changed the original login system and developed a working, well-designed new one.

2. What does 'API' stand for?

The acronym "API" stands for "application programming interface".

3. What is an API? *

An API, or application programming interface, is a set of functions and procedures allowing for the creation of applications that access the features or data of an operating system, application, or other service.

## Hungry For More

- Read [The History of Angular](https://medium.com/the-startup-lab-blog/the-history-of-angular-3e36f7e828c7)

- This is a video that will review JSON and introduce you to AJAX
[Watch the following video on JSON and AJAX](https://www.youtube.com/watch?v=rJesac0_Ftw)
- Try coding along with it
- Answer the following:
1. Is this coding demo of a SPA or an MPA? Why?

The coding demo in the video is an SPA because when the user inteeracts with the website, the browser does not rfresh the page to display new data. Instead, it uses AJAX to fetch new JSON data and display it directly on the current page that is loaded on the browser.


We'll be learning Angular 1.7 (also known as `AngularJS`). Be sure to research the right version, since the difference between 1.x and 2-6+ is quite drastic. (Versions 2 onwards are often called `Angular`)
