/****JS*****/
/////navigation bar on click
console.log('jquery linked');

// let sheetUrl =
// 	'https://docs.google.com/spreadsheets/d/1ZLt9vCIk7jeJkFNivzKThYBwhRwlu3JCcRIsmAKSKzk/edit?usp=sharing';

//AJAX CALL

let sheetAsJSON =
	'https://spreadsheets.google.com/feeds/list/1ZLt9vCIk7jeJkFNivzKThYBwhRwlu3JCcRIsmAKSKzk/od6/public/values?alt=json';

$.ajax({ url: sheetAsJSON }).then((data) => {
	//return a new array of data with .map()
	//      plural
	console.log(data.feed.entry);

	const $project = $('.carousel-inner');
	const projects = data.feed.entry.forEach((project) => {
		const $newProjectDiv = $('<div>').addClass('carousel-item').addClass('active'); //<-----figure out how to make this dynamic
		const $image = $('<img>').attr('src', project.gsx$image.$t).addClass('d-block').addClass('w-100');
        // $newProjectDiv.text(project.gsx$description.$t).addClass('text');
		$project.append($newProjectDiv);
		$newProjectDiv.append($image);
    });
    

});