import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
})
export class WelcomeComponent implements OnInit {
  ngOnInit(): void {
    console.log('Welcome Component');
  }
}
