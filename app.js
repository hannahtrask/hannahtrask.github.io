/****JS*****/
// CHECKING FOR JQUERY LINK
console.log('jquery linked');

// // GOOGLE SHEET URL FOR AJAX CALL
// // let sheetUrl =
// // 	'https://docs.google.com/spreadsheets/d/1ZLt9vCIk7jeJkFNivzKThYBwhRwlu3JCcRIsmAKSKzk/edit?usp=sharing';



//AJAX CALL FROM GOOGLE SHEET
//json link variable, this is what we are calling
let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/1ZLt9vCIk7jeJkFNivzKThYBwhRwlu3JCcRIsmAKSKzk/od6/public/values?alt=json';

//this call will grab the info from the google sheet
$.ajax({ url: sheetAsJSON }).then((data) => {
	//this logs to check I've called the data
	console.log(data.feed.entry);

    //this variable grabs all card-container classes
    const $project = $('.card-container');
    
    //this loops through the provided array in data
	const projects = data.feed.entry.forEach((project) => {
		const $newProjectDiv = $('<div>').addClass('card');
        const $newInnerDiv = $('<div>').addClass('.card-body');
		const $image = $('<img>')
			.attr('src', project.gsx$image.$t)
			.addClass('card-img-top');
        const $title = $('<h5>').text(project.gsx$title.$t).addClass('card-title');
        const $cardDescription = $('<p>').text(project.gsx$description.$t).addClass('card-text');

        
        $project.append($newProjectDiv);
        $newProjectDiv.append($title);
        $title.append($image);
        $title.append($cardDescription);
	});
    

});


// OTHER EVENTS


//////EMAILS from emailJS API
///vanilla JS
            window.onload = () => {
							document
								.getElementById('contact-form')
								.addEventListener('submit', function (event) {
									event.preventDefault();
									// generate the contact number value
									this.contact_number.value = (Math.random() * 100000) | 0;
                                    emailjs.sendForm('service_q6wrfnf', 'template_1fa2kx4', this);
                                    //this resets form
                                    $(event.currentTarget).trigger('reset');
								});
                        };
                    
// anonymous function to initiate use of user API
            ( () => {
				emailjs.init('user_KBxEcbif77Xh0iNNI4uvN');
            })();
            

////////////////////////////////////////////////////////////////


////CAROUSEL
//vanilla JS


/* VARIABLES!! */
const track = document.querySelector('.carousel_track');
//makes array from all potential info
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');

//get size of one slide because all slides are same width
const slideWidth = slides[0].getBoundingClientRect().width;



/* FUNCTIONS! */
//LOOPS through slide array with forEach(obj, index)
//styles each based on index
//allows you to add more later
const slidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
//function call
slides.forEach(slidePosition);

//FUNCTION that moves slides
const moveToSlide = (track, currentSlide, targetSlide) => {
    //                                         amount to move
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    // changes slide class, removes from last slide adds to next slide
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}


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

///////////////////////////////////////////