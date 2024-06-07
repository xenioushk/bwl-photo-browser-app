describe("app e2e test", () => {
  it("End user load the site.", () => {
    /*-- Test Plan --*/
    //npx cypress open
    /*1 Home Page*/
    // 1.1 Visit the app Home Page. (x)
    // 1.2 Click the "Load more" button.

    /*-- 2. Single Photo Page --*/
    // 2.1 click single photo

    /*-- 3. Breacrumb --*/

    // 3.1 Back To Album Page.
    // 3.2 Back To All Album Page
    // 3.3 Back ToHome Page

    /*-- 4. All Albums Page --*/

    // 4.1 Click "All Albums" button (x)
    // 4.2 Click the "Load more" button.
    // 4.3 Click the Last Album "Browse Photo" button.
    // 4.4 Click the second photo of that album.

    /*-- 5. Footer Links --*/

    // 5.1 Click Home Page.
    // 5.2 Click About Page.
    // 5.3 Click Terms Page.

    /*-- 6. 404 Page Test */

    /*-- 1. Home Page --*/
    cy.visit("http://localhost:3000") // 1.1
    cy.get("button").contains("Load More").click() // 1.2

    /*-- 2. Single Photo Page --*/
    cy.get("a").closest(".single-photo").first().click() // 2.1

    /*-- 3. Breacrumb --*/
    cy.get(".app-breadcrumb").find(".album").click() // 3.1
    cy.get(".app-breadcrumb").find(".all-albums").click() // 3.2
    cy.get(".app-breadcrumb").find(".home").click() // 2.3

    /*-- 4. All Albums Page --*/
    cy.get(".header-nav").find("a").contains("All Albums").click() // 4.1
    cy.get("button").contains("Load More").click() //4.2
    cy.get(".btn-browse-photos").last().click() //4.3
    cy.get("a").closest(".single-photo").eq(1).click() // 4.4

    /*-- 5. Footer Links --*/
    cy.get("a.footer-link").eq(0).click() // 5.1
    cy.get("a.footer-link").eq(1).click() // 5.1
    cy.get("a.footer-link").eq(2).click() // 5.1

    /*-- 6. 404 Page--*/
    cy.visit("http://localhost:3000/random-page-url")
  })
})
