import { Component } from '@angular/core';
import { GraphDisplayComponent } from './graph-display/graph-display.component'
// import {type CellStyle, Graph, InternalEvent} from '@maxgraph/core';

/*@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `<h1>Display first graph here:</h1>`,
  styleUrls: ['./app.component.css'],
})*/
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `./graph-display/graph-display.component`,
})
export class AppComponent {
  title = 'homes';
}
