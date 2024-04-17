import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";

export const addSkills = (student: StudentType, skill: string) => {
    student.education.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const doesStudentLive = (st: StudentType, cityName: string) => {
    return student.address.city.cityTitle === cityName
}

export function changeBudget (governmentBuildings: GovernmentBuildingsType, newBudget: number) {
    return governmentBuildings.budget += newBudget
}

export const repairHouse = (housesType: HousesType)=> {
 housesType.repaired = true
}

export function toFireStaff(governmentBuildings: GovernmentBuildingsType, num: number) {
     governmentBuildings.staffCount -= num
}

export const toHireStaff = (governmentBuildings: GovernmentBuildingsType, num: number) => {
    governmentBuildings.staffCount += num
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All of ${city.citizensNumber}.`
}