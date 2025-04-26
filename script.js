function fetchData() {
    // Replace this URL with your deployed microservice endpoint
    fetch('https://your-microservice-url/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById('output').innerText = 'Error fetching data: ' + error;
        });
}
