import * as NpsController from "./NpsController"
// @ponicode
describe("execute", () => {
    let inst: any

    beforeEach(() => {
        inst = new NpsController.NpsController()
    })

    test("0", async () => {
        await inst.execute(undefined, undefined)
    })
})
