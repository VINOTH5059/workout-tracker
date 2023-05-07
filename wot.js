const form = document.querySelector('form');
const logList = document.querySelector('#log-list');

form.addEventListener('submit', addExercise);

function addExercise(event) {
	event.preventDefault();
	
	const nameInput = document.querySelector('#exercise-name');
	const repsInput = document.querySelector('#exercise-reps');
	const setsInput = document.querySelector('#exercise-sets');
	
	const name = nameInput.value;
	const reps = repsInput.value;
	const sets = setsInput.value;
	
	const exercise = {
		name: name,
		reps: reps,
		sets: sets
	};
	
	const