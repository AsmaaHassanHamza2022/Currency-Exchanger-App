import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  constructor(private router:Router){}

  onNavigate(){
    this.router.navigate(['/details?from=EUR&to=USD&amount=1'])
  }

}
