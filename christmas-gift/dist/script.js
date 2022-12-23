
const thanksBtnEl = document.getElementById('accept-gift-btn')
const giftModal = document.getElementById('gift-modal')
const getGiftEl = document.getElementById('get-gift')


thanksBtnEl.addEventListener('click', ()=>{
    giftModal.classList.add('hidden')
});

getGiftEl.addEventListener('click', ()=>{
    giftModal.classList.remove('hidden')
})