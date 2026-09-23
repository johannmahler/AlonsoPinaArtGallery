/* =========================================================
   ArtgalleryV1 – Artwork Detail Modal
   Zweck:
   Erstellt und steuert die zugängliche Detailansicht
   eines Kunstwerks inklusive Tastaturbedienung,
   Fokussteuerung und Fokus-Rückkehr zur zuvor
   ausgewählten Artwork-Karte.
   ========================================================= */

/* Erstellt das HTML-Grundgerüst des Artwork-Modals */
export function createArtworkModal() {
    return `
        <div
            id="artwork-modal"
            class="artwork-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="artwork-modal-title"
            hidden
        >
            <div class="artwork-modal-content">
                <button
                    type="button"
                    class="artwork-modal-close"
                    aria-label="Close artwork details"
                >
                    ×
                </button>
                <div id="artwork-modal-body"></div>
            </div>
        </div>
    `;
}

/* Initialisiert das Modal und seine Bedienung */
export function initArtworkModal(artworks, getArtworkImage) {
    const modal = document.querySelector("#artwork-modal");
    const modalBody = document.querySelector("#artwork-modal-body");
    const closeButton = document.querySelector(".artwork-modal-close");
    let lastFocusedCard = null;

    /* Bricht die Initialisierung ab, falls das Modal nicht vorhanden ist */
    if (!modal || !modalBody || !closeButton) {
        return;
    }

    /* Formatiert den Preis entsprechend der hinterlegten Währung */
    function formatPrice(artwork) {
        return new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: artwork.currency
        }).format(artwork.price);
    }

    /* Ermittelt alle aktuell fokussierbaren Elemente innerhalb des Modals */
    function getFocusableElements() {
        return Array.from(
            modal.querySelectorAll(
                "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
            )
        ).filter(element => !element.disabled);
    }

    /* Öffnet die Detailansicht eines ausgewählten Kunstwerks */
    function openArtwork(artwork, card) {
        lastFocusedCard = card;

        const availability = artwork.available
            ? `<p class="artwork-status">Available</p>`
            : `<p class="artwork-status">Sold / Not Available</p>`;

        modalBody.innerHTML = `
    <div class="artwork-modal-image">
        <img
            src="${getArtworkImage(artwork)}"
            alt="${artwork.title}"
        >
    </div>
    <div class="artwork-modal-info">
        <p class="eyebrow">${artwork.category}</p>
        <p class="artwork-artist">Alonso Pina</p>
        <h2 id="artwork-modal-title">${artwork.title}</h2>
     <p class="artwork-statement">
    ${artwork.artisticStatement}
</p>
<p>${artwork.technique} · ${artwork.size}</p>
        <p>${artwork.year} · ${artwork.type}</p>
        <p class="artwork-price">${formatPrice(artwork)}</p>
        ${availability}
    </div>
`;

        /* Modal sichtbar machen und Hintergrund gegen Scrollen sperren */
        modal.hidden = false;
        document.body.classList.add("modal-open");

        /* Fokus zunächst auf den Schließen-Button setzen */
        closeButton.focus();
    }

    /* Schließt das Modal und gibt den Fokus an den zuvor verwendeten Details-Button zurück */
    function closeArtwork() {
        modal.hidden = true;
        document.body.classList.remove("modal-open");

        if (lastFocusedCard) {
            lastFocusedCard.focus();
        }
    }

    /* Öffnet das passende Artwork anhand der Karten-ID */
    document.querySelectorAll(".artwork-card").forEach(card => {
        const detailsButton = card.querySelector(
            ".artwork-details-button"
        );

        if (!detailsButton) {
            return;
        }

        const openSelectedArtwork = () => {
            const artworkId = Number(card.dataset.artworkId);
            const artwork = artworks.find(item => item.id === artworkId);

            if (artwork) {
                openArtwork(artwork, detailsButton);
            }
        };

        detailsButton.addEventListener("click", event => {
            event.stopPropagation();
            openSelectedArtwork();
        });
    });

    /* Schließen über den Schließen-Button */
    closeButton.addEventListener("click", closeArtwork);

    /* Schließen durch Klick auf den abgedunkelten Außenbereich */
    modal.addEventListener("click", event => {
        if (event.target === modal) {
            closeArtwork();
        }
    });

    /* Globale Tastatursteuerung für Escape und Fokusführung */
    document.addEventListener("keydown", event => {
        if (modal.hidden) {
            return;
        }

        /* Escape schließt das Modal */
        if (event.key === "Escape") {
            event.preventDefault();
            closeArtwork();
            return;
        }

        /* Tab bleibt innerhalb des geöffneten Modals */
        if (event.key === "Tab") {
            const focusableElements = getFocusableElements();

            if (focusableElements.length === 0) {
                event.preventDefault();
                closeButton.focus();
                return;
            }

            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (event.shiftKey && document.activeElement === firstElement) {
                event.preventDefault();
                lastElement.focus();
            } else if (!event.shiftKey && document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    });
}