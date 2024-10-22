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
      // Nouveau test pour le mot de passe et la touche Entrée
      it('Enters a password and presses Enter', () => {
        // Visiter la page
        cy.visit('https://example.cypress.io/commands/actions')
      
        // Cibler le champ de mot de passe avec un alias pour réutiliser l'élément plus tard
        cy.get('#password1').as('passwordField')
      
        // Entrer le mot de passe et simuler la touche "Entrée"
        cy.get('@passwordField')
          .type('MySecretPassword{enter}')
      
        // Vérifier que l'élément a bien la valeur avant l'envoi du formulaire
        cy.get('@passwordField')
          .should('have.value', 'MySecretPassword')
      })
  })