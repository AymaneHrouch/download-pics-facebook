getLink = (id = 0) => {
    	if(id<190) {
		setTimeout(function() {
            if(document.querySelector(".ji94ytn4.r9f5tntg.d2edcug0"))
            {
                arr.push(document.querySelector(".ji94ytn4.r9f5tntg.d2edcug0").src)
            }
                document.querySelector('[aria-label="Next photo"]').click()
			    id++;
			    getLink(id)

		}, 1000)
	}
	else {
		console.log("DONE!")
	}
}
