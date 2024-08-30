import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CpoHomeComponent } from './cpo-home/cpo-home.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { CpoViewProjectComponent } from './cpo-view-project/cpo-view-project.component';
import { AddProjectManagerComponent } from './add-project-manager/add-project-manager.component';
import { CpoViewTaskComponent } from './cpo-view-task/cpo-view-task.component';
import { CpoAddNotificationComponent } from './cpo-add-notification/cpo-add-notification.component';
import { CpoInboxPmComponent } from './cpo-inbox-pm/cpo-inbox-pm.component';
import { CpoSettingsComponent } from './cpo-settings/cpo-settings.component';
import { CpoHomeSecondComponent } from './cpo-home-second/cpo-home-second.component';
import { PMHomeComponent } from './pm/pmhome/pmhome.component';
import { PMAddTeamComponent } from './pm/pm-add-team/pm-add-team.component';
import { PMManageTeamComponent } from './pm/pm-manage-team/pm-manage-team.component';
import { PMCommunicateTeamComponent } from './pm/pm-communicate-team/pm-communicate-team.component';
import { PMAddTaskComponent } from './pm/pm-add-task/pm-add-task.component';
import { PMManageTaskComponent } from './pm/pm-manage-task/pm-manage-task.component';
import { PMCommunicateCpoComponent } from './pm/pm-communicate-cpo/pm-communicate-cpo.component';
import { PMSettingsComponent } from './pm/pm-settings/pm-settings.component';
import { PMHomeMainComponent } from './pm/pm-home-main/pm-home-main.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "cpo/home", component: CpoHomeComponent, 
    children: [
      { path: "project/add", component: AddProjectComponent },
      { path : "project/view", component: CpoViewProjectComponent},
      { path : "project/manager/add", component: AddProjectManagerComponent},
      { path : "task", component: CpoViewTaskComponent},
      { path : "notification/add", component: CpoAddNotificationComponent},
      { path : "project/manager/inbox", component: CpoInboxPmComponent},
      { path : "settings", component: CpoSettingsComponent},
      {path : "main", component : CpoHomeSecondComponent}
    ]
  },
  {path : "pm/home", component: PMHomeComponent,
    children: [
      {path : "main", component: PMHomeMainComponent},
      {path : "add/team", component: PMAddTeamComponent},
      {path : "manage/team", component: PMManageTeamComponent},
      {path : "communicate/team", component: PMCommunicateTeamComponent},
      {path : "add/task", component: PMAddTaskComponent},
      {path : "manage/task", component: PMManageTaskComponent},
      {path : "cpo/speak", component: PMCommunicateCpoComponent},
      {path : "settings", component: PMSettingsComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
