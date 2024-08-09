document.getElementById('easter-egg-btn').addEventListener('click', function() {
    var easterEgg = document.getElementById('easter-egg');
    var music = document.getElementById('background-music');
    if (easterEgg.classList.contains('hidden')) {
        easterEgg.classList.remove('hidden');
        easterEgg.classList.add('shown');
        music.play().catch(function(error) {
            console.log('Audio playback was prevented:', error);
        });
    } else {
        easterEgg.classList.add('hidden');
        easterEgg.classList.remove('shown');
        music.pause();
    }
});

document.getElementById('play-button').addEventListener('click', toggleAudio);

function toggleAudio() {
    var audio = document.getElementById('background-audio');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

window.addEventListener('load', function() {
    var audio = document.getElementById('background-audio');
    audio.play().catch(function(error) {
        console.log('Audio playback was prevented:', error);
    });
}); 

// document.addEventListener('DOMContentLoaded', function () {
//     var audio = document.getElementById('background-audio');

//     // Play the audio when the page loads
//     audio.play().catch(error => {
//         console.log('Autoplay was prevented. User interaction is required to play the audio.');
//     });

//     document.getElementById('play-button').addEventListener('click', function () {
//         if (audio.paused) {
//             audio.play();
//         } else {
//             audio.pause();
//             audio.currentTime = 0;
//         }
//     });
// });

// document.getElementById('music-toggle-btn').addEventListener('click', function() {
//     var music = document.getElementById('background-music');
//     if (music.paused) {
//         music.play();
//     } else {
//         music.pause();
//     }
// });

window.onload = function() {
    var audio = document.getElementById('background-music');
    audio.play().catch(function(error) {
        console.log('Audio playback was prevented:', error);
    });
};

const quotes = [
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"Life is what happens when you\'re busy making other plans." - John Lennon',
    '"You miss 100% of the shots you don\'t take." - Wayne Gretzky',
    // Add more quotes as needed
];

let currentQuoteIndex = 0;

function displayNextQuote() {
    const quoteElement = document.querySelector('.quotes blockquote');
    quoteElement.textContent = quotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
}

setInterval(displayNextQuote, 5000); 

// document.getElementById('loadContentBtn').addEventListener('click', function() {
//     window.location.href = 'home.html';
// });

// document.getElementById('music-toggle-btn').addEventListener('click', function() {
//     window.location.href = 'new.html';
// });

document.getElementById('surpriseBtn').addEventListener('click', function() {
    window.location.href = 'new.html';
});

document.getElementById('enjoyBtn').addEventListener('click', function() {
    window.location.href = 'home.html';
});

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.btn');

    button.addEventListener('click', () => {
        button.classList.add('clicked');
    });
});




