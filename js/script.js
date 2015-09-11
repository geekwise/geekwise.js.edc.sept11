var list_items = '';

function update_element_array(element_tag_name){
	var element_array = document.getElementsByTagName(element_tag_name);
	return element_array;
}

function detect_swipe_event(element_id_name,name_of_function_trigger_from_touch_event) {
	var class_swipe = new Object();
	class_swipe.direction_x_start = 0;
	class_swipe.direction_y_start = 0;
	class_swipe.direction_x_end = 0;
	class_swipe.direction_y_end = 0;
	var touch_direction_x_minimum = 20;  //min x swipe for horizontal swipe
	var touch_direction_x_maximum = 40;  //vertical swipe
	var touch_direction_y_minimum = 40;  //vertical swipe
	var touch_direction_y_maximum = 50;  //horizontal swipe
	var touch_direction = "";
	var current_element = document.getElementById(element_id_name);

	current_element.addEventListener('touchstart',function(event){
		var current_target = event.touches[0];
		class_swipe.direction_x_start = current_target.screenX;
		class_swipe.direction_y_start = current_target.screenY;
	},false);

	current_element.addEventListener('touchmove',function(event){
		event.preventDefault();
		var current_target = event.touches[0];
		class_swipe.direction_x_end = current_target.screenX;
		class_swipe.direction_y_end = current_target.screenY;
	},false);

	current_element.addEventListener('touchend',function(event){
		//horizontal detection
		if ((((class_swipe.direction_x_end - touch_direction_x_minimum > class_swipe.direction_x_start) || (class_swipe.direction_x_end + touch_direction_x_minimum < class_swipe.direction_x_start)) && ((class_swipe.direction_y_end < class_swipe.direction_y_start + touch_direction_y_maximum) && (class_swipe.direction_y_start > class_swipe.direction_y_end - touch_direction_y_maximum)))) {
			if(class_swipe.direction_x_end > class_swipe.direction_x_start) touch_direction = "right";
			else touch_direction = "left";
		}
		//vertical detection
		if ((((class_swipe.direction_y_end - touch_direction_y_minimum > class_swipe.direction_y_start) || (class_swipe.direction_y_end + touch_direction_y_minimum < class_swipe.direction_y_start)) && ((class_swipe.direction_x_end < class_swipe.direction_x_start + touch_direction_x_maximum) && (class_swipe.direction_x_start > class_swipe.direction_x_end - touch_direction_x_maximum)))) {
			if(class_swipe.direction_y_end > class_swipe.direction_y_start) touch_direction = "down";
			else touch_direction = "up";
		}

		if (touch_direction != "") {
			if(typeof name_of_function_trigger_from_touch_event == 'function') name_of_function_trigger_from_touch_event(element_id_name,touch_direction);
		}
		touch_direction = "";
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

	detect_swipe_event('chess',set_random_color_for_list_item('chess'));
	detect_swipe_event('poker',set_random_color_for_list_item('poker'));
	detect_swipe_event('scrabble',set_random_color_for_list_item('scrabble'));


};