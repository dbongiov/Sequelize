
// does fetch go here or server.js?

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


