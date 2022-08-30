import * as d3 from 'd3';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properites',
  templateUrl: './properites.component.html',
  styleUrls: ['./properites.component.scss'],
})
export class ProperitesComponent implements OnInit {
  contaier = d3.select('#container');
  svg = this.contaier.append('svg');
  viewableAreaWidth = 300;
  viewableAreaHeight = 200;
  backDrop = this.svg
    .append('rect')
    .attr('id', 'backDrop')
    .attr('height', this.viewableAreaHeight)
    .attr('width', this.viewableAreaWidth)
    .attr('fill', 'blue');
  noScrollRect = this.svg.append('rect').attr('width', 80).attr('height', 200);
  scrollGroup = this.svg
    .append('g')
    .attr('width', 8000)
    .attr('height', 200)
    .attr('x', 80)
    .attr('fill', 'green')
    .attr('clip-path', 'url(#clipPath)');

  scrollHook = this.scrollGroup
    .append('rect')
    .attr('width', this.viewableAreaWidth)
    .attr('height', this.viewableAreaHeight)
    .attr('opacity', 0);

  rectWidth = 50;
  rectHeight = 50;
  rectSpacing = 100;
  rectYposition = 75;
  firstRect = this.scrollGroup
    .append('rect')
    .attr('width', this.rectWidth)
    .attr('height', this.rectHeight)
    .attr('x', 1 * this.rectSpacing)
    .attr('y', this.rectYposition);
  secondRect = this.scrollGroup
    .append('rect')
    .attr('width', this.rectWidth)
    .attr('height', this.rectHeight)
    .attr('x', 2 * this.rectSpacing)
    .attr('y', this.rectYposition);
  thirdRect = this.scrollGroup
    .append('rect')
    .attr('width', this.rectWidth)
    .attr('height', this.rectHeight)
    .attr('x', 3 * this.rectSpacing)
    .attr('y', this.rectYposition);
  fourthRect = this.scrollGroup
    .append('rect')
    .attr('width', this.rectWidth)
    .attr('height', this.rectHeight)
    .attr('x', 4 * this.rectSpacing)
    .attr('y', this.rectYposition);
  fifthRect = this.scrollGroup
    .append('rect')
    .attr('width', this.rectWidth)
    .attr('height', this.rectHeight)
    .attr('x', 5 * this.rectSpacing)
    .attr('y', this.rectYposition);
  sixthRect = this.scrollGroup
    .append('rect')
    .attr('width', this.rectWidth)
    .attr('height', this.rectHeight)
    .attr('x', 6 * this.rectSpacing)
    .attr('y', this.rectYposition);

  clipPath = this.svg.append('clipPath').attr('id', 'clipPath');
  viewableArea = this.clipPath
    .append('rect')
    .attr('id', 'viewableArea')
    .attr('width', this.viewableAreaWidth)
    .attr('height', this.viewableAreaHeight);

  constructor() {}

  ngOnInit(): void {}
}
