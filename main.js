arr = []
getLink = (id = 0, n = 10) => {
    	if(id<n) {
		setTimeout(function() {
            if(document.querySelector(".ji94ytn4.r9f5tntg.d2edcug0"))
            {
                arr.push(document.querySelector(".ji94ytn4.r9f5tntg.d2edcug0").src)
            }
                document.querySelector('[aria-label="Next photo"]').click()
			    id++;
			    getLink(id, n)

		}, 1000)
	}
	else {
		console.log("DONE!")
	}
}
getLink(0,100)
arr.map(x => {console.log(x)})
