function chaeckMinute( ){
    const  now = new Date();
const currentMinute = now. getMinutes();

if (currentMinute === 35) {
    clearInterval(intervalId);
console.console.log("35 Minute.");

}
}
const intervalId = setInterval(chaeckMinute,1000)