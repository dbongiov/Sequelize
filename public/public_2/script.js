const tableBody = document.querySelector('.tableBody');
/*
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}*/

async function getMeals() {
  console.log('data request');
  const mealRequest = await fetch('/api/wholeMeal');
  const mealData = await mealRequest.json();
  mealData.data.forEach((meal) => {
    const appendLine = document.createElement('tr');
    appendLine.innerHTML = `
        <td>${meal.meal_id}</td>
        <td>${meal.name}</td>
        <td>${meal.calories}</td>;
        <td>${meal.carbs}</td>;
        <td>${meal.sodium}</td>;
        <td>${meal.protein}</td>;
        <td>${meal.fat}</td>;
        <td>${meal.cholesterol}</td>`;
    tableBody.append(appendLine);
  });
}

async function windowActions() {
  console.log('loaded window');
  const results = await getMeals();
 /* const meals = results.data;
  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });*/
  console.table(selectedMeals);
}

window.onload = windowActions;
