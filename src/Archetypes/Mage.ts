import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private damageType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this.damageType = 'mana';
    Mage._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdInstances;
  }

  get energyType(): EnergyType {
    return this.damageType;
  }
}
