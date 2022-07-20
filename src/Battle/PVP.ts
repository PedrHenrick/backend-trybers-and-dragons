import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _playerTwo: Fighter | Character;

  constructor(player: Fighter | Character, playerTwo: Fighter | Character) {
    super(player);
    this._playerTwo = playerTwo;
  }

  fight(): number {
    let winner = 0;
    for (let index = 1; index < 100; index += 1) {
      this.player.attack(this._playerTwo);
      if (this._playerTwo.lifePoints <= 0) {
        winner = 1;
        return winner;
      }
      this._playerTwo.attack(this.player);
      if (this.player.lifePoints <= 0) {
        winner = -1;
        return winner;
      }
    }
    return winner;
  }
}
