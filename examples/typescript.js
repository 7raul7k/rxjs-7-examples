export function typescriptex6(){
    //RxJs 6 example

const subject = new Subject<number>(42);

subject.next(); //compiles fine
}

export function typescriptex7(){
    //RxJS 7 example

const subject = new Subject<number>("");

subject.next(); //compilation error
}

export function typescriptex7void(){
    //RxJS 7 example

const subject = new Subject<void>();

subject.next();//compiles fine
}