// const restourant = 'food-band';


const renderItems = (data) => {
    console.log(data);
}

// fetch(`./db/${restourant}.json`)
fetch(`./db/tanuki.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
