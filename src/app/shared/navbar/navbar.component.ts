import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
show! :boolean ;
  constructor() { }

  ngOnInit(): void {
    
  }

  toggle(){
 this.show = !this.show;
    
    
  }

}
