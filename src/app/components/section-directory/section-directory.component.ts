import { Component, Input, OnInit } from '@angular/core';
import IShopData from 'src/app/interfaces/IShop';

@Component({
  selector: 'app-section-directory',
  templateUrl: './section-directory.component.html',
  styleUrls: ['./section-directory.component.scss']
})
export class SectionDirectoryComponent implements OnInit {
  @Input() section: (IShopData | null) = null

  constructor() { }

  ngOnInit(): void {
  }

}
