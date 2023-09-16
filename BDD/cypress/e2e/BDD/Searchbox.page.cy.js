const URL = 'http://zero.webappsecurity.com/index.html';
const QUERY = '#searchTerm';

class Searchbox{
    static visit(){
        cy.visit(URL);
    }
    static TypeQuery(online){
        cy.get(QUERY).type(online);
    }
    static SearchAssertion(){
        cy.get('h2').should('contain.text', 'Search Results')
        cy.get('a').should('contain.text', 'Zero - Free Access to Online Banking')
        cy.get('a').should('contain.text', 'Zero - Online Statements')
    }
}

export default Searchbox;