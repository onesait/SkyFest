const mobileMenuBtn = document.querySelector('.site-header__mobile-menu-btn');

mobileMenuBtn.addEventListener('click', (e) => {
	mobileMenuBtn.classList.toggle('active');
});


function handleMobileMenuArrows() {
	document.addEventListener('click', (e) => {
		const arrow = e.target.closest('.mobile-menu__item--has-children > svg');
		if (arrow) {
			const sublistWrapper = arrow.nextElementSibling;
			sublistWrapper?.classList.add('active');
			return;
		}

		const backArrow = e.target.closest('.mobile-menu__sublist-header > svg');
		if (backArrow) {
			const sublistWrapper = backArrow.closest('.mobile-menu__sublist-wrapper');
			sublistWrapper?.classList.remove('active');
		}
	});
}

handleMobileMenuArrows();


function markNewLineItems() {
	const lists = document.querySelectorAll('.services-block__item-list');
	const tolerance = 1;

	lists.forEach((list) => {
		const items = list.querySelectorAll('li');

		if (!items.length) return;

		items.forEach(item => item.classList.remove('new-line'));

		let prevTop = items[0].getBoundingClientRect().top;
		items[0].classList.add('new-line');

		for (let i = 1; i < items.length; i++) {
			const top = items[i].getBoundingClientRect().top;

			if (top - prevTop > tolerance) {
				items[i].classList.add('new-line');
				prevTop = top;
			}
		}
	});
}

function debounce(func, timeout = 100) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => func(...args), timeout);
	};
}

window.addEventListener('load', markNewLineItems);
window.addEventListener('resize', debounce(markNewLineItems));


const orderServiceBtn = document.querySelector('.service-first__btn');

if (orderServiceBtn) {
	orderServiceBtn.addEventListener('click', () => {
		const title = document.querySelector('h1');
		const serviceInput = document.querySelector('.order-service-modal__service-input');

		serviceInput.value = title.innerText;
	});
}


const serviceCatsBtn = document.querySelector('.service-category-list__btn');
const serviceCatItems = document.querySelectorAll('.service-category-list__item');

if (serviceCatItems.length > 8) {
	const itemsArray = Array.from(serviceCatItems);
	const hiddenItems = itemsArray.slice(8);

	hiddenItems.forEach(item => item.classList.add('hidden'));

	serviceCatsBtn.style.display = 'inline-flex';

	serviceCatsBtn.addEventListener('click', () => {
		hiddenItems.forEach(item => item.classList.toggle('hidden'));

		serviceCatsBtn.textContent = serviceCatsBtn.textContent === 'Показать еще' ? 'Скрыть' : 'Показать еще';
	});
} else {
	if (serviceCatsBtn) {
		serviceCatsBtn.style.display = 'none';
	}
}


function handleTabsOverflow() {
	document.querySelectorAll('.prices-page .tab-content').forEach(pricesPageTabContent => {
		const list = pricesPageTabContent.querySelector('.nav-tabs');
		let items, button;

		if (list && list.querySelectorAll('li').length > 0) {
			items = Array.from(list.querySelectorAll('li'));
			button = pricesPageTabContent.querySelector('.prices-page__show-btn');
		} else {
			return;
		}

		items.forEach(li => li.classList.remove('hidden'));
		button.classList.remove('show');

		if (items.length === 0) return;

		const firstRowTop = items[0].offsetTop;

		const firstRowItems = items.filter(li => li.offsetTop === firstRowTop);
		const secondRowStartIndex = firstRowItems.length;

		if (items.length > secondRowStartIndex) {
			let hidden = false;

			for (let i = secondRowStartIndex; i < items.length; i++) {
				items[i].classList.add('hidden');
				hidden = true;
			}

			const toHideFromFirstRow = firstRowItems.slice(-2);
			toHideFromFirstRow.forEach(li => {
				li.classList.add('hidden');
				hidden = true;
			});

			if (hidden) {
				button.classList.add('show');

				button.addEventListener('click', () => {
					items.forEach(li => li.classList.remove('hidden'));
					button.classList.remove('show');
				}, { once: true });
			}
		}
	});
}

window.addEventListener('load', handleTabsOverflow);
window.addEventListener('resize', handleTabsOverflow);


