import { Farm } from "src/common/models/resource_facility/farm.model";
import { Mine } from "src/common/models/resource_facility/mine.model";
import { ResourceFacility } from "src/common/models/resource_facility/resource_facility.model";

export class ResourceFacilityProductionFactory{
    resource_facility_name: string[];
    iron_cost: number[];

    constructor() {
        this.resource_facility_name = [];
        this.resource_facility_name.push("farm");
        this.resource_facility_name.push("mine");

        this.iron_cost = [];
        this.iron_cost.push(10);
        this.iron_cost.push(15);
    }

    //Proizvodnja objekta za proizvodnju
    produceResourceFacility(what_facility: string, x_coor: number, y_coor: number): ResourceFacility{
        let resource_facility: ResourceFacility;

        switch(what_facility) {
            case "farm":
                resource_facility = new Farm(x_coor, y_coor);
                break;
            case "mine":
                resource_facility = new Mine(x_coor, y_coor);
                break;
        }

        return resource_facility;
    }

    //Vracanje opisa za sve proizvodnje koje mogu da se naprave
    resourceFacilitiesDescription(): {resource_facility_name: string[], iron_cost: number[]} {
        return {resource_facility_name: this.resource_facility_name, iron_cost: this.iron_cost};
    }
}