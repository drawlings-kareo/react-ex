let y = 2, z = 1;

var m = 8;

export default m;

export const x = 5;
export function f() { return 3; }

export {y};
export const n = 4;

export class C {
    constructor(p) {
        this.p = p
    }

    g() {
        return this.p
    }

    f() {
        return this.g();
    }
}