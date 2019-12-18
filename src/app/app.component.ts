import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ERP';

  name = "Sheldon Metoyer";


  test(){
    console.log("oh no, you click me!!");

    this.name = "changed!";

  }
}
