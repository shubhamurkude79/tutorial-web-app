import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-recent',
  templateUrl: './course-recent.component.html',
  styleUrls: ['./course-recent.component.css']
})
export class CourseRecentComponent implements OnInit {

  selectedCourse: Course;

  constructor() { }

  ngOnInit() {
  }

}
