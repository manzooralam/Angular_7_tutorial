# Angular7tutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# ngx-google-places-autocomplete
 This module is a wrapper for Google Places Autocomplete js library.
  
## Step 1: Installation

` npm install ngx-google-places-autocomplete `

## Step 2: Integration

  > 1. Add google library in your index.html file :
  
   `  <script src="https://maps.googleapis.com/maps/api/js?key=<Your API KEY>&libraries=places&language=en"></script> `

  > 2. Replace with google places api key. Ref - https://developers.google.com/places/web-service/get-api-key
  
## Step 2: Usage

  > 1.Add a module into your application (as a rule app.module.ts)

` import { GooglePlaceModule } from "ngx-google-places-autocomplete";`

```
@NgModule({
    imports: [GooglePlaceModule, BrowserModule, FormsModule, ...],
        ....
        })
        
```

 > 2. Add directive ngx-google-places-autocomplete to your input field (options is an optional parammeter)

` <input ngx-google-places-autocomplete [options]='options' #placesRef="ngx-places" (onAddressChange)="handleAddressChange($event)"/>  `

 > 3. Additionally you can reference directive in your component

`   @ViewChild("placesRef") placesRef : GooglePlaceDirective; `
 ```
 
        public handleAddressChange(address: Address) {
        // Do some stuff
    }
    
  ```
  
    
## Step 3:
Refer to original google maps api - https://developers.google.com/maps/documentation/javascript/places-autocomplete Options object - https://github.com/skynet2/ngx-google-places-autocomplete/blob/master/src/objects/options/options.ts


exampe: 
```
options={
    types: [],
    componentRestrictions: { country: 'IN' }
    }
       
  ```  
  
  ## Issues 
  
Hi,
I'm trying to migrate my project to "aot" compilation and I got this error when running ng serve --aot

ERROR in : There is no directive with "exportAs" set to "ngx-places" ("[options]='options' [ERROR ->]#placesRef="ngx-places" (onAddressChange)="handl") : Can't bind to 'options' since it isn't a known property of 'input'. (" <input ngx-google-places-autocomplete [ERROR ->][options]='options' #placesRef="ngx-places" ")

I tried to import GooglePlaceModule in app.module.ts and in my component's module but nothing changes. I also tried with

@ViewChild("placesRef") placesRef : GooglePlaceDirective;

and directly importing the directive to my component, bu nothing changes.

What am I missing ,

Thanks a lot!

## resolved:

Didn't work when I registered it in a root module. But it did work when I moved it to component's module. I think this has something to do with importing and exporting. You may need to add GooglePlaceModule to exports array when using in a root module.


  
       
