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
  scrollRect = this.svg
    .append('rect')
    .attr('width', 8000)
    .attr('height', 200)
    .attr('x', 80)
    .attr('fill', 'navy');
  content = scroll;

  constructor() {}

  ngOnInit(): void {}
}
