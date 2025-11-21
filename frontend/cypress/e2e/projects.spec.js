describe('Projects', () => {
  beforeEach(() => {
    // login first
    cy.visit('/login');
    cy.get('input[type="email"]').type('testuser@example.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('button').contains('Login').click();
    cy.url().should('include', '/dashboard');
  });

  it('should display projects', () => {
    cy.visit('/projects');
    cy.get('h3').should('exist'); // project titles
  });

  it('should navigate to project details', () => {
    cy.get('a').first().click();
    cy.url().should('include', '/projects/');
    cy.contains('Project Details');
  });
});
