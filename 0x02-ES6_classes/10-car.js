const cloneMethod = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneMethod]() {
    const { _brand, _motor, _color } = this;
    return new this.constructor(_brand, _motor, _color);
  }

  cloneCar() {
    return this[cloneMethod]();
  }
}
