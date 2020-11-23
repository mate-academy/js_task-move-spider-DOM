'use strict';

Cypress.Commands.add('clickOnWall',
  (position, xCoord, yCoord) => {
    // NOTE: waiting for transition
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('.wall').click(position).wait(1000);

    cy.get('.spider').then(($spider) => {
      const spider = $spider.get(0);
      const spiderTop = spider.offsetTop;
      const spiderLeft = spider.offsetLeft;

      expect(spiderTop).to.equal(xCoord);
      expect(spiderLeft).to.equal(yCoord);
    });
  });

describe('Spider', () => {
  beforeEach('Open site', () => {
    cy.visit('/');
  });

  it('spider should go down left', () => {
    cy.clickOnWall('bottomLeft', 350, 0);
  });

  it('spider should go up right', () => {
    cy.clickOnWall('topRight', 0, 350);
  });

  it('spider should go up', () => {
    cy.clickOnWall('top', 0, 175);
  });

  it('spider should go to the center', () => {
    cy.clickOnWall('center', 175, 175);
  });

  it('spider should go down right', () => {
    cy.clickOnWall('bottomRight', 350, 350);
  });
});
