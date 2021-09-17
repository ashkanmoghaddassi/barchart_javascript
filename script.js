
// TODO: load the dataset 

let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
        filterData("all");
	});

var mySelect = document.querySelector("#attraction-category");
 
 mySelect.addEventListener("change", (event) =>
 {
    filterData(event.target.value);

 }); 

function filterData(category) {
    let sorted = attractions.sort((a,b) => b.Visitors - a.Visitors);
    

    if(category != "all"){ 
        sorted = sorted.filter(attraction =>
        attraction.Category == category); 

    }    
    
    

    let top5 = [];
    for (let i = 0; i <5; i++){
        top5.push(sorted[i]);
    }

    
  


    renderBarChart(top5);

    


	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/

} 

// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category
 
 