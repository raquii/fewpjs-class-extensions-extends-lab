class Polygon {
    constructor(sides){
        this.sides = sides;
        this.count = this.sides.length;
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        let perim = 0
        for(const value of this.sides){
            perim += value;
        }
        return perim;
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.count !== 3) return;

        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];

        return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2));
    }
}

class Square extends Polygon{
    get isValid(){
        if(this.count !== 4) return;

        const side1 = this.sides[0];
        const side2 = this.sides[1];
        const side3 = this.sides[2];
        const side4 = this.sides[3];

        return (side1 === side2 && side1 === side3 && side1 === side4);
    }

    get area(){
        return this.sides[0] * this.sides[0];
    }
}