fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayCatagori(data));

var displayCatagori = meals => {
    for (let i = 0; i < meals.length; i++) {
        var allCatagori = meals[i];
        console.log(allCatagori,strIngredient);
        
    }
}


