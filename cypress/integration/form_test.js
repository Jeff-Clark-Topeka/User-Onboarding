describe('Form - tests for our form inputs', function() {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });
    it('adds text to inputs and submits form', function () {
        cy.get('[data-cy="name"]').type('Jeff').should('have.value', 'Jeff')
        cy.get('[data-cy="email"]').type('email@gmail.com').should('have.value', 'email@gmail.com')
        cy.get('[data-cy="password"]').type('abc123').should('have.value', 'abc123')
        cy.get('[data-cy="terms"]').check().should('be.checked')
        cy.get('[data-cy="submit"]').click()
    })
})