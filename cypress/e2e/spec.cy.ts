import dayjs from 'dayjs';

it('should test after login page', () => {
  const today = dayjs().format('M/D/YYYY');
  cy.visit('/after-login');
  cy.get('.mat-focus-indicator')
    .click()
    .then(() => {
      cy.get('.mat-calendar-body-active').click();
    });
  cy.get('#mat-input-0').invoke('val').should('equal', today);
});

it('should test before login page', () => {
  cy.visit('/before-login');
  cy.get('.font-bold').should('have.text', 'This is flexbox example using tailwind');
  cy.get('app-before-login > p').should('have.text', 'before-login works!');
});
