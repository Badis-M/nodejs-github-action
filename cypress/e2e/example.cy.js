describe('My First E2E Test', () => {
    it('Visits the Cypress test page', () => {
      // Visite le site de test de Cypress
      cy.visit('https://example.cypress.io')
  
      // Vérifie qu'il y a un lien contenant le texte 'type'
      cy.contains('type').click()
  
      // Vérifie que l'URL contient '/commands/actions'
      cy.url().should('include', '/commands/actions')
  
      // Vérifie que l'élément contient un input
      cy.get('.action-email')
        .type('test@example.com')
        .should('have.value', 'test@example.com')
    })
  })