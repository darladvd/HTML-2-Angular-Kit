import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogActions } from '../../models/blog-actions.enum';
import { Blog } from '../../models/blog.model';
import { BlogService } from '../../services/blog.service';


@Component({
  selector: 'app-blog-transaction',
  templateUrl: './blog-transaction.component.html',
  styleUrls: ['./blog-transaction.component.scss']
})
export class BlogTransactionComponent implements OnInit {
  form!: FormGroup;
  tagsFormArray!: FormArray;
  action!: BlogActions;
  buttonLabel: string = "";
  constructor(private fb: FormBuilder,
     private route: ActivatedRoute,
     private blogService: BlogService,
     private router: Router) { }

  ngOnInit(): void {
   this.buildForm();
  }

  buildForm() {
    this.form = this.fb.group({
       id: [""],
       user: this.fb.group({
         id: [""],
         name: [""],
         username: [""]
       }),
       title: [""],
       description: [""],
       image: [""],
       modified: [""],
       published: [],
       tags: new FormArray([])
    });
    this.tagsFormArray = this.form.get("tags") as FormArray;
    this.checkAction();
  }

  getBlog() {
    this.blogService.getBlog(this.route.snapshot.params['id']).subscribe(data => {
       this.form.patchValue(data);
       this.getTags(data.tags)
    })
  }

  checkAction() {
     if(this.route.snapshot.params['id'] === "create") {
        this.tagsFormArray.insert(0, new FormControl());
        this.action = BlogActions.Create;
        this.buttonLabel = "Create";
     } else {
        this.getBlog();
        this.action = BlogActions.Edit;
        this.buttonLabel = "Update";
     }
  }

  getTags(tags: Array<string>) {
    for(let tag of tags) {
      console.log(tag)
      const control = new FormControl(tag);
      (this.form.get("tags") as FormArray).push(control);
      
    }
  }

  addTag() {
    (this.form.get("tags") as FormArray).push(new FormControl());
  }

  deleteTag(i: number) {
    (this.form.get("tags") as FormArray).removeAt(i);
  }

  doAction() {
    if(this.action === BlogActions.Create) {
      console.log(this.form.getRawValue() as Blog)
      this.blogService.createBlog(this.form.getRawValue() as Blog).subscribe(data => {
        this.router.navigate(['blog', 'blog-list']);

      });
    } 
    else if (this.action === BlogActions.Edit) {
      console.log(this.form.getRawValue() as Blog)
      this.blogService.updateBlog(this.form.getRawValue() as Blog).subscribe(data => {
        this.router.navigate(['blog', 'blog-list']);
      });
    }
  }

}
