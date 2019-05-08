const math = require("./math.js");

 describe('add funtions',() => {


test("adds two numbers", () => {
  expect(math.add(3, 5)).toEqual(8);
  expect(math.add(2, -3)).toEqual(-1);
  expect(math.add(1.2, 3.1)).toEqual(4.3);
});



test("throws error", () => {
expect(() => {
  math.add('2','3');
}).toThrow();
expect(() => {
  math.add([],3);
}).toThrow();
});


 });

 describe('sub funtions',() => {

test("subract two numbers", () => {
  expect(math.subtract(5, 2)).toEqual(3);
  expect(math.subtract(10,12)).toEqual(-2);
  expect(math.subtract(-1, -2)).toEqual(1);
});

test("converts numerical string ", () => {
  expect(math.subtract('3', '2')).toEqual(1);

});


test("returns NaN for non numerical input ", () => {
  expect(math.subtract('a', 'b')).toBeNaN();
  expect(math.subtract('x', 3)).toBeNaN();
  expect(math.subtract([1,2.3])).toBeNaN();

});

 });
