const table1 = ["x","y","z"];
const table2 = ["a","b","c"];
const table3 = [ "ala ma kota", "test test", "xxx" ];

function checkTable(table, element){
    console.log(table.includes(element))
}

checkTable(table2, "b")

function convertStringToArrays(table, separator){
    for(let i=0; i<table.length; i++){
        let text = table[i];
        let tempTable = text.split(separator);
        console.log(tempTable);
        }
}
convertStringToArrays(table3, " ");
