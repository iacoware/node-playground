import { expect, test } from "@jest/globals"
import { delay } from "./helpers.js"

test("it works", async () => {
    await delay(100)
    expect("a").toBe("a")
})
