/* =========================================================
   ArtgalleryV1 – Inhaltsbereiche
   Zweck:
   Erstellt die About- und Contact-Bereiche der Webseite.
   ========================================================= */

export function createAboutSection(site) {
    return `
        <section id="about" class="content-section">
            <div class="container">
                <p class="eyebrow">${site.about.eyebrow}</p>
                <h2>${site.about.title}</h2>
                <p>${site.about.text}</p>
            </div>
        </section>
    `;
}

export function createContactSection(site) {
    return `
        <section id="contact" class="content-section">
            <div class="container">
                <p class="eyebrow">${site.contact.eyebrow}</p>
                <h2>${site.contact.title}</h2>
                <p>${site.contact.text}</p>
            </div>
        </section>
    `;
}