describe('Tech Quiz End-to-End Test', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: [
        { 
          question: 'What is 2 + 2?', 
          answers: [
            { text: '4', isCorrect: true },
            { text: '5', isCorrect: false }
          ]
        },
        { 
          question: 'What is 3 + 3?', 
          answers: [
            { text: '5', isCorrect: false },
            { text: '6', isCorrect: true }
          ]
        }
      ]
    }).as('getQuestions');
  });

  it('should allow the user to take the quiz and view their score', () => {
    cy.visit('http://127.0.0.1:3001'); 

    cy.contains('Start Quiz').click();
    
    cy.wait('@getQuestions'); 

    cy.get('.card h2').should('contain.text', 'What is 2 + 2?'); 
    cy.contains('button', '4').click(); 

    cy.get('.card h2').should('contain.text', 'What is 3 + 3?');
    cy.contains('button', '6').click(); 

    cy.contains('Quiz Completed').should('be.visible');
    cy.get('.alert').should('contain.text', 'Your score: 2'); 
  });
});
