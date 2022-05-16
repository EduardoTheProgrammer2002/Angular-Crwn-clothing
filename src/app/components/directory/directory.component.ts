import { Component, OnInit } from '@angular/core';
import { DirectoryService } from 'src/app/services/directory.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.scss']
})
export class DirectoryComponent implements OnInit {

  constructor(
    public directory: DirectoryService
  ) { }

  ngOnInit(): void {
  }

}
