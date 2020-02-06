describe("Testing form validation of the 'get quote' form", function() {
  it("Button is clicked, there should be an error message", function() {
    cy.visit("http://localhost:3000/getquote");
    cy.get(".btn").click();
    cy.get(":nth-child(1) > :nth-child(1) > span").should("exist");
  });
});
