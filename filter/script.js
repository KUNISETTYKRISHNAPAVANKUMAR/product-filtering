let products = {
    data: [
        {
            productName: "Regular White Shirt",
            category: "Topwear",
            price: 30,
            image: "./photos/white-shirt.jpg"
        },
        {
            productName: "Beige Short skirt",
            category: "Bottomwear",
            price: 40,
            image: "./photos/beige-short.jpg"
        },
        {
            productName: "Sporty Smart Watch",
            category: "Watch",
            price: 80,
            image: "./photos/watch1.jpg"
        },
        {
            productName: "Basic Kntted Top",
            category: "Topwear",
            price: 30,
            image: "./photos/topwear2.jpg"
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: 30,
            image: "./photos/jacket1.jpg"
        },
        {
            productName: "Stylish Pink Trouser",
            category: "Bottomwear",
            price: 30,
            image: "./photos/bottomwear2.jpg"
        },
        {
            productName: "Brown Men's Jacket",
            category: "Topwear",
            price: 30,
            image: "./photos/jacket2.jpg"
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: 30,
            image: "./photos/bottomwear3.jpg"
        },

    ]
}
let filterBts = document.querySelectorAll(".filter-btn");
filterBts.forEach((btn) => btn.addEventListener("click", (e) => {

    e.target.classList.toggle("active");
    if (e.target.innerText == "All" && e.target.classList.contains("active")) {
        remove();
        e.target.classList.add("active");
    }
    display(e);
}))
function display(event) {
    let items = document.querySelectorAll(".card");

    for (let i of items) {
        if (isActive(i, event))
            i.style.display = "flex";
        else
            i.style.display = "none";
    }
}
function isActive(i, event) {
    let activeArray = document.querySelectorAll(".active");

    let all = document.querySelector("#all");
    if (activeArray.length == 0)
        all.classList.toggle("active");

    if (activeArray.length > 1)
        all.classList.remove("active");

    if (all.classList.contains("active"))
        return true;

    for (let cName of activeArray) {
        if (i.classList.contains(cName.innerText))
            return true;
    }
    return false;
}
function remove() {
    filterBts.forEach((b) => {
        b.classList.remove("active");
    });
}
let fCon = document.querySelector("#filter-btn-container");
fCon.firstElementChild.classList.add("active");

for (let i of products.data) {
    let card = document.createElement("div");
    card.classList.add("card", i.category);
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    image.setAttribute("alt", "No Image");
    card.appendChild(image);
    let container = document.querySelector("#product-container");
    container.appendChild(card);

    let detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details");
    let name = document.createElement("h4");
    name.innerText = i.productName;
    detailsContainer.appendChild(name);
    card.appendChild(detailsContainer);
    let cost = document.createElement("div");
    cost.innerText = "$" + i.price;
    detailsContainer.appendChild(cost);
}

let s = document.querySelector("#submit");
s.addEventListener("click", (e) => search(e))
function search(event) {
    let text = document.querySelector("#product-name");
    let nameArray = document.querySelectorAll(".details h4");
    for (let i of nameArray) {
        if (i.innerText.toUpperCase().includes(text.value.toUpperCase())) {
            i.parentElement.parentElement.style.display = "flex";
        }
        else {
            i.parentElement.parentElement.style.display = "none";
        }
    }
}