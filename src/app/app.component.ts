import { Component } from '@angular/core';
import { chowdrahBio } from './chowdrahClass';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chowdrahA3';

  bio: chowdrahBio = {
    fname:"Rahul", lname: "Chowdhary", snumber: 991658927, username: "chowdrah", email: "chowdrah@sheridancollege.ca", personal_image_name: "photo",
     rejection_image_name: "cross"
  }
}
