import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { warningAlertComponent } from './warningAlert/warningAlert.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { EvenComponent } from './assignment4/even/even.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { BasicHightlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterDirectiveDirective } from './better-highlight/better-directive.directive';
import { UnlessDirective } from './unless.directive';
import { dropdownDirective } from './shared/dropdown.directive';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InActiveUserComponent } from './in-active-user/in-active-user.component';
import { CounterService } from './counter.service';
import { ShoppingList } from './shopping-list/shoppingList.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    warningAlertComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BasicHightlightDirective,
    BetterDirectiveDirective,
    UnlessDirective,
    dropdownDirective,
    ActiveUserComponent,
    InActiveUserComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [CounterService,ShoppingList],
  bootstrap: [AppComponent],
})
export class AppModule {}
