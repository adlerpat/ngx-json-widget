import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface NgxJsonWidgetPropertyMap {
  prop: string;
  label: string;
  comment?: string;
}

export interface NgxJsonWidgetConfig {
  jsonUrl: string;
  propertyMap: NgxJsonWidgetPropertyMap[];
}

@Component({
  selector: 'ngx-json-widget',
  templateUrl: './ngx-json-widget.component.html',
  styleUrls: ['./ngx-json-widget.component.scss'],
})
export class NgxJsonWidgetComponent implements OnInit, OnChanges {
  @Input() config: NgxJsonWidgetConfig | undefined;

  private _jsonResponse: Object | null = null;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.config){
      this.httpClient.get(this.config.jsonUrl).subscribe({
        next: (data) => {
          this._jsonResponse = data;
        }
      });
    }
  }

  get jsonResponse(): Object | null {
    return this._jsonResponse;
  }

  getNestedValue(obj: any, key: string) {
    return key.split(".").reduce((result: any, key: string) => {
       return result[key] 
    }, obj);
  }
}