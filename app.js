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
		const $newProjectDiv = $('<div>').addClass('.card');
        const $newInnerDiv = $('<div>').addClass('.card-body');
		const $image = $('<img>')
			.attr('src', project.gsx$image.$t)
			.addClass('card-img-top');
        const $title = $('<h5>').text(project.gsx$title.$t).addClass('card-title');
        const $cardDescription = $('<p>').text(project.gsx$description.$t).addClass('card-text');

        $project.append($title);
        $project.append($newProjectDiv);
     
        $newProjectDiv.append($image);
        $title.append($cardDescription);
	});
    

});