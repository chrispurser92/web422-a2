import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bio-area',
  templateUrl: './bio-area.component.html',
  styleUrls: ['./bio-area.component.css']
})
export class BioAreaComponent {
  @Input() bio: string = "";
  @Input() name:string="";
  @Input() job:string="";
  @Output() closeBio = new EventEmitter<void>();

  onCloseBio() {
    this.closeBio.emit();
  }
}
