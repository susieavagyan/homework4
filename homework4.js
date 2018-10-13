//1//
const triangleStars=function(h){
let b=0;
	while (h>0) {
	printStr(b,h);
	b=b+1;
	h=h-1;
	};
};

const printStr=function(b,h) {

	console.log (row(" ",b)+row("*",2*h-1));
};

const row=function (char1,num) {
	let a="";
	while(num>0) {
		a=a+char1;
		num=num-1;
	}
	return a;
};

triangleStars(4);

//2//
const checkerboard=function(h){
 	let n=1
	while (n<h) {
	print(n,h);
	n=n+1;
	};
};

const print=function(n,h) {
 if (n%2!==0) {
	console.log (line("*",h));
 } else {
 	console.log (" "+(line("*",h)));
 };
};

const line=function (char1,num) {
	let a="";
	while(num>0) {
		a=a+char1;
		num=num-1;
	}
	return a;
};

checkerboard(5);

//3//
const reverseStr=function(string) {
let a=""
let index=0
while(index<string.length) {
	a=a+string[string.length-1-index]
	index=index+1
}
return a;
}
console.log(reverseStr("revessalctsebehtsi011sc"))

//4//
const multiToSingle= function(arr){
	let index=0;
	let d=[];
	while (index<arr.length) {
		let index1=0;
		while(index1<arr[index].length) {
			d[d.length]=arr[index][index1];
		    index1=index1+1;
	    };  
    index=index+1;	
    };
return d
};

console.log(multiToSingle([[1,2,3],[4,5,6]]))

//5//
const findMinMax=function(array,boo) {
	let result=array[0];
	let index=0;
		if (boo===true) {
			while (index<array.length-1) {
				if(array[index]<array[index+1]) {
					result=array[index+1];
				} else {
					result=array[index]
				};
				index=index+1;
			}
			return result 
        } else {
		    while (index<array.length-1) {
		    	if(array[index]<array[index+1]) {
					result=array[index];
				} else {
					result=array[index+1]
				};
				index=index+1;
		    }
		    return result   
		}
		
	}


console.log (findMinMax([1,4,-3],false));


//6//
const sum=function (array) {
	let plus=0
	let index=0
	while (index < array.length) {
		plus=plus+ array[index];
		index=index+1;
	}
	return plus;
}

console.log (sum([1,2,3,4,5]))

//7//
const forEach=function (arr,product){
	let index=0;
	while(index < arr.length-1){
	product (arr[index],arr[index+1])
	index=index+1
    }
}
forEach([1,2,3,4,5,6], function(a,b) {
 	console.log (a*b)
 })










 




