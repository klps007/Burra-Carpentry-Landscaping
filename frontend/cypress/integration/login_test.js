describe("Testing login", function() {
  it("Goes to the login page, fills in the username and password and then clicks on the login button", function() {
    const username = "harrison";
    const password = "password";
    cy.visit("http://localhost:3000/login");
    cy.get(`[href="/login"]`).click();

    cy.get("#formBasicUserName")
      .type(username)
      .should("have.value", username);
    cy.get("#formBasicPassword")
      .type(password)
      .should("have.value", password);

    cy.get(".btn").click();
  });
});
