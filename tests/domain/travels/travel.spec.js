"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Driver_1 = require("@/domain/Driver/entity/Driver");
const Route_1 = require("@/domain/Route/entity/Route");
const Travel_1 = require("@/domain/Travel/entity/Travel");
const Vehicle_1 = require("@/domain/Vehicle/entity/Vehicle");
const makeRoute = () => {
    return new Route_1.Route('id', 10, 'name_faker', 2);
};
const makeDriver = () => {
    return new Driver_1.Driver('id', 'name_faker');
};
const makeVehicle = () => {
    return new Vehicle_1.Vehicle('id', 'name_faker', 20);
};
describe('Travel Unit Test', () => {
    it('Should return date of departure in Pt-br', () => {
        const route = makeRoute();
        const driver = makeDriver();
        const vehicle = makeVehicle();
        const travel = new Travel_1.Travel('id', 'name', route, driver, vehicle, new Date('2022/06/05'), new Date('2022/06/05'));
        expect(travel.getDateOfDepartureInBr()).toBe('05/06/2022');
    });
});
