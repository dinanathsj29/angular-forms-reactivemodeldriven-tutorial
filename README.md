<p align="center">
  <img src="./_images-angular-forms-reactivemodeldriven/angular_logo_1.png" alt="Angular logo" title="Angular logo" width="200" />
</p>

Angular Reactive Forms (Model driven)
=====================

Working with existing/cloned/copied Angular App
---------------------
- Clone or Download the project/app from Github or any other sources
- If using Visual Studio Code / Insiders, open Command panel/terminal from menu: View -> Terminal (shortcut key is `CTRL + BackTick` OR `COMMAND + J`)
- Go inside the project/app directory, command: `cd _examples-angular-templateDrivenForm OR cd templateDrivenForm`
- Run command: `npm install` to install project/app dependencies `(node_modules)`
- To Build and run Angular App, command: `ng serve / npm start` OR `ng serve -o` OR `ng serve --open`
- To change the port from 4200 to other port - type command:  `ng serve --port 5000`
- To check the application in browser type path/URL: `localhost:4200 / 5000`

1 - Introduction to Reactive Forms (Model-driven)
=====================
1.1 Reactive Model Driven Forms - what is it all about?
---------------------
- Angular reactive forms, also known as model-driven forms, offers an easy way to use reactive programming styles-patterns and validations
- Reactive forms are forms where we write logic, validations, controls in the component's class
- It is flexible and can be used to handle complex form scenarios and large forms
- We write more component code and less HTML code which make unit testing easier

1.2. Some important points about Reactive Forms (Model Driven)
---------------------
- Code and Logic resides in the `component class` (Template Driven Forms focus mainly on HTML template)
- `No Two Way Data Binding`
    - (we need to react to user inputs to update the values, also some inbuilt angular methods are available to update component class)
- Reactive forms are mainly `used/well suited for complex scenarios`:
    - `Dynamic (On the Fly creation)` form fields
        - Initially only one field, click on add button new forms/fields created dynamically (+ Add Product, + Add Friend list, + Add Permanent & temporary address, etc.)
    - `Custom Validation (Crossfield validations)`- Password & Confirm Password validation, old & new password/pin validation etc.
    - `Dynamic validation` - If subscribed to notification than email field is mandatory, hierarchy/dependency based scenarios, If Married enter spouse details, etc.
- `Unit test` - As logic is present in component class (Template Driven Forms we cant unit test HTML templates)

1.3. Steps to work with Reactive Model Driven Forms / Things to do with Reactive Model Driven Forms
---------------------
- Create & use new `Angular CLI` generated project
- Add form HTML template/markup
- Create a form model by using `FormGroup` and `FormControl` classes
- Manage form control data/values
- `FormBuilder` Service (a simpler way to specify/manage form model)
- `Validation implementation` - Simple, Custom, Cross-field, and Dynamic validations
- Add `Dynamic form controls`
- Submit the form data to `server`

2 - Setting up new Angular project
=====================
1. First check `angular cli` installed version details on machine by using command at command prompt: `ng -v` or `ng --version`

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-forms-reactivemodeldriven/02-01-01-angular-cli.png" alt="Angular CLI version" title="command: `ng -v` or `ng --version` to check angular cli version" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular CLI version</figcaption>
  </figure>
</p>

2. If `angular CLI` not installed/available on machine (no version or error message displayed) then install it by using the command: `npm install -g @angular/cli@latest`
3. To `update/upgrade angular CLI` to the latest version, use following commands in sequence:
    - command: `npm uninstall -g @angular/cli`
    - command: `npm cache verify or npm cache clean`
    - command: `npm install -g @angular/cli@latest`
4. Generate/create a new Angular app/project with Angular CLI - for dealing with angular forms with the syntax: `ng new appName` or `ng new project-name`, command: `ng new angular-forms-reactivemodeldriven` (after creation check the newly generated folder structure)

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-forms-reactivemodeldriven/02-01-02-angular-project-structure.png" alt="Angular project/app folder structure" title="Angular project/app folder structure" width="500" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular project/app folder structure</figcaption>
  </figure>
</p>

5. To run/serve application, at command prompt type command: `ng serve` or `ng serve --port 5000` or `ng serve --port 5000 -o` (`--port flag` - to change the port number and `-o or --open flag` - to automatically launch/open app in browser)
6. Go to the browser and load the application by typing address: `http://localhost:4200/` or `http://localhost:5000/`
7. Add the `Bootstrap` framework to an application (CSS framework used to make cool/intuitive User Interface and look/feel)
    - Download bootstrap css to local machine from bootstrap website: https://getbootstrap.com/docs/4.1/getting-started/download/ into folder `assets/library/bootstrap.min.css`
    - Include bootstrap in application - index.html under `head` tag - `<link rel="stylesheet" href="./assets/library/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />`
    - or you can include a `CDN` path in index.html under head tag
    - or else you can install bootstrap with npm command: `npm install bootstrap` and use it

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-forms-reactivemodeldriven/02-01-03-bootstrap-cdn.png" alt="Bootstrap website - installation options" title="Bootstrap website - installation options" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Bootstrap website - installation options</figcaption>
  </figure>
</p>

8. To verify bootstrap included/working properly in an application, check in Browser fonts, etc changed or not?
    - Also in `app.component.html` just create any simple component like buttons or divs with bootstrap class: 
        - `<button class="btn btn-success">Success Button</button>`  or 
        - `<div class="lead">Lead Heading</div>`
        - Right click on element and check in `inspect element` the bootstrap class and properties applied to respective elements

> **Syntax & Example**: index.html
```html
<!doctype html>
<html lang="en">

  <head>
    <meta charset="utf-8">
    <title>ReactiveModelDrivenForms</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="./assets/library/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
  </head>

  <body>

    <app-root></app-root>

  </body>

</html>
```
