const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.12
    }
);


document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        observer.observe(element);

    });



const letters = {

    1: {

        title: "O que eu amo em você",

        text:
            "Escreva aqui tudo aquilo que você ama nessa pessoa. " +
            "Os detalhes, os jeitos, as pequenas coisas que talvez " +
            "ela nem perceba."

    },


    2: {

        title: "Quando eu sinto saudade",

        text:
            "Esta carta pode ser para aqueles momentos em que " +
            "vocês estão longe. Coloque aqui aquilo que você " +
            "gostaria de dizer quando a saudade apertar."

    },


    3: {

        title: "Para o nosso futuro",

        text:
            "Uma mensagem para vocês lerem daqui a alguns anos. " +
            "Sonhos, planos, promessas e tudo aquilo que vocês " +
            "esperam viver juntos."

    }

};



const modal =
    document.getElementById("letter-modal");


document
    .querySelectorAll(".letter")
    .forEach((button) => {

        button.addEventListener("click", () => {

            const data =
                letters[button.dataset.letter];

            document
                .getElementById("modal-title")
                .textContent = data.title;

            document
                .getElementById("modal-text")
                .textContent = data.text;

            modal.classList.add("open");

        });

    });



if (modal) {

    document
        .querySelector(".close-modal")
        .addEventListener("click", () => {

            modal.classList.remove("open");

        });


    modal.addEventListener("click", (event) => {

        if (event.target === modal) {

            modal.classList.remove("open");

        }

    });

}
