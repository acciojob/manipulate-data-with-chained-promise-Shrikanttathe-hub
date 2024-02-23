const output = document.getElementById("output");

let arrayOfNumber  = [1,2,3,4];
function solution(arrayOfNumber){
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const evenNumber = arrayOfNumber.filter((num) => num%2==0);
			output.innerText = evenNumber.join(",");
			resolve(evenNumber);
		},1000);
	})
	.then((evenNumber) => {
		return new Promise((resolve,reject) => {
			setTimeout(()=>{
				const EvenMulti = evenNumber.map((num) => num*2);
				output.innerText = EvenMulti.join(",");
				resolve(EvenMulti);
			},2000);
		});
	})
	.catch((error) =>{
		console.log("Error", error);
	});

	
	
}
solution(arrayOfNumber);