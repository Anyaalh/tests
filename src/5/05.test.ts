import {ManType} from "./05";

let people: Array<ManType> = []

beforeEach(()=>{
    people = [
        {name: "Ann Alkhovka", age: 22},
        {name: "Olga Alkhovka", age: 43},
        {name: "Mikhail Alkhovka", age: 48}
    ]
})

test("should get array of greeting messages", ()=> {

    const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome.`)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe("Hello Ann. Welcome.")
})