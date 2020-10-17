import { Component, Input, OnInit } from '@angular/core';
import { CourseListComponent } from '../course-list/course-list.component';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-featured',
  templateUrl: './course-featured.component.html',
  styleUrls: ['./course-featured.component.css']
})
export class CourseFeaturedComponent implements OnInit {
  @Input() course: Course;
  @Input() courses: CourseListComponent;

  constructor() { }

  ngOnInit() {
  }

}
