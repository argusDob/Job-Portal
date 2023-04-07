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
3. [Input Text](#comp3)
3. [Login Form](#comp4)
3. [Nav Bar](#comp5)
3. [Primary Button](#comp6)
3. [Registration Form](#comp7)
3. [SoftError](#comp8)



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

An input text field component.
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


## Another paragraph <a name="comp3"></a>
The second paragraph text

## Another paragraph <a name="comp4"></a>
The second paragraph text

## Another paragraph <a name="comp5"></a>
The second paragraph text

## Another paragraph <a name="comp6"></a>
The second paragraph text
## Another paragraph <a name="comp7"></a>
The second paragraph text

## Another paragraph <a name="comp8"></a>
The second paragraph text