export function topromises(){
    const source$ = new Observable<string>(observer => {

        observer.next('Hello');
      
        observer.next('World');
      
        observer.complete();
      
      });
      
      hello();
      
      async function hello() {
      
        const value = await source$.toPromise();
      
        console.log(value);
      
      }
      
      //console output
      
      //World
}

export function topromises2(){
    const source$ = new Observable<string>(observer => {

        observer.complete();
      
      });
      
      hello();
      
      async function hello() {
      
        const value = await source$.toPromise();
      
        console.log(value);
      
      }
      
      //console output
      
      //undefined
}

export function toPromiseundefined(){
    const source$ = new Observable<string>(observer => {

        observer.next(undefined);  
        
        observer.complete();
        
        });
        
        hello();
        
        async function hello() {
        
          const value = await source$.toPromise();
        
          console.log(value);
        
        }
        
        //console output
        
        //undefined
}