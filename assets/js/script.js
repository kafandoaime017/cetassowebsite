$(document).ready(function() {
    setTimeout(function() {
        $('.loading-container').fadeOut(1000, function() {
            $('.welcome-message').fadeIn(1000, function() {
                $('.loading-curtain').fadeOut(1000, function() {
                    $('.page-accueil').fadeIn(1000);
                   
                });
            });
        });
    }, 1000);

    
});




window.onload = function() {
    setTimeout(function() {
        if (localStorage.getItem('cookiesAccepted') !== 'true') {
            // Afficher la boîte de dialogue des cookies
            const cookieBox = document.createElement('div');
            cookieBox.classList.add('cookie-box', 'boite', 'alert-dismissible', );
            cookieBox.innerHTML = `
                <p class="mb-0">Ce site utilise des cookies pour améliorer votre expérience utilisateur. Acceptez-vous l'utilisation de cookies ? <br></p>
                <button type="button" class="btn my-2 accepter btn-sm" onclick="acceptCookies()">Accepter les cookies</button>
                <button type="button" class="btn refuser btn-sm" onclick="rejectCookies()">Refuser tous</button>
            `;
            document.body.insertBefore(cookieBox, document.body.firstChild);
            // Mettre à jour l'opacité à 1 après un léger délai pour déclencher l'animation
            setTimeout(function() {
                cookieBox.style.opacity = '1';
            }, 10);
        }
    }, 2000); // 2000 milliseconds = 2 seconds
}

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.querySelector('.cookie-box').style.display = 'none';
}

function rejectCookies() {
    // Traitez le rejet des cookies ici, par exemple en supprimant les cookies existants
    localStorage.setItem('cookiesAccepted', 'false');
    document.querySelector('.cookie-box').style.display = 'none';
}



