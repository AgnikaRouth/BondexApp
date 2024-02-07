import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  iconSize: string = '45px';

  onClick() {
    this.iconSize = '45px';
  }
}
