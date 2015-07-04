//(function(){
    function bubbleSort(data) {
        var arr = data.slice()
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
    var fn =document.getElementById("first-name");
    var ln =document.getElementById("last-name");
    function simpleValidation() {
        var x=fn.value.length;
        console.log(x);
        var y=ln.value.length;
        console.log(y);
        function validate(x,y) {
            if(x==0){
                document.getElementById('first-name').style.borderColor='red';
                return false}
            else if(y==0){
                document.getElementById('last-name').style.borderColor='red';
                    return false}
        };
        validate(x,y);
        if(validate()){
            document.getElementById('last-name').style.borderColor='white';
            document.getElementById('first-name').style.borderColor='white';
            alert('good');
        }

        //@todo при сабмите формы проверять поля на пустотое значение.
		//При ошибке подсвечивать красным соответствующее поле.
		//Если оба поля заполнены, вывести сообщение об удачной отправке формы
    };
//
//	//вызывать функции здесь!
    sortHandler();
//})();
/*for(var i=0; i<a.length;i++) {
    if (Array.isArray(a[i])) {
        console.log('rrr');
    }
    else if (a[i]) {
        console.log(a[i]);
    }
    ;
};*/
document.getElementById("list").innerHTML ='<ul>'+ +'</ul>';
a= [1,2,[3,4,[6,7,8],9],10,11];
for(var i=0; i<a.length;i++) {

    if (Array.isArray(a[i])){document.getElementById("list").children[0].innerHTML ='<ul>'+ +'</ul>'};
    document.getElementById("list").firstChild.innerHTML ='<li>'+a[i]+'</li>';

        for(var j=0;j< a[i].length;j++){
           if (Array.isArray(a[i][j])) {document.getElementById("list").children[0].children[i].innerHTML ='<ul>'+ +'</ul>'};
           document.getElementById("list").firstChild.children[i].innerHTML ='<li>'+a[i]+'</li>'
                for(var k=0; k< a[i][j].length; k++){
                    if  (a[i][j][k]) {/*console.log(a[i][j][k])*/}
};
};
};




elem.appendChild()