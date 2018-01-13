let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin );


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert(Object.entries(salaries));

function topSalary(salaries) {

    let max = 0;
    let maxName = null;

    for(let [name, salary] of Object.entries(salaries)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }

    return maxName;
}