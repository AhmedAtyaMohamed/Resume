import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { AccordionComponent, AccordionPanelComponent } from 'ngx-bootstrap/accordion';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    PortfolioComponent,
    ResumeComponent,
    ContactComponent,
   
  ],
  imports: [
    CommonModule, 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProjectCardComponent,
    AccordionComponent,
    AccordionPanelComponent
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    FormsModule, 
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  // public generateGUID(): string {
  //   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
  //     const r = Math.random() * 16 | 0;
  //     const v = c === 'x' ? r : (r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  // }

}
