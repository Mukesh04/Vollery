import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
// import { ViewImageComponent } from '../components/view-image/view-image.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(
    private router: Router,
    // private toastr: ToastrService,
    // private modalService: NgbModal,
    private _ds: DataService) { }

  navigate(path: string) {
    const vm = this;
    this.router.navigate([path]);
  }

  getDDMMYYYYfromEPOC(value: any) {
    if (value) {
      const date = new Date(value);
      let d = date.getUTCDate().toString();
      let m = (date.getUTCMonth() + 1).toString();
      const y = date.getUTCFullYear().toString();
      if (d.length === 1) {
        d = '0' + d;
      }
      if (m.length === 1) {
        m = '0' + m;
      }
      return d + '/' + m + '/' + y;
    } else {
      return '';
    }
  }

  success(message: string) {
    const vm = this;
    // vm.toastr.success(message);
  }

  error(message: string) {
    const vm = this;
    // vm.toastr.error(message);
  }

  warning(message: string) {
    const vm = this;
    // vm.toastr.warning(message);
  }

}
