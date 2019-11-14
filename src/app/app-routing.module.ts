import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GenderComponent } from './home/gender/gender.component';
import { TranslationComponent } from './home/translation/translation.component';
import { MatchingComponent } from './home/matching/matching.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'gender'
      },
      {
        path: 'gender',
        component: GenderComponent,
        data: {
          tab: 'gender'
        }
      },
      {
        path: 'translation',
        component: TranslationComponent,
        data: {
          tab: 'translation'
        }
      },
      {
        path: 'matching',
        component: MatchingComponent,
        data: {
          tab: 'matching'
        }
      }
    ]
  },
  {
    path: 'assets/static-pages/',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404'
  },
  {
    path: '404',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
