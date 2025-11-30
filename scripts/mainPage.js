
document.addEventListener('DOMContentLoaded', function() {

    const toggleTexts = document.querySelectorAll(".toggle_text");
    

    toggleTexts.forEach( (toggle) =>
    {
        toggle.addEventListener ( 'click' , () =>
        {   // pour qu'il se transform 
            toggle.classList.toggle("animate");

            // cette closet permetde recuper le 1ere parant trouver avec cett class
            const text = toggle.closest(".phase_content").querySelector(".text");

            text.classList.toggle("show");

             //verifier si y a d'autre text ouvert ( on la class show ) pour les fermer
             if ( text.classList.contains("show"))
             {
                const textAfficher = document.querySelector(".show");
                if ( text !== textAfficher ){
                    textAfficher.classList.toggle("show");
                }
             }
            
        })
    });
})