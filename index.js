
const joke = () => {
fetch('https://icanhazdadjoke.com/slack')
.then(data => data.json())
.then(jokeData => {
    const jokeText = jokeData.attachments[0].text;
    const jokeElement = document.getElementById('jokeElement');

    jokeElement.innerHTML = jokeText;
})
}

const newJoke = document.getElementById('newJoke');

newJoke.addEventListener('click', () => {
    joke();
});

joke();
