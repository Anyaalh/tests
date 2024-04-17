import {ManType} from "./06";

let props: ManType
beforeEach(()=> {
    props = {
        name: "Dimych",
        age: 32,
        lessons: [{title: "1"}, {title: "2"}],
        address: {
            street: {
                title: "Nezavisimosty street"
            }
        }
    }
})

test("", () => {

  const {lessons, age} = props
    const {title} = props.address.street

    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
    expect(title).toBe("Nezavisimosty street")


})