import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ISection from 'src/app/interfaces/Isection';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() sections: (ISection[] | null) = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirect(event: Event, id: number) {
    event.preventDefault();
    this.router.navigateByUrl(`/section/${id}`);
  }

}
