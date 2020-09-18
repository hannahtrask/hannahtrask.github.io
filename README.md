# Unit 1 Portfolio Project

## Project Schedule

My schedule for the upcoming week.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 2| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| Contact form and Carousel/cards | Complete
|Day 5| Final Touches | Complete
|Day 5| Present | Incomplete

## Project Description

My unit 1 project is a portfolio website page. There are three sections— an about section, a projects section, and a contact me form. I chose to use two [typefaces](https://fonts.google.com/specimen/Arapey?query=arapey#license), for simplicity's sake: a serif font called Arapey, which emphasizes bold strokes and a relaxed rhythmic style, and Montserrat, a sans-serif typeface that is easy to read, elegant, and simple.

For a color [palette](https://coolors.co/508484-d6ba73-ffcad4-cabac8-9d8189), I chose to work with a combination of cool and warm hues. This represents the beauty in dichotomy and change— and emphasizes the importance of the whole to create a fluid piece.

Here are a few links to some portfolio websites I drew inspiration from:<br>
Uses fun design/imagery to draw in the user.
[http://www.adhamdannaway.com/](http://www.adhamdannaway.com/)<br>

Provides information on the photos on hover.
[https://www.loungelizard.com/](https://www.loungelizard.com/)<br>

Simple, straightforward, cute.
[http://seanhalpin.io/](http://seanhalpin.io/)<br>

Edgy, animated, elegant.
[https://www.femmefatale.paris/en](https://www.femmefatale.paris/en)<br>


## Google Sheet

Here is a link to my google sheet. [googleSheet](https://docs.google.com/spreadsheets/d/1ZLt9vCIk7jeJkFNivzKThYBwhRwlu3JCcRIsmAKSKzk/edit?usp=sharing)

## Wireframes

Here are images of my wireframes on cloudinary:

For the mobile wireframe, I will keep a minimal amount of information on the screen in order to best highlight the most important parts of my portfolio. 1) Who am I? and 2) What have I shown I can create? I'm also considering adding a contact me that's easier to access on the mobile instead of at the bottom.<br>
[wireframeMobile](https://res.cloudinary.com/digwu4vdh/image/upload/v1600045802/Mobile_Wireframe_1_tyoyah.png)<br><br>
For the tablet wireframe, I expand the images and written section in the about me. The navbar will gain social media icons and maintain the hamburger drop-down menu, and the projects section will be bigger.<br>
[wireframeTablet](https://res.cloudinary.com/digwu4vdh/image/upload/v1600046571/Tablet_Wireframe_1_et5eff.png)<br><br>
The desktop wireframe will also feature more images upon loading, an easy to read project section (minimal words!!) and links to work I have done outside of the web development world. The contact me form will be bigger, and the projects section will show descriptions on mouseover.<br>
[wireframeDesktop](https://res.cloudinary.com/digwu4vdh/image/upload/v1600047199/Desktop_Wireframe_ivh1u5.png)<br>

Some sketches I did prior to using the internet:

[wireframeSketch](https://res.cloudinary.com/digwu4vdh/image/upload/v1600048430/IMG_3795_epra44.jpg)<br>

Here is a resource I used to create my wireframes:

[Excalidraw](https://excalidraw.com/)<br>

## Time/Priority Matrix

[Time-Priority-Matrix](https://res.cloudinary.com/digwu4vdh/image/upload/v1600048401/IMG_4980_fcngwd.jpg)<br>

## MVP/PostMVP

### MVP

* Basic HTML structure/CSS styles<br>
* Project section<br>
* Nav w/flexbox <br>
* About me section<br>
* Embellishments/ styles<br>
* API<br>
* Media queries tablet<br>
* Media queries desktop<br>
* Social media icons<br>

### PostMVP

* Fade on scroll<br>
* Nav in relative position<br>
* Big words on hover<br>
* Incorporate bootstrap<br>
* Incorporate materialize<br>
* Design my own logo<br>

## Functional Components

Below is the time frame I have constructed for this development cycle. Time estimates **are** subject to change/modification.

#### MVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Basic HTML structure | high | 2hr | 1.5hr |
| CSS Styles | high | 2hr | 3hr |
| Project section | high | 3hr | 4hr |
| Nav w/ flexbox | high | 2hr | 3.5hr |  
| About me section | high | 2hr|  2.5hr | 
| other embellishments and fun things | medium | 3hr | 2hr|
| API | high | 3.5hrs|  3hr | 
| Media queries tablet | high | 1.5hr | 2hr |
| Media queries desktop | high | 1.5hr | 2hr |
| Social media icons and clickable profile image (linkedIn) | low | 1.5hr |  .5hr |
| Functional Contact Form | medium | 1hr | 2hr |
| Total | high priotity! | 20hrs| 26hrs |

#### PostMVP

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Design own logo | low | 3hr | 1hr |
| Nav doesn't leave top of screen | low | 2hr | 1.5hr |
| Carousel gallery | low | 1.5hr | 3hr |
| Incorporate bootstrap | high | 3hr | 1hr |
| Finishing touches | medium | 3hr | 2hr |
| Clean up | medium/high | 2.5hr | 3hr |
| Total | medium priority! | 15hrs| 11.5hrs |

## Additional Libraries && Sources

* [Bootstrap.js](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [FontAwesome](https://fontawesome.com/icons?d=gallery)
* [Coolors.co](https://coolors.co/)
* [GoogleFonts](https://fonts.google.com/)

## Code Snippet

This carousel was really interesting to figure out— I know it seems obvious, but figuring out the logic to move the slides left and right was more involved than I thought it would be. The code required to do (what appeared to be) such a simple thing was really illuminating about what this career path may be like. Overall, this has been a really good experience.

```
//CLICK event, moves slides left
prevButton.addEventListener('click', event => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    // calls moveToSlide function
    //                              takes spot of targetSlide param
    moveToSlide(track, currentSlide, prevSlide);
})

//CLICK event, moves slides right
nextButton.addEventListener('click', event => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    // calls moveToSlide function
    //                              takes spot of targetSlide param
    moveToSlide(track, currentSlide, nextSlide);
})
```
This section belongs to a code snippet that has become my baby and makes me feel smart.

## Issues and Resolutions

What I have found with these kinds of projects is that the biggest hiccups tend to be relatively small fixes. It seems like this career path requires you to be nit-picky, but not a perfectionist. Truly, figuring out this problem took me more hours than I care to admit. I enjoyed this project— it was really cool to start to understand how my process works.

#### SAMPLE.....
**ERROR**: jQuery.Deferred exception: $projectSection.append is not a function TypeError: $projectSection.append is not a function
                        
**RESOLUTION**: Missing $ symbol to select (.card-track)
