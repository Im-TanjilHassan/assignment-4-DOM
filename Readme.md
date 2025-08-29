1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans: getElementById is used for selecting an html element with the id. it only returns a single element that matches with the id and if id doesn't match it will return null. getElementsByClassName returns all the html elements with the same class name not a single element like id. it return live html collection mean If the DOM changes (elements are added, removed, or their classes change), the collection is updated automatically without calling the method again. querySelector is more useful cuz you can select any element using any css selector like id, class, tag name, attribute. it will return only first matching element if you have a list of <a> tag and you use querySelector with the class name it will return only the first <a> tag that matches the class name. querySelectorAll return a static node list that doesn't update automatically if the dom changes.

2. How do you create and insert a new element into the DOM?

Ans: to create a new element we use document.createElement("tagName") and to insert it into the DOM we first need a parent element that will contain this newly created element as a child element. we can get the parent element from dom with getElementById and insert the new element with appendChild method like this:- parentElement.appendChild("newly created tagName")

3. What is Event Bubbling and how does it work?

Ans: event bubbling is a mechanism in the dom where an event starts at the target element...the one that was actually clicked or triggered ad then bubbles up through its parents element up to document. it allows parent elements to listen to events on their children without attaching handlers to each child. for example if you click a button inside a div it will first fire on the button then the div the the body.

4. What is Event Delegation in JavaScript? Why is it useful?

Ans: event delegation is a technique where you can attach a single event listener to a parent element to handle events on its child elements using event bubbling. its useful because it reduce code by avoid adding event listeners to many individual elements and also works for dynamically created elements too. it also reduce memory usage.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: preventDefault() stop the default action of an element.mostly used for form submitting, stopping a link from navigating.also useful to block the browser's built in behavior like page reload if a link clicked. stopPropagation() stops the event from bubbling up to the dom so parent handlers won't fire.so it controls how far the event travels in the dom.