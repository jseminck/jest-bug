describe("root", function() {
  beforeEach(function() {
    this.x = 1;
  });

  describe("inner", function() {
    beforeEach(function() {
      console.log(this.x) // yarn 20: undefined -- yarn 19: 1
    })

    it("works", function() {
      expect(1).toEqual(1);
    })
  })
})
