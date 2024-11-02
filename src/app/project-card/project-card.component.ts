import { CommonModule } from '@angular/common';
import { Component,Input  } from '@angular/core';
import { Project } from '../_models/Projects';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
 
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
@Input() Project ={} as Project;
bsModalRef?:  BsModalRef;
constructor(private modalService: BsModalService) { 

}
OnpoenProjectModal(){
  const modalOptions: ModalOptions={
    class: 'modal-lg', 
    initialState:{
      project:this.Project
    }
  };
  this.bsModalRef=this.modalService.show(ProjectModalComponent,modalOptions);
}
} 