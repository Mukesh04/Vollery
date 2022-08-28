import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AppService } from './shared/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Vollery';
  isSpinner = false;
  
  constructor(private appService: AppService) {}

  ngOnInit() {
    const vm = this;
    vm.appService.isSpinnerUpdated$.subscribe(value => {
      vm.isSpinner = value;
    });
  }
}
