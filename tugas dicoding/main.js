const todos = JSON.parse(localStorage.getItem('todos')) || [];
const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const inputpenulis = document.querySelector('#new-task-inputpenulis');
const datebuku = document.querySelector('#new-task-inputdate');
const list_el = document.querySelector('#tasks');
const carilist = document.querySelector('#carilist');

const username = localStorage.getItem('username') || '';
input.value = username;

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const task = input.value;
		const taskpenulis = inputpenulis.value;
		const taskdate = datebuku.value;


		if (!task || !taskdate || !taskpenulis) {
			alert('jangan lupa ini');
			return;
		}

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text', 'bukuList');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		const task_input_elp = document.createElement('input');
		task_input_elp.classList.add('textpenulis', 'bukuList');
		task_input_elp.type = 'text';
		task_input_elp.value = taskpenulis;
		task_input_elp.setAttribute('readonlyp', 'readonlyp');

		const task_input_eld = document.createElement('input');
		task_input_eld.classList.add('textdate', 'bukuList');
		task_input_eld.type = 'date';
		task_input_eld.value = taskdate;
		task_input_eld.setAttribute('readonlyd', 'readonlyd');

		task_content_el.appendChild(task_input_el);
		task_content_el.appendChild(task_input_elp);
		task_content_el.appendChild(task_input_eld);

		const task_action_el = document.createElement('div');
		task_action_el.classList.add('action');

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_action_el.appendChild(task_edit_el);
		task_action_el.appendChild(task_delete_el);
		task_el.appendChild(task_action_el);

		list_el.appendChild(task_el);

		input.value = '';
		inputpenulis.value = '';
		datebuku.value = '';

		task_action_el.addEventListener('click', () => {
			if (task_edit_el.innerText.toLowerCase() == 'edit') {
				task_input_el.removeAttribute('readonly');
				task_input_el.focus();
				task_edit_el.innerText = 'Save';
			} else {
				task_input_el.setAttribute('readonly', 'readonly');
				task_edit_el.innerText = 'Edit';
			}
		});

		task_delete_el.addEventListener('click', () => {
			list_el.removeChild(task_el);
		});

		todos.push(task);
		localStorage.setItem('todos', JSON.stringify(todos));
		localStorage.setItem('username', input.value);
	});
	carilist.addEventListener('keyup', pencarianlist);
	
	function pencarianlist(e) {
		const cariNilai = e.target.value.toLowerCase();
		const itemlist = document.querySelectorAll('.bukuList');
		
		itemlist.forEach(item => {
			const isibuku = item.textContent.toLowerCase();

			if(isibuku.indexOf(cariNilai) !== -1){
				item.style.backgroundColor = 'black';
			} else {
				item.style.backgroundColor  = 'red';
			}
		});
	}


