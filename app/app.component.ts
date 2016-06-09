import { Component } from 'angular2/core';
import { ControlGroup, FormBuilder } from 'angular2/common';
import { Observable } from 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/fromArray';
// import 'rxjs/add/observable/empty';
// import 'rxjs/add/observable/range';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/observable/flatMap'; ??

@Component({
    selector: 'my-app',
    template: `
        <!--<form [ngFormModel]="form">
            <input type="text" ngControl="search">
        </form>-->
    `
})
export class AppComponent {
    // form: ControlGroup;
    
    // constructor(fb: FormBuilder) {
    //     this.form = fb.group({
    //         search: []
    //     });
        
    //     var search = this.form.find('search');
    //     search.valueChanges
    //         .debounceTime(400)
    //         .map(str => (<string>str).replace(' ', '-'))
    //         .subscribe(x => console.log(x));
    // }
    
    constructor() {
        // var startDates = [];
        // var startDate = new Date();
        
        // for (var day=-2; day<=2; day++) {
        //     var date = new Date(
        //         startDate.getFullYear(),
        //         startDate.getMonth(),
        //         startDate.getDate() + day);
                
        //         startDates.push(date);
        //     }
            
        //     Observable
        //     .fromArray(startDates)
        //     .map(date =>{
        //         console.log("Getting deals for date " + date);
        //         return [1, 2, 3];
        //     })
        //     .subscribe(x => console.log(x));
            
            // var observable1 = Observable.empty(); // Just an empty observable (when would this be needed?)
            // observable1.subscribe(x => console.log("Observable 1: " + x));
            
            // var observable2 = Observable.range(1, 5); // Gives an inclusive range.
            // observable2.subscribe(x => console.log("Observable 2: " + x));
            
            // var observable3 = Observable.fromArray([1, 2, 3]); // Gives each value in the array separately.
            // observable3.subscribe(x => console.log("Observable 3: " + x));
            
            // var observable4 = Observable.of([1, 2, 3]); // Gives all the values from the array at once.
            // observable4.subscribe(x => console.log("Observable 4: " + x));
            
            // var observable = Observable.interval(1000);
            // observable
            // .flatMap(x => {
            //     console.log("Calling the server to get the latest news...");
            //     return Observable.of([1, 2, 3]);
            // })
            // .subscribe(news => console.log(news));
            
            // var userStream = Observable.of({
            //     userId: 1, username: 'jess'
            // }).delay(2000);
            
            // var tweetStream = Observable.of([1, 2, 3]).delay(1500);
            
            // Observable
            // .forkJoin(userStream, tweetStream)
            // .map(joined => new Object({ user: joined[0], tweets: joined[1] }))
            // .subscribe(result => console.log(result));
            
            // var observable = Observable.throw(new Error("Rascal failed."));
            
            // observable.subscribe(
            //     x => console.log(x),
            //     error => console.error(error)
            // );
            
            // var counter = 0;
            
            // var ajaxCall = Observable.of('url')
            //                 .flatMap(() => {
            //                     if (++counter < 2)
            //                     return Observable.throw(new Error("Rascal request failed"));
                                
            //                     return Observable.of([1, 2, 3]);
            //                 })
            // ajaxCall
            //     .retry(3)
            //     .subscribe(
            //         x => console.log(x),
            //         error => console.error(error)
            //     );
            
            // var remoteDataStream = Observable.throw(new Error("Something failed."));
            // var remoteDataStream = Observable.of([4, 5, 6]);
            
            // remoteDataStream
            //     .catch(err => {
            //         var localDataStream = Observable.of([1, 2, 3]);
            //         return localDataStream;
            //     })
            //     .subscribe(x => console.log(x));
            
            // var remoteDataStream = Observable.of([1, 2, 3]).delay(5000);
            
            // remoteDataStream
            // .timeout(1000)
            // .subscribe(
            //     x => console.log(x),
            //     error => console.error(error)
            // );
            
            // var observable = Observable.throw(new Error("error"));
            var observable = Observable.fromArray([1, 2, 3]);
            
            observable.subscribe(
                x => console.log(x),
                error => console.log(error),
                () => console.log("completed"));
            
        }
    }