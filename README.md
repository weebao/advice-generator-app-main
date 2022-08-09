# Frontend Mentor - Advice generator app solution
## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Things to improve](#things-to-improve)
- [Author](#author)

## Overview

- This is my attempt making an advice generator using API for the first time

### Screenshot

![Advice Generator App](src/images/screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/first-react-app-with-api-DjMkEjo88W)
- Live Site URL: [Add live site URL here](https://weebao.github.io/advice-generator-app-main/)

## My process

- I started with looking up the basic of fetching JSON from the API and useState() to render the advices.
- I found out that I could not fetch an advice before the website is rendered using useState(), so I rewrote my App function into a class component.
- After making sure the website was functioning properly, I started styling by centering the div and creating the dice button.
- I learned how to use animation for the first time and it felt amazing.
- I also centered the divider image so that it will adjust itself with the size of the div instead of using different images for desktop and mobile.

### Built with

- [React](https://reactjs.org/) - JS library
- CSS

### Things to improve

- I managed to fetch the API before the website renders using componentDidMount in the App class component, but I also had to write the same code for setState which is quite inefficient. I hope I would know some other way to do it somehow.

```js
  componentDidMount() {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => this.setState({
        advice: json.slip
      }));
  }

  getAdvice = () => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(json => this.setState({
        advice: json.slip
      }));
  }
```

## Author

- Website - [Bao Dang](https://github.com/weebao)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/weebao)
