import { delay } from "./helpers"

const hello = (who: string) => `Hello ${who}!`

const greet = async () => {
    const result = await delay(200)
    const message = hello("World")
    console.log(`${message} after ${result}ms`)
}

greet()
