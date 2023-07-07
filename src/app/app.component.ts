import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Observables';

  // observer is the call back function which is the subscriber waiting for data
  myObservable = new Observable((obsever)=>
  {
    console.log('Obervable starts')
    setTimeout(()=> {obsever.next("1")}, 1000)
    setTimeout(()=> {obsever.next("2")}, 2000)
    setTimeout(()=> {obsever.next("3")}, 3000)
    // setTimeout(()=> {obsever.error(new Error ('Something went wrong! [lease try again later'))}, 3000)
    // whenever the observable emits an error the next values after the error will not be emitted 
    setTimeout(()=> {obsever.next("4")}, 4000)
    setTimeout(()=> {obsever.next("5")}, 5000)
    setTimeout(()=> {obsever.complete()}, 6000)
    // once the complete signal is emitted no values can be emiited by the observable
    
    // obsever.next("1")
    // obsever.next("2")
    // obsever.next("3")
    // obsever.next("4")
    // obsever.next("5")

    // all the data are emitted one by one (obsever.next("1"))
  });

  // the obervable only emits the data of if there is a subscriber

  // create subscriber
  // the subscribe as 3 call back functions next error completer all there are optional
  ngOnInit(){
    // the next call back function will be called 5 times
    this.myObservable.subscribe((val) =>{
      console.log(val)
    }, 
    // handling the error message
    (error) =>{
      alert(error.message)
    },
    // to show complete signal
    () =>{
      alert('Observable has compleated emitting all the values')
    }
    )
  }
}
