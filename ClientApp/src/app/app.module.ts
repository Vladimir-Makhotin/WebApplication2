import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
    imports: [BrowserModule, FormsModule, NgbModule, HttpClientModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }