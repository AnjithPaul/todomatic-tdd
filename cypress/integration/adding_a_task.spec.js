describe('Adding a task', () => {
    it('Displays the task ', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="taskInput"]')
        .type('New message');
  
      cy.get('[data-testid="addButton"]')
        .click();
  
      cy.get('[data-testid="taskInput"]')
        .should('have.value', '');
  
      cy.contains('New message');
    });
  });