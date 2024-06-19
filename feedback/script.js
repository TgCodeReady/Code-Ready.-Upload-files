	let modal = document.querySelector('.modal');
	let openModalBtn = document.getElementById('open-modal');
	let closeModalBtn = document.querySelector('.close');
	let form = document.querySelector('form');

	openModalBtn.addEventListener('click', function() {
	  modal.classList.add('show');
	});

	closeModalBtn.addEventListener('click', function() {
	  modal.classList.remove('show');
	  modal.classList.add('hide');
	  setTimeout(function() {
	    modal.classList.remove('hide');
	  }, 500);
	});

	form.addEventListener('submit', function(event) {
	  event.preventDefault();
	  modal.classList.add('hide');
	  setTimeout(function() {
	    modal.classList.remove('show');
	    modal.classList.remove('hide');
	  }, 500);
	  modal.querySelector('.modal-content').style.animation = 'scaleOut 0.5s ease-out forwards';
	});

	modal.addEventListener('transitionend', function() {
	  if (!modal.classList.contains('show')) {
	    modal.style.display = 'none';
	  }
	});
