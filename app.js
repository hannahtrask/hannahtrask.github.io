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

    //this variable grabs all carousel-inner classes
    const $project = $('.carousel-inner');
    
    //this loops through the provided array in data
	const projects = data.feed.entry.forEach((project) => {

        //this adds a new div and gives it the class carousel-item
        const $newProjectDiv = $('<div>').addClass('carousel-item').addClass('active'); //<-----figure out how to make this dynamic
        
        //this adds a new image and sources it from the array, gives it classes d-block and w-100
		const $image = $('<img>').attr('src', project.gsx$image.$t).addClass('d-block').addClass('w-100');
        // $newProjectDiv.text(project.gsx$description.$t).addClass('text');

        //this appends the new div to the carousel
        $project.append($newProjectDiv);
        //this appends the image to the newly created div
		$newProjectDiv.append($image);
    });
    

});


// CONTACT FORM FUNCTIONALITY
