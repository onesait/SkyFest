const mobileMenuBtn = document.querySelector('.site-header__mobile-menu-btn');

mobileMenuBtn.addEventListener('click', (e) => {
	mobileMenuBtn.classList.toggle('active');
});


const mobileMenuItemHasChildrenSvg = document.querySelector('.mobile-menu__item--has-children svg');

mobileMenuItemHasChildrenSvg.addEventListener('click', (e) => {
	mobileMenuItemHasChildrenSvg.classList.toggle('active');
});


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
