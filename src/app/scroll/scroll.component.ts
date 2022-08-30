import { Component, OnInit } from '@angular/core';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss'],
})
export class ScrollComponent extends LifecycleComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
