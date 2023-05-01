describe('Scary Stories site', () => {
    it('should have a title that contains "Scary Stories"', () => {
      cy.visit('/');
      cy.title().should('contain', 'Scary Stories');
    });
  
    it('should have at least 3 stories listed on the homepage', () => {
      cy.visit('/');
      cy.get('.stories-list').children().should('have.length.at.least', 3);
    });
  
    it('should have a navigation menu with a link to the "About" page', () => {
      cy.visit('/');
      cy.get('.site-nav').contains('About').should('have.attr', 'href', '/about/');
    });
  });
  