import { Car } from "./Cars";
import { People } from "./People";

export interface CarOwner {
    car: Car,
    owner: People | undefined
}