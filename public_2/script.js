
const tableBody = document.querySelector('.tableBody');
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

async function windowActions() {
  getDiningHalls();
}

window.onload = windowActions;
