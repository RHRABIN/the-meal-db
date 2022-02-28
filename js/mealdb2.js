const loadMeal = ()=>{
    const searchInput = document.getElementById('input-field');
    const searchInputText = searchInput.value;
    searchInput.value = ""
    if(searchInputText == "" || searchInputText == isNaN){
        const error = document.getElementById('error');
        error.innerText="Please search currect!";
    }
    else{
        
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInputText}`
    fetch(url)
    .then(res=>res.json())
    .then(data => displyMeal(data.meals))
    }
}

const displyMeal = (meals) => {
    const parent = document.getElementById('parent');
    // console.log(meals == null)
    const error  = document.getElementById('error');
    error.innerText = ""
    if(meals == null){
        const error  = document.getElementById('error');
        error.innerText = 'no result found!'
    }
    else { 
    meals.forEach(meal => {
        console.log(meal)
      const div = document.createElement('div');
      div.classList.add('col');
        
      div.innerHTML =`
      
        <div onclick ="getDetail(${meal.idMeal})" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
            </div>
        </div>
    
      ` 
      parent.appendChild(div);

    })
}
}

const getDetail = details =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${details}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data.meals))
}
const displayDetail = details =>{
    const parent = document.getElementById('details');
    details.forEach(eachData => {
        const div = document.createElement('div');
        
        div.classList.add('col')
        parent.innerHTML  = ""
        div.innerHTML = `
        <div class="card">
        <img src="${eachData.strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
            <h5 class="card-title">${eachData.strMeal}</h5>
            <p class="card-text">${eachData.strInstructions.slice(0,250)}</p>
        </div>
    </div>
        `;
    parent.appendChild(div);
    });
}