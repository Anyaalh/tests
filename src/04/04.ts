const ages = [9,12, 65, 85, 90, 100]

const predicate = (age: number) =>{
    return age > 90
}

const oldMen = [100]

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "JS", price: 100},
    {title: "HTML", price: 200},
    {title: "CSS", price: 150}
]

const cheepPredicate = (course: CoursesType) =>{
    return course.price < 160
}

const cheepCourses = [
    {title: "JS", price: 100},
    {title: "CSS", price: 150}
]