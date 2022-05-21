import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '';
  URL_LIST = [
    {
      title: "Blogs",
      url: "/blog/blog-list"
    },
    {
      title: "Users",
      url: "/user/user-list"
    }

 ];
 currentUrl = "";
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listenToRouteChange();
  }

  listenToRouteChange() {
     this.router.events.subscribe((data) => {
       if(data instanceof NavigationEnd) {
         const foundURL = this.URL_LIST.find(d => d.url == data.url)
         this.title = foundURL ? foundURL.title : "";
         this.currentUrl = foundURL ? foundURL.url : "";
       }
     })
  }
}
