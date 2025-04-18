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