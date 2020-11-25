'use strict';

describe('Spider', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should go down left', () => {
    cy.get('.wall').click('bottomLeft');
    cy.get('.spider').should(($spider) => {
      const spiderTop = $spider.position().top;
      const spiderLeft = $spider.position().left;

      expect(spiderTop).to.equal(350);
      expect(spiderLeft).to.equal(0);
    });
  });

  it('should go up right', () => {
    cy.get('.wall').click('topRight');
    cy.get('.spider').should(($spider) => {
      const spiderTop = $spider.position().top;
      const spiderLeft = $spider.position().left;

      expect(spiderTop).to.equal(0);
      expect(spiderLeft).to.equal(350);
    });
  });

  it('should go up', () => {
    cy.get('.wall').click('top');
    cy.get('.spider').should(($spider) => {
      const spiderTop = $spider.position().top;
      const spiderLeft = $spider.position().left;

      expect(spiderTop).to.equal(0);
      expect(spiderLeft).to.equal(175);
    });
  });

  it('should go to the center', () => {
    cy.get('.wall').click('center');
    cy.get('.spider').should(($spider) => {
      const spiderTop = $spider.position().top;
      const spiderLeft = $spider.position().left;

      expect(spiderTop).to.equal(175);
      expect(spiderLeft).to.equal(175);
    });
  });

  it('should go down right', () => {
    cy.get('.wall').click('bottomRight');
    cy.get('.spider').should(($spider) => {
      const spiderTop = $spider.position().top;
      const spiderLeft = $spider.position().left;

      expect(spiderTop).to.equal(350);
      expect(spiderLeft).to.equal(350);
    });
  });

  it(`should not move on 
      the click out of the wall`, () => {
    cy.get('body').click('top');
    cy.get('.spider').should(($spider) => {
      const spiderTop = $spider.position().top;
      const spiderLeft = $spider.position().left;

      expect(spiderTop).to.equal(0);
      expect(spiderLeft).to.equal(0);
    });
  });
});
