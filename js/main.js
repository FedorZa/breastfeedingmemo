
window.onload = function () {
	
    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });
    
    var lb = document.getElementById('left-b');
    var rb = document.getElementById('right-b');

    
   
    function _setSide(side){
    	var someDate = new tizen.time.getCurrentDateTime();
    	tizen.preference.setValue('recentFeed',someDate.toLocaleTimeString());
    	return tizen.preference.setValue('side',side);
    }
    
    function _getSide(){
    	return tizen.preference.getValue('side');
    }  
    
    function _getRecent(){
    	return tizen.preference.getValue('recentFeed');
    }
    
    function setSide(){
    	var b_side = _getSide();
    	lb.classList.remove('active');
    	rb.classList.remove('active');
    	document.getElementById(b_side+'-b').classList.add('active');
    	
    	var recentFeed = _getRecent();
    	document.getElementById('log').innerText = recentFeed;

    }
    
    function leftClicked(){
    	_setSide('left');
    	setSide();
    }
    
    function rightClicked(){
    	_setSide('right');
    	setSide();
    }
    
    
    lb.addEventListener('click', leftClicked);
    rb.addEventListener('click', rightClicked);
    setSide();
    
};
