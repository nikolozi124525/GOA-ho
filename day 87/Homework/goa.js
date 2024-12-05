let countries = new Map();
countries.set("Georgia", "Tbilisi");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");

countries.forEach((capital, country) => {
  console.log(`${country}: ${capital}`);
});
