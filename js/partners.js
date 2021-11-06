const renderItems = (data) => {
    console.log(data);
}


fetch('https://test-db0fe-default-rtdb.firebasio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
    .catch((error) => {
        console.log(error)
    })