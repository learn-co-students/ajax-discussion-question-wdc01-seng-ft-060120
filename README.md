# Discussion Questions: AJAX

## Objectives

* Identify synchronous and asynchronous code
* Describe the process of communicating with the server
* Process data successfully returned from fetch()

## Exercise

### Question 1

Given the following code list the order of console.logs:
    Hello, Sup?, and Hi

```javascript
console.log("Hello")

fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
    console.log("Hi") 
  })

console.log("Sup?")
```

### Question 2

When fetchData is executed what will be console logged?

a promise 

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( res => res )
        console.log(data)	
}

fetchData()
```

What will be console logged when the following code is run? Why?
a object or a json file

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( json => console.log(json) )
}

fetchData()
```

What will be console logged when the following code is run? Why?

a object should be console logged because the console.log is just being refrence  not invoked and the res.json will be passed over from the first then and the second then and it's refrenced console.log will just log it

```javascript
function fetchData(){
        let data = fetch('https://randomuser.me/api/')
          .then( res => res.json() )
          .then( console.log )
}

fetchData()
```

### Question 3

In your own words: what does asynchronous mean?

Asynchronus mean to be able to do many task at the same time and with out having to to wait for one task to be finished before the next to start.

### Question 4

Write out the request and response cycle. What is its purpose? How does it work?

client, provider, server, client. 

### Question 5

Check out the JSON you get from making a GET request to [this](https://randomuser.me/api/) url (https://randomuser.me/api/).

Open up the Github repository for this reading and view the provided `src/index.html` file in the browser. In `src/index.js`, make an AJAX request to that url when the button is clicked and append the retrieved information to the DOM. Use the labels to append the right data in the appropriate h4's, h3's and img tags.
