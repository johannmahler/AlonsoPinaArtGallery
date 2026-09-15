/* =========================================================
   ArtgalleryV1 – Footer
   Zweck:
   Erstellt den Webseiten-Footer mit Copyright-Angabe.
   ========================================================= */

export function createFooter(site) {
    return `
        <footer class="site-footer">
            <div class="container">
                <p>© ${new Date().getFullYear()} ${site.galleryName} – ${site.artistName}</p>
            </div>
        </footer>
    `;
}