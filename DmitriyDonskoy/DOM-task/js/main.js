
    function bubbleSort(data) {
        var arr = data.slice();
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = 0; j < arr.length - i - 1; j++) {
                if(arr[j] > arr[j + 1]) {
                    var tmp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = tmp;
                }
            }
    }
        return arr;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function sortHandler(){
        var arr = [];
        var i;
        var arrText = document.createElement('p');
        var sortText = document.createElement('p');
        for(i = 0; i < 10; i++){
            arr[i] = getRandomInt(1, 100);
        }
        arrText.innerHTML = 'Array: ' + arr.join(' ');
        document.getElementById('sort').appendChild(arrText);
        sortText.innerHTML = 'Sorted array: ' + bubbleSort(arr).join(' ');
        document.getElementById('sort').appendChild(sortText);
    }

    function recursiveList (data) {
        //@todo отобразить все элементы массива массивов в виде вложенных списков соблюдая вложенность
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return list;
    }

    function recursiveHeadings (data, weight) {
        var fragment = document.createDocumentFragment();
		//@todo отобразить все элементы массива массивов в заголовков разного порядка в зависимости от уровня вложенности
		//исходный массив [1,2,[3,4,[6,7,8],9],10,11]
        return fragment;
    }

    function simpleValidation() {
        var fn =document.getElementById("first-name");
        var ln =document.getElementById("last-name");
        var x=fn.value.length;
        var y=ln.value.length;
        function validate(x,y) {
            if(x==0){fn.classList.add("red-border");}
            else {fn.classList.remove("red-border");}
            if(y==0){ln.classList.add("red-border");}
            else {ln.classList.remove("red-border");}
            if(y!==0&&x!==0){ alert('GOOOOD JOB !!!!!!!!')}

        };
        validate(x,y);
        //@todo при сабмите формы проверять поля на пустотое значение.
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
    };
//
//	//вызывать функции здесь!
    sortHandler();
























/*elem.appendChild()

var a= [1,2,[3,4,[6,7,8],9],10,11];
function recursiveList (arr) {
   document.getElementById("list").innerHTML='<ul>'+'</ul>';
    for(var i=0; i<arr.length;i++){
        if(Array.isArray(arr[i])){
            document.getElementById("list").firstElementChild.innerHTML ='<li><ul>'+a[i]+'</ul></li>';
        console.log(i);}
        else{document.getElementById("list").firstElementChild.innerHTML ='<li>'+a[i]+'</li>';
            console.log(i)}
    }


    };
recursiveList(a);
*/
