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
      console.log(this.scrollYdisplacement);
      console.log(this.scrollYdisplacement <= -210);
      console.log(wheelEvent.deltaY > 0);
      if (this.scrollYdisplacement <= -210 && wheelEvent.deltaY < 0) {
        this.scrollYdisplacement = -210;
        console.log('greater than 210');
      } else if (this.scrollYdisplacement >= 0 && wheelEvent.deltaY > 0) {
        this.scrollYdisplacement += wheelEvent.deltaY;
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
