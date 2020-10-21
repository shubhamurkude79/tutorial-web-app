import { Component, Input, OnInit } from '@angular/core';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

  onSelected() {
    this.coursesService.courseSelected.emit(this.course);
  }

}
