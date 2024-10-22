import { CommonModule } from '@angular/common';
import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule], // <-- Add CommonModule here
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
@Input() ProjectName: string ="";
@Input() Describtion: string ="";
@Input() Tags: string[] =[];
}
