import { Directive, ElementRef, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appLimitKey]',
  standalone: false
})
export class LimitKey {

  constructor(
    private el: ElementRef,
    private toastr: ToastrService
  ) {
    // console.log('Inside directive');
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // this.toastr.info(event.key);
  }
}
