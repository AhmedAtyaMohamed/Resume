import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Projects';
import { Tag } from '../_models/Tag';
//import { ProjectsService } from '../_services/projects.service';
import { FirebaseDataService } from '../_services/firebase-data.service';
import { CV } from '../_models/CV';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  project :  Array<Project>  ;
  /*isCollapsed: boolean = true;
  python: boolean = false;
  angular: boolean = false;
  c: boolean = false;
  react: boolean = false;
  csharp: boolean = false;*/
 //    private projectsService: ProjectsService,
  constructor(
    private titleservice: Title,

    private firebaseService: FirebaseDataService  
  ) 
  {
    titleservice.setTitle('ahmed attya . portfolio');
  }
  ngOnInit(): void {
      this.GetProjects();
       
  }
  GetProjects() : void {
 // Fetch data
 this.firebaseService.getData('CV').subscribe(data => {  this.project = data.Project; });
  } 
  /*Filter(): void  {
    let filterTags: Tag[] = [];

    filterTags = this.python ? filterTags.concat(Tag.PYTHON) : filterTags;
    filterTags = this.angular ? filterTags.concat(Tag.ANDGULAR) : filterTags;
    filterTags = this.c ? filterTags.concat(Tag.C) : filterTags;
    filterTags = this.react ? filterTags.concat(Tag.REACT) : filterTags;
    filterTags = this.csharp ? filterTags.concat(Tag.CSHARP) : filterTags;
 
    this.project = this.projectsService.GetProjectsByFilter(filterTags);
  }
  ResetFilter(): void  {
     this.isCollapsed == false? this.isCollapsed = this.isCollapsed: this.isCollapsed = false;
    this.python = false;
    this.angular = false;
    this.c = false;
    this.react = false;
    this.csharp = false;

    this.isCollapsed = false;

   // this.GetProjects(); 
  }*/
}
