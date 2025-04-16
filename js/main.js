const mobileMenuBtn = document.querySelector('.site-header__mobile-menu-btn');

mobileMenuBtn.addEventListener('click', (e) => {
	mobileMenuBtn.classList.toggle('active');
});


const mobileMenuItemHasChildrenSvg = document.querySelector('.mobile-menu__item--has-children svg');

mobileMenuItemHasChildrenSvg.addEventListener('click', (e) => {
	mobileMenuItemHasChildrenSvg.classList.toggle('active');
});