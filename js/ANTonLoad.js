function ANTOnLoad() {
	for(i=0; i<stimList.length; i++) {
		document.form.targetType.options[i] = new Option(stimList[i]);
	}
	if(navigator.userAgent.indexOf('Mac') > -1) {
		elements = document.getElementsByTagName('*');
		for(i=0; i<elements.length; i++) {
			if(elements[i].className.indexOf('fullscreenKey') > -1) {
				elements[i].innerHTML = 'Cmd-Shift-F';
			}
		}
	}
	pushView('formInput');
	document.getElementById("numberOfTestBlocks").innerHTML = numberOfTestBlocks;

	// Check if browser being used is Firefox
	var isFirefox = typeof InstallTrigger !== 'undefined';
	if (isFirefox) {
		document.getElementById("firefox").style.display = "none";
	}

	// Click Next button to skip the monitor setup (for this setup process)
	document.getElementById("ANTFirstNextButton").click();
}