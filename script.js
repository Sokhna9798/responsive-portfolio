document.getElementById("message").addEventListener("submit", function(e) {
    e.preventDefault();
    var erreur;
    var e-mail = document.getElementById("e-mail");
    if (!e-mail.value) {
        erreur = "Veuillez renseigner un e-mail";
    }

        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        }

else {
        
    alert('Formulaire envoyé !'); 
}



});