import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router"
/**
 * Created by YSingh on 19/03/17.
 */


@Component({
  selector: 'specs',
  template: `<h1>Specification page</h1>`
})

export class SpecsComponent {
  constructor(private router: Router,
              private route: ActivatedRoute) {

  }
}
