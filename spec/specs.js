describe("titleCase", function() {
    it("capitalizes the first letter of the word", function() {
        expect(titleCase1("cat")).to.equal("Cat");
    });

    it("makes all letters of the word lowercase, except for the first", function() {
        expect(titleCase1("CAT")).to.equal("Cat");
    });

    it("takes a mix of uppercase and lowercase letters and return the word in titlecase", function() {
        expect(titleCase1("KittyCat")).to.equal("Kittycat");
    })
});
