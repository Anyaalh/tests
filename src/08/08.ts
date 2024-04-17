//export const usersArray = ["Dimych", "Natasha", "Valera", "Katya"]

export const usersObj = {
    "0": "Dimych",
    "1": "Natasha",
    "2": "Valera",
    "3": "Katya"
}
type UsersType = {
    [key: string]:{id: number, name: string}
}

 const users=<UsersType> {
    "122": {id: 122, name: "Dimych"},
    "12222": {id: 12222, name: "Natasha"},
    "22": {id: 22, name: "Valera"},
    "12": {id: 12, name: "Katya"}
}

const usersArray = [
    {id: 122, name: "Dimych"},
    {id: 12222, name: "Natasha"},
    {id: 22, name: "Valera"},
    {id: 12, name: "Katya"}
]