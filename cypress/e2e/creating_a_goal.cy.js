describe("Creating a goal", () => {
  it("displays the entered goal in the list", () => {
    // The steps a user would take interacting with app:
    // - defining a new goal
    const newGoal = "Improving physical health and fitness";

    // - visiting the web site
    cy.visit("http://localhost:3000");

    // - entering the new goal text
    cy.get('[data-testid="goalText"]').type(newGoal);

    // - clicking an Add Goal button
    cy.get('[data-testid="addButton"]').click();

    // - confirming that the input field is empty
    cy.get('[data-testid="goalText"]').should("have.value", "");

    // - confirming that the new goal user entered appears somewhere on screen
    cy.contains(newGoal);
  });
});
