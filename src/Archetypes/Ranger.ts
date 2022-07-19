import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private damageType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this.damageType = 'stamina';
    Ranger._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }

  get energyType(): EnergyType {
    return this.damageType;
  }
}
