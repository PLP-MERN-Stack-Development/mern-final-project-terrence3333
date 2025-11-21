describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login with valid credentials', () => {
    cy.get('input[type="email"]').type('testuser@example.com');
    cy.get('input[type="password"]').type('password123');
    cy.get('button').contains('Login').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard');
  });

  it('should show error for invalid credentials', () => {
    cy.get('input[type="email"]').type('wrong@example.com');
    cy.get('input[type="password"]').type('wrongpass');
    cy.get('button').contains('Login').click();

    cy.contains('Login failed');
  });

  it('should navigate to register page', () => {
    cy.contains('Register').click();
    cy.url().should('include', '/register');
  });
});
