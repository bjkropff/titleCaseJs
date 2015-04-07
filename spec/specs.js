describe("titleCase", function() {
  it("capitalizes the first letter of the word", function() {
      expect(titleCase1("cat")).to.equal("Cat");
  });

  it("makes all letters of the word lowercase, except for the first", function() {
      expect(titleCase1("CAT")).to.equal("Cat");
  });

  it("takes a mix of uppercase and lowercase letters and return the word in titlecase", function() {
      expect(titleCase1("KittyCat")).to.equal("Kittycat");
  });

  it("takes multiple words and returns each into titlecase", function() {
      expect(titleCase1("Meat bALL1")).to.equal("Meat Ball1");
  });

  it("will treat specific words as all lower case", function() {
      expect(titleCase1("The Meat OR BAll AnD 2")).to.equal("The Meat or Ball and 2");
  });
});
