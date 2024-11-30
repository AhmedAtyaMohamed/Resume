import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
//import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Projects';

import { FirebaseDataService } from '../_services/firebase-data.service';
import { CV } from '../_models/CV';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
   
  cv={}as CV ;
  constructor(titleservice: Title,private firebaseService: FirebaseDataService  ) 
  {
    titleservice.setTitle('ahmed attya . home');
  }
  ngOnInit(): void {
    //this.featuredProject = this.projectsService.GetProjectById(1);
     // Fetch data
     this.firebaseService.getData('CV').subscribe(data => {
      this.cv = data; 
    });
  }
}
