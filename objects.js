let john = {name: "John", surname: "Smith", age: 25, id: 1}; 
let pete = {name: "Pete", surname: "Hunt", age: 30, id: 2}; 
let mary = {name: "Mary", surname: "Kelly", age: 28, id: 3};

let users = [john, pete, mary]; 

let usersMapped = users.map(user => ({ 
  fullName: `${user.name} ${user.surname}`, id: user.id})); 

console.log(usersMapped); 

let names = users.map(item => item.name); 

console.log(names); 
    
