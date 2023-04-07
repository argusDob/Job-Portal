<h1> JOB BOARD </h1>
<p>A job board application to keep myself in the coding loop while i am sitting on the bench due to S&S bankraptrency. My main focus remains in the FE but I have init a node.js server to manipulate data between the FE and BE</p>
<h2>Tech Stack</h2>
<ul>
<li>Vue.js(2xx)</li>
<li>HTML</li>
<li>SCSS</li>
<li>Javascript</li>
<li>Vuex</li>
<li>Routes</li>
<li>Node.js</li>
<li>Express.js</li>
<li>MongoDB</li>
<ul>

# Components
1. [Confirm Password Form](#comp1)
2. [Input Radio Group](#comp2)
4. [LoginForm](#comp3)
5. [LoginView](#comp8)
6. [Nav Bar](#comp5)
7. [Primary Button](#comp6)
8. [Registration Form](#comp7)
9. [SoftError](#comp8)



## Confirm Password Form <a name="comp1"></a>
The confirm password form contains as children the Input Text component. Based on the configuration two fields are created `password` `password1`.
The component gets the values from the `InputTextField` and created an input validation report based on the input values.

On change init a change emit event which holds the validatation report from the input text fields

## Input Radio Group <a name="comp2"></a>
A group of Input Radio Fields. It includes as a children the `SoftError` component to inform user for potential issues.

It gets two props:
`options` :  `Type: Array` 
`directionColumn` :`Type: Boolean`

The option is the list with the radio button options.
The Direction column bind a class to make the Radio Button Inputs column/row

On change init a change emit event which holds the validatation report.


## Input Text <a name="comp3"></a>

An input text field component wit the following props:
```
    autocomplete: {
      type: Boolean,
    },
    errorMessage: {
      type: String,
    },
    index: {
      type: Number,
    },
    isValid: {
      type: Boolean,
      default: null,
    },
    label: {
      type: String,
      required: true,
    },
    maxlength: {
      type: Number,
    },
    minlength: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    notEqualErrorMessage: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    type: {
      type: String,
      required: true,
    },
```

It includes as children the following components: `EyeIcon` `EyeSlashIcon``password` `SoftError`

That componet uses the Vuelidate plugin which takes care of the validation. If the type of the component is password the component has the an icon in the placeholder 
to toogle password visibility. 

Also the component is responsible for the validation of each input text field created by the parent. It construct an validation report and it send it back to parent using
`change` and `blur` emit events

## Login Form <a name="comp3"></a>
dssdsdf
Login Form has as a child the InputTextFieldComponent. It gets the validation report from the Child and based on the results submit the form and send the data to the server.

![Screenshot](/Screenshots/login_form.png)

The second paragraph text


## Login View <a name="comp3"></a>
A view to show Registration and Login Form 

![Screenshot](/Screenshots/login_view.png)

The second paragraph text
## Nav Bar <a name="comp4"></a>
Nav Bar is a Bootstrap nav bar for time being but will be replaced with my own in the near future.
## Primary Button <a name="comp5"></a>
A primary button with a loading state. Has two method wich triggers and finish the spinner.

![Screenshot](/Screenshots/primary_button.png)

## Registration Form <a name="comp6"></a>

Registration Form has as children components `ConfirmPasswordForm` `InputText` `InputRadioGroup` `SubmitButton` 

It gets the validation reports from the `ConfirmPasswordForm` `InputText` `InputRadioGroup` and it map it to one array.
If all fields are valid the form is submited.

![Screenshot](/Screenshots/registration_form.png)

## Soft Error <a name="comp7"></a>
A simple component to comunicate potential errors with the user.
