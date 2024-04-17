import {
    addNewBooks, findNewJob,
    moveUser,
    moveUserToNewHouse, removeJS, updateBook,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType, UserWithCompaniesType,
    UserWithLaptopType
} from "./9";

test("change address", ()=>{

    let user: UserWithLaptopType={
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const newUser = moveUser(user, "Kiev")

    expect(user).not.toBe(newUser)
    expect(user.address).not.toBe(newUser.address)
    expect(user.laptop).toBe(newUser.laptop)
    expect(newUser.address.city).toBe("Kiev")

})

test("upgrade laptop to macbook", ()=>{

    let user: UserWithLaptopType={
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const newUser = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(newUser)
    expect(user.laptop).not.toBe(newUser.laptop)
    expect(newUser.laptop.title).toBe("Macbook")

})

test("move user to new house", ()=>{

    let user: UserWithBooksType={
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["js", "css", "react", "html"]
    }

    const newUser = moveUserToNewHouse(user, 11)

    expect(user).not.toBe(newUser)
    expect(user.books).toBe(newUser.books)
    expect(newUser.address.house).toBe(11)

})

test("add new books to user", ()=>{

    let user: UserWithBooksType={
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["js", "css", "react", "html"]
    }

    const newUser = addNewBooks(user, ["ts", "redux"])

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books.length).toBe(6)
    expect(newUser.books).toStrictEqual(["js", "css", "react", "html","ts", "redux"])

})

test("update book to user", ()=>{

    let user: UserWithBooksType={
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["js", "css", "react", "html"]
    }

    const newUser = updateBook(user, "js", "ts")

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books.length).toBe(4)
    expect(newUser.books).toStrictEqual(["ts", "css", "react", "html"])

})

test("remove js book to use", ()=>{

    let user: UserWithBooksType={
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["js", "css", "react", "html"]
    }

    const newUser = removeJS(user, "js")

    expect(user).not.toBe(newUser)
    expect(user.books).not.toBe(newUser.books)
    expect(newUser.books.length).toBe(3)
    expect(newUser.books).toStrictEqual(["css", "react", "html"])

})

test("user get new job", ()=>{

    let user: UserWithCompaniesType={
        name: "Dimych",
        hair: 32,
        address: {
            city: "Minsk",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["js", "css", "react", "html"],
        companies: [
            {id: 1, title: "Epam"},
            {id: 2, title: "IT-INCUBATOR"}
        ]
    }

    const newUser = findNewJob(user,  2, "google")

    expect(user).not.toBe(newUser)
    expect(newUser.companies.length).toBe(2)
    expect(newUser.companies[1].title).toBe("google")

})