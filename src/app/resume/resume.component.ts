import { Component,Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
 styleUrls: ['./resume.component.css'],
 
})
export class ResumeComponent {
  isComputerSkillsOpen:boolean = false;
  constructor(private titleservice: Title,private render: Renderer2) {
    titleservice.setTitle('ahmed attya . resume');
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
