type UsersType = {
    [key: string]:{id: number, name: string}
}

let users: UsersType

beforeEach(()=> {
    users = {
        "122": {id: 122, name: "Dimych"},
        "12222": {id: 12222, name: "Natasha"},
        "22": {id: 22, name: "Valera"},
        "12": {id: 12, name: "Katya"}
    }
})

test("should update corresponding user", ()=> {


    users["12"].name = "Ekaterina"
    delete users["22"]

    expect(users["12"].name).toBe("Ekaterina")
    expect(users["22"]).toBe(undefined)
})