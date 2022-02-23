console.log("inside warmup file");
class Circle {
    constructor(radius) {
        this.radius = radius;

    }
    getDiameter() {
        console.log(this.radius * 2);
    }
    getCircumference() {
        console.log(this.radius * 3.14 * 2);  
    }
    getArea() {
        console.log(3.14 * Math.pow(this.radius, 2));
    }
}
const circle = new Circle(10);
circle.getDiameter();
circle.getArea();
circle.getDiameter();
circle.getCircumference();



