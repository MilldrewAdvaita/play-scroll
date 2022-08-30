import * as d3 from 'd3';
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
    this.handleDrag();
  }

  handleWheelScroll() {
    this.scrollGroup.on('wheel', (wheelEvent: WheelEvent) => {
      wheelEvent.stopPropagation();
      if (this.scrollYdisplacement <= -210 && wheelEvent.deltaY < 0) {
        this.scrollYdisplacement = -210;
      } else if (this.scrollYdisplacement >= 0 && wheelEvent.deltaY > 0) {
      } else {
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
  handleDrag() {
    console.log('hello from handle drag');
    const dragBehavior = d3.drag().on('drag', (mouseEvent: any) => {
      console.log('hello from drag event');
      console.log(mouseEvent.x);
    });
    this.scrollBar.call(dragBehavior);
  }
}
