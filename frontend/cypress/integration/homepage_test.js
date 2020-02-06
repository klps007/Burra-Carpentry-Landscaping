describe("My First Test", function() {
  it("Visits homepage and renders the text", function() {
    cy.visit("http://localhost:3000");
    cy.get(".btn").click();
  });
});
