//const table1 = ["x","y","z"];
//const table2 = ["a","b","c"];
//const table3 = [ "ala ma kota", "test test", "xxx" ];

//function checkTable(table, element){
//    console.log(table.includes(element))
//}

//checkTable(table2, "b")

//function convertStringToArrays(table, separator){
//    for(let i=0; i<table.length; i++){
//        let text = table[i];
//        let tempTable = text.split(separator);
//        console.log(tempTable);
//        }
//}
//convertStringToArrays(table3, " ");

const person = {
    name: "Jan",
    surname: "Kowalski",
    age: 30,
    favouriteMovies: [ "Batman", "Spiderman", "Antman" ],
    getFavMovies: function() {
        return this.favouriteMovies;
    },
    getFullName: function() {
        return `${this.name} ${this.surname}`;

    },
    sayHello: function() {
        return `Hello, my name is ${this.getFullName()}, I am ${this.age}, and my favorite movies are: ${this.getFavMovies()}.`;;
    }
}
//console.log(person.getFavMovies());
//console.log(person.getFullName());
console.log(person.sayHello());