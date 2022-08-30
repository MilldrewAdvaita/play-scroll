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
      this.scrollYdisplacement += wheelEvent.deltaY;
      this.scrollableContent.attr(
        'transform',
        `translate(${this.scrollYdisplacement})`
      );
    });
  }

  handleScrollBar(displacement: number) {
    this.scrollBar.attr('transform', `translate(${this.scrollYdisplacement})`);
  }

  handleScrollTranslation() {}
}
