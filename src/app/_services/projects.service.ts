import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Projects';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectList: Project[] = [
    {
      id: 0,
      name: 'MAUI App',
      summary:
        '* - maui is most technology  ',
      describtion:   '* - maui is most technology has amazing future  * - maui is most technology has amazing future',
    
      tags: [Tag.CSHARP, Tag.ANDGULAR, Tag.JAVASCRIPT],
      projectLink: 'https://github.com/ahmedattya/maui',
      pictures: [

        'https://www.softwaresuggest.com/blog/wp-content/uploads/2019/05/erp-infographics.jpg',
        'https://th.bing.com/th/id/OIP.oIrLLlE-P8nfPd_BKKzhPgHaDy?rs=1&pid=ImgDetMain',
        'https://th.bing.com/th/id/OIP.kQy3WHaz-34a1XqbxzCUmwHaGO?rs=1&pid=ImgDetMain',
        'https://www.softwaresuggest.com/blog/wp-content/uploads/2019/05/erp-infographics.jpg',
      ],
    },
    {
      id: 1,
      name: 'ERP App',
      summary: 'ERP is most technology has amazing future',
      describtion: '',
      tags: [Tag.PYTHON, Tag.REACT, Tag.JAVASCRIPT],
      projectLink: 'https://github.com/ahmedattya/maui',
      pictures: [
        'https://th.bing.com/th/id/OIP.Z0qsrJ7RvsT819KXWqZc4wHaGZ?rs=1&pid=ImgDetMain',
      ],
    },
  ];
  constructor() {}
  GetProjects() {
    return this.projectList;
  }
  GetProjectById(ProjectId: number): Project {
    let project = this.projectList.find((project) => project.id === ProjectId);
    if (project === undefined) {
      throw new Error('project {{ProjectId}} not found');
    } else {
      return project;
    }
  }
  GetProjectsByFilter(tags: Tag[]): Project[] {
    if (tags.length === 0) {
      return this.projectList;
    } 
    else {
       return this.projectList.filter((project) => {
      let found = false;
      project.tags.forEach((tag) => {
        if (tags.includes(tag)) {
          found = true;
        }
      });
      return found;
    });
    }  
   
  }
}
