import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.scss'],
})
export class SectionCardComponent {
  @Input() title: string = 'item';
  constructor() {}
}
