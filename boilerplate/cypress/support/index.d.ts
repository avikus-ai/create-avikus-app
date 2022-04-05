import { SetupWorkerApi, rest } from "msw"

declare global {
  namespace Cypress {
    interface Window {
      msw: {
        worker: SetupWorkerApi
        rest: typeof rest
      }
    }

    // -- example --
    //   interface Chainable {
    //     /**
    //      * Custom command to login
    //      * @example cy.login('username', 'password')
    //      */
    //     login(email: string, password: string): Chainable<any>
    //   }
  }
}
