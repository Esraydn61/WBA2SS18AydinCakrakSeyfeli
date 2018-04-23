//console.log(23232323);
var fs = require('fs');
const chalk = require('chalk');

fs.readFile("staedte.json",	function(err,data)	{

console.log();
if(err) console.error("Couldn't parse"+Name+"\n");



var inhalt=JSON.parse(data);
for(var i=0;i<inhalt.cities.length;i++){

inhalt.cities.sort(function(a, b){
    return (a.population) - (b.population);
    })
    console.log();
    console.log("Name:"+chalk.blue(inhalt.cities[i].name+","));
    console.log("Land:"+chalk.green(inhalt.cities[i].country+","));
    console.log("Population:"+chalk.red(inhalt.cities[i].population.toLocaleString("de-DE")));

}
fs.writeFile('staedte_sortiert.json', JSON.stringify(inhalt,null,3));

});
