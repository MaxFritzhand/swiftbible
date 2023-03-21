import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Node } from '@swimlane/ngx-graph';

@Component({
  selector: 'app-node-details',
  templateUrl: './node-details.component.html',
  styleUrls: ['./node-details.component.css']
})
export class NodeDetailsComponent {
  @Input() node: Node | undefined;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}
