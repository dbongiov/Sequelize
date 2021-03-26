
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













/*
const appendItem = document.createElement('div');
    appendItem.classList.add('tile', 'has-text-centered', 'is-parent', 'is-3');
    appendItem.innerHTML = `
      <article class = tile is-child box has-background-link dark ">
      <span class = "subtitle has-text-light has-text-weight-bold">
        ${hall.hall_name}</span>
      <br />
      <span class="has-text-light">
        ${hall.hall_address.split(',')[0]}
      </span>
      <br />
      <span class="has-text-light">
        ${hall.hall_address.split(',')[1]}
      </span>
      </article>}`;
    targetBox.append(appendItem);
*/



/*
app.route('/api')
  .get(async (req, res) => {
    console.log('GET request detected');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();
    console.log('data from fetch', json[0]);
    res.json(json);
  })
  .post(async (req, res) => {
    console.log('POST request detected');
    console.log('Form data in res.body', req.body);
    console.log('Now send something back to your client');
    const data = await fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json');
    const json = await data.json();

    fetch('https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json')
      .then((data) => data.json())
      .then((data2) => {
        // do something with your data!
      })
      .catch((err) => console.error(err));

    res.json({data: json});
  });
*/

