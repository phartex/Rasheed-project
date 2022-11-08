import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
show! :boolean ;
  constructor(private router : Router) { }

  ngOnInit(): void {
    
  }

  toggle(){
 this.show = !this.show; 
  };

  navigateToHome(){
    this.router.navigateByUrl('/')
  }

  navigateToHistory(){
    console.log('hjhghjg');
    this.router.navigateByUrl('/history')
  }

}
