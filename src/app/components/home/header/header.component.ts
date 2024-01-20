import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged = false
  isOpen = true
  constructor() { }

  ngOnInit(): void {
  }

  setOpen(): void {
    this.isOpen = !this.isOpen
  }

}
