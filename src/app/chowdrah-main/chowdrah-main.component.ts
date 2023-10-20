import { Component,Input } from '@angular/core';
import { chowdrahBio } from '../chowdrahClass';

@Component({
  selector: 'app-chowdrah-main',
  templateUrl: './chowdrah-main.component.html',
  styleUrls: ['./chowdrah-main.component.css']
})
export class ChowdrahMainComponent {
chowdrahAge: number = 21;
chowdrahMin: number = 25;
chowdrahMax: number = 65;

chowdrahCountry: string = "India";
@Input() chowdrahMain!: chowdrahBio;
backgroundColor(){
  return this.chowdrahCountry.toLowerCase() === 'india' ? "grey" : "lightgrey";
}

textColor(){
  return this.chowdrahCountry.toLowerCase() === 'india' ? "white" : "black";
}

textStyle(){
  return this.chowdrahCountry.toLowerCase() === 'india' ? "italic" : "normal";
}

textDecoration(){
  return this.chowdrahCountry.toLowerCase() === 'india' ? "none" : "underline";
}

}
