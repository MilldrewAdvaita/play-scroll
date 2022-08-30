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
  noScrollRect = this.svg.append('rect').attr('width', 80).attr('height', 200);
  scrollGroup = this.svg
    .append('g')
    .attr('width', 8000)
    .attr('height', 200)
    .attr('x', 80)
    .attr('fill', 'navy');
  rectWidth = 50;
  rectHeight = 50;
  firstRect = this.scrollRect
    .append('rect')
    .attr('width', this.rectWidth)
    .attr('height', this.rectHeight)
    .attr('x', 30);

  constructor() {}

  ngOnInit(): void {}
}
