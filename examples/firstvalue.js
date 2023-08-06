import { firstValueFrom, lastValueFrom } from 'rxjs';

export function firstvalue(){
    const source$ = new Observable<string>(observer => {

        observer.next('Hello');
      
        observer.next('World');  
      
        observer.complete();
      
      });
      
      hello();
      
      async function hello() {
      
        const value = await firstValueFrom(source$);
      
        console.log(value);
      
      }
      
      //console output
      
      //Hello
}