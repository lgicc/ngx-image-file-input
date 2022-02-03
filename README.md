[![CodeQL](https://github.com/lgicc/ngx-image-file-upload/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)](https://github.com/lgicc/ngx-image-file-upload/actions/workflows/codeql-analysis.yml)
[![Node.js Package](https://github.com/lgicc/ngx-image-file-upload/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/lgicc/ngx-image-file-upload/actions/workflows/npm-publish.yml)

# ngx-image-file-upload

## Table of contents

- [About](#about)
- [Getting Started](#getting-started)
- [Examples](#examples)
- [License](#license)

## About
This package can be used for uploading Images via a FormControlField.  
The value of the field will be the Image DataURL.

## Getting Started
Install the package by command:

```sh
    npm install @lgicc/ngx-image-file-input --save
```
```sh
    yarn add @lgicc/ngx-image-file-input
```

Import the module

```ts
import { NgxImageFileInputModule } from "@lgicc/ngx-image-file-input";

@NgModule({
    imports: [
        ...
          NgxImageFileInputModule
    ],
    declarations: [...],
    providers: [...]
})
export class AppModule {}
```

### Using
```html
    <ngx-image-file-input></ngx-image-file-input>
```

### Examples


```html
    <!-- example to use your own image icon if no image is set -->
    <ngx-image-file-input>
      <img src="https://www.example.com/my-image-icon.svg">
    </ngx-image-file-input>
``` 

```html
    <!-- customize the alt Tag of the uploaded Image -->
    <ngx-image-file-input [alt]="My Image is cool"></ngx-image-file-input>
```  

```html
    <!-- You can use all FormControl features -->
    <ngx-image-file-input [formControl]="myControl"></ngx-image-file-input>

    <!-- OR -->
    <form [formGroup]="myFormGroup">
      <ngx-image-file-input formControlName="myFormControlName"></ngx-image-file-input>
    </form>
```

By default you dont have a theme, so you just have the code infrastructure to use.  
However this package also includes a predefined Design if you want to use it.  
Just include the file like so:
```scss
  @import "~@lgicc/ngx-image-file-input/styles/theme.css";
```



Available options:

* `alt` - Text alignment in input. (default: `''`)


## License

MIT @ Daniel Amzovski
