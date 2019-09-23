import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'knows', loadChildren: './knows/knows.module#KnowsPageModule' },
  { path: 'home', loadChildren: './tab1/tab1.module#Tab1PageModule'},  { path: 'recognize', loadChildren: './recognize/recognize.module#RecognizePageModule' },
  { path: 'reason', loadChildren: './reason/reason.module#ReasonPageModule' },
  { path: 'cure', loadChildren: './cure/cure.module#CurePageModule' },
  { path: 'care', loadChildren: './care/care.module#CarePageModule' },
  { path: 'qa', loadChildren: './qa/qa.module#QAPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
