0x02. ES6 classes

OOP             JavaScript              ES6

Configuration files
Add the files below to your project directory

package.json
Click to show/hide file contents

{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

babel.config.js
Click to show/hide file contents

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

.eslintrc.js
Click to show/hide file contents

module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

and…
Don’t forget to run $ npm install when you have the package.json



File: 0-classroom.js
Implement a class named ClassRoom:

Prototype: export default class ClassRoom
It should accept one attribute named maxStudentsSize (Number) and assigned to _maxStudentsSize


File: 1-make_classrooms.js
Import the ClassRoom class from 0-classroom.js.

Implement a function named initializeRooms. It should return an array of 3 ClassRoom objects with the sizes 19, 20, and 34 (in this order).


File: 2-hbtn_course.js
Implement a class named HolbertonCourse:

Constructor attributes:
name (String)
length (Number)
students (array of Strings)
Make sure to verify the type of attributes during object creation
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.


File: 3-currency.js
Implement a class named Currency:

- Constructor attributes:
code (String)
name (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullCurrency that will return the attributes in the following format name (code).


File: 4-pricing.js
Import the class Currency from 3-currency.js

Implement a class named Pricing:

Constructor attributes:
amount (Number)
currency (Currency)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.


File: 5-building.js
Implement a class named Building:

Constructor attributes:
sqft (Number)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter for each attribute.
Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named evacuationWarningMessage.
If a class that extends from it does not have a evacuationWarningMessage method, throw an error with the message Class extending Building must override evacuationWarningMessage


File: 6-sky_high.js
Import Building from 5-building.js.

Implement a class named SkyHighBuilding that extends from Building:

Constructor attributes:
sqft (Number) (must be assigned to the parent class Building)
floors (Number)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Implement a getter for each attribute.
Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors.


File: 7-airport.js
Implement a class named Airport:

Constructor attributes:
name (String)
code (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
The default string description of the class should return the airport code (example below).


File: 8-hbtn_class.js
Implement a class named HolbertonClass:

Constructor attributes:
size (Number)
location (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
When the class is cast into a Number, it should return the size.
When the class is cast into a String, it should return the location.


File: 9-hoisting.js
Fix this code and make it work.

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class HolbertonClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export class StudentHolberton {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  get holbertonClass() {
    return this.holbertonClass;
  }

  get fullStudentDescription() {
    return `${self._firstName} ${self._lastName} - ${self._holbertonClass.year} - ${self._holbertonClass.location}`;
  }
}


export const listOfStudents = [student1, student2, student3, student4, student5];
Result:

bob@dylan:~$ cat 9-main.js
import listOfStudents from "./9-hoisting.js";

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
    student => student.fullStudentDescription
);

console.log(listPrinted)

bob@dylan:~$ 
bob@dylan:~$ npm run dev 9-main.js
[
  StudentHolberton {
    _firstName: 'Guillaume',
    _lastName: 'Salva',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'John',
    _lastName: 'Doe',
    _holbertonClass: HolbertonClass { _year: 2020, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Albert',
    _lastName: 'Clinton',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Donald',
    _lastName: 'Bush',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  },
  StudentHolberton {
    _firstName: 'Jason',
    _lastName: 'Sandler',
    _holbertonClass: HolbertonClass { _year: 2019, _location: 'San Francisco' }
  }
]
[
  'Guillaume Salva - 2020 - San Francisco',
  'John Doe - 2020 - San Francisco',
  'Albert Clinton - 2019 - San Francisco',
  'Donald Bush - 2019 - San Francisco',
  'Jason Sandler - 2019 - San Francisco'
]
bob@dylan:~$ 


File: 10-car.js
Implement a class named Car:

Constructor attributes:
brand (String)
motor (String)
color (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
Add a method named cloneCar. This method should return a new object of the class.
Hint: Symbols in ES6


File: 100-evcar.js
Import Car from 10-car.js.

Implement a class named EVCar that extends the Car class:

Constructor attributes:
brand (String)
motor (String)
color (String)
range (String)
Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an instance of Car instead of EVCar.
