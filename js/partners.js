const cardsRestaurants = document.querySelector('.cards-restaurants')

console.log(cardsRestaurants)

const renderItems = (data) => {
    data.forEach((item) => {
        const { image, kitchen, name, price, products, stars, time_of_delivery } = item
        const a = document.createElement('a')



        a.setAttribute('href', '/restaurant.html')
        a.classList.add('card')
        a.classList.add('card-restaurant')
        a.dataset.products = products

        // console.log(a.dataset.products);

        a.innerHTML = `
            <img src="${image}" alt="${image}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title">${name}</h3>
                    <span class="card-tag tag">${time_of_delivery}мин</span>
                </div>
                <div class="card-info">
                    <div class="rating">
                       ${stars}
                    </div>
                    <div class="price">${price}</div>
                    <div class="category">${kitchen}</div>
                </div>
            </div>
        `

        a.addEventListener('click', (e) => {
            e.preventDefault()
            // const link = a.dataset.products

            localStorage.setItem('restaurant', JSON.stringify(item))

            window.location.href = '/restaurant.html'
        })
        cardsRestaurants.append(a)
    })

}


fetch('https://eda-s-js-default-rtdb.firebaseio.com/db/partners.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data)
    })
