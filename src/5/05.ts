export type ManType ={
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: "Ann Alkhovka", age: 22},
    {name: "Olga Alkhovka", age: 43},
    {name: "Mikhail Alkhovka", age: 48}
]

const dimychTransformator = (man: ManType) => {
    return{
        stack: ["css", "html", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1],
    }
}

const devs = [
    {
        stack: ["css", "html", "react"],
        firstName: "Ann", lastName: "Alkhovka"
    },
    {
        stack: ["css", "html", "react"],
        firstName: "Olga", lastName: "Alkhovka"
    },{
        stack: ["css", "html", "react"],
        firstName: "Mikhail", lastName: "Alkhovka"
    }
]