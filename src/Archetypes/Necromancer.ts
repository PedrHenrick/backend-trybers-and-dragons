import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private damageType: EnergyType;
  private static _createdInstances = 0;

  constructor(name: string) {
    super(name);
    this.damageType = 'mana';
    Necromancer._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }

  get energyType(): EnergyType {
    return this.damageType;
  }
}
