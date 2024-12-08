var expect = chai.expect;

/* function doSomething(str, num) {
  if (typeof str !== "string") {
    throw new Error("First parameter must be a string");
  }
  return str + num;
} */

describe("MyFunctions", function () =>{
  describe("#doSomething", function () => {
    it("should concatenate the two parameters", function () {
      var x = doSomething("Hello", 5);
      expect(x).to.equal("Hello5");
    });

    it("should throw an error if first parameter is not a string", function () {
      expect(() => {
        doSomething(5, 5);
      }).to.throw(Error);
    });
  });
});
