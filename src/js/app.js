
class Character {
    constructor(name) {
        this.name = name;
        this._attack = 100;
    }
    
}

class Wizards extends Character {
    constructor(name){
        super(name);
        this._stoned = false;
        
    }

    set stoned(value) {
        if (value === true || value === false) {
            this._stoned = value;
        }
    }

    get stoned() {
        return this._stoned;
    }

    set attack(attackInt) {
        this._attack = attackInt;
    }

    get attack() {
        return this._attack;
    }

    getRangeAttack(range) {
        let actualAttack;
        if (range === 1) {
            actualAttack = this.attack;
        } else {
            actualAttack = this.attack * (1 - (range - 1) * 0.1);
        }
        if (this.stoned){
            actualAttack = actualAttack - Math.log2(range) * 5
        }
        return actualAttack;
    }
}

export default class Magician extends Wizards{

}
