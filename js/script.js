var list_items = '';

function update_element_array(element_tag_name){
	var element_array = document.getElementsByTagName(element_tag_name);
	return element_array;
}

function detectswipe(el,func) {
	swipe_det = new Object();
	swipe_det.sX = 0;
	swipe_det.sY = 0;
	swipe_det.eX = 0;
	swipe_det.eY = 0;
	var min_x = 50;  //min x swipe for horizontal swipe
	var max_x = 40;  //max x difference for vertical swipe
	var min_y = 40;  //min y swipe for vertical swipe
	var max_y = 100;  //max y difference for horizontal swipe
	var direc = "";
	ele = document.getElementById(el);
	ele.addEventListener('touchstart',function(e){
		var t = e.touches[0];
		swipe_det.sX = t.screenX;
		swipe_det.sY = t.screenY;
	},false);
	ele.addEventListener('touchmove',function(e){
		e.preventDefault();
		var t = e.touches[0];
		swipe_det.eX = t.screenX;
		swipe_det.eY = t.screenY;
	},false);
	ele.addEventListener('touchend',function(e){
		//horizontal detection
		if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y)))) {
			if(swipe_det.eX > swipe_det.sX) direc = "r";
			else direc = "l";
		}
		//vertical detection
		if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x)))) {
			if(swipe_det.eY > swipe_det.sY) direc = "d";
			else direc = "u";
		}

		if (direc != "") {
			if(typeof func == 'function') func(el,direc);
		}
		direc = "";
	},false);
}



function set_event_listeners(element_array,event_type){

	for(i=0;i<element_array.length;i++){
		element_array[i].addEventListener(event_type,function(){

			this.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		});
	}
};


function set_random_color_for_list_item(element_id){
	var current_element = document.getElementById(element_id);
	current_element.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
}


document.addEventListener('DOMContentLoaded',function(){

});


/*
 * get and set all the list items
 * using onLoad() rather than DOMContentLoaded
 * because the html and style sheets will take effect
 * after DOMContentLoaded
 */



window.onload = function(){

	//get all the list items
	list_items = update_element_array('li');
	//set_event_listeners(list_items,'touchstart');
	//set_event_listeners(list_items,'click');
	var h=function(e){console.log(e.type,e)};

	detectswipe('chess',set_random_color_for_list_item('chess'));
	detectswipe('poker',set_random_color_for_list_item('poker'));
	detectswipe('scrabble',set_random_color_for_list_item('scrabble'));


};