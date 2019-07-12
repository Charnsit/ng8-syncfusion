import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { DropDownButtonModule, SplitButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { DocumentEditorAllModule, DocumentEditorContainerAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { ToolbarModule, TabModule } from '@syncfusion/ej2-angular-navigations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DialogModule,
    DropDownButtonModule,
    SplitButtonModule,
    DocumentEditorAllModule,
    DocumentEditorContainerAllModule,
    ToolbarModule,
    TabModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
