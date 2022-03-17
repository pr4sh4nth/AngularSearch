import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchSithLordPipe } from './search-sith-lord.pipe';
import { SithLordListComponent } from './sith-lord-list/sith-lord-list.component';
import { SithLordDetailComponent } from './sith-lord-detail/sith-lord-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchSithLordPipe,
    SithLordListComponent,
    SithLordDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
