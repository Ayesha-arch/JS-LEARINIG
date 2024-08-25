const num = [1,2,3,4,5,6]
const newNum = num.reduce(function (accumulator , currentValue) {            //we can also use arrow function 
    return accumulator + currentValue
},0 )
console.log(newNum);

const shoppingCart = [
    {
        item: 'JS COURSE',
        price: 2999
    },
    {
        item: 'PY COURSE',
        price: 999
    },
    {
        item: 'MOBILE DEV COURSE',
        price: 6999
    },
    {
        item: 'E-COMMERCE/DIGITAL MARKETING COURSE',
        price: 19999
    },
]

const my_new_shopping_cart = shoppingCart.reduce( (accumulator , item) => accumulator + item.price ,0)
console.log(my_new_shopping_cart);

