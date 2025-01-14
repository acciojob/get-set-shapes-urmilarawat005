//complete this code
class Rectangle {}

class Square extends Animal {}
// Rectangle class
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Getter for width
  get width() {
    return this._width;
  }

  // Getter for height
  get height() {
    return this._height;
  }

  // Method to calculate area of the rectangle
  getArea() {
    return this._width * this._height;
  }
}

// Square class that extends Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call the Rectangle constructor with side for both width and height
    super(side, side);
  }

  // Method to calculate perimeter of the square
  getPerimeter() {
    return 4 * this.width;  // Since width == height in a square
  }
}

// Example Usage:

const rectangle = new Rectangle(5, 10);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 10
console.log(rectangle.getArea()); // Output: 50

const square = new Square(7);
console.log(square.width); // Output: 7
console.log(square.height); // Output: 7
console.log(square.getArea()); // Output: 49
console.log(square.getPerimeter()); // Output: 28

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
