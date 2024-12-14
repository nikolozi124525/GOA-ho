//  ორი განზომილებიანი მასივი, რომელიც შეიცავს ტემპერატურებს თითოეული დროისთვის სხვადასხვა დღეებში
let temp = [[20, 22, 23, 21], [15, 16, 12, 10]];

//  მასივი, რომელიც განსაზღვრავს დროის პერიოდების სახელებს
let timesOfDay = ["Morning", "Afternoon", "Noon", "Evening"];

// გავდივართ `temp`-ის თითოეულ ელემენტზე (მთელი დღის ტემპერატურაზე)
for (let i = 0; i < temp.length; i++) {
    console.log("Good morning");  // 4. დაბეჭდეთ "Good morning" ყოველი დღის დაწყებამდე
    
    // გავდივართ თითოეული day's temperatures (ანუ დროის ეტაპის მიხედვით)
    for (let j = 0; j < temp[i].length; j++) {
        //  თითოეული ტემპერატურის შესახებ ინფორმაცია ვიბეჭდებით
        console.log(`Current temperature during ${timesOfDay[j]} is: ${temp[i][j]}°C`);
    }
}
