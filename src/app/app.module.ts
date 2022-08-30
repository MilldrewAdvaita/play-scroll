import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProperitesComponent } from './properites/properites.component';
import { ScrollComponent } from './scroll/scroll.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { MethodsComponent } from './methods/methods.component';

@NgModule({
  declarations: [AppComponent, ProperitesComponent, ScrollComponent, LifecycleComponent, MethodsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
