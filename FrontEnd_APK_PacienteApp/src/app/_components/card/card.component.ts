import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from "@angular/animations";
import * as kf from './keyframes';

import { Subject } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]

})
export class CardComponent {

  public index = 0;
  @Input()
  parentSubject: Subject<any>|any;



  animationState: string|any;
  constructor() { }

  ngOnInit() {
    this.parentSubject.subscribe((event:any) => {
      this.startAnimation(event)
    });
  }

  startAnimation(state:any) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state:any) {
    this.animationState = '';
    this.index++;
  }


  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }

}