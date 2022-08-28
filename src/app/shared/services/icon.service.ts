import { Injectable } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  fa = {
    user: faUser,
  };

  constructor() { }

  getIcon() {
    const vm = this;
    return vm.fa;
  }
}
