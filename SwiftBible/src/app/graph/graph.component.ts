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
    },
    {
      id: '3',
      label: 'Node 3'
    },
    {
      id: '4',
      label: 'Node 4'
    }
  ];

  links = [
    // ...existing links
    {
      id: 'link1',
      source: 'node1',
      target: 'node2',
      label: 'Link 1'
    },
    {
      id: 'link2',
      source: 'node2',
      target: 'node3',
      label: 'Link 2'
    },
    {
      id: 'link3',
      source: 'node3',
      target: 'node1',
      label: 'Link 3'
    }
    // add more links as needed
  ];

  edges: Edge[] = [
    {
      id: '2-3',
      source: '2',
      target: '3'
    }
  ];
  selectedNode: Node | undefined;
  isSlideOutVisible = false;

  onSelectNode(node: Node): void {
    this.selectedNode = node;
    this.isSlideOutVisible = true;
  }

  onCloseSlideOut(): void {
    this.isSlideOutVisible = false;
  }

}
