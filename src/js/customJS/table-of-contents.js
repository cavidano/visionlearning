//////////////////////////////////////////////
// TOC
//////////////////////////////////////////////

export default class TableOfContents {

	#tocContainer = document.getElementById('module-toc');
	#headings = document.querySelectorAll('.module__section h2, .module__section h3');
	#tocList = document.createElement('ul');

	init() {
		if (this.#tocContainer) {

			let previousLevel = 2; // default to H2

			this.#headings.forEach((heading) => {
				if (!heading.id) {
					heading.id = `heading-${Math.random().toString(36).substring(2, 9)}`;
				}

				const currentLevel = parseInt(heading.tagName.slice(1));
				const listItem = document.createElement('li');
				const link = document.createElement('a');

				link.textContent = heading.textContent;
				link.setAttribute('href', `#${heading.id}`);

				listItem.appendChild(link);

				if (currentLevel > previousLevel) {
					const sublist = document.createElement('ul');
					sublist.appendChild(listItem);

					this.#tocList.lastChild.appendChild(sublist);
				} else if (currentLevel < previousLevel) {
					const diff = previousLevel - currentLevel;

					let parentList = this.#tocList;

					for (let i = 0; i < diff; i++) {
						parentList = parentList.lastChild.lastChild;
					}

					parentList.appendChild(listItem);
				} else {
					this.#tocList.appendChild(listItem);
				}

				previousLevel = currentLevel;

				const scrollOptions = {
					behavior: 'smooth', 
					block: 'start', 
					inline: 'nearest',
					top: 50
				}

				const handleLinkClick = (e) => {
					e.preventDefault();
					const scrollTarget = document.getElementById(heading.id);
					scrollTarget.scrollIntoView(scrollOptions);
				}

				link.addEventListener('click', handleLinkClick);

			});

			this.#tocContainer.appendChild(this.#tocList);
		}
	}
}