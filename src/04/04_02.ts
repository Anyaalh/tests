import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";

export function demolishHousesOnStreet (city: CityType, street: string){
    return city.houses = city.houses.filter(city=> city.address.street.title !== street)
}

export function getBuildingsWithStaffCountGreatThen(buildings:Array<GovernmentBuildingsType>, staff: number){
    return buildings.filter(staff => staff.staffCount > 500)
}