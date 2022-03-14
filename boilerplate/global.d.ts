import { SetupWorkerApi, rest } from "msw"

declare global {
  interface Window {
    msw: {
      worker: SetupWorkerApi
      rest: typeof rest
    }
  }
}
