import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-talent-card',
  templateUrl: './talent-card.component.html',
  styleUrls: ['./talent-card.component.css']
})
export class TalentCardComponent {
  @Input() name: string="";
  @Input() job: string="";
  @Input() rate: string="";
  @Input() color: string="";
  @Input() path: string="";
  @Input() bio: string="";

  showBio: boolean = false;

  toggleBio() {
    this.showBio = !this.showBio;
  }
}
