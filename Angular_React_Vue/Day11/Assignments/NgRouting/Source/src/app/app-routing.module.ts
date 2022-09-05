import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'education',component:EducationComponent},
  {path:'project',component:ProjectComponent},
  {path:'skill',component:SkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
