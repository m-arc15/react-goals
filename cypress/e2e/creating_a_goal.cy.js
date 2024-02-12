// The steps a user would take interacting with app:
// - visiting the web site
// - entering the text "Improving physical health and fitness"
// - clicking an add goal button
// - confirming that the "Improving physical health and fitness" user entered appears somewhere on screen

describe("Creating a goal", () => {
  it("Displays the entered goal in the list", () => {
    const newGoal = "Improving physical health and fitness";
    cy.visit("http://localhost:3000");
    cy.get('[data-testid="goalText"]').type(newGoal);
    cy.get('data-testid="addButton').click();
    cy.get('[data-testid="goalText"]').type("");
    cy.contains(newGoal);
  });
});
