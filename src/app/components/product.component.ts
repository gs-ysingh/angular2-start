/**
 * Created by YSingh on 19/03/17.
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  template: `
    <p>Product Details: {{id}}</p>
    <!-- Product information -->
    <nav>
      <a [routerLink]="['overview']">Overview</a>
      <a [routerLink]="['specs']">Technical Specs</a>
    </nav>
    <router-outlet></router-outlet>
    <!-- Overview & Specs components get added here by the router -->
  `
})
export class ProductComponent implements OnInit, OnDestroy {
  id: number;
  private sub: any;
  private parentRouteId: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.parentRouteId = +params["id"];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
