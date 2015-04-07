describe("titleCase", function() {
  it("makes every letter lower case", function() {
    expect(titleCase("The cat went to PETCO")).to.equal("the cat went to petco");
  });

  it("makes the first letter of every word capitalized", function() {
    expect(titleCase2("The cat went to PETCO")).to.equal("The Cat Went To Petco");
  });

  it("will exclude special words from capitalization", function() {
    expect(titleCase3("The cat went to PETCO")).to.equal("The Cat Went to Petco");
  });

  it("will exclude multiple specific words form capitalization", function() {
    expect(titleCase4("The cat went to the PETCO on 42nd")).to.equal("the Cat Went to the Petco on 42nd");
  });
});
