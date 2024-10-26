import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Projects';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  featuredProject = {} as Project;
  constructor(    private titleservice: Title,    private projectsService: ProjectsService  ) 
  {
    titleservice.setTitle('ahmed attya . home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectsService.GetProjectById(1);
  }
}
