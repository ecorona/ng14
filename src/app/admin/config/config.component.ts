import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
})
export class ConfigComponent implements OnInit {
  ngOnInit(): void {
    console.log('Config Component');
  }
}
