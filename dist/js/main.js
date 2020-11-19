const shareBtn = document.getElementById('shareBtn');
const shareLinks = document.querySelector('.sharelinks');

const toggleShareLinks = event => {
    shareLinks.classList.toggle('togglePopUp')
}

shareBtn.addEventListener('click', toggleShareLinks);