const items = ["Candy Cane", "Present", "Mistletoe", "Stocking"]
const checklist = document.getElementById("checklist")


const audio = new Audio('audio/xmas.mp3')
document.getElementById('play-jingle').addEventListener('click', function() {
    audio.volume = 0.5
    audio.play()
    this.style.animation = 'button .5s 62 ease-in-out'

})




for (let i=0; i<items.length; i++) {
    checklist.innerHTML += `
         <div class="checklist-item">
                <input type="checkbox" id="${items[i]}" class="${items[i]}" value="${items[i]}">
                <label for="${items[i]}" class="strikethrough">
                    <span class="custom-checkbox">${items[i]}</span>
                </label>
            </div>
    `
}

