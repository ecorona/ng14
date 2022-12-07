import { Component, OnInit } from '@angular/core';
import { Rol } from 'src/app/auth/models/rol';
import { MenuItems } from './menu-items.collection';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  public Rol = Rol;
  public menuItems = MenuItems;
  ngOnInit(): void {
    console.log('Menu Component');
  }
}
