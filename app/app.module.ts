import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CpoLoginPageComponent } from './cpo-login-page/cpo-login-page.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { CpoHomeComponent } from './cpo-home/cpo-home.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddProjectManagerComponent } from './add-project-manager/add-project-manager.component';
import { CpoViewProjectComponent } from './cpo-view-project/cpo-view-project.component';
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
import { PMHomeMainComponent } from './pm/pm-home-main/pm-home-main.component'

@NgModule({
  declarations: [
    AppComponent,
    CpoLoginPageComponent,
    LoginComponent,
    CpoHomeComponent,
    AddProjectComponent,
    AddProjectManagerComponent,
    CpoViewProjectComponent,
    CpoViewTaskComponent,
    CpoAddNotificationComponent,
    CpoInboxPmComponent,
    CpoSettingsComponent,
    CpoHomeSecondComponent,
    PMHomeComponent,
    PMAddTeamComponent,
    PMManageTeamComponent,
    PMCommunicateTeamComponent,
    PMAddTaskComponent,
    PMManageTaskComponent,
    PMCommunicateCpoComponent,
    PMSettingsComponent,
    PMHomeMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
