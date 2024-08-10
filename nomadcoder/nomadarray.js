const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "nico"];
const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

console.log(daysOfWeek, nonsense);

// Get Item from Array
console.log(daysOfWeek[5]);

// Ad one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

