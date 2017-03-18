import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';

/**
 * Created by YSingh on 19/03/17.
 */

@Component({
  selector: "overview",
  template: `<h1>Overview Page</h1>`
})

export class OverviewComponent implements OnInit, OnDestroy {
  parentRouteId: number;
  private sub: any;

  constructor(private router: Router,
              private route: ActivatedRoute) {

  }

  ngOnInit() {
    // Get parent ActivatedRoute of this route.
    this.sub = this.route.parent.params.subscribe(params => {
      this.parentRouteId = +params["id"];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
