import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz.js';
import React from 'react';

describe('Quiz Component', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/questions/random', (req) => {
            req.reply({
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
            });
        }).as('getQuestions');
    });

    it('renders start button', () => {
        mount(<Quiz />);
        cy.contains('Start Quiz').should('be.visible');
    });

    it('starts quiz and loads first question', () => {
        mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions').then((interception) => {
            if (interception?.response?.body) {
                console.log('API Response:', interception.response.body);
            } else {
                console.warn('Intercepted request has no valid response.');
            }
        });

        cy.get('h2').should('contain.text', 'What is 2 + 2?');

        cy.get('button').should('have.length', 2).each(($btn) => {
            console.log('Button Text:', $btn.text()); 
        });
    });

    it('answers a question correctly', () => {
        mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions').then((interception) => {
            if (interception?.response?.body) {
                console.log('API Response:', interception.response.body);
            } else {
                console.warn('Intercepted request has no valid response.');
            }
        });
    
        cy.get('h2').should('contain.text', 'What is 2 + 2?');
    
        cy.get('button').each(($btn) => {
            console.log('Button Text:', $btn.text()); 
        });
    
        cy.contains('button', '4', { timeout: 20000 })
            .should('exist')
            .and('be.visible')
            .click({ force: true });
    
        cy.get('h2').should('contain.text', 'What is 3 + 3?');
    });
    
    

    it('shows score when quiz is completed', () => {
        mount(<Quiz />);
        cy.contains('Start Quiz').click();
        cy.wait('@getQuestions');

        cy.contains('button', '4', { timeout: 20000 })
            .should('exist')
            .and('be.visible')
            .click({ force: true });

        cy.contains('button', '6', { timeout: 20000 })
            .should('exist')
            .and('be.visible')
            .click({ force: true });

        cy.contains('Quiz Completed').should('be.visible');
        cy.contains('Your score: 2').should('be.visible'); 
    });
});
