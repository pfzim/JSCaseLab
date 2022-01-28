/* 
    Напишите class Base
    Используйте болки "Код без ошибок" и "Код с ошибками" для проверки типизации
    После выполнения кода в консоли должно быть число 40
*/

abstract class Base {
    public x: number;
    protected y: string;
    
    constructor(x: number, y: string) {
        this.x = x;
        this.y = y;
    }

    abstract calc(y: number): number;
}

/* Код без ошибок */
class A extends Base {
    constructor(x: number) {
        super(x, "A");
    }

    public calc(y: number): number {
        return this.x + y;
    }
}

class B extends Base {
    constructor(y: string) {
        super(10, y);
    }

    public calc(y: number) {
        return parseInt(this.y) + y;
    }
}

const calculators: Base[] = [new A(10), new B("10")];
const sum = calculators.map(x => x.calc(x.x)).reduce((a, c) => a + c);
console.log(sum);
/* --- */

/*
    Комментариями @ts-expect-error помечены строчки, в которых должны быть ошибки в финальном решении.
    Если в этих строчках ошибок не будет, компилятор TS выдаст ошибку компиляции, подробнее можно прочитать здесь:
    https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-9.html#-ts-expect-error-comments
*/

/* Код с ошибками */
// @ts-expect-error
calculators[0].y;
// @ts-expect-error
new Base(10, "10");
/* --- */