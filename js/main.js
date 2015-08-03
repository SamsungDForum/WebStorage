

//Initialize function
var init = function ()
{
	console.log("init() called");
	if(typeof(Storage)===undefined)
	{
		var msg = "Sorry, currently Tizen does not support web storage";		
		//alert(msg);
		$('#alertMessage').html(msg);
	}

	
	$("#filed1Local").focus();
	
	
// registering click event with buttons
	$('#saveToWbStorageLocal').bind('click', function(){saveToWbLocalStorage();});
	$('#getFromWebStorageLocal').bind('click', function(){getFromWebLocalStorage();});
	$('#clearWebStorageLocal').bind('click', function(){clearWebLocalStorage();});
	
	$('#saveToWbStorageSession').bind('click', function(){saveToWbSessionStorage();});
	$('#getFromWebStorageSession').bind('click', function(){getFromWebSessionStorage();});
	$('#clearWebStorageSession').bind('click', function(){clearWebSessionStorage();});
	


	
	
	
};

$(document).ready(init);





/**
 * @description This function is used to save data in local store
 */
function saveToWbLocalStorage()
{
		var val_filed1 = $('#filed1Local').val().trim();
		var val_filed2 = $('#filed2Local').val().trim();

		localStorage.setItem("key_filed1", val_filed1);
		localStorage.setItem("key_filed2", val_filed2);
		$('#alertMessage').html('Data sucessfully saved');
}



/**
 * @description This function is used to get data from local store
 */
function getFromWebLocalStorage()
{
	
	
		var msg = "field 1 : " + localStorage.getItem("key_filed1") + ",  field 2 : " + localStorage.getItem("key_filed2");
		//alert(msg);
		$('#alertMessage').html(msg);
	
}


/**
 * @description This function is used to clear local store
 */
function clearWebLocalStorage()
{
	localStorage.clear();
	$('#alertMessage').html("Data cleared from storage");
}




/**
 * @description This function is used to save data in Session store
 */
function saveToWbSessionStorage(name, newScore)
{
		var val_filed1 = $('#filed1Session').val().trim();
		var val_filed2 = $('#filed2Session').val();

		sessionStorage.setItem("key_filed1", val_filed1);
		sessionStorage.setItem("key_filed2", val_filed2);
		$('#alertMessage').html("Data sucessfully saved");
}



/**
 * @description This function is used to get data from Session store
 */

function getFromWebSessionStorage()
{

	
		var msg = "field 1 : " + sessionStorage.getItem("key_filed1") + ",  field 2 : " + sessionStorage.getItem("key_filed2");
		//alert(msg);
		$('#alertMessage').html(msg);
	
}

/**
 * @description This function is used to clear Session store
 */
function clearWebSessionStorage()
{
	sessionStorage.clear();
	$('#alertMessage').html('Data cleared from storage');
	

}


