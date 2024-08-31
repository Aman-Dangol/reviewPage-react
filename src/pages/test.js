let obj = {
  first: "john",
  last: "doe",
};

obj = { ...obj, first: "joe" };
console.log(obj);
