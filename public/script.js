
const tableBody = document.querySelector('.tableBody');
const tableBody2 = document.querySelector('.tableBody2');
async function getDiningHalls() {
  const hallRequest = await fetch('/api/dining');
  const hallData = await hallRequest.json();

  hallData.data.forEach((hall) => {
    const appendLine = document.createElement('tr');
    appendLine.innerHTML = `
        <td>${hall.hall_id}</td>
        <td>${hall.hall_name}</td>
        <td>${hall.hall_address}</td>`;
    tableBody.append(appendLine);
  });
}

async function getMeals() {
  console.log('data request');
  const mealRequest = await fetch('/api/wholeMeal');
  const mealData = await mealRequest.json();
  mealData.data.forEach((meal) => {
    const appendLine = document.createElement('tr');
    appendLine.innerHTML = `
        <td>${meal.meal_id}</td>
        <td>${meal.meal_name}</td>
        <td>${meal.calories}</td>;
        <td>${meal.carbs}</td>;
        <td>${meal.sodium}</td>;
        <td>${meal.protein}</td>;
        <td>${meal.fat}</td>;
        <td>${meal.cholesterol}</td>`;
    tableBody2.append(appendLine);
  });
}

async function windowActions() {
  getDiningHalls();
  getMeals();
}

window.onload = windowActions;
