import { delegateEvent } from './utilities/eventDelegation';
import { getCurrentBreakpoint } from './utilities/getCurrentBreakpoint';

import { handleArrowKeyNavigation } from './utilities/keyboardNavigation';

export default class Tab {

  // Private properties

  #tabsList = document.querySelectorAll('.tabs');

  // Private methods

  #deactivateTabs(tabsButtonList, tabsPanelList) {
    tabsButtonList.forEach((tab) => {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
      tab.classList.remove('is-active');
    });
    
    tabsPanelList.forEach((panel) => {
      panel.classList.remove('shown');
      panel.setAttribute('aria-hidden', 'true'); // Ensure it's hidden from screen readers
    });
  }

  #activateTab(tab, tabsButtonList, tabsPanelList) {
    this.#deactivateTabs(tabsButtonList, tabsPanelList);

    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    tab.classList.add('is-active');

    const controls = tab.getAttribute('aria-controls');
    const currentTabPanel = document.getElementById(controls);

    currentTabPanel.classList.add('shown'); // Use 'shown' to make the panel visible
    currentTabPanel.setAttribute('aria-hidden', 'false'); // Make it visible to screen readers
  }

  #toggleTab(tab, tabsButtonList, tabsPanelList) {
    const isActive = tab.getAttribute('aria-selected') === 'true';

    if (isActive) {
      tab.setAttribute('aria-selected', 'false');
      tab.setAttribute('tabindex', '-1');
      tab.classList.remove('is-active');

      const controls = tab.getAttribute('aria-controls');
      const currentTabPanel = document.getElementById(controls);

      currentTabPanel.classList.remove('shown');
      currentTabPanel.setAttribute('aria-hidden', 'true');
    } else {
      this.#activateTab(tab, tabsButtonList, tabsPanelList);
    }
  }

  #getBreakpointValue(breakpoint) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(`--bp-${breakpoint}`).trim();
    console.log("current breakpont is: ", value)
    return parseInt(value, 10);
  }

  #shouldApplyToggleMode(tab) {
    const toggleClassRegex = /tabs--toggle-mobile--(\w+)/;
    const match = tab.className.match(toggleClassRegex);
    if (!match) return false;

    const breakpoint = match[1];
    const breakpointValue = this.#getBreakpointValue(breakpoint);
    return window.innerWidth < breakpointValue;
  }

  #hasToggleClass(tab) {
    return /tabs--toggle-mobile--(\w+)/.test(tab.className);
  }

  // Public methods

  init() {
    this.#tabsList.forEach((tab) => {
      const tabsButtonList = tab.querySelectorAll('[role="tab"]');
      const tabsPanelList = tab.querySelectorAll('[role="tabpanel"]');

      // Determine initial tab state based on breakpoint and toggle class
      if (this.#hasToggleClass(tab)) {
        if (this.#shouldApplyToggleMode(tab)) {
          // Toggle mode: do not activate any tab if the breakpoint does not match
          this.#deactivateTabs(tabsButtonList, tabsPanelList);
        } else {
          // Normal mode: activate the first tab if the breakpoint matches
          this.#activateTab(tabsButtonList[0], tabsButtonList, tabsPanelList);
        }
      } else {
        // No toggle class: activate the first tab by default
        this.#activateTab(tabsButtonList[0], tabsButtonList, tabsPanelList);
      }

      delegateEvent(tab, 'click', '[role="tab"]', (event) => {
        const clickedTab = event.target.closest('[role="tab"]');
        if (this.#hasToggleClass(tab) && this.#shouldApplyToggleMode(tab)) {
          // Toggle behavior for non-matching breakpoints
          this.#toggleTab(clickedTab, tabsButtonList, tabsPanelList);
        } else {
          // Normal tab behavior for matching breakpoints or no toggle class
          this.#activateTab(clickedTab, tabsButtonList, tabsPanelList);
        }
      });

      delegateEvent(tab, 'keydown', '[role="tab"]', (event) => {
        if (!['Enter', 'Space', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.code)) {
          return;
        }

        const focusedTab = event.target.closest('[role="tab"]');
        const index = Array.from(tabsButtonList).indexOf(focusedTab);

        switch (event.code) {
          case 'Enter':
          case 'Space':
            event.preventDefault();
            if (this.#hasToggleClass(tab) && this.#shouldApplyToggleMode(tab)) {
              // Toggle behavior for non-matching breakpoints
              this.#toggleTab(focusedTab, tabsButtonList, tabsPanelList);
            } else {
              // Normal tab behavior for matching breakpoints or no toggle class
              this.#activateTab(focusedTab, tabsButtonList, tabsPanelList);
            }
            break;
          case 'ArrowLeft':
          case 'ArrowRight':
          case 'Home':
          case 'End':
            handleArrowKeyNavigation(event, index, tabsButtonList, (targetIndex) => {
              tabsButtonList[targetIndex].focus();
            });
            break;
          default:
            break;
        }
      });

      window.addEventListener('resize', () => {
      console.log("current breakpoint", getCurrentBreakpoint());
        if (this.#hasToggleClass(tab)) {
          if (this.#shouldApplyToggleMode(tab)) {
            // In toggle mode, deactivate all tabs on resize
            this.#deactivateTabs(tabsButtonList, tabsPanelList);
          } else {
            // In normal mode, activate the first tab on resize if needed
            this.#activateTab(tabsButtonList[0], tabsButtonList, tabsPanelList);
          }
        }
      });
    });
  }
}