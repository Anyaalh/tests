import {GovernmentBuildingsType, HousesType} from "../02/02_02";

export function getStreetsTitlesOfGovernmentBuildings (buildings: Array<GovernmentBuildingsType>){
    return buildings.map(b=> b.address.street.title)
}

export function getStreetsTitlesOfHouses(houses: Array<HousesType>){
    return houses.map(h=> h.address.street.title)
}