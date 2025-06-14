import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent { 
  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.themeService.initializeTheme();
  }

}
