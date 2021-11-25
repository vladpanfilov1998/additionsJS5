//- Дано натуральное число n. Выведите все числа от 1 до n.

const nutCount = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }

}

nutCount(n);

//- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

const countNumbers = (a, b) => {
    while (a <= b) {
        console.log(a);
        a++;
    }
    while  (a >= b) {
        console.log(a);
        a--;
    }
}

countNumbers(a, b)

//-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//EXAMPLE:
//foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const changesArr = (arr, i) => {
    arr.splice([i + 1], 0, arr.splice(i, 1)[0]);
    console.log(arr);
}

changesArr(arr, i)

//- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//Двожина масиву від 2 до 100
//EXAMPLE:
//[1,0,6,0,3] => [1,6,3,0,0]
//[0,1,2,3,4] => [1,2,3,4,0]
//[0,0,1,0]   => [1,0,0,0]

const changeArr = (arr) => {
    for (const num in arr) {
        arr.push(arr.splice(arr.indexOf(0), 1)[0])
    }
    console.log(arr);
}

changeArr(arr);