import { Component,Input } from '@angular/core';
import { chowdrahBio } from '../chowdrahClass';

@Component({
  selector: 'app-chowdrah-head',
  templateUrl: './chowdrah-head.component.html',
  styleUrls: ['./chowdrah-head.component.css']
})
export class ChowdrahHeadComponent {
  @Input() chowdrahHead!: chowdrahBio;
}
