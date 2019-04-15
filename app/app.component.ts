import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gyt-app';

  constructor(private router: Router) {}

  newChange(): void {
      this.router.navigateByUrl('registrogyt');
  }

}
