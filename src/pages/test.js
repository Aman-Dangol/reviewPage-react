let x = new Map();
x.set("a", { quantity: "1" });
x.set("b", [1, 2]);

let y = x;
console.log(y.get("a").quantity);

// [...y.entries()].map((data) => console.log(data));
