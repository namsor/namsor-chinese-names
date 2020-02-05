import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { ApiSectionComponent } from './home/api-section/api-section.component';
import { FooterComponent } from './home/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PricePlansComponent } from './home/price-plans/price-plans.component';
import { GenderComponent } from './home/gender/gender.component';
import { TranslationComponent } from './home/translation/translation.component';
import { MatchingComponent } from './home/matching/matching.component';
import { IdentityVerificationComponent } from './home/identityVerification/identityVerification.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ServiceComponent } from './home/service/service.component';
import { MachineLearningComponent } from './home/machine-learning/machine-learning.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ApiSectionComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    PricePlansComponent,
    GenderComponent,
    TranslationComponent,
    MatchingComponent,
    IdentityVerificationComponent,
    ServiceComponent,
    MachineLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
