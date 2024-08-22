// let myName: string = 'Origin';
// let number: number = 10;
// let bool: boolean = true;

// -- Array
// let myCar: string[];
// myCar = ['Volvo', 'BMW', 10];

// -- Tuple Array
// let myBike: number[];
// myBike = [10, 20, 30];

// console.log({ myName });
// console.log({ number });
// console.log({ bool });
// console.log({ myCar });
// console.log({ myBike });

// -- Tipe data custom
// type PersonType = {
// 	name: string;
// 	age: number;
// 	address: string;
// 	balance?: number;
// 	isMarried: boolean;
// };

// let person: PersonType;

// person = {
// 	name: 'John Doe',
// 	age: 30,
// 	address: '123 Main St',
// 	// balance: 1000,
// 	isMarried: false,
// };

// console.log({ person });

// -- Arrow Function
// const create2 = (): void => 'Hello World';

// -- Function
// function create(x: number, y: number): string {
// 	return `${x} plus ${y} = result is ${x + y}`;
// }

// const result = create(10, 20);
// console.log(result);

// -- Union Type
// type man = string;
// type woman = boolean;

// type gender = man | woman;

// let julia: gender;

// console.log('julia');

// -- Interface + Type
type coreCount = 6 | 8 | 10 | 12 | 20;
type coreName = 'dual core' | 'quad core';

type Core = coreCount | coreName;

// Parent interface
interface PC {
	brand: string;
	baseModel: string;
	modelName: string;
	coreName: coreName;
	totalCore: Core;
	totalThread: number;
	clockSpeed: number;
}

// child interface
interface Intel extends PC {
	turboBoost: boolean;
}

// child interface
interface AMD extends PC {
	precisionBoost?: boolean;
}

const CoreI7: Intel = {
	brand: 'Intel',
	baseModel: 'Core i7',
	modelName: '17400 KF',
	coreName: 'dual core',
	totalCore: 12,
	totalThread: 20,
	clockSpeed: 5,
	turboBoost: true,
};
const Ryzen7: AMD = {
	brand: 'AMD',
	baseModel: 'Ryzen 7',
	modelName: '5800X',
	coreName: 'quad core',
	totalCore: 8,
	totalThread: 25,
	clockSpeed: 8,
	precisionBoost: true,
};
const Ryzen2: AMD = {
	brand: 'AMD',
	baseModel: 'Ryzen 2',
	modelName: '5800X',
	coreName: 'quad core',
	totalCore: 6,
	totalThread: 8,
	clockSpeed: 8,
	precisionBoost: false,
};

function createIntel(buildSpec: Intel): void {
	console.log(`
    -----------------------
    Your ${buildSpec.brand} PC specification:
    -----------------------
    Brand: ${buildSpec.brand}
    Base Model: ${buildSpec.baseModel}
    Model Name: ${buildSpec.modelName}
    Core Name: ${buildSpec.coreName}
    Total Core: ${buildSpec.totalCore}
    Total Thread: ${buildSpec.totalThread}
    Clock Speed: ${buildSpec.clockSpeed}
    Turbo Boost: ${buildSpec.turboBoost}
    `);
}
function createAMD(buildSpec: AMD): void {
	console.log(`
    -----------------------
    Your ${buildSpec.brand} PC specification:
    -----------------------
    Brand: ${buildSpec.brand}
    Base Model: ${buildSpec.baseModel}
    Model Name: ${buildSpec.modelName}
    Core Name: ${buildSpec.coreName}
    Total Core: ${buildSpec.totalCore}
    Total Thread: ${buildSpec.totalThread}
    Clock Speed: ${buildSpec.clockSpeed}
    Precision Boost: ${buildSpec.precisionBoost}
    `);
}

createIntel(CoreI7);
createAMD(Ryzen7);
createAMD(Ryzen2);
