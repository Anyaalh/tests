type LocalCityType = {
    cityTitle: string
    country: string
}
type AddressType = {
    city: LocalCityType
    streetTitle: string
}
type EducationType = {
    id:number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    education: Array<EducationType>
}

export const student: StudentType = {
    id: 1,
    name: "Ann",
    age: 22,
    isActive: true,
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