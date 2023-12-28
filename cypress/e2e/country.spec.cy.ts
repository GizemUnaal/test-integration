describe("Get Countries", () => {
  it("should see all countries", () => {
    cy.visit("http://localhost:3000/");

    cy.get('[data-cy="getCountries"]').click();

    cy.get("ul").find("li").should("have.length.greaterThan", 0);

    cy.get("ul").find("li").contains("Ankara").should("exist");

    cy.get("ul").find("li").contains("Samsun").should("not.exist");
    
    cy.get("ul").find("li").contains("trabzon").should("not.exist");
  });
});
