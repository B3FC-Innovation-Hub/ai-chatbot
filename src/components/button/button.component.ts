import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Output()
  submit = new EventEmitter();

  submitQuestion(event: Object) {
    this.submit.emit(event);
  }
}
