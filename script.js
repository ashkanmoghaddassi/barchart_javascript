
// TODO: load the dataset 

let attractions;
fetch('attractions.json')
  .then(response => response.json())
  .then(data => {
		attractions = data;
		console.log(attractions);
        filterData();
	});

function filterData(category) {
    let filtered = attractions;

    if(category && category != "all"){
        filtered = filtered.filter(function(row,index){
            return row.Category == category;
        });  
    }    
    const JsonReversedArray= attractions.sort(function(a,b){
        return b.Visitors - a.Visitors;
        
    });
    console.log(JsonReversedArray);

    let top5 = JsonReversedArray.filter(function(row, index){
        return index<5;
        
    });
  


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
