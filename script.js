// to show output here 
const arrayNumber = document.getElementById("output");
,
let arrayNumber = [1, 2, 3, 4];

function manipulate(arrayNumber){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const evenNumber = arrayNumber.filter((num) => num % 2 == 0);
			output.innerText = evenNumber.join(",");
			resolve(evenNumber);
		}, 1000);
	})
	.then((evenNumber)=>{
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				const evenMulti = evenNumber.map((num)=> num * 2);
				output.innerText = evenMulti.join(",");
				resolve(evenMulti);
			}, 2000);
		});
	})
	.catch((error)=>{
		console.log("Error", error);
	});
	
}
manipulate(arrayNumber);



