import {StudentType} from "../02/02";
import {addSkills, doesStudentLive, makeStudentActive} from "./03";

let student: StudentType
beforeEach(()=> {
    student = {
        id: 1,
        name: "Ann",
        age: 22,
        isActive: false,
        address: {
            city: {
                cityTitle: "Minsk",
                country: "Belarus"
            },
            streetTitle: "Kasintca 99"
        },
        education: [
            {
                id: 1,
                title: "BSMU"
            },
            {
                id: 2,
                title: "IT-INCUBATOR"
            }
        ]
    }
})

test ("new skill should be added", ()=> {
    addSkills(student, "JS")

    expect(student.education.length).toBe(3)
    expect(student.education[2].title).toBe("JS")
    expect(student.education[2].id).toBeDefined()
})

test("student should be active", ()=>{
    expect(student.isActive).toBe(false)
    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test ("does student live in city?", ()=> {

    let result1 = doesStudentLive(student, "Moscow")
    let result2 = doesStudentLive(student, "Minsk")


    expect(result1).toBe(false)
    expect(result2).toBe(true)
})