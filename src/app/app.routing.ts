import { Route } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SubmissionComponent } from './submission/submission.component';

export const APP_ROUTING: Route[] = [
    { path: '', component: HomepageComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'submission', component: SubmissionComponent }
];