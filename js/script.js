var list_items = '';

function update_element_array(element_tag_name){
	var element_array = document.getElementsByTagName(element_tag_name);
	return element_array;
}


function set_event_listeners(element_array,event_type){

	for(i=0;i<element_array.length;i++){
		element_array[i].addEventListener(event_type,function(){

			alert(this);
		});
	}
};



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
	set_event_listeners(list_items,'touchstart');
};