import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogActions } from '../../models/blog-actions.enum';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Array<Blog> = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogService.getAllBlogs().subscribe((data: Blog[]) => {
         this.blogs = data
    });
  }

  doAction(event: {data: Blog | undefined, action: BlogActions}) {
    switch(event.action) {
      case BlogActions.Edit: {
         this.router.navigate(['blog', 'blog-transaction', event.data?.id])
         return;
      }

      case BlogActions.Delete: {
        if(!event.data) {
          return;
        }
        this.blogService.deleteBlog(event.data.id).subscribe(() => {
          this.getBlogs()
        })
        return;

      }

      case BlogActions.Create : {
        this.router.navigate(['blog', 'blog-transaction', 'create'])
        return;
      }
      default: ""
    }
  }

}
