export type UserType = {
    name: string
    hair: number
    address: {city: string, house: number}
}
export type LaptopType ={
    title: string
}
export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}
export type UserWithBooksType = UserWithLaptopType & {
    books: Array<string>
}
export type UserWithCompaniesType  = UserWithBooksType & {
    companies: Array<{id: number, title: string}>
}

export const moveUser = (user: UserWithLaptopType, addressTitle: string)=>{
    return {...user, address: {...user.address, city: addressTitle}}
}

export const upgradeUserLaptop = (user: UserWithLaptopType, laptopMark: string)=>{
    return {...user, laptop: {...user.laptop, title: laptopMark}}
}

export const moveUserToNewHouse = (user: UserWithBooksType, house: number) => {
    return {...user, address: {...user.address, house}}
}

export const addNewBooks = (user:UserWithBooksType, books: string[]) => {
    return {...user, books: [...user.books, ...books]}
}

export const updateBook = (user: UserWithBooksType, oldBook: string, newBook: string)=>{
    return {...user, books: user.books.map(el=> el === oldBook ? el=newBook : el)}
}

export const removeJS = (user: UserWithBooksType, book: string) => {
    return {...user, books: user.books.filter(el=> el !== book)}
}

export const findNewJob = (user: UserWithCompaniesType, id: number, title: string) => {
    const newJob = {id: id, title: title}
    return {...user, companies: user.companies.map(el=> el.id === id? {id, title} : el) }
}