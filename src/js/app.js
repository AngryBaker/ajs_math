
class Character {
    constructor(name) {
        this.name = name;
        this.attack = 100;
    }
    
}

class Wizards extends Character {
    constructor(name){
        super(name);
        this.stoned = false;
    }

    setStoned() {
        this.stoned = true;
    }

    getStoned() {
        return this.stoned;
    }

    setAttack(attackInt) {
        this.attack = attackInt;
    }

    getAttack(range) {
        let actualAttack ;
        if (range === 1) {
            actualAttack = this.attack;
        } else {
            actualAttack = this.attack * (1 - (range - 1) * 0.1);
        }

        if (this.getStoned()){
            actualAttack = actualAttack - Math.log2(range) * 5
        }
        return actualAttack;
    }
}

export default class Magician extends Wizards{

}
