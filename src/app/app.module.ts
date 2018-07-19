import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';
import { FilterPipe } from './filter.pipe';
import {SlideshowModule} from 'ng-simple-slideshow';
import { DescriptionComponent } from './description/description.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'result', component: ListComponent},
  { path: 'description', component: DescriptionComponent},
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    FilterPipe,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    SlideshowModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
