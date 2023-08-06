import { firstValueFrom, lastValueFrom } from 'rxjs';

export function lastValue(){
    const source$ = new Observable<string>(observer => {

        observer.next('Hello');
      
        observer.next('World');  
      
        observer.complete();
      
      });
      
      hello();
      
      async function hello() {
      
        const value = await lastValueFrom(source$);
      
        console.log(value);
      
      }
      
      //console output
      
      //World
}