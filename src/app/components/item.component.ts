/**
 * Created by YSingh on 18/03/17.
 */
import { Component, Input } from "@angular/core";
import { Post } from "../interfaces/post";

@Component({
  moduleId: module.id,
  selector: 'item',
  templateUrl: 'item.component.html'
})

export class ItemComponent {
  @Input() post: Post;

  ngOnInit() {
    console.log(this.posts);
  }
}
