import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit  {
  project=  {} as Project[];
  constructor(private titleservice: Title ,private projectsService :ProjectsService) {
    titleservice.setTitle('ahmed attya . portfolio');

  }
  ngOnInit(): void {
    this.project = this.projectsService.GetProjects();
  }
}
