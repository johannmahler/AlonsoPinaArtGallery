/*
=========================================================
ArtgalleryV1 – Inhaltsbereiche

Zweck:
Erstellt die About- und Contact-Bereiche der Webseite.
=========================================================
*/

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

                <form
                    class="contact-form"
                    action="#"
                    method="POST"
                >
                    <div class="form-field">
                        <label for="contact-name">
                            Name
                        </label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autocomplete="name"
                            placeholder="Your name"
                            required
                        >
                    </div>

                    <div class="form-field">
                        <label for="contact-email">
                            Email
                        </label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            placeholder="your@email.com"
                            required
                        >
                    </div>

                    <div class="form-field">
                        <label for="contact-message">
                            Message
                        </label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows="6"
                            placeholder="Your message"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        class="button"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    `;
}