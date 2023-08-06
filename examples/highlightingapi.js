export function api(){
    concat(

        of(1).pipe(
    
          tap(() => console.log('tap 1')),
    
          delay(100),
    
          finalize(() => console.log('Finalize 1'))
    
          ),
    
        of(2).pipe(
    
          tap(() => console.log('tap 2')),
    
          delay(100),
    
          finalize(() => console.log('Finalize 2'))
    
          )
    
        )
    
        .subscribe(x => console.log(x));
}

export function function2(){
    concat(

        of(1).pipe(
    
          tap(() => console.log('tap 1')),
    
          delay(100),
    
          finalize(() => console.log('Finalize 1'))
    
          ),
    
        of(2).pipe(
    
          tap(() => console.log('tap 2')),
    
          delay(100),
    
          finalize(() => console.log('Finalize 2'))
    
          )
    
        )
    
        .subscribe(x => console.log(x));
}