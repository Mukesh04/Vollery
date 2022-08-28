import { Component, OnInit } from '@angular/core';
import { IconService } from 'src/app/shared/services/icon.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  fa: any;
  constructor(
    private _icon: IconService) { }

  ngOnInit(): void {
    const vm = this;
    vm.fa = vm._icon.getIcon();
  }

}
