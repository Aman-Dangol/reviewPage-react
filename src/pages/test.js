let x = new Map();
let key = JSON.stringify({ name: "A", color: "red" });
console.log(key);
x.set(key, { quantity: "1" });

let y = x;
let keyY = JSON.stringify({ name: "A", color: "red" });
y.set(keyY, {
  quantity: (y.get(keyY)?.quantity || 0) + 1,
});
console.log(y.get(JSON.stringify({ name: "A", color: "red" })));
console.log(y.entries());
