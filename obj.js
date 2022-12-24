const fs = require('fs');
const first= 'saurabh'
const last= 'meena'
const obj= {
    firstname: first,
    lastname: last

}
const datas = JSON.stringify(obj);

fs.writeFileSync('savef.json',datas)
const savedData= fs.readFileSync('savef.json');
console.log("saved Data");
console.log(savedData.toString());
console.log(JSON.stringify(savedData));
const DataObj= JSON.parse(savedData);
console.log('Parse Data');
console.log(DataObj);
console.log(DataObj.firstname);
console.log(obj);
console.log(obj.firstname, obj.lastname)