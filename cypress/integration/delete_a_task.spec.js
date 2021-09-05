describe('Delete a tasks', () => {
    it('Deletes the task ', () => {
      cy.visit('http://localhost:3000');
  
      cy.get('[data-testid="taskInput"]')
        .type('New message');
  
      cy.get('[data-testid="addButton"]')
        .click();
  
      cy.get('[data-testid="taskInput"]')
        .should('have.value', '');

      cy.contains('New message');

      cy.get('[data-testid="deleteButton"]')
        .click({multiple: true});
    

        cy.get('[data-testid="taskName"]')
            .should('not.exist');  

        cy.get('New message').should('not.exist');
      
    });
  });