describe("titleCase", function() {
    it("capitalizes the first letter of the word", function() {
        expect(titleCase1("cat")).to.equal("Cat");
    });

    it("makes all letters of the word lowercase, except for the first", function() {
        expect(titleCase1("CAT")).to.equal("Cat");
    });
    
});
