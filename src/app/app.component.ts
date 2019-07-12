import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ToolbarService, DocumentEditor,
  DocumentEditorContainer, DocumentEditorContainerComponent } from '@syncfusion/ej2-angular-documenteditor';
import { TitleBar } from './title-bar';
import { defaultDocument, WEB_API_ACTION } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ToolbarService]
})
export class AppComponent implements OnInit {
  // title = 'angular-syncfusion';
  public hostUrl: string;
  // public serviceLink: string;
  // tslint:disable-next-line:variable-name
  @ViewChild('documenteditor_default', {static: true}) documenteditor_default: ElementRef<DocumentEditorContainerComponent>;
  public container: DocumentEditorContainerComponent;

  // tslint:disable-next-line: variable-name
  @ViewChild('default_title_bar', {static: true}) default_title_bar: ElementRef<HTMLElement>;
  titleBar: TitleBar;

  ngOnInit() {
    // this.serviceLink = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/import';
    this.hostUrl = 'https://ej2services.syncfusion.com/production/web-services/';
    console.log('container', this.container);
  }

  onCreate(): void {
    const titleBarElement: HTMLElement = document.getElementById('default_title_bar');
    this.titleBar = new TitleBar(titleBarElement, this.container.documentEditor, true);
    this.container.locale = 'en-US';
    this.container.serviceUrl = this.hostUrl + WEB_API_ACTION;
    this.container.documentEditor.open(JSON.stringify(defaultDocument));
    this.container.documentEditor.documentName = 'Getting Started';
    this.titleBar.updateDocumentTitle();
    this.container.documentEditor.documentChange = (): void => {
        this.titleBar.updateDocumentTitle();
        this.container.documentEditor.focusIn();
    };
  }
}
