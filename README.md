# NgxJsonWidget

  

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

  

This library was merely an exercise on how to publish an npm package.


If you were searching for a library for your project, this probably wasn't it. Sorry ☺️


Nevertheless it does what it's intended to do. Source Code is available @ [GitHub](https://github.com/adlerpat/ngx-json-widget)

  

## What is it?

  

It's a widget-like component that can be used to display a property of any web hosted json data.

  

## What can't it do?

  

It can not display elements of an array within the json data.

  

## How can I use it?
Import NgxJsonWidgetModule into desired Module.

    import { NgxJsonWidgetModule } from  'ngx-json-widget';

Import the Interface into the component you want to use the widget

    import { NgxJsonWidgetConfig } from  'ngx-json-widget';

Create the Config Element for the Widget Component

    widgetConfig: NgxJsonWidgetConfig = {
	    jsonUrl:  "https://api.coindesk.com/v1/bpi/currentprice.json",
	    propertyMap: [{
		    prop:  "bpi.EUR.rate",
		    label:  "1 BTC Euro Price",
		    comment:  "pulled from coindesk api"
	    }]
    };

Place the Widget in the Template

    <ngx-json-widget  [config]="widgetConfig"></ngx-json-widget>

Standard Styles are

    .ngx-json-widget {
	    font-family: Arial, Helvetica, sans-serif;
	    padding: 16px;
	    border-radius: 25px;
	    background: linear-gradient(120deg, #f8ff00  0%, #3ad59f  100%);
	    -webkit-box-shadow: 0px  10px  13px  -7px  #000000, 5px  5px  15px  5px  rgba(0,0,0,0);
	    box-shadow: 0px  10px  13px  -7px  #000000, 5px  5px  15px  5px  rgba(0,0,0,0);
	    color: #041E42;
    }
    .ngx-json-widget-property {
	    padding: 8px;
	    border-radius: 8px;
    }
    .ngx-json-widget-label {
	    font-size: 18px;
    }
    .ngx-json-widget-value {
	    font-size: 32px;
	    font-weight: 600;
    }
    .ngx-json-widget-comment{
	    font-size: 12px;
    }

And can be adjusted like

    ::ng-deep {
	    .ngx-json-widget-value::after{
		    content: "€"
	    }
    }

Thank you 