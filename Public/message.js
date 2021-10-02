console.log(firebase);

//searching by words variables
const ul = document.querySelector('ul');
const input = document.querySelector('.input0');
const btn = document.querySelectorAll('#btn');
const btn1 = document.querySelector('#btn1');
const h1 = document.querySelector('#hide');
var myData;

//searching by dates variables
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn2 = document.querySelector('.btn2');
const div = document.querySelector('.conversation');
const up = document.querySelector('#up');
const down = document.querySelector('#down');
var start = input1.value;
var end = input2.value;

//getting the data and storing it in my data
// fetch("").then(res => res.json()).then(data => {
//     myData = data;
// })

//displaying the results 
input.addEventListener('change',function(){
    //the value zw are searching for
    var value = input.value;
    up.classList.remove('hidden');
    down.classList.remove('hidden');
    h1.classList.remove('hidden');
    h1.innerHTML = 'results for the words: '+ value;

    //looping over the hole json file to find the value
    for (let i = myData.length - 1; i > 0 ; i--) {
        //cheking if the data is has a content
        if (myData[i].content !== undefined) {
            //if the sender is ilyes 
            if (myData[i].sender_name == "ILyes Haddad") {
                //searching the value
                if (myData[i].content.toLowerCase().match(value) !== null) {
                    //if true  adding it 
                    var mesL = myData[i].content;
                    var time = myData[i].timestamp_ms;
                    var validTime = new Date(time).toUTCString();
                    var li = document.createElement('li');
                    var li1 = document.createElement('li');
                    //appending and styling them
                    li.classList.add('li0');
                    li1.classList.add('li1');
                    ul.append(li);
                    ul.append(li1);
                    li.innerHTML ="<span class='name'>ilyes: </span>"+ mesL;
                     li1.innerHTML = "<span class='dat'>date: </span>"+ validTime;
                }
                //if the sender is ikhlas 
            }else if (myData[i].sender_name == "Ikh Las") {
                if (myData[i].content.toLowerCase().match(value) !== null) {
                    var mesI = myData[i].content;
                    var time = myData[i].timestamp_ms;
                    var validTime = new Date(time).toUTCString();
                    var li = document.createElement('li');
                    var li1 = document.createElement('li');
                    //appending and styling them
                    li.classList.add('li0');
                    li1.classList.add('li1');
                    ul.append(li);
                    ul.append(li1);
                    li.innerHTML ="<span class='name'>ikhlas: </span>"+ mesI;
                    li1.innerHTML = "<span class='dat'>date: </span>"+ validTime;
                }
                
            }
        }
        //clearing the input
        input.value = "";
        
    }
});


//remove the results
btn[0].addEventListener('click', removeAll);


function removeAll() {
    ul.innerHTML = "";
    h1.classList.add('hidden');
    div.innerHTML ='';
    up.classList.add('hidden');
    down.classList.add('hidden');
}

//searching by date
btn2.addEventListener('click', function(){
        up.classList.remove('hidden');
        down.classList.remove('hidden');
        h1.classList.remove('hidden');
        div.innerHTML = "";
        h1.innerHTML = 'results for the range of dates: ';
        start = input1.value;
        end = input2.value;

        var stdate = new Date(start);
        var endate = new Date(end);
        for (let i = myData.length - 1; i > 0; i--) {
            if (myData[i].timestamp_ms >= Date.parse(stdate)&& myData[i].timestamp_ms <= Date.parse(endate) ) {
                var p = document.createElement('p');
                if (myData[i].sender_name == "Ikh Las") {
                    p.innerHTML = myData[i].content;
                    p.classList.add('left');
                    div.append(p);

                }else if (myData[i].sender_name == "ILyes Haddad") {
                    p.innerHTML = myData[i].content;
                    p.classList.add('right');
                    div.append(p);

                }
                
            }
            
        }
    
        window.scrollTo(0,document.body.scrollHeight);

        // input1.value = '';
        // input2.value = '';
        
    //}
});


btn[1].addEventListener('click', removeAll);

up.addEventListener('click', function() {
    window.scrollTo(0,0);
})

down.addEventListener('click',function() {
    window.scrollTo(0,document.body.scrollHeight);  
})
