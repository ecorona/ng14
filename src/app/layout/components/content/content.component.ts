import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
})
export class ContentComponent implements OnInit {
  ngOnInit(): void {
    console.log('Content Component');
  }
}
