import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BlogActions } from '../../models/blog-actions.enum';

@Component({
  selector: 'app-blog-commandbar',
  templateUrl: './blog-commandbar.component.html',
  styleUrls: ['./blog-commandbar.component.scss']
})
export class BlogCommandbarComponent implements OnInit {
  @Output() action = new EventEmitter();
  blogActionCreate = BlogActions.Create;
  constructor() { }

  ngOnInit(): void {
  }

  doAction(action: BlogActions) {
    this.action.emit({data: undefined, action});
  }

}
