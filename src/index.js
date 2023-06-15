import './less/index.less'
console.log('hello world')
// Your code goes here! 
// webpack will transfer the less files to CSS
// no script tag in the HTML file and webpack is also taking care of this by utilizing babel and other sources 
            // Webpack is running the script with a defer attribute in site (dev tools is relaying that)
            // This is meaning that this file is not going to execute unless the DOM is fully constructed.  
// window.unload is saying to the file that we want to add an event handler to execute on the load event

// 1) Load event
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready To Go!`);
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready To Go'

    // 2) Copy event
    window.addEventListener('copy', () => {
        navigator.clipboard.readText()
            .then(text => {
                heading.textContent += text 
            })
    })

    // 3) Click Event: -toggle -transition
        // Toggle a class name on the element that is clicked ( within the body)
        // The whole page should be the body, so whenever we click anywhere, the target of the event (innermost element) that intervenes with the click, will toggle the class name on it
        // Then make sure webpack is following (no error or disruption). Then go over to the browser devTool to view if the element is actually toggling
            // Here the console should display the 'mirror' text on the h1-class-logo-heading line when we click on the page location
   
            document.body.addEventListener('click', evt => {
        evt.target.classList.toggle('mirror')
    })

    // 4) Double Click -- have some element disappear from the DOM on dbl-click
        // add the listener to the doc body
        // Then the element will make 'diasappear' the target of the event. (innermost element that got clicked)
        // ** dblclick is to be one word all lowercase to work

    document.body.addEventListener('dblclick', evt => {
        evt.target.innerHTML = ''
    })

    // 5) Key-down event

    window.addEventListener('keydown', evt => {
        if (evt.key == 6 ) {
            document.body.innerHTML = ' <h1>You Ran Order 66'
        }
    })
    // 6) Mouse move event: 
    document.body.addEventListener('mousemove', evt => {
        const {xlientX, clientY} = evt
        console.log(` mouse is at ${clientX}, ${clientY}`)
    })
}
