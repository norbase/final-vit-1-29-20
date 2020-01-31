window.onload = function () {
    // necessary for dropdown menus to function properly:
    // https://stackoverflow.com/a/25347431
    $('.ui.dropdown').dropdown();


    // grab button with query selector
    let btn = document.querySelector('#clickMe')
    console.log(btn.innerHTML)
    // grab thing to change with query selector
    let changeMe = document.querySelector('#changeMe')

    // add event listener to button
    btn.addEventListener('click', function () {

        console.log('You did it!')

        let par = document.createElement('p')

        par.innerHTML = 'Pushing application.fit now.'

        changeMe.innerHTML = '...Congratulations!'
        changeMe.style.fontSize = 30
        changeMe.style.backgroundColor = 'black'
        changeMe.style.color = 'green'

        changeMe.appendChild(par)

    })
    //  <--- object -- function -- method (string) --->

    console.log('click')


    // on 'event' change thing to change




















};