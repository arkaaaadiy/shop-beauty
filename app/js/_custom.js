document.addEventListener("DOMContentLoaded", function() {

	const menu = document.getElementById('menu__toggle')
	const menu_item = document.getElementById('menu__item')

	menu.addEventListener('click', () => {
		menu.classList.toggle('menu__btn-open')
		menu_item.classList.toggle('menu__item-show')
	})

});
