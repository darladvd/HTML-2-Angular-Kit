import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

  getAllBlogs(): Observable<Blog[]> {
    
    return this.http.get<Blog[]>(`${environment.url}/blog`).pipe(
      tap((d: Blog[]) => d),
      catchError(err => throwError(() => err))
    );
  }

  getBlog(id: string): Observable<Blog> {
    
    return this.http.get<Blog>(`${environment.url}/blog/${id}`).pipe(
      tap((d: Blog) => d),
      catchError(err => throwError(() => err))
    );
  }

  createBlog(blog: Blog): Observable<Blog> {
    
    return this.http.post<Blog>(`${environment.url}/blog`, blog).pipe(
      tap((d: Blog) => d),
      catchError(err => throwError(() => err))
    );
  }

  updateBlog(blog: Blog): Observable<Blog> {
    
    return this.http.put<Blog>(`${environment.url}/blog/${blog.id}`, blog).pipe(
      tap((d: Blog) => d),
      catchError(err => throwError(() => err))
    );
  }

  deleteBlog(id: string) {
    return this.http.delete<Blog[]>(`${environment.url}/blog/${id}`).pipe(
      tap((d: Blog[]) => d),
      catchError(err => throwError(() => err))
    );
  }
}
