/* =========================================================
   ArtgalleryV1 – Header
   Zweck:
   Erstellt den Webseitenkopf mit Logo und Navigation.
   ========================================================= */

/* Erstellt den Header mit Logo und Navigation */
export function createHeader(site) {
    return `
        <header class="site-header">
            <div class="container">
                <a href="#home" class="logo">${site.galleryName}</a>
                <nav class="main-nav" data-js="navigation">
                    ${site.navigation.map(item => `
                        <a href="#${item.target}">${item.label}</a>
                    `).join("")}
                </nav>
            </div>
        </header>
    `;
}