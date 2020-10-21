import { Injectable } from '@angular/core';

import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  
  private courses: Course[] = [
    new Course('Angular 8 Full Course', 'Angular 8 is released in May 2019, just like it was scheduled. The new features of the framework are the updated form of Node 10..', 'assets/images/img1.png', 1),
    new Course('Python Full Course', 'Python is one of the high-level general programming languages, interpreted, easy to use,complete and powerful. It is an object..', 'assets/images/img2.jpg', 2),
    new Course('Angular Material course', 'Angular 8 is released in May 2019, just like it was scheduled. The new features of the framework are the updated form of Node 10', 'assets/images/img3.jpg', 3),
    new Course('Entity Framework Course', 'Angular 8 is released in May 2019, just like it was scheduled. The new features of the framework are the updated form of Node 10', 'assets/images/img4.jpg', 4),
    new Course('CSS Course', 'Angular 8 is released in May 2019, just like it was scheduled. The new features of the framework are the updated form of Node 10', 'assets/images/img5.jpg', 5),
    new Course('TypeSript Course', 'Angular 8 is released in May 2019, just like it was scheduled. The new features of the framework are the updated form of Node 10', 'assets/images/img6.jpg', 6)
  ];

  getCourses() {
    return this.courses.slice();
  }
}
