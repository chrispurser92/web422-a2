import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.css']
})
export class WelcomeCardComponent {
  @Input() setVis: string = "";
  @Input() Description: string="";
  @Input() Title: string="";
  @Input() ButtonText: string="";
  @Input() bgColor: string="";
  @Input() toCenter: string="";
}
