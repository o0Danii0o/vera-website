// Replace Text In Header   
const checkReplace = document.querySelector('.replace-me');

if(checkReplace != null){
    const replace = new ReplaceMe(checkReplace, {
        animation: 'animated fadeIn',
        speed : 2500,
        separator: ',',
        loopCount : 'infinite',
        autoRun: true,
    });
}

// Use Scroll For Navbar

function userScroll(){
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 50){
            navbar.classList.add('bg-dark');
            navbar.classList.add('border-bottom');
            navbar.classList.add('border-secondary');
            navbar.classList.add('navbar-sticky');
        }else{
            navbar.classList.remove('bg-dark');
            navbar.classList.remove('border-bottom');
            navbar.classList.remove('border-secondary');
            navbar.classList.remove('navbar-sticky');
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);

// Video Modal  
const videoBtn = document.querySelector('.video-btn');
const videoModal = document.querySelector('#videoModal');
const video = document.querySelector("#video");
let videoSrc = videoBtn.getAttribute('data-bs-src');

if (videoModal) {
    videoModal.addEventListener('show.bs.modal', (event) => {
        const button = event.relatedTarget;
        
        if (button) {
            const videoSrc = button.getAttribute('data-bs-src');
            
            if (videoSrc) {
                video.setAttribute('src', `${videoSrc}?modestbranding=1&showinfo=0`);
            } else {
                console.error("Video source is missing.");
            }
        }
    });

    videoModal.addEventListener('hide.bs.modal', () => {
        video.setAttribute('src', '');
    });
}
