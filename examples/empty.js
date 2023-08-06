import { lastValueFrom } from 'rxjs';

export function empty(){
    const source$ = new Observable<string>(observer => {

        observer.complete();
      
      });
      
      hello();
      
      async function hello() {
      
        const value = await lastValueFrom(source$);
      
        console.log(value);
      
      }
      
      //console output
      
      //Error: no elements in sequence
}

export function empty2(){
    Const source$ = new Observable<string>(observer => {

        observer.complete();
      
      });
      
      hello();
      
      async function hello() {
      
        const value = await lastValueFrom(source$, {
      
                                      defaultValue: 'DEFAULT' });
      
        console.log(value);
      
      }
      
      //console output
      
      //DEFAULT
}