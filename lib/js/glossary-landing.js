function playAudio(target) {

	let mySource = target.getAttribute("data-pronounciation");
	
	console.log('My Audio!!!' + mySource);
	// const myAudio = new Audio(mySource);
	// myAudio.play();
}

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

	const initGlossaryData = (letters, playAudio) => {

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

					const initAudio = () => {
							// event.preventDefault();

							const audioButton = (`
							<button
								class="button button--icon-only"
								data-pronounciation="${termPronounciation}"
								onclick="playAudio(this)">
								<span class="vl_icon_pronounciation" aria-hidden="true"></span>
							</button>
							`);

							return audioButton;
					}

					return (`
						<li>
							<span class="list-divider__cell">
								<a class="text-color-link" href="/glossary/term.html">
									${termTitle}
								</a>
							</span>
							<span class="list-divider__cell">
							<div class="button-group text-color-link">
								${termPronounciation ? initAudio() : (``)}
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

});
