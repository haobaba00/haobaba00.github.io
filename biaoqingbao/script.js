const emojis = document.querySelectorAll('.emoji');  
const fixedEmoji = document.querySelector('.fixed-emoji');  
const toggleButton = document.getElementById('emoji-toggle');  

let currentIndex = 0;  

toggleButton.addEventListener('click', () => {  
  emojis.forEach((emoji, index) => {  
    if (index === currentIndex) {  
      emoji.style.display = 'none';  
    } else {  
      emoji.style.display = 'block';  
    }  
  });  

  fixedEmoji.style.display = fixedEmoji.style.display === 'none' ? 'block' : 'none';  

  currentIndex = (currentIndex + 1) % emojis.length;  
});