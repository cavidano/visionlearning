window.addEventListener('DOMContentLoaded', () => {
    
	// Assign original data
	const libraryData = './lib/json/vl-glossary.json';
	
	// Assign HTML container
	const termListView = document.getElementById('term-list-view');
	
	// Assign moduleData globally
	let termData = '';

	const loadGlossaryData = async () => {
		
		try {
			const response = await fetch(libraryData);
			
			termData = await response.json();

			// console.log("Glossary Data ====== ", termData);

			initGlossaryData(termData);

		} catch (err) {
			// console.warn(err);
		}
	};

	const initGlossaryData = (letters) => {

		document.querySelector('.materials__main').scrollTo(0,0);

		termListView.innerHTML = letters.map((letter) => {

			const allTerms = letter.Terms;

			let letterArray = [];
			
			allTerms.map((term) => {
				letterArray.push(term.Term);
			});

			letterArray = new Set(letterArray.sort());

			letterTerms = [];

			letterArray.forEach(letter => {

				let termsByLetter = allTerms.filter(term => term.Letter === letter);

				letterTerms.push(termsByLetter);
				
			});

			// console.log(`Letter Terms ${letterTerms}`);

			let termListHTML = letterTerms.map((letter) => {

				let termListItems = letter.map((term) => {

					let termTitle = term.Name;
					let termPronounciation = term.Pronounciation;

					return(`
						<li>
							<span class="list-divider__cell">
								<a class="text-color-link" href="http://127.0.0.1:4000/glossary/term.html">
									${termTitle}
								</a>
							</span>
							<span class="list-divider__cell">
							<div class="button-group text-color-link">
								${termPronounciation ? (`
								<button
									class="button button--icon-only"
									data-pronounciation="${termPronounciation}">
									<span class="vl_icon_pronounciation" aria-hidden="true"></span>
								</button>
								`) : (``)}
								<button
									class="button button--icon-only display-none">
									<span class="vl_icon_list-add" aria-hidden="true"></span>
								</button>
							</div>
							</span>
						</li>
					`);
				}).join('');

				return(`
					<div class="margin-y-3">
									
						<ul class="list-divider font-size-md">
							${termListItems}
						</ul>

					</div>
				`);
			}).join('');

			return (`
				<section>
					<div class="padding-2">
						${termListHTML}
					</div>
				</section>
			`);

		}).join('');
	};

	loadGlossaryData();

	const buttonPronounciationList = document.querySelectorAll('[data-pronounciation]');

	buttonPronounciationList.forEach(button => {
		button.addEventListener('click', (event) => {

			console.log('Whoa!!!')
			event.preventDefault();

			const myAudio = new Audio(button.getAttribute('data-pronounciation'));
			myAudio.play();


		});
	});

});