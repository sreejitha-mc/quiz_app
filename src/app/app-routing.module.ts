import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OptionSelectionComponent } from './option-selection/option-selection.component';
import { TypeTwoQuestionsComponent } from './type-two-questions/type-two-questions.component';
import { TypeOneQuestionsComponent } from './type-one-questions/type-one-questions.component';
import { StatusComponent } from './status/status.component';
import { MenuOfQuestionsComponent } from './menu-of-questions/menu-of-questions.component';
import { TypeOneResultComponent } from './type-one-result/type-one-result.component';
import { TypeTwoResultComponent } from './type-two-result/type-two-result.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'option-selection', component: OptionSelectionComponent },
    { path: 'type-one-questions/:id', component: TypeOneQuestionsComponent },
    { path: 'type-two-questions/:id', component: TypeTwoQuestionsComponent },
    { path: 'status', component: StatusComponent },
    { path: 'menu-of-questions', component: MenuOfQuestionsComponent },
    { path: 'type-one-result', component: TypeOneResultComponent },
    { path: 'type-two-result', component: TypeTwoResultComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
