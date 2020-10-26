import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'secretSantaSelector';
  public isOpen = true;


  isOpenFunction(currentValue) {

    this.isOpen = !currentValue;
  }
}
