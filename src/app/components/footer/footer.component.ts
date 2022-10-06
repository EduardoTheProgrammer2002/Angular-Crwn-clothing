import { Component, OnInit } from '@angular/core';
import { faFacebookSquare, faInstagramSquare, faGithubSquare, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  //social media icons
  facebook: IconDefinition = faFacebookSquare
  instagram: IconDefinition = faInstagramSquare
  github: IconDefinition = faGithubSquare
  linkedin: IconDefinition = faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
