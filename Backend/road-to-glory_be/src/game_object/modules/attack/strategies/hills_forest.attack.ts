import { Unit } from "src/common/models/unit/unit.model";
import { AttackStrategy } from "./attack.strategy";

export class HillsForestAttack implements AttackStrategy{
    attack(attacker: Unit, defender: Unit): { attacker: Unit; defender: Unit; } {
        defender.health -= 1.1 * attacker.strenght;
        attacker.health -= 0.9 * defender.strenght;

        return {
            attacker,
            defender
        }
    }
}