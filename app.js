const searchFood = () =>{
    const searchText = document.getElementById('searchFlied').value;
    if (searchText == ''){
        console.log('did not show') 
    }else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
        .catch(error => console.log(error));
    }
}

const displayFood = meals => {
    const foodCaegories = document.getElementById('categoriesDiv');
    foodCaegories.innerText = ''
    meals.forEach(meal => {
        const div = document.createElement('div');
        div.className = 'categories'
        const foodCaegoriesinfo = `
            <h3>${meal.strMeal}</h3>        
            <img src = "${meal.strMealThumb}">
            <button onclick="displayFoodDetails('${meal.strMeal}')">Show Details</button>       
        `
        div.innerHTML = foodCaegoriesinfo;
        foodCaegories.appendChild(div);
    })
}

const displayFoodDetails = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => {renderFoodDetails(data.meals[0])});
}

const renderFoodDetails = meals => {
    const div = document.getElementById('foodDetailsDiv');
    div.innerHTML = `
        <h1>${meals.strMeal}</h1>
        <img src = "${meals.strMealThumb}">
        <h3>Ingredients</h3>
        <h4>idMeal : ${meals.idMeal}</h4>
        <p>strArea : ${meals.strArea}</p>  
        <p>strCategory : ${meals.strCategory}</p>  
        <p>strIngredient1 :  ${meals.strIngredient1}</p>  
        <p>strMeasure1 : ${meals.strMeasure1}</p>  
        <p>strTags : ${meals.strTags}</p>  
        <p>strYoutube : ${meals.strYoutube}</p>  
    `

}

const displayError = error => {
    const errorTag = document.getElementById('error-message')
    errorTag.innerText = error;
}
