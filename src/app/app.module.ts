import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { HomepageComponent } from './homepage/homepage.component';


// routing 
import { APP_ROUTING } from './app.routing';
import { TopbarComponent } from './shared/components/topbar/topbar.component';
import { SubmissionComponent } from './submission/submission.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopbarComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTING)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
