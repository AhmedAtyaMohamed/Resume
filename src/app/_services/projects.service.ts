/*import { Injectable } from '@angular/core';
import { Tag } from '../_models/Tag';
import { Project } from '../_models/Projects';
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projectList: Project[] = [ ];
  constructor() {}
  GetProjects() {
    return this.projectList;
  }
  GetProjectById(ProjectId: number): Project {
    let project = this.projectList.find((project) => project.Id === ProjectId);
    if (project === undefined) {
      throw new Error('project {{ProjectId}} not found');
    } else {
      return project;
    }
  }
  GetProjectsByFilter(tags: Tag[]): Project[] {
    if (tags.length === 0) {
      return this.projectList;
    } else {
      return this.projectList.filter((project) => {
        let found = false;
        project.Tags.forEach((tag) => {
          if (tags.includes(tag)) {
            found = true;
          }
        });
        return found;
      });
    }
  }
}
*/