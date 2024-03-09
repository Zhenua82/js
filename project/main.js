'use strict';
/* page */
const page = {
	menu: document.querySelector('.menu'),
  head: {
    h1: document.querySelector('.title h1'),
    pers: document.querySelector('#pers'),
    progress: document.querySelector('.polosa')
  },
  block_dn: document.querySelector('.block_dni'),
  denj: document.querySelector('body > div.container.text-center > div > div.col-8.col-sm-9.col-md-10.col-lg-10.col-xl-10.col-xxl-11.context > div.dni > div.denj'),
  popup: {
    condPopup: document.querySelector('.popup'),
    gotovo: document.querySelector('.popup_main .gotovo'),
    namee: document.querySelector('.first_popup'),
    targett: document.querySelector('.second_popup'),
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
		form[field].classList.remove('empty');
		if (!fieldValue) {
			form[field].classList.add('empty');
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
			element.classList.add('cnop');
			element.addEventListener('click', () => rerender(habbit.id));//при нажатии на кнопку -
      //заново рендерим страницу и добавляем на нее активный класс, а с др. элементов убираем (if - ниже)
			element.innerHTML = `<img src="img/${habbit.icon}.svg" alt="${habbit.name}" />`;
			if (activeHabbit.id === habbit.id) {
				element.classList.add('cnop_active');
			}
			page.menu.appendChild(element);
			continue;
		}
		if (activeHabbit.id === habbit.id) {
			existed.classList.add('cnop_active');
		} else {
			existed.classList.remove('cnop_active');
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
  context.remove();
  habbits.forEach(function (habbit){
    habbit.id = j++
  });
  saveData();
}

function rerenderHead(activeHabbit) {
  page.head.h1.innerText = activeHabbit.name;
  let persent = Math.round(activeHabbit.days.length / activeHabbit.target * 100);
  page.head.pers.innerText = persent + '%';
  page.head.progress.style.background = `linear-gradient(to right, rgb(54, 42, 228) 0%, rgb(54, 42, 228) ${persent}%, #e4e4e4 ${persent}%)`;
};
function rerenderDni(activeHabbit) {
  page.block_dn.innerHTML = ``;
  activeHabbit.days.forEach((day, i) => {
    let denj = document.createElement('div');
    denj.classList.add('dni');
    denj.innerHTML = `<div class="denj">День ${i + 1}</div>
    <div class="poleinput">
      <div class="vvedtext">${day.coment}</div>
      <button class="musor" onclick="dellDays(${i})">
        <img src="img/shape.svg" alt="мусорка" />
      </button>
    </div>`
    page.block_dn.appendChild(denj);
    page.denj.innerText = `День ${i + 2}`
  })
  if (Active.days.length < 1){page.denj.innerText = `День 1`}
};

//Работа с формой (присваеваем ее данные переменной и делаем ее неактивной)
function addDays(event){
  let form = event.target;
  event.preventDefault();
  let dannye_input = validateAndGetFormData(form, ['inputday']);
  if (!dannye_input){return}
  // let data = new FormData(form);//Присваеваем данные формы переменной в API
  // let dannye_input = data.get('inputday');// т.к. <input name="inputday"/>
  // form['inputday'].classList.remove('empty')
  // if (dannye_input === ''){
  //   form['inputday'].classList.add('empty')//навешиваем клас с красной рамкой, если поле пустое
  // };
  habbits = habbits.map(elem => { //перебираем привычки и ищем ту, которая активна
    if (elem.id == ActiveHabbit && dannye_input != ''){
      elem.days.push({coment: `${dannye_input.inputday}`});//Пушим в дни актив привычки введенные данные
      return elem;
    } return elem;
  });
  // form['inputday'].value = '';
  resetForm(form, ['inputday'])
  saveData();
  rerender(ActiveHabbit);
};

//Работа с мусоркой:
function dellDays(index){
  Active.days.splice(index, 1);//Удаляем из local storege этот день по его индексу
  if (Active.days.length < 1){page.denj.innerText = `День 1`}
  saveData();
  rerender(ActiveHabbit);
};
// 2-ой вариант:
// function dellDays(event){
//   event.target.closest('.dni').classList.add('activee');// Находим родителя .dni нажатой кнопки мусора и присваеваем ему класс activee
//   let allDni = document.querySelectorAll('.dni');//Выбираем все элементы .dni
//   allDni.forEach(function(dni, index) {//Перебирая .dni находим какой из них содержит класс activee и находим его индекс 
//     if (dni.classList.contains('activee')){
//       Active.days.splice(index, 1);//Удаляем из local storege этот день по его индексу
//       saveData();
//       rerender(ActiveHabbit);
//     }
//   })
// }

// Работа с popup
function popup(){
  if (page.popup.condPopup.classList.contains('hide')){page.popup.condPopup.classList.remove('hide')}
  else{page.popup.condPopup.classList.add('hide'); 
  }
};
//Работа внутри popup
function setIcon(context, icon){
  page.popup.iconFild.value = icon;
  let activeCnop = document.querySelector('.block_icon .cnop.cnop_active');
  activeCnop.classList.remove('cnop_active');
  context.classList.add('cnop_active');
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
  // form['first'].classList.remove('empty');
  // form['second'].classList.remove('empty');
  // if (habbits[habbits.length - 1].name == '' ){
  //   form['first'].classList.add('empty')//навешиваем клас с красной рамкой, если поле пустое
  //   habbits.splice(-1)  
  // return} else if (habbits[habbits.length - 1].target == '' ){
  //   form['second'].classList.add('empty')//навешиваем клас с красной рамкой, если поле пустое
  //   habbits.splice(-1)
  // return};
  if ((habbits[habbits.length - 1].target != '') && (habbits[habbits.length - 1].name != '')){
    saveData();
    rerender(habbits[habbits.length - 1].id);
    // form['first'].value = '';
    // form['second'].value = '';
    resetForm(form, ['first', 'second']);
    page.denj.innerText = `День 1`
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
};





// Мой код:
// Работа с popup
// document.querySelector('.btn-add').addEventListener('click', function(){
//   document.querySelector('.popup').classList.remove('hide');
// });
// document.querySelector('.crest').addEventListener('click', function(){
//   document.querySelector('.popup').classList.add('hide');
//   Render()
// });

// //Работа в popup
// page.popup.gotovo.addEventListener('click', function(){
//   //Добавляем картинку из popup в меню
//   let activPopupCnop = document.querySelector('.block_icon .cnop_active');
//   let image = activPopupCnop.querySelector('img');
//   let src = image.getAttribute('src');
//   let btnn = document.createElement('div');
//   btnn.classList.add('menu-element');
//   btnn.innerHTML = `<button class="cnop">
//   <img src="${src}" alt="${image.getAttribute('alt')}" />
//   </button>`;
//   page.menu.appendChild(btnn);
//   //Сохраняем в local storage добавленные данные
//   habbits.push({});
//   habbits[habbits.length - 1].id = habbits.length
//   let regul = /img\/(.*?)\.svg/;
//   let icon = src.match(regul);
//   habbits[habbits.length - 1].icon = icon[1];
//   habbits[habbits.length - 1].name = page.popup.namee.value;
//   habbits[habbits.length - 1].target = Number(page.popup.targett.value);
//   habbits[habbits.length - 1].days = [];
//   saveData() 
// });

// //Создаем элементы меню из имеющегося хранилища (local storage)
// for (let i of habbits){
//   let btnn = document.createElement('div');
//   btnn.classList.add('menu-element');
//   btnn.innerHTML = `<button class="cnop">
//   <img src="img/${i.icon}.svg" alt="${i.name}" />
//   </button>`;
//   page.menu.appendChild(btnn);
//   console.log('dfgdf')
// };
// Render()

// document.querySelector('.gotovo').addEventListener('click', function(){//слушаем нажатие кнопки '.gotovo'
//     let peremennaj = document.querySelector('.inputdenj').value;
//     let dni = document.createElement('div');
//     let colDay = page.block_dn.querySelectorAll('.dni').length;
//     dni.classList.add('dni');
//     dni.innerHTML = `
//     <div class="denj">День ${colDay + 1}</div>
//     <div class="poleinput">
//       <div class="vvedtext">${peremennaj}</div>
//       <button class="musor">
//         <img src="img/shape.svg" alt="мусорка" />
//       </button>
//     </div>`;
//     document.querySelector('.block_dni').appendChild(dni);//Добавляем в .block_dni день
//     document.querySelector('.inputdenj').value = '';
//     page.denj.innerText = `День ${colDay + 2}`;
//     for (let i of habbits){//Вычисляем прогресс в процентах и меняем его на странице
//       if (i.name === page.head.h1.innerText){
//         let persCommun = Math.round(colDay / i.target * 100 + 1 / i.target * 100);
//         page.head.progress.style.background = `linear-gradient(to right, rgb(54, 42, 228) 0%, rgb(54, 42, 228) ${persCommun }%, #e4e4e4 ${persCommun}%)`;
//         page.head.pers.innerText = `${persCommun}%`;
//         i.days.push({"coment": `${peremennaj}`});//Добавляем в local storage внесенный нами день
//         saveData()
//       }}
//       PoiskMusor()
// });
// //Для работы с формой
// function addDays(event){
//   event.preventDefault();
//   // console.log(event)
// };
// // Добавляем класс активности(cnop_active) к нажатому элементу и снимаем его с др. элементов
// // Рендерим контент и удаляем мусор
// function Render(){
//   let buttons = document.querySelectorAll('.cnop');
//   buttons.forEach(function(button) {
//       button.addEventListener('click', function() {//слушаем нажатие всех кнопок с классом '.cnop'
//         buttons.forEach(function(btn) {
//               btn.classList.remove('cnop_active');
//           });
//           button.classList.add('cnop_active');
//           poiskActivecnop();
//           //рендер контента - установление соответствия нажатой кнопки с имеющимися данными в local storage
//           let image = button.querySelector('img');
//           let alt = image.getAttribute('alt');
//           let src = image.getAttribute('src');
//           let regul = /img\/(.*?)\.svg/;
//           let icon = src.match(regul);
//           for (let i of habbits){
//             // if (i.icon === icon[1] && i.name === alt){
//             if (i.icon === icon[1]){
//               //рендер head
//               page.head.h1.innerText = i.name;
//               let persent = Math.round(i.days.length / i.target * 100);
//               page.head.pers.innerText = persent + '%'
//               page.head.progress.style.background = `linear-gradient(to right, rgb(54, 42, 228) 0%, rgb(54, 42, 228) ${persent}%, #e4e4e4 ${persent}%)`;
//               //рендер блока дни
//               page.block_dn.innerHTML = ``;
//               if (i.days[0] != undefined){
//                 i.days.forEach((day, j) => {
//                   let denj = document.createElement('div');
//                   denj.classList.add('dni');
//                   denj.innerHTML = `<div class="denj">День ${j + 1}</div>
//                   <div class="poleinput">
//                     <div class="vvedtext">${day.coment}</div>
//                     <button class="musor">
//                       <img src="img/shape.svg" alt="мусорка" />
//                     </button>
//                   </div>`
//                   page.block_dn.appendChild(denj);
//                   page.denj.innerText = `День ${j + 2}`;
//                 });//Конец forEach
//               } else{page.denj.innerText = `День 1`;}
//               PoiskMusor();
//             }; // конец if  
//           };//конец for
//       });//Конец addEventListener('click')

//       //Поиск активной кнопки
//       function poiskActivecnop(){
//         buttons.forEach(function(active) {
//           if (active.classList.contains('cnop_active')) {
//             var ActiveButton = active;
//             window.ActiveButton = ActiveButton;
//           }
//         })
//       };

//       //Работа с мусоркой
//       function PoiskMusor(){
//         let musors = document.querySelectorAll('.musor');
//         let blockDni = document.querySelector('.block_dni');
//         musors.forEach(function(musor, index) {
//           musor.addEventListener('click', function() {
//             let dniIndex = Array.from(blockDni.children).indexOf(this.closest('.dni'));
//             this.closest('.dni').remove();
//             if(typeof ActiveButton !== 'undefined'){
//               let image = ActiveButton.querySelector('img');
//               let alt = image.getAttribute('alt');
//               let src = image.getAttribute('src');
//               let regul = /img\/(.*?)\.svg/;
//               let icon = src.match(regul);
//               for (let q of habbits){
//                 // if (q.icon === icon[1] && q.name === alt && dniIndex != -1){
//                 if (q.icon === icon[1] && dniIndex != -1){
//                   q.days.splice(dniIndex, 1);
//                   //рендер head
//                   page.head.h1.innerText = q.name;
//                   let persent = Math.round(q.days.length / q.target * 100);
//                   page.head.pers.innerText = persent + '%';
//                   page.head.progress.style.background = `linear-gradient(to right, rgb(54, 42, 228) 0%, rgb(54, 42, 228) ${persent}%, #e4e4e4 ${persent}%)`;            
//                 } 
//               }//конец for
//             }//конец if
//             saveData();
//             let dniElements = blockDni.querySelectorAll('.dni');
//             dniElements.forEach((dniElement, index) => {
//               dniElement.querySelector('.denj').innerText = `День ${index + 1}`;
//             });
//           });
//         });
//       };    
//       window.PoiskMusor = PoiskMusor;//конец работы с мусоркой    
//   });//Конец buttons.forEach()
// };//Конец Render()