import { Component } from '@angular/core';
import { Node, Edge } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  nodes: Node[] = [
    {
      id: '1',
      label: 'Node 1'
    },
    {
      id: '2',
      label: 'Node 2'
    }
  ];

  edges: Edge[] = [
    {
      id: '1-2',
      source: '1',
      target: '2'
    }
  ];
}
