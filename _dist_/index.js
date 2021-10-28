/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

 const baseUrl = "https://platzi-avo.vercel.app";
 const appNode = document.querySelector('#app')

 //intl
 // Formato para fechas y monedas
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD",
    }).format(price)
    return newPrice;
}
 //Web API
// Async/Await
async function fetchData() {
    //Connect to server
    const response = await fetch(`${baseUrl}/api/avo`),
    //Process the response and convert to JSON
    res = await response.json(),
    //JSON --> Data --> Render info browser
    itemList = []

    res.data.forEach(element => {
        //create image
        const image = document.createElement('img')
        image.src = `${baseUrl}${element.image}`
        image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        //create title
        const title = document.createElement('h2')
        title.textContent = element.name
        //title.style = 'font-size: 2rem'; or
        //title.style.fontSize = '3rem' or
        //title.className = 'text-3xl text-red-600'
        title.className = 'text-lg'
        //create price
        const price = document.createElement('div')
        price.textContent = formatPrice(element.price)
        price.className = 'text-gray-600'
        //Create description
        const description = document.createElement("p")
        description.textContent = element.attributes.description
        //Wrap price & title & description
        const priceAndTitle = document.createElement('div')
        priceAndTitle.className = 'text-center md:text-left'
        priceAndTitle.append(title, price, description)
        //Wrap Img and priceAndTitle
        const card = document.createElement('div')
        card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300"
        card.append(image, priceAndTitle)

        itemList.push(card)
    });
    appNode.append(...itemList)
}

fetchData();
/*
 //Conectar al servidor
 //With promises
 window.fetch(`${baseUrl}/api/avo`)
 //Procesar la respuesta y convertirla en JSON
.then(res => res.json())

//JSON --> Data --> Renderizar info browser
.then(res => {
    const itemList = []
    res.data.forEach(item => {
        //crear imagen
        const image = document.createElement('img');
        image.src = `${baseUrl}${item.image}`;
        //crear titulo
        const title = document.createElement('h2');
        title.textContent = item.name;
        //crear price
        const price = document.createElement('div');
        price.textContent = item.price;

        const container = document.createElement('div');
        container.append(image, title, price);
        itemList.push(container);
    });

    appNode.append(...itemList)
});*/