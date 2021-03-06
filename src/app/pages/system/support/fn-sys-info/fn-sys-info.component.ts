import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fn-sys-info',
  templateUrl: './fn-sys-info.component.html'
})
export class FnSysInfoComponent {
  @Input() FN_version;
  @Input() FN_model;
  @Input() FN_memory;
  @Input() FN_serial;
  @Input() FN_instructions;

  constructor() { }

}
