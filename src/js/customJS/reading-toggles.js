export default class ReadingToggles {

  // Private properties
  #ngssTextList = document.querySelectorAll('.ngss');
  #termsList = document.querySelectorAll('.term');
  #ngssToggleSwitch = document.getElementById('ngss-toggle-switch');
  #termsToggleSwitch = document.getElementById('terms-toggle-switch');

  // New private properties for tooltip
  #tooltipTimeout;

  // Tooltip Methods
  
  showTooltip = (target, title, body) => {
    const tooltipHTML = `
        <span class="tooltip-content" aria-hidden="false" role="tooltip">
            <strong>${title}</strong>
            <p>${body}</p>
        </span>
    `;

    target.insertAdjacentHTML('beforeend', tooltipHTML);
  };

  hideTooltip = (target) => {
    const tooltip = target.querySelector('.tooltip-content');
    if (tooltip) {
      tooltip.remove();
    }
  };

  handleNGSSMouseOver = (event) => {
    const ngss = event.currentTarget;
    const ngssCat = ngss.getAttribute('data-ngss-cat-full') || 'Title not found';
    const ngssDesc = ngss.getAttribute('data-ngss-desc') || 'Description not found';

    this.#tooltipTimeout = setTimeout(() => this.showTooltip(ngss, ngssCat, ngssDesc), 500);
  };

  handleNGSSMouseOut = (event) => {
    clearTimeout(this.#tooltipTimeout);
    this.hideTooltip(event.currentTarget);
  };

  handleTermMouseOver = (event) => {
    const term = event.currentTarget;
    const termTitle = term.innerHTML;
    const termDef = term.getAttribute('data-term-def') || 'Description not found';

    this.#tooltipTimeout = setTimeout(() => this.showTooltip(term, termTitle, termDef), 500);
  };

  handleTermMouseOut = (event) => {
    clearTimeout(this.#tooltipTimeout);
    this.hideTooltip(event.currentTarget);
  };

  turnOnNGSS = () => {
    this.#ngssTextList.forEach((ngss) => {
      ngss.classList.add('highlighted');
      ngss.addEventListener('mouseover', this.handleNGSSMouseOver);
      ngss.addEventListener('mouseout', this.handleNGSSMouseOut);
    });
  };

  turnOffNGSS = () => {
    this.#ngssToggleSwitch.checked = false;
    this.#ngssTextList.forEach((ngss) => {
      ngss.classList.remove('highlighted');
      ngss.removeEventListener('mouseover', this.handleNGSSMouseOver);
      ngss.removeEventListener('mouseout', this.handleNGSSMouseOut);
    });
  };

  turnOnTerms = () => {
    this.#termsList.forEach((term) => {
      term.classList.add('highlighted');
      term.addEventListener('mouseover', this.handleTermMouseOver);
      term.addEventListener('mouseout', this.handleTermMouseOut);
    });
  };

  turnOffTerms = () => {
    this.#termsToggleSwitch.checked = false;
    this.#termsList.forEach((term) => {
      term.classList.remove('highlighted');
      term.removeEventListener('mouseover', this.handleTermMouseOver);
      term.removeEventListener('mouseout', this.handleTermMouseOut);
    });
  };

  init = () => {

    if (this.#termsToggleSwitch) {
      this.#termsToggleSwitch.addEventListener('change', (e) => {
        const highlightTerms = e.target.checked;
        if (highlightTerms === true) {
          if (this.#ngssToggleSwitch.checked === true) {
            this.turnOffNGSS();
          }
          this.turnOnTerms();
        } else {
          this.turnOffTerms();
        }
      });
    }

    if (this.#ngssToggleSwitch) {
      this.#ngssToggleSwitch.addEventListener('change', (e) => {
        const highlightNGSS = e.target.checked;
        if (highlightNGSS === true) {
          if (this.#termsToggleSwitch.checked === true) {
            this.turnOffTerms();
          }
          this.turnOnNGSS();
        } else {
          this.turnOffNGSS();
        }
      });
    }
  };

}