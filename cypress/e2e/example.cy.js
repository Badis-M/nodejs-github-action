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
    it('Enters full name and presses Enter', () => {
        // Visiter la page
        cy.visit('https://example.cypress.io/commands/actions')
      
        // Cibler le champ full name avec l'ID correct #fullName1
        cy.get('#fullName1').as('fullNameField')
      
        // Simuler la saisie de "Badis Merakchi" avec focus et blur explicites
        cy.get('@fullNameField')
          .type('Badis Merakchi', { force: true })
      
        // Vérifier que le champ contient bien "Badis Merakchi"
        cy.get('@fullNameField')
          .should('have.value', 'Badis Merakchi')
      })
  })