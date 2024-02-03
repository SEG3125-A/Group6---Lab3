// groceries.js
// groceries.js
const products = [
    {
        name: "Broccoli",
        vegetarian: true,
        glutenFree: true,
        price: 1.99,
        image: "https://americanseedstore.com/cdn/shop/products/shucaizhongzi-1_9_grande_7aa2e817-af12-4ce9-a4a9-f59245a836ef_466x466.jpg?v=1677595638" 
    },
    {
        name: "Bread",
        vegetarian: true,
        glutenFree: false,
        price: 2.35,
        image: "https://th.bing.com/th/id/OIP.hhj9fmrY1xjUhPNy9Itk8gAAAA?rs=1&pid=ImgDetMain" 
    },
    {
        name: "Salmon",
        vegetarian: false,
        glutenFree: true,
        price: 10.00,
        image: "https://www.allrecipes.com/thmb/092uk7yXvVgwb3Fd0OXD7zEBW0E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Fresh-Salmon-Fillets-by-FudioGetty-Images-2000-02c1384d705a42e5a7801923a51b4377.jpg" 
    },
    {
        name: "Milk",
        vegetarian: true,
        glutenFree: true,
        price: 3.00,
        image: "https://eatwelltobewellrd.com/wp-content/uploads/2018/10/Glass-of-milk.jpg" 
    },
    {
        name: "Apple",
        vegetarian: true,
        glutenFree: true,
        price: 0.50,
        image: "https://th.bing.com/th/id/OIP.A1JjNu8jIRxaTJHbD_EtFwHaIJ?rs=1&pid=ImgDetMain" 
    },
    {
        name: "Eggs",
        vegetarian: false,
        glutenFree: true,
        price: 2.00,
        image: "https://th.bing.com/th/id/OIP.xCCG2iybXJUOhiby54n3ogHaE8?rs=1&pid=ImgDetMain" 
    },
    {
        name: "Cheese",
        vegetarian: true,
        glutenFree: true,
        price: 5.00,
        image: "https://th.bing.com/th/id/OIP.rQKYey2Oih3SZc6MleVCkgHaE8?rs=1&pid=ImgDetMain" 
    },
    {
        name: "Tomato",
        vegetarian: true,
        glutenFree: true,
        price: 0.75,
        image: "https://americanseedstore.com/cdn/shop/products/large_cherry1_454x454.png?v=1677597736" 
    },
    {
        name: "Lettuce",
        vegetarian: true,
        glutenFree: true,
        price: 1.50,
        image: "https://americanseedstore.com/cdn/shop/products/green-lettuce-500x500_454x454.jpg?v=1677601998" 
    },
    {
        name: "Chicken",
        vegetarian: false,
        glutenFree: true,
        price: 9.00,
        image: "https://th.bing.com/th/id/R.38df2d77a930d9f883a0fe785b897118?rik=PhjzTp5ImnaOVw&pid=ImgRaw&r=0"
    }
];



function restrictListProducts(prods, restriction) {
    return prods.filter(product => {
        if (restriction === "Vegetarian") {
            return product.vegetarian;
        } else if (restriction === "GlutenFree") {
            return product.glutenFree;
        } else {
            return true;
        }
    }).map(product => product.name).sort((a, b) => a.localeCompare(b));
}

function getTotalPrice(chosenProducts) {
    return products.reduce((total, product) => {
        if (chosenProducts.includes(product.name)) {
            return total + product.price;
        }
        return total;
    }, 0);
}
