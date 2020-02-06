describe("Testing the navbar links", function() {
  it("Goes to the homepage, then clicks one each link in the navbar one by one and navigates to those pages", function() {
    cy.visit("http://localhost:3000/");
    cy.get(`[href="/gallery"]`).click();
    cy.url().should("include", "/gallery");

    cy.get(`[href="/reviews"]`).click();
    cy.url().should("include", "/reviews");

    cy.get(`[href="/getquote"]`).click();
    cy.url().should("include", "/getquote");

    cy.get(`[href="/login"]`).click();
    cy.url().should("include", "/login");
  });
});
