

describe("My First Test", function() {
  it(‘Admin login form accepts input and should not display admin dashboard on incorrect credentials’, () => {
    const name = “Incorrect Username”;
    const password = “incorrect password”;
    cy.get(‘input[name=username]’)
      .type(name)
      .should(‘have.value’, name)
    cy.wait(2000)
    cy.get(‘input[name=password]’)
      .type(password)
      .should(‘have.value’, password)
    cy.wait(2000)
    cy.get(‘button’).contains(‘Login’).click();
    cy.wait(3000)
  })
});