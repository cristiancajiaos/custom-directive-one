import { Directive, ElementRef, HostListener } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Directive({
  selector: '[appNoNumbersInput]',
  standalone: false,
})
export class NoNumbersInput {
  constructor(
    private el: ElementRef,
    private toastr: ToastrService
  ) {}

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const ignoredKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (ignoredKeys.includes(event.key)) {
      // this.toastr.error(`${event.key} no se admite en este input`);
      event.preventDefault();
    }
  }
}
