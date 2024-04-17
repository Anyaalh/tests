test('ages should be older 90', ()=> {

    const ages = [9,12, 65, 85, 90, 100]

    const oldMen = ages.filter(age => age > 90)

    expect(oldMen.length).toBe(1)
    expect(oldMen[0]).toBe(100)

})

test("courses should be cheep < 160", ()=> {

    const courses = [
        {title: "JS", price: 100},
        {title: "HTML", price: 200},
        {title: "CSS", price: 150}
    ]
    const cheepCourses = courses.filter(course => course.price < 160)

    expect(cheepCourses.length).toBe(2)
    expect(cheepCourses[0].title).toBe("JS")
})

test("get only completed tasks", ()=> {
    const tasks =[
        {id: 1, title: "Bread", isDone: false},
        {id: 2, title: "Milk", isDone: true},
        {id: 3, title: "Coffee", isDone: true},
        {id: 4, title: "Tea", isDone: false},
        {id: 5, title: "Eggs", isDone: true},
        {id: 6, title: "Sugar", isDone: false}
    ]
    const shopList = tasks.filter(task=>task.isDone)

    expect(shopList.length).toBe(3)
    expect(shopList[0].id).toBe(2)
})