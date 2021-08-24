
let array = [];

function pushValue(){
    //get input value by id
    let  inputText = document.getElementById("inputText").value;

     //push the value to the array
     array.push(inputText);
     let pval = "";
     let i = 0;
        for(i=0; i<array.length; i++){
            pval = pval + array[i]+ "<br/>";
        }

        //display values 
        document.getElementById("ptext").innerHTML = pval;
        
}

function popValue(){
    array.pop();
    console.log( array.pop())
    document.write("array:" + array + "<br/>");
}
























// let arr = [1, 2, 3, 4, 5, "xyz"];
// let i = 1;
//   let array = [i];
//   let push = document.getElementById("push");
//     console.log(push);
//     push.addEventListener("click",()=>{
//         array[i].push("1");
       
//       for(i==1; i<=5; i++)
//        document.write("Array:"+ array[i] + "<br/>");         
//     })




//     // let pop = document.getElementById("pop");
//     // console.log(pop);
//     // pop.addEventListener("click",()=>{
//     //     array.pop();
       
//     //    document.write("Array:"+ array + "<br/>");         
//     // })
    

