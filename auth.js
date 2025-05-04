// configurations chaque espace
const authConfig = {
    mediation: {
        password: "1", // À remplacer 
        redirect: "Mediation.html"
    },
    diffusion: {
        password: "1", // À remplacer 
        storageKey: "authDiffusion",
        redirect: "diffusion.html"
    },
    direction: {
        password: "1", // À remplacer 
        storageKey: "authDirection",
        redirect: "direction.html"
    }
};

// identifiants selon l'espace sélectionné
function verifier() {
    const passwordInput = document.getElementById("password").value;
    const space = document.getElementById("space").value;

    if (authConfig.hasOwnProperty(space)) {
        const config = authConfig[space];

        // Vérification du mp
        if (passwordInput === config.password) {
            // Stockage du mot de passe encodé en base64 dans le localStorage
            localStorage.setItem(config.storageKey, btoa(passwordInput));
            // Redirection page dédiée à l'espace
            window.location.href = config.redirect;
        } else {
            alert("Mot de passe incorrect pour l'espace " + space + " !");
        }
    } else {
        alert("Espace inconnu.");
    }
}


function checkAccess(space) {
    if (authConfig.hasOwnProperty(space)) {
        const config = authConfig[space];
        // Vérifie si le mot de passe stocké correspond au mot de passe attendu (encodé en base64)
        if (localStorage.getItem(config.storageKey) !== btoa(config.password)) {
            window.location.href = "login.html";
        }
    }
}

// déconnexion 
function deconnexion(space) {
    if (authConfig.hasOwnProperty(space)) {
        localStorage.removeItem(authConfig[space].storageKey);
        window.location.href = "login.html";
    }
}
