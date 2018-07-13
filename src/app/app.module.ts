import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule, JsonpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainComponent } from './components/main/main.component';
import { RunningComponent } from './components/running/running.component';
import { CompletedComponent } from './components/completed/completed.component';
import { TorunComponent } from './components/torun/torun.component';
import { SuspendComponent } from './components/suspend/suspend.component';
import { DeleteComponent } from './components/delete/delete.component';
import { BlockComponent } from './components/block/block.component';
import { ErrorComponent } from './components/error/error.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    RunningComponent,
    CompletedComponent,
    TorunComponent,
    SuspendComponent,
    DeleteComponent,
    BlockComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NgZorroAntdModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
