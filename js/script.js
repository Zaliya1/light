const filterByType = (type, ...values) => values.filter(value => typeof value === type),
// аргументы функции заданный тип и все введеные данные. Фильтруем и оставляем только те, чей тип равен заданному типу
	hideAllResponseBlocks = () => {
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
		responseBlocksArray.forEach(block => block.style.display = 'none');
	}, // всем дивам с таким классом присваивается display none 

	showResponseBlock = (blockSelector, msgText, spanSelector) => {
		hideAllResponseBlocks(); // вызов функции для скрытия блоков
		document.querySelector(blockSelector).style.display = 'block';
		if (spanSelector) {
			document.querySelector(spanSelector).textContent = msgText;
		} // если передали 3й аргумент, он будет отражаться в спане
	},

	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'), // вызов функции с неуспешным результатом - строка "Ошибка ..."

	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'), // вызов функции с успешным ответом - строка valuesArray

	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'), // вызов функции showResponseBlock. Блоку с данным классом присвоется дисплей блок. В спан ничего не выводится

	tryFilterByType = (type, values) => {
		try { // если данные были переданы верно
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
			// в строку помещаем данные из массива, прошедшие проверку, разделяя запятой
			console.log(typeof valuesArray)
			const alertMsg = (valuesArray.length) ?
				`Данные с типом ${type}: ${valuesArray}` :
				`Отсутствуют данные типа ${type}`;
				// если существует строка с нужными данными, то выводим сообщение "Данные с типом", в противном случае "Отсутсвуют данные"
			showResults(alertMsg);
		} catch (e) { // если данные были переданы неверно, сообщение об ошибке
			showError(`Ошибка: ${e}`);
		}
	};

const filterButton = document.querySelector('#filter-btn');

filterButton.addEventListener('click', e => { // при событии клик на кнопку срабатывает следующая функция:
	const typeInput = document.querySelector('#type');
	const dataInput = document.querySelector('#data');

	if (dataInput.value === '') { // если ничего не введено в инпут
		dataInput.setCustomValidity('Поле не должно быть пустым!');
		showNoResults(); //вызов функции, которая ничего не выведет в результат
	} else { // если что-то введено в инпут
		dataInput.setCustomValidity(''); // Инпут очищается
		e.preventDefault(); // страница не перезагружается
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim()); // вызывается функция с аргументами тип данных и данными без пробелов
	}
});

