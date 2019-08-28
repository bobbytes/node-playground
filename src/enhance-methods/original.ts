export class Engine {
  public start(callback: () => any): void {
    this.checkGas(() => {
      callback();
    });

    console.log('start engine');
  }

  public stop(callback: () => any): void {
    console.log('stop engine');
    callback();
  }

  public checkGas(callback: () => any): void {
    console.log('callee');
    console.log('check gas');

    let callerName;

    try {
      throw new Error();
    } catch (error) {
      const re = /(\w+)@|at (\w+) \(/g;
      const st = error.stack;
      let m;
      re.exec(st), m = re.exec(st);
      callerName = m[1] || m[2];
    }

    callback();
  }
}

export const car = new Engine();
