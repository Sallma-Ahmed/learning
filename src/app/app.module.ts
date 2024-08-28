import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { Page1Component } from './page1/page1.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { RouterOutlet } from "@angular/router";
import { ViewSwitcherComponent } from './view-switcher/view-switcher.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { View3Component } from './view3/view3.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    MainContentComponent,
    Page1Component,
    ContactUsComponent,
    ContentHeaderComponent,
    Page2Component,
    Page3Component,
    ViewSwitcherComponent,
    View1Component,
    View2Component,
    View3Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
