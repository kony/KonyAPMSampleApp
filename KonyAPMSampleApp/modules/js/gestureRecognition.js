	
/*****************************************************************
*	Name    : onGestureFunction
*	Author  : Kony
*	Purpose : To give an alert as which gesture is performed on the form 'frmGestures'
******************************************************************/

function onGestureFunction(commonWidget,gestureInfo)// The callback function when the gesture event is triggered.
{
	try
	{
		var direction = "";
		var GesType = ""+gestureInfo.gestureType;
		var tapParams = gestureInfo.gesturesetUpParams.taps;
		if (GesType == "1") //Double tap gesture
		{  
	        	frmGestures.lblGesture.text ="A Double tap gesture was performed.";
	        	alert("Please check manage.kony.com for event data");
	    }
		else if (GesType == "2") //Swipe gesture
		{ 
			var swipeDirection = ""+gestureInfo.swipeDirection; //Read swipe direction
			if (swipeDirection == "1") 
			{
				direction = "LEFT";
			}
			else if (swipeDirection == "2") 
			{
				direction = "RIGHT";
			}
			else if (swipeDirection == "3") 
			{
				direction = "TOP";
			}
			else
			{
				direction = "BOTTOM";
			}
		 	frmGestures.lblGesture.text = "A swipe gesture was performed in the "+direction+" direction."; 
			alert("Please check manage.kony.com for event data");
		}
		else if (GesType == "3") 
		{   
		    
	        	frmGestures.lblGesture.text = "A longpress gesture was performed";
	        	alert("Please check manage.kony.com for event data");
	    }
	}
	catch(err)
	{
		alert("error in gesture call back"+err);
	}
}

/*****************************************************************
*	Name    : GenericGestureHandler
*	Author  : Kony
*	Purpose : To set gestures(Double tap,Swipe,Long press) to the form 'frmGestures'
******************************************************************/

function GenericGestureHandler()//This function registers the Gesture events for the widgets.
{
	try
	{
		frmGestures.setGestureRecognizer(1, {fingers :1, taps :2}, onGestureFunction) ;//double tap gesture
		frmGestures.setGestureRecognizer(2, {fingers:1,swipedistance:50,swipevelocity:75}, onGestureFunction); // swipe with default parameters
		frmGestures.setGestureRecognizer(3, {pressDuration:2}, onGestureFunction); //2 sec press duration
	}
	catch(err)
	{
		alert("error while registering the gestures"+err)
	}
}

