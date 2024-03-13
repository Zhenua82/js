'use strict';
/* page */
const page = {
	menu: document.querySelector('.menuproject'),
  head: {
    h2: document.querySelector('.titleproject h2'),
    pers: document.querySelector('#pers'),
    progress: document.querySelector('.polosa')
  },
  block_dn: document.querySelector('.block_dni'),
  denj: document.querySelector('body > div.container.text-center > div > div.col-11.col-xs-11.col-sm-11.col-md-11.col-lg-11.col-xl-11.col-xxl-11.contextproject > div.dniproject > div.denjproject'),
  popup: {
    condPopup: document.querySelector('.popupproject'),
    gotovo: document.querySelector('.popupproject_main .gotovoproject'),
    namee: document.querySelector('.first_popupproject'),
    targett: document.querySelector('.second_popupproject'),
    iconFild: document.querySelector('form input[name="icon"]')
  }  
};

let habbits = [];
const HABBITS_KEY = 'HABBITS_KEY';

// utils
function loadData(){
  const habbitsString = localStorage.getItem(HABBITS_KEY);
  const habbitsArray = JSON.parse(habbitsString);
  if (Array.isArray(habbitsArray)){
    habbits = habbitsArray;
  }
};

function saveData(){
  localStorage.setItem(HABBITS_KEY, JSON.stringify(habbits));
};

function resetForm(form, fields) {
	for (const field of fields) {
		form[field].value = '';
	}
}

function validateAndGetFormData(form, fields) {
	const formData = new FormData(form);
	const res = {};
	for (const field of fields) {
		const fieldValue = formData.get(field);
		form[field].classList.remove('emptyproject');
		if (!fieldValue) {
			form[field].classList.add('emptyproject');
		}
		res[field] = fieldValue;
	}
	let isValid = true;
	for (const field of fields) {
		if (!res[field]) {
			isValid = false;
		}
	}
	if (!isValid) {
		return;
	}
	return res;
}

//init:
(function() {
  loadData();
  let hash = document.location.hash.replace('#', '')
  if (hash){
    rerender(habbits[Number(hash) - 1].id)}//Рендерим при инициализации id активного элемента массива данных
  else{rerender(habbits[0].id)}//Рендерим при инициализации id первого элемента массива данных (1)
})();

/* render */
//Здесь кнопки не обернуты в <div class="menu-element"> (да он и не нужен)
function rerenderMenu(activeHabbit) {
	for (const habbit of habbits) {
		const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);//Присваеваем
    //existed найденный на странице массив данных (а он сразу - не будет иметься), которые содержатся в хранилище
    if (!existed) {//Если данные не найдены на странице, то добавляем их
			const element = document.createElement('button');
			element.setAttribute('menu-habbit-id', habbit.id);
			element.setAttribute('oncontextmenu', "delcnop(this, event)");
			element.setAttribute('onclick', "fierClic(this)");
			element.setAttribute('onmouseover', "fierHover(this)"); 
			element.classList.add('cnopproject');
			element.addEventListener('click', () => rerender(habbit.id));//при нажатии на кнопку -
      //заново рендерим страницу и добавляем на нее активный класс, а с др. элементов убираем (if - ниже)
			element.innerHTML = `<img src="img/${habbit.icon}.svg" alt="${habbit.name}" />`;
			if (activeHabbit.id === habbit.id) {
				element.classList.add('cnopproject_active');
			}
			page.menu.appendChild(element);
			continue;
		}
		if (activeHabbit.id === habbit.id) {
			existed.classList.add('cnopproject_active');
		} else {
			existed.classList.remove('cnopproject_active');
		}
	}
};

//Удаление кнопок из меню
function delcnop(context, event){
  event.preventDefault();
  let j = 1;
  let delCnopId = context.getAttribute('menu-habbit-id')
  for (let i = 0; i < habbits.length; i++) {
    let habbit = habbits[i];
    if (habbit.id == Number(delCnopId)) {
      habbits = habbits.filter(function(habbitt) {
        return habbitt.id != delCnopId;
      });
      break;
    }
  };
  habbits.forEach(function (habbit){
    habbit.id = j++
  });
  let menuNav = document.querySelector('nav.menuproject');
  let buttons = menuNav.querySelectorAll('button');
  buttons.forEach(function(button) {
      button.remove();
  });
  saveData();
  loadData();
  rerender(habbits[0].id)
}

function rerenderHead(activeHabbit) {
  page.head.h2.innerText = activeHabbit.name;
  let persent = Math.round(activeHabbit.days.length / activeHabbit.target * 100);
  page.head.pers.innerText = persent + '%';
  page.head.progress.style.background = `linear-gradient(to right, rgb(54, 42, 228) 0%, rgb(54, 42, 228) ${persent}%, #e4e4e4 ${persent}%)`;
};

function rerenderDni(activeHabbit) {
  page.block_dn.innerHTML = ``;
  activeHabbit.days.forEach((day, i) => {
    let denj = document.createElement('div');
    denj.classList.add('dniproject');
    denj.innerHTML = `<div class="denjproject">Месяц ${i + 1}</div>
    <div class="poleinputproject">
      <textarea cols="40" rows="10" class="auto-resize vvedtext">${day.coment}</textarea>
      <button class="musorproject" onclick="dellDays(${i})">
        <img src="img/shape.svg" alt="мусорка" />
      </button>
    </div>`
    page.block_dn.appendChild(denj);
    page.denj.innerText = `Месяц ${i + 2}`
  })
  if (Active.days.length < 1){page.denj.innerText = `Месяц 1`};
  // Изменение введенного текста в поле дни
  let  newText;
  const inputElements = document.querySelectorAll('.vvedtext');
  inputElements.forEach((element, i) => {
    element.addEventListener('keyup', () => {
        newText = element.value;
        Active.days[i] = {coment: `${newText}`};
        saveData();
    });
  });
};

//Работа с формой (присваеваем ее данные переменной и делаем ее неактивной)
function addDays(event){
  let form = event.target;
  event.preventDefault();
  let dannye_input = validateAndGetFormData(form, ['inputday']);
  if (!dannye_input){return}
  habbits = habbits.map(elem => { //перебираем привычки и ищем ту, которая активна
    if (elem.id == ActiveHabbit && dannye_input != ''){
      elem.days.push({coment: `${dannye_input.inputday}`});//Пушим в дни актив привычки введенные данные
      return elem;
    } return elem;
  });
  resetForm(form, ['inputday'])
  saveData();
  rerender(ActiveHabbit);
};

//Работа с мусоркой:
function dellDays(index){
  Active.days.splice(index, 1);//Удаляем из local storege этот месяц по его индексу
  if (Active.days.length < 1){page.denj.innerText = `Месяц 1`}
  saveData();
  rerender(ActiveHabbit);
};

// Работа с popup
function popupproject(){
  if (page.popup.condPopup.classList.contains('hide')){page.popup.condPopup.classList.remove('hide')}
  else{page.popup.condPopup.classList.add('hide'); 
  }
};
//Работа внутри popup
function setIcon(context, icon){
  page.popup.iconFild.value = icon;
  let activeCnop = document.querySelector('.block_iconproject .cnopproject.cnopproject_active');
  activeCnop.classList.remove('cnopproject_active');
  context.classList.add('cnopproject_active');
  // fier(context);
  if (document.querySelector('.fierproject')){
    document.querySelector('.fierproject').remove()
  };
  let fiercnop = document.createElement('div');
  fiercnop.classList.add('fierproject');
  fiercnop.innerHTML = `<img src="img/fier.gif" alt="огонь" />`;
  context.appendChild(fiercnop);
};

function popup_addbtn(event){
  let form = event.target;
  event.preventDefault();
  let dannye_input = validateAndGetFormData(form, ['first', 'second', 'icon' ]);
  if (!dannye_input){return};
  habbits.push({});
  habbits[habbits.length - 1].id = habbits.length;
  habbits[habbits.length - 1].icon = page.popup.iconFild.value;
  habbits[habbits.length - 1].name = page.popup.namee.value;
  habbits[habbits.length - 1].target = Number(page.popup.targett.value);
  habbits[habbits.length - 1].days = [];
  if ((habbits[habbits.length - 1].target != '') && (habbits[habbits.length - 1].name != '')){
    saveData();
    rerender(habbits[habbits.length - 1].id);
    resetForm(form, ['first', 'second']);
    page.denj.innerText = `Месяц 1`
    return} 
};

//Главный рендер
function rerender(activeHabbitId) {
  let ActiveHabbit = activeHabbitId;
  window.ActiveHabbit = ActiveHabbit;//Делаем глобальной переменную равную id активной кнопки(привычки)
	const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);//находим по id весь массив данных
  if (!activeHabbit) {
		return;
	};
  let Active = activeHabbit;
  window.Active = Active;//Делаем глобальной переменную содержащую активный массив данных
  document.location.replace(document.location.pathname + '#' + activeHabbitId);
	rerenderMenu(activeHabbit);//рендерим найденный массив в rerenderMenu
  rerenderHead(activeHabbit);//рендерим найденный массив в rerenderHead
  rerenderDni(activeHabbit);//рендерим найденный массив в rerenderDni
  
  // Функция для изменения размера textarea в зависимости от его содержимого
  function adjustTextareaSize(event) {
    let textarea = event.target;
    textarea.style.height = ""; // Сбрасываем высоту, чтобы textarea могла уменьшаться, если текст удален
    textarea.style.height = textarea.scrollHeight + "px"; // Устанавливаем высоту textarea в зависимости от высоты его содержимого
    textarea.style.marginLeft = "0px";
  };
  // Функция для установки одинакового расстояния между textarea в блоках .dniproject
  function setEqualTextareaSpacing() {
        let textareasss = document.querySelectorAll(".auto-resize");
        let heiggg = 0;
        textareasss.forEach(function(textareaaa) {
          let previousBottom = 0;
          previousBottom = heiggg + 10;
          textareaaa.closest('.dniproject').style.marginTop = previousBottom + "px";
          heiggg = textareaaa.offsetHeight;
          // toppp = textareaaa.offsetTop
    });
  }
  //рендерим все поля textarea:
  let textareas = document.querySelectorAll(".auto-resize");
  textareas.forEach(function(textarea) {
    adjustTextareaSize({ target: textarea })//Вызываем функцию для изменения размера textarea в зависимости от его содержимого
    textarea.addEventListener("input", adjustTextareaSize);// Вызываем функцию для изменения размера textarea при изменении его содержимого
    setEqualTextareaSpacing()//Вызываем функцию для установки одинакового расстояния между textarea
  });
  // При изменении размеров окна также пересчитываем расстояние между textarea
  window.addEventListener("resize", function() {
    setEqualTextareaSpacing();
  });
  textareas.forEach(function(textarea) {
    // Вызываем функцию при изменении содержимого textarea
    textarea.addEventListener("input", adjustTextareaSize);
  });
};

function fierClic(context){
  if (document.querySelectorAll('.fierproject')){
    // document.querySelector('.fierproject').remove()
    document.querySelectorAll('.fierproject').forEach(function(element) {
      element.remove()})
  };
  let fiercnop = document.createElement('div');
  fiercnop.classList.add('fierproject');
  fiercnop.innerHTML = `<img src="img/fier.gif" alt="огонь" />`;
  context.appendChild(fiercnop);
};
function fierHover(context){
  let fiercnop = document.createElement('div');
  fiercnop.classList.add('fierprojecthover');
  fiercnop.innerHTML = `<img src="img/fier.gif" alt="огонь" />`;
  context.appendChild(fiercnop);
  context.addEventListener('mouseleave', function() {
    fiercnop.remove();
  });
}