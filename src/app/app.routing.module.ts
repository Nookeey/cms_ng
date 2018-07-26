import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
    /**
     * USER
     */
    { path: '', loadChildren: './user/user.module#UserModule' },
    /**
     * ADMIN
     */
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
