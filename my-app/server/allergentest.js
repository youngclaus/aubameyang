const express = require('express');
const app = express();

const allergens = require(__dirname + '/data/dev/allergens.json')

const testAllergen = (array) => {
  let menuArray = array;
  
  menuArray.map(testIndividual);

  return(menuArray);
};

const testIndividual = (item) => {
  let  = [];
  for (let x = 0; x < allergens.length; x++) {
    for (let y = 0; y < allergens[x].alt.length; y++) {
      if (item.name.toLowerCase().includes(allergens[x].alt[y])) {
        switch(allergens[x].type) {
          case "vegetables":
          case "fruit":
            item.warning.push(allergens[x].alt[y]);
            console.log(`WARNING ${allergens[x].alt[y]} from database found in ${item.name}`);
            break;
          default:
            item.warning.push(allergens[x].type);
            console.log(`WARNING ${allergens[x].type} from database found in ${item.name}`);
        }   
      } else if (item.desc){
        if (item.desc.toLowerCase().includes(allergens[x].alt[y])) {
          switch(allergens[x].type) {
            case "vegetables":
            case "fruit":
              item.warning.push(allergens[x].alt[y]);
              console.log(`WARNING ${allergens[x].alt[y]} from database found in ${item.name}`);
              break;
            default:
              item.warning.push(allergens[x].type);
              console.log(`WARNING ${allergens[x].type} from database found in ${item.name}`);
          }   
        }
      }
    }
  }
  return(item);
};

module.exports = {
  testAllergen,
  testIndividual
}