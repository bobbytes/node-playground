import { car } from './original';

function Enhancement(name, originalMethod, originalScope) {
  this.enhancedMethod = function (...args) {
    let callbackIndex;
    let parentEventId;

    if (typeof args[args.length - 1] === 'function') {
      callbackIndex = [args.length - 1];
    } else if (typeof args[args.length - 2] === 'function') {
      callbackIndex = [args.length - 2];
    }

    if (typeof args[args.length - 1] === 'string') {
      parentEventId = args[args.length - 1];
    } else {
      parentEventId = Math.floor((Math.random() * 100) + 1)
    }

    console.log(`before ${name} - parent id ${parentEventId}`);

    const originalCallback = args[callbackIndex];
    args[callbackIndex] = function () {
      originalCallback.call(this);
    };

    originalMethod.apply(originalScope, [...args, parentEventId]);
    console.log(`after ${name}`);
  };
}

if (car.start) {
  const enhancement = new Enhancement('start', car.start, car);
  car.start = enhancement.enhancedMethod;
}

if (car.stop) {
  const enhancement = new Enhancement('stop', car.stop, car);
  car.stop = enhancement.enhancedMethod;
}

if (car.checkGas) {
  const enhancement = new Enhancement('check gas', car.checkGas, car);
  car.checkGas = enhancement.enhancedMethod;
}

/*
if(car.start) {
	const original = car.start;
	car.start = function () {
		return addAdditionalLogs('start', original);
	};
}

if(car.stop) {
	const original = car.stop;
	car.stop = function () {
		return addAdditionalLogs('stop', original);
	};
}

if(car.checkGas) {
	const original = car.checkGas;
	car.checkGas = function () {
		return addAdditionalLogs('check gas', original);
	};
}
*/

car.start(function () {
  console.log('finished start');
});

console.log('###################################################');
/*car.start(function () {
	console.log('finished start');
});*/
