// graph-display.component.ts
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Graph, InternalEvent } from '@maxgraph/core';

@Component({
  selector: 'app-graph-display',
  templateUrl: './graph-display.component.html',
  styleUrls: ['./graph-display.component.css']
})
export class GraphDisplayComponent implements OnInit {

  @ViewChild('graphContainer', { static: true }) container!: ElementRef;

  ngOnInit(): void {
    this.initializeGraph();
  }

  initializeGraph(): void {
    if (!this.container) {
      console.error('Container is not initialized');
      return;
    }
    
    const container = this.container.nativeElement;
    InternalEvent.disableContextMenu(container);

    const graph = new Graph(container);
    graph.setPanning(true);

    const parent = graph.getDefaultParent();

    graph.batchUpdate(() => {
      const vertex01 = graph.insertVertex({
        parent,
        position: [10, 10],
        size: [100, 100],
        value: 'rectangle',
      });
      // ... rest of your graph setup
    });
  }
}
