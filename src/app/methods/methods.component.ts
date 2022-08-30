import { ProperitesComponent } from '../properites/properites.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.scss'],
})
export class MethodsComponent extends ProperitesComponent {
  constructor() {
    super();
    this.handleWheelScroll();
  }

  handleWheelScroll() {
    this.scrollGroup.on('wheel', (wheelEvent: WheelEvent) => {
      if (this.scrollYdisplacement <= 210 || wheelEvent.deltaY < 0) {
        this.scrollYdisplacement += wheelEvent.deltaY;
      } else {
        this.scrollYdisplacement = 210;
      }

      this.scrollableContent.attr(
        'transform',
        `translate(${this.scrollYdisplacement})`
      );
      this.scrollBar.attr(
        'transform',
        `translate(${-this.scrollYdisplacement})`
      );
    });
  }
}
