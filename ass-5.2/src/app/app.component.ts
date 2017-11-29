import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
          <div id="login">
          <div class="form-wrap">

          <input type="text" placeholder="FirstName" class="form-control"> 
          <button type="button" class="btn btn-large btn-block btn-primary">Login</button>
          
          </div>
          </div>
            `,
  styleUrls: ['./app.component.css']
})
export class RootComponent {
}
