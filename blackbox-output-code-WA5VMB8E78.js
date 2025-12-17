document.getElementById('generateBtn').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value.trim();
    const output = document.getElementById('wishOutput');
    
    if (!name) {
        output.textContent = "Please enter a name!";
        output.classList.remove('hidden');
        output.classList.add('show');
        return;
    }
    
    // Array of sample wishes
    const wishes = [
        `Happy Birthday, ${name}! May your day be filled with joy and cake! 🎂`,
        `Wishing you a fantastic birthday, ${name}! Here's to another year of adventures! 🎈`,
        `Cheers to you, ${name}! May all your wishes come true on this special day! 🥳`,
        `Happy Birthday, ${name}! You're awesome, and today is all about you! 🎉`,
        `To ${name}, on your special day: May it be as sweet as birthday cake! 🍰`
    ];
    
    // Pick a random wish
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    output.textContent = randomWish;
    output.classList.remove('hidden');
    output.classList.add('show');
    
    // Add confetti effect
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => confetti.remove(), 5000);
    }
});