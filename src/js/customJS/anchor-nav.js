export default class AnchorNav {

  // Private properties
  #anchorNavLinkList = document.querySelectorAll('.anchor-nav > ul > li > a');
  #sections = document.querySelectorAll('section[id]');
  #sectionObserver;
  #firstSectionOffset;

  // Private methods
  #handleSectionIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentSectionId = entry.target.id;
        this.#anchorNavLinkList.forEach((link) => {
          const sectionId = link.getAttribute('href').split('#')[1];
          if (sectionId === currentSectionId) {
            link.setAttribute('aria-selected', 'true');
          } else {
            link.setAttribute('aria-selected', 'false');
          }
        });
      }
    });
  }

  // Public methods
  init() {
    if (this.#anchorNavLinkList.length > 0 && this.#sections.length > 0) {
      this.#firstSectionOffset = this.#sections[0].offsetTop;

      this.#anchorNavLinkList.forEach((anchorNavLink) => {
        const sectionId = anchorNavLink.getAttribute('href').split('#')[1];

        anchorNavLink.addEventListener('click', (event) => {
          event.preventDefault();

          const section = document.querySelector(`#${sectionId}`);

          section.scrollIntoView({
            behavior: 'instant',
          });
        });
      });

      const sectionOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.75,
      };

      this.#sectionObserver = new IntersectionObserver(
        this.#handleSectionIntersect.bind(this),
        sectionOptions
      );

      this.#sections.forEach((section) => {
        this.#sectionObserver.observe(section);
      });

      window.addEventListener('scroll', () => {
        if (window.scrollY < this.#firstSectionOffset) {
          this.#anchorNavLinkList.forEach((link) => {
            const sectionId = link.getAttribute('href').split('#')[1];
            if (sectionId === this.#sections[0].id) {
              link.setAttribute('aria-selected', 'true');
            } else {
              link.setAttribute('aria-selected', 'false');
            }
          });
        }
      });
    }
  }
}