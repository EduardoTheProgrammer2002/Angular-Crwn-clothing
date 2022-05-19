import { Component, Input, OnInit } from '@angular/core';
import IShopData from 'src/app/interfaces/IShop';
import { faArrowDownShortWide } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-directory',
  templateUrl: './section-directory.component.html',
  styleUrls: ['./section-directory.component.scss']
})
export class SectionDirectoryComponent implements OnInit {
  @Input() section: (IShopData | null) = null;
  faFilter = faArrowDownShortWide;
  show = false; //this is the property that allows us to display the dropdown menu when click the Filter Icon.

  constructor( private router: Router ) { }

  ngOnInit(): void {
  }

  //this function toggled the property show
  showFilters() {
    this.show = !this.show;
  }

  //this redirect the user when it clicks on any section of the dropdown 
  redirectFilter(id: number) {
    this.router.navigateByUrl(`section/${id}`);
    this.show = false;
  }

}
