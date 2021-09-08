window.addEventListener('DOMContentLoaded', () => {
    
	// Assign original data
	const libraryData = './lib/json/vl-glossary.json';
	
	// Assign HTML container
	const termListView = document.getElementById('term-list-view');
	
	// Assign moduleData globally
	let moduleData = '';

	const loadLibraryData = async () => {
		
		try {
			const response = await fetch(libraryData);
			
			termData = await response.json();

			console.log("Glossary Data ====== ", termData);

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

			console.log(letterTerms);

			let termListHTML = letterTerms.map((letter) => {

				let termListItems = letter.map((term) => {

					let termTitle = term.Name;

					return(`
						<li>
							<span class="list-divider__cell">
								<a class="text-color-link" href="http://127.0.0.1:4000/library/module.html">
									${termTitle}
								</a>
							</span>
							<span class="list-divider__cell">
								<a class="button font-size-sm ally-link" href="#1">
									<span class="button__text">View</span>
								</a>
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

	loadLibraryData();

});