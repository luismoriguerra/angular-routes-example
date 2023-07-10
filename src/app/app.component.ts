import { Component } from '@angular/core';
import { SidebarService } from './modules/shared/services/Sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public sidebarService: SidebarService) {}
  title = 'luisinsights';
}
