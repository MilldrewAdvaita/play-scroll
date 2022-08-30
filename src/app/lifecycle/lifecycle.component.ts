import { Component, OnInit } from '@angular/core';
import { MethodsComponent } from '../methods/methods.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss'],
})
export class LifecycleComponent extends MethodsComponent implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
