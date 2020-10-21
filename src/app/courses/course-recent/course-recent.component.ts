import { Component, OnInit } from '@angular/core';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-recent',
  templateUrl: './course-recent.component.html',
  styleUrls: ['./course-recent.component.css']
})
export class CourseRecentComponent implements OnInit {

  selectedCourse: Course;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.courseSelected
      .subscribe(
        (course: Course) => {
          this.selectedCourse = course;

      });
  }

}
