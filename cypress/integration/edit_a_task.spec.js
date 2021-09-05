describe('Edit a tasks', () => {
    it('edits the task ', () => {
      cy.visit('http://localhost:3000');

      cy.get('[data-testid="deleteButton"]')
      .click();
  
      cy.get('[data-testid="taskInput"]')
        .type('New Task');
  
      cy.get('[data-testid="addButton"]')
        .click();
  
      cy.get('[data-testid="taskInput"]')
        .should('have.value', '');

      cy.contains('New Task');

      cy.get('[data-testid="editButton"]')
        .click();

        cy.get('[data-testid="editField"]')
            .type("Edited ");

        cy.get('[data-testid="cancelButton"]')
            .click()

        cy.contains('New Task');

        cy.get('[data-testid="editButton"]')
        .click();

        cy.get('[data-testid="editField"]')
            .type("Task");

        cy.get('[data-testid="doneButton"]')
            .click()

        cy.contains('Edited Task');

        cy.get('New message').should('not.exist');
      
    });
  });