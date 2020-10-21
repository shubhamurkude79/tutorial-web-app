import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  @Output() courseWasSelected = new EventEmitter<Course>();

  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onCourseSelected(course: Course) {
    this.courseWasSelected.emit(course);
  }

}
