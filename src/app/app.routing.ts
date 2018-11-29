import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SkillsComponent } from "./skills/skills.component";
import { ContactComponent } from "./contact/contact.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AboutmeComponent } from "./aboutme/aboutme.component";
import { HomeComponent } from "./home/home.component";

const appRoute: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'aboutme',
    component: AboutmeComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
