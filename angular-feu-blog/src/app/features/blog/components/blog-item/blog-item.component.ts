import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogActions } from '../../models/blog-actions.enum';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: Blog | undefined;
  @Output() action = new EventEmitter<{data: Blog | undefined, action: BlogActions}>();
  blogActionEdit = BlogActions.Edit;
  blogActionDelete = BlogActions.Delete;
  constructor() { }

  ngOnInit(): void {
  }


  doAction(action: BlogActions) {
    this.action.emit({data: this.blog, action});
  }

}
