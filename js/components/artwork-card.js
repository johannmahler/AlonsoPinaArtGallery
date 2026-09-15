/* =========================================================
   ArtgalleryV1 – Artwork Card
   Zweck:
   Erstellt eine zugängliche 3D-Flipcard mit:
   - Vorderseite mit Artwork-Bild
   - Rückseite mit Artwork-Hintergrund
   - Titel
   - Beschreibung
   - Jahr
   - Button zum Öffnen des Artwork-Modals
   ========================================================= */

/* Erstellt eine vollständige Artwork-Flipcard */
export function createArtworkCard(artwork, getArtworkImage) {
    /* Erzeugt den vollständigen Bildpfad für die Rückseite */
    const artworkImage = getArtworkImage(artwork);

    /* Erstellt die Vorder- und Rückseite der Karte */
    return `
        <article
            class="artwork-card"
            data-artwork-id="${artwork.id}">
            <!-- =================================================
                 Flipcard-Innenbereich
                 Zweck:
                 Enthält Vorderseite und Rückseite.
                 Die 3D-Drehung wird später durch CSS gesteuert.
                 ================================================= -->
            <div class="artwork-card-inner">
                <!-- =============================================
                     Vorderseite der Artwork-Karte
                     ============================================= -->
                <div class="artwork-card-front">
                    <!-- Artwork-Bild -->
                    <div class="artwork-image">
                        <img
                            src="${artworkImage}"
                            alt="${artwork.title}"
                            loading="lazy"
                            decoding="async"
                        >
                    </div>

                    <!-- Grundinformationen auf der Vorderseite -->
                    <div class="artwork-info">
                        <h3>${artwork.title}</h3>
                        <p>${artwork.technique}</p>
                        <span>${artwork.year}</span>
                    </div>
                </div>

                <!-- =============================================
                     Rückseite der Artwork-Karte
                     ============================================= -->
                <div
                    class="artwork-card-back"
                    style="--artwork-background-image: url('${artworkImage}');"
                >
                    <!-- Glänzende Hintergrundfläche -->
                    <div class="artwork-card-gloss"></div>

                    <!-- Informationen auf der Rückseite -->
                    <div class="artwork-card-back-content">
                        <!-- Titel des Kunstwerks -->
                        <h3>${artwork.title}</h3>

                        <!-- Beschreibung des Kunstwerks -->
                        <p>${artwork.description}</p>

                        <!-- Entstehungsjahr -->
                        <span class="artwork-year">
                            ${artwork.year}
                        </span>

                        <!-- Button zum Öffnen des bestehenden Modals -->
                        <button
                            type="button"
                            class="artwork-details-button"
                            data-artwork-action="details"
                            aria-label="View details for ${artwork.title}"
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
}