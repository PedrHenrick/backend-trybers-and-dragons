import Race from './Race';

export default class Dwarf extends Race {
  private _lifePoints: number;
  private static _createdInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._lifePoints = 80;
    Dwarf._createdInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Dwarf._createdInstances;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }
}
