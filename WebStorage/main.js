

//Initialize function
var init = function ()
{
	console.log("init() called");
	if(typeof(Storage)===undefined)
	{
		var msg = "Sorry, currently Tizen does not support web storage";		
		//alert(msg);
		document.getElementById('alertMessage').innerHTML = msg;
	}

	
	
// registering click event with buttons
	document.getElementById('saveToWbStorageLocal').addEventListener('click', function(){saveToWbLocalStorage();});
	document.getElementById('getFromWebStorageLocal').addEventListener('click', function(){getFromWebLocalStorage();});
	document.getElementById('clearWebStorageLocal').addEventListener('click', function(){clearWebLocalStorage();});
	
	document.getElementById('saveToWbStorageSession').addEventListener('click', function(){saveToWbSessionStorage();});
	document.getElementById('getFromWebStorageSession').addEventListener('click', function(){getFromWebSessionStorage();});
	document.getElementById('clearWebStorageSession').addEventListener('click', function(){clearWebSessionStorage();});
};


/**
 * @description This function is used to save data in local store
 */
function saveToWbLocalStorage()
{
		var val_filed1 = document.getElementById('filed1Local').value;
		var val_filed2 = document.getElementById('filed2Local').value;

		localStorage.setItem("key_filed1", val_filed1);
		localStorage.setItem("key_filed2", val_filed2);
		document.getElementById('alertMessage').innerHTML = 'Data sucessfully saved';
}



/**
 * @description This function is used to get data from local store
 */
function getFromWebLocalStorage()
{
	
	
		var msg = "field 1 : " + localStorage.getItem("key_filed1") + ",  field 2 : " + localStorage.getItem("key_filed2");
		//alert(msg);
		document.getElementById('alertMessage').innerHTML = msg;
	
}


/**
 * @description This function is used to clear local store
 */
function clearWebLocalStorage()
{
	localStorage.clear();
	document.getElementById('alertMessage').innerHTML = "Data cleared from storage";
}




/**
 * @description This function is used to save data in Session store
 */
function saveToWbSessionStorage(name, newScore)
{
		var val_filed1 = document.getElementById('filed1Session').value;
		var val_filed2 = document.getElementById('filed2Session').value;

		sessionStorage.setItem("key_filed1", val_filed1);
		sessionStorage.setItem("key_filed2", val_filed2);
		document.getElementById('alertMessage').innerHTML = "Data sucessfully saved";
}



/**
 * @description This function is used to get data from Session store
 */

function getFromWebSessionStorage()
{

	
		var msg = "field 1 : " + sessionStorage.getItem("key_filed1") + ",  field 2 : " + sessionStorage.getItem("key_filed2");
		//alert(msg);
		document.getElementById('alertMessage').innerHTML = msg;
	
}

/**
 * @description This function is used to clear Session store
 */
function clearWebSessionStorage()
{
	sessionStorage.clear();
	document.getElementById('alertMessage').innerHTML = 'Data cleared from storage';
	

}


