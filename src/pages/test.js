let x = new Map();
let key = JSON.stringify({ name: "A", color: "red" });
x.set(key, { quantity: "1" });

let y = x;
console.log(y.get(JSON.stringify({ name: "A", color: "red" })));
