/* eslint-disable no-undef */
const capitalize = require("./app");
const reverseString = require("./reverse");
const calculate = require("./calc");
const cipher = require("./caesar");
const analyzeArray = require("./analyze");

test("Returns the capitalized first letter of a string", () => {
   expect(capitalize("car")).toEqual("C");
});

test("Returns the string reversed", () => {
   expect(reverseString("boat")).toEqual("taob");
});

test("2 + 2 = 4", () => {
   expect(calculate(2, "+", 2)).toEqual(4);
});

test("6 * 4 = 24", () => {
   expect(calculate(6, "*", 4)).toEqual(24);
});

test("98 - 5 = 93", () => {
   expect(calculate(98, "-", 5)).toEqual(93);
});

test("144 / 12 = 12", () => {
   expect(calculate(144, "/", 12)).toEqual(12);
});

test("cat => dbu", () => {
   expect(cipher("cat")).toEqual("dbu");
});

test("They're Going to Die!!! ZzZ", () => {
   expect(cipher("They're Going to Die!!! ZzZ")).toEqual("Uifz'sf Hpjoh up Ejf!!! AaA");
});

test("Array", () => {
   expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
      average: 3,
      min: 1,
      max: 5,
      length: 5,
   });
});
