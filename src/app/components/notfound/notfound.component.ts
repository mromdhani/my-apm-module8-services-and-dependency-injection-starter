import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  navigateToWelcome() {
     this._router.navigateByUrl('/welcome');
  }

}
