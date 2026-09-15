/* =========================================================
   ArtgalleryV1 – Hero-Bereich
   Zweck:
   Erstellt den Einstiegsbereich der Galerie aus den
   zentralen Seitendaten.
   ========================================================= */

export function createHero(site) {
    return `
        <section id="home" class="hero">
            <div class="container">
                <p class="eyebrow">${site.hero.eyebrow}</p>
                <h1>${site.hero.title}</h1>
                <p>${site.hero.text}</p>
                <a href="#gallery" class="button">${site.hero.button}</a>
            </div>
        </section>
    `;
}