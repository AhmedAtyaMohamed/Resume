import { Component,Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FirebaseDataService } from '../_services/firebase-data.service';
import { CV } from '../_models/CV';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
 styleUrls: ['./resume.component.css'],
 
})
export class ResumeComponent {
  isComputerSkillsOpen:boolean = false;
  isAchievementOpen:boolean = false;
   CV ={} as CV;
  constructor(private titleservice: Title,private render: Renderer2,private firebaseService: FirebaseDataService  ) 
   {
    titleservice.setTitle('ahmed attya . resume');
    } 
    ngOnInit(): void {      
       // Fetch data
       this.firebaseService.getData('CV').subscribe(data => {
        this.CV = data; 
       // console.log(this.ComputerSkills);

      });
    }
    DownloadFile(){
      const link = this.render.createElement('a');
      link.setAttribute('target','_blank');
      link.setAttribute('href','assets/Resume.pdf');
      link.setAttribute('download', 'AhmedattyaResume.pdf');
      
      link.click(); 
      link.remove();  
    }
}
