/* plays the audio file connected to the appropriate key when pressed */
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //stops function from running if no audio is attached to key
    audio.currentTime=0; //rewinds sound to start
    audio.play();
    key.classList.add('playing'); //adds styling to keys when pressed

};

/* removes the styling of pressed key to allow it 
to appear each time the key is pressed*/
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('playing'); // removes the styling of pressed key
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);