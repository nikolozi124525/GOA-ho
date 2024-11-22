
const objectsArray = [
    { name: "Alice", age: 25, profession: "Engineer" },
    { name: "Bob", age: 30, profession: "Designer" },
    { name: "Charlie", age: 35, profession: "Teacher" }
  ];
  
  
  for (const obj of objectsArray) {
    console.log("Object values:");
    
    for (const key in obj) {
      console.log(`${key}: ${obj[key]}`);
    }
    console.log("---");
  }
  