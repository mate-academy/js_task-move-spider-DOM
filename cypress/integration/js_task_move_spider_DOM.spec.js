'use strict';

describe('Test', () => {
  beforeEach('Open site', () => {
    cy.visit('http://localhost:8080/');
  });

  it('spider follow up', () => {
    cy.get('[class="wall"]').click('bottomLeft');
    cy.get('.spider').should('have.attr', 'style', 'top: 350px; left: 0px;');
    cy.wait(1000);
    cy.get('[class="wall"]').click('topRight');
    cy.get('.spider').should('have.attr', 'style', 'top: 0px; left: 350px;');
    cy.wait(1000);
    cy.get('[class="wall"]').click('center');
    cy.get('.spider').should('have.attr', 'style', 'top: 175px; left: 175px;');
    cy.wait(1000);
    cy.get('[class="wall"]').click('bottomRight');
    cy.get('.spider').should('have.attr', 'style', 'top: 350px; left: 350px;');
    cy.wait(1000);
    cy.get('[class="wall"]').click('top');
    cy.get('.spider').should('have.attr', 'style', 'top: 0px; left: 175px;');
  });
});
