var menu=[
    "Cheese Pizza",
       "Black olive Pizza",
       "Pineapple Pizza",
       "Peporonni Pizza"
];

function get_menu(){
    var html;
    html="<ol class='menulist'>";
    menu.sort();
    for(var i=0; i<menu.length;i++){
        html= html+'<li>'+menu[i]+'</li>'
    }
    html=html+"</ol>";
    document.getElementById("display").innerHTML=html;
}

function add_item(){
    var html;
    var item=document.getElementById("add_item").value;
    menu.push(item);
    menu.sort();
    html='<section class="cards">'
    for(var i=0; i<menu.length;i++)
    {
        html=html+'<div class="card">'+'<img src="images">'+menu[i]+'</div>';
    }
    html=html+"</section>";
    document.getElementById("display_addmenu").innerHTML=html;
}