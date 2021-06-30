window.addEventListener('DOMContentLoaded', (event) => {
    
	// Assign original data
	const libraryData = './lib/json/vl-library-v2.json';
	
	// Assign HTML container
	const moduleListView = document.getElementById('module-list-view');
	
	// Assign moduleData globally
	let moduleData = '';

	const loadLibraryData = async () => {
		
		try {
			const response = await fetch(libraryData);
			
			moduleData = await response.json();

			initModuleData(moduleData);
		
			bindButtons();

		} catch (err) {
			console.warn(err);
		}
	};

	const bindButtons = () => {

		const filterButtonTarget = document.getElementById('filter-by-discipline');

		const filterButtonList = filterButtonTarget.querySelectorAll('button');

		filterButtonList.forEach(filterButton => {

			let myName = filterButton.innerHTML.toString().trim();
			
			filterButton.addEventListener("click", (event) => {

				filterButtonList.forEach(button => {
					button.removeAttribute("aria-selected");
				});

				filterButton.setAttribute("aria-selected", true);

				if(myName === 'All Disciplines'){
					initModuleData(moduleData)
				} else{
					initModuleData(moduleData.filter(discipline => discipline.Name === myName));
				}

			});
			
		});

	};

	const initModuleData = (disciplines) => {

		document.querySelector('.materials__main').scrollTo(0,0);

		moduleListView.innerHTML = disciplines.map((discipline) => {

			const allModules = discipline.Modules;

			let subCategoryArray = [];
			
			allModules.map((module) => {
				subCategoryArray.push(module.SubCategory);
			});

			subCategoryArray = new Set(subCategoryArray.sort());

			disciplineModules = [];

			subCategoryArray.forEach(subCategory => {

				let modulesByCategory = allModules.filter(module => module.SubCategory === subCategory);

				disciplineModules.push(modulesByCategory);
				
			});

			let moduleListHTML = disciplineModules.map((category) => {
				
				let categoryTitle = category[0].SubCategory;

				let moduleListItems = category.map((module) => {

					let moduleTitle = module.Name;

					return(`
						<li>
							<span class="list-divider__cell">
								<a class="link" href="http://127.0.0.1:4000/library/module.html">
									${moduleTitle}
								</a>
							</span>
							<span class="list-divider__cell">
								<a class="button font-size-sm ally-link" href="#1">
									<span class="button__text">NGSS View</span>
								</a>
							</span>
						</li>
					`);
				}).join('');

				return(`
					<div class="category margin-y-3">
									
						<h2 class="h6">${categoryTitle}</h2>

						<ul class="list-divider font-size-md">
							${moduleListItems}
						</ul>

					</div>
				`);
			}).join('');

			return (`
				<section>

					<header class="theme-primary ${discipline.Slug} discipline-divider">
						<h2 class="h3 discipline-divider__title">${discipline.Name}</h2>
					</header>
					
					<div class="padding-3">
						${moduleListHTML}
					</div>

				</section>
			`);

		}).join('');
	};

	loadLibraryData();

});