const coding = ['js' , 'ruby' , 'cpp' , 'py' , 'java']
const value = coding.forEach(function (item) {                          
    console.log(item);
    return item

})
console.log(value);


const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = myNum.filter( (myNum) => myNum > 4 )
console.log(newNum);

const anotherNum = []
myNum.forEach( (myNum) => {
    if (myNum > 4) {
        anotherNum.push(myNum)
        console.log(anotherNum);
    }
    //console.log(anotherNum);
})
//console.log(anotherNum);

const library = [
    {
        title: 'Book 1',
        genere: 'Fiction',
        published: '1987',
        edition: '2004'
    },
    {
        title: 'Book 2',
        genere: 'Non-Fiction',
        published: '1986',
        edition: '1990'
    },
    {
        title: 'Book 3',
        genere: 'Fiction',
        published: '1970',
        edition: '2012'
    },
    {
        title: 'Book 4',
        genere: 'Science',
        published: '2000',
        edition: '2021'
    },
    {
        title: 'Book 5',
        genere: 'History',
        published: '1960',
        edition: '2010'
    },
    {
        title: 'Book 6',
        genere: 'Fiction',
        published: '2000',
        edition: '2024'
    },
    {
        title: 'Book 7',
        genere: 'Non-Fiction',
        published: '1981',
        edition: '1994'
    },
    {
        title: 'Book 8',
        genere: 'Language',
        published: '1986',
        edition: '1995'
    },
    {
        title: 'Book 9',
        genere: 'Fiction',
        published: '2018',
        edition: '2020'
    },
]
const books = library.filter( (bk) => bk.edition >= '2012' && '2024')
console.log(books);


