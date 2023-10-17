import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public timer: boolean | null = null;
  private observable: Observable<boolean>;
  private subscription: Subscription | null = null;


  constructor() {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next(this.timer = true)
      }, 10000);
    });
  }

  ngOnInit(): void {
    this.subscription = this.observable.subscribe((param) => {
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  closeModal(): void{
    this.timer = false;
  }


}
