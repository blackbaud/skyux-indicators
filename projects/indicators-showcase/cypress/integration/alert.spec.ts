describe('Alert', () => {
  beforeEach(() => {
    cy.visit('/visual/alert');
    cy.viewport(1200, 800);
  });

  it('should match basic screenshot', () => {
    cy.get('.sky-alert-visual').screenshot();
    cy.percySnapshot();
  });
});
