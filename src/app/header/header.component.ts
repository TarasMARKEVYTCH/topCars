import { Component, Directive, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

}
