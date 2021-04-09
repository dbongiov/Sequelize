
const tableBody = document.querySelector('.tableBody');
const tableBody2 = document.querySelector('.tableBody2');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
  return mealData;
}

async function windowActions() {
  getDiningHalls();
  const results = await getMeals();
  const meals = results.data;
  const mealArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const selectedMeals = mealArray.map((element) => {
    const random = getRandomIntInclusive(0, meals.length - 1);
    return meals[random];
  });
  selectedMeals.forEach((meal) => {
    const appendLine = document.createElement('tr');
    appendLine.innerHTML = `
        <td>${meal.meal_id}</td>
        <td>${meal.meal_name}</td>
        <td>${meal.calories}</td>
        <td>${meal.carbs}</td>
        <td>${meal.sodium}</td>
        <td>${meal.protein}</td>
        <td>${meal.fat}</td>
        <td>${meal.cholesterol}</td>`;
    tableBody2.append(appendLine);
  });
  console.table(selectedMeals);
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
      text: "Meals"
    },
    axisX: {
      xValueFormatString: "DDD"
    },
    axisY: {
      
    },
    toolTip: {
      shared: true
    },
    legend:{
      cursor: "pointer",
      itemclick: toggleDataSeries
    },
    data: [{
      type: "stackedBar",
      name: "Calories",
      showInLegend: "true",
      dataPoints: [
          { y: selectedMeals[0].calories, label: selectedMeals[0].meal_name},
          { y: selectedMeals[1].calories, label: selectedMeals[1].meal_name},
          { y: selectedMeals[2].calories, label: selectedMeals[2].meal_name },
          { y: selectedMeals[3].calories, label: selectedMeals[3].meal_name },
          { y: selectedMeals[4].calories, label: selectedMeals[4].meal_name },
          { y: selectedMeals[5].calories, label: selectedMeals[5].meal_name },
          { y: selectedMeals[6].calories, label: selectedMeals[6].meal_name },
          { y: selectedMeals[7].calories, label: selectedMeals[7].meal_name },
          { y: selectedMeals[8].calories, label: selectedMeals[8].meal_name },
          { y: selectedMeals[9].calories, label: selectedMeals[9].meal_name }
      ],
    },
    {
      type: "stackedBar",
      name: "Carbs",
      showInLegend: "true",
      dataPoints: [
          { y: selectedMeals[0].carbs},
          { y: selectedMeals[1].carbs},
          { y: selectedMeals[2].carbs},
          { y: selectedMeals[3].carbs },
          { y: selectedMeals[4].carbs },
          { y: selectedMeals[5].carbs },
          { y: selectedMeals[6].carbs },
          { y: selectedMeals[7].carbs },
          { y: selectedMeals[8].carbs },
          { y: selectedMeals[9].carbs}
      ],
    },
    {
      type: "stackedBar",
      name: "Sodium",
      showInLegend: "true",
      dataPoints: [
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium},
          { y: selectedMeals[0].sodium}
      ]
    },
    {
      type: "stackedBar",
      name: "Protein",
      showInLegend: "true",
      dataPoints: [
          { y: selectedMeals[0].protein},
          { y: selectedMeals[1].protein},
          { y: selectedMeals[2].protein},
          { y: selectedMeals[3].protein},
          { y: selectedMeals[4].protein},
          { y: selectedMeals[5].protein},
          { y: selectedMeals[6].protein},
          { y: selectedMeals[7].protein},
          { y: selectedMeals[8].protein},
          { y: selectedMeals[9].protein}
      ]
    },
    {
      type: "stackedBar",
      name: "Fat",
      showInLegend: "true",
      dataPoints: [
          { y: selectedMeals[0].fat},
          { y: selectedMeals[1].fat},
          { y: selectedMeals[2].fat},
          { y: selectedMeals[3].fat},
          { y: selectedMeals[4].fat},
          { y: selectedMeals[5].fat},
          { y: selectedMeals[6].fat},
          { y: selectedMeals[7].fat},
          { y: selectedMeals[8].fat},
          { y: selectedMeals[9].fat}
      ]
    },
    {
      type: "stackedBar",
      name: "Cholsterol",
      showInLegend: "true",
      dataPoints: [
          { y: selectedMeals[0].cholesterol},
          { y: selectedMeals[1].cholesterol},
          { y: selectedMeals[2].cholesterol},
          { y: selectedMeals[3].cholesterol},
          { y: selectedMeals[4].cholesterol},
          { y: selectedMeals[5].cholesterol},
          { y: selectedMeals[6].cholesterol},
          { y: selectedMeals[7].cholesterol},
          { y: selectedMeals[8].cholesterol},
          { y: selectedMeals[9].cholesterol}
      ]}
    ]
  });chart.render();
}

function toggleDataSeries(e) {
	if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
		e.dataSeries.visible = false;
	}
	else {
		e.dataSeries.visible = true;
	}
	chart.render();
}
window.onload = windowActions;
