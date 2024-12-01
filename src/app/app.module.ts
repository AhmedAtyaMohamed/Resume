import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { getDatabase } from 'firebase/database';
import { environment } from '../environments/environment';


import { CommonModule } from '@angular/common'; // <-- Make sure to import this
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';  
import {AccordionModule   } from 'ngx-bootstrap/accordion';
import { ProjectModalComponent } from './project-modal/project-modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
  

// Initialize the AngularFireModule
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
   ProjectCardComponent ,   
    ProjectModalComponent,
  ],

  imports: [       
    BrowserModule,  
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(), 
    AccordionModule.forRoot(), 
    FormsModule, 
    FontAwesomeModule, 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faCoffee);
  }
}
  //AngularFireModule.initializeApp(environment.firebase),
//  AngularFireDatabaseModule,