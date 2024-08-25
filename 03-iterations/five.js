const coding = ['js' , 'ruby' , 'cpp' , 'py' , 'java']
coding.forEach(function (value) {                          // basic function without name
    console.log(value);
    
} )

coding.forEach((val) => {       //arrow function without name
    console.log(val);
    
})

coding.forEach((item , index , arr) => {        //many other papameters are also used
    console.log(item , index , arr);
    
})

const MyCoding = [
    {
        languageName : 'javascript',
        fileName : 'js'
    },
    {
        languageName : 'python',
        fileName : 'py'
    },
    {
        languageName : 'C++',
        fileName : 'cpp'
    }
    
]
MyCoding.forEach((item , index , arr) => {
    //console.log(item , index , arr);
    console.log(item.languageName);
    
})