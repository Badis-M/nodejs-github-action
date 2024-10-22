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
    // Visiter une page avec un champ mot de passe (exemple : un formulaire de connexion)
    cy.visit('https://example.cypress.io/commands/actions')

    // Cibler le champ mot de passe (tu dois adapter ce sélecteur à ton propre formulaire)
    cy.get('#password1')
      .type('MySecretPassword{enter}')  // Entrer le mot de passe et simuler la touche "Entrée"
      .should('have.value', 'MySecretPassword')  // Vérifier que le mot de passe a bien été saisi

    // Ajouter des assertions supplémentaires pour vérifier le comportement après avoir appuyé sur Entrée
    // Par exemple, vérifier que l'utilisateur est redirigé ou qu'une validation a eu lieu
    })
  })