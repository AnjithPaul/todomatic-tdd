describe('Edit a tasks', () => {
    it('edits the task ', () => {
      cy.visit('http://localhost:3000');

      cy.get('[data-testid="deleteButton"]')
      .click();
  
      cy.get('[data-testid="taskInput"]')
        .type('Completed Task');
  
      cy.get('[data-testid="addButton"]')
        .click();

        cy.get('[data-testid="checkbox"]')
            .click();

        cy.get('[data-testid="taskInput"]')
            .type('Incomplete Task');
  
        cy.get('[data-testid="addButton"]')
            .click();

        cy.get('[data-testid="Active"')
            .click();
        
        cy.contains('Incomplete Task');

        cy.get('Completed Task').should('not.exist');

        cy.get('[data-testid="Completed"')
            .click();
    
        cy.contains('Completed Task');

        cy.get('Incomplete Task').should('not.exist');
    
        cy.get('[data-testid="All"')
            .click();

        cy.contains('Incomplete Task');

        cy.contains('Completed Task')
      
    });
  });