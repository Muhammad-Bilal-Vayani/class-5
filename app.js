// ***************Call backs*****************
// const Callback_function = ( )=>{
//    setTimeout(()=>{
//     console.log("function callback")
//    },3000)
// }
// Callback_function()
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// let arr = [
//     {
//         brand: "Samsung",
//         model: "SamsungA30",
//         price: "40000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Samsung",
//         model: "SamsungA10",
//         price: "40000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Samsung",
//         model: "SamsungA20",
//         price: "40000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Vivo",
//         model: "VivoY20",
//         price: "20000",
//         camera: "40px",
//         ram: "2gb",
//         rom : "32gb",
        
//     },
//     {
//         brand: "Vivo",
//         model: "VivoY11",
//         price: "20000",
//         camera: "40px",
//         ram: "3gb",
//         rom : "32gb",
        
//     },
//     {
//         brand: "Vivo",
//         model: "VivoY15",
//         price: "30000",
//         camera: "40px",
//         ram: "4gb",
//         rom : "64gb",
        
//     },
//     {
//         brand: "Motorola",
//         model: "Motorola123",
//         price: "5000",
//         camera: "2px",
//         ram: "2gb",
//         rom : "32gb",
        
//     },
//     {
//         brand: "Iphone",
//         model: "Iphone12",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Iphone",
//         model: "Iphone13",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
        
//     },
//     {
//         brand: "Iphone",
//         model: "IphoneX",
//         price: "300000",
//         camera: "40px",
//         ram: "8gb",
//         rom : "128gb",
        
//     },
// ]
// const concept_of_foreach= (CD_for_loop)=>{
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     CD_for_loop(element,index,arr)
// }
// }
// concept_of_foreach((first,second,third)=>{
// console.log(first)
// console.log(second)
// console.log(third)
// })
// const example_of_call = (call_back)=>{
//     console.log("first")
//     setTimeout(() => {
//         call_back("hello")
//     }, 5000);
// }
// example_of_call((a)=>{
// console.log(a)
// })
// *************promise*****************
// const promises  = new Promise((resolve,reject)=>{
//         resolve()
//         reject()
//     })
//     promises.then(()=>{
//         console.log("hello")
//     }).catch(()=>{
//         console.log("promise reject")
//     })
//     const promises  = new Promise((resolve,reject)=>{
//       setTimeout(() => {
//         resolve()
//       }, 2000);
//     })
//     promises.then(()=>{
//      console.log("promise resolve") 
//     }).catch(()=>{
//         console.log("promise reject")
//          })
//     const promise = new Promise ((resolve,reject)=>{
// resolve('promise resolved')
// reject('Promise rejected due to server error')
//     })
//     promise.then((a)=>{
//         console.log(a)
//     }).catch((b)=>{
//        console.log(b)
//     })
// const promises  = new Promise((resolve,reject)=>{
//    const random_num = Math.round(Math.random()*1)
//    console.log(random_num)
// if (random_num === 1) {
//     resolve("promise resolve",random_num)
// }
// else{
//     reject("promise reject ",random_num)
// }    
// })
//     promises.then((resolve)=>{
//         console.log(resolve)
//     }).catch((error)=>{
//             console.log(error)
//         })
// const promises  = new Promise((resolve,reject)=>{
//        const random_num = Math.round(Math.random()*1)
//        console.log(random_num)
//        setTimeout(() => {
//         if (random_num === 1) {   resolve("promise resolve",random_num)
//         }
//         else{
//             reject("promise reject ",random_num)
//         }    
//                }, 2000);  
//     })
//         promises.then((resolve)=>{
//             console.log(resolve)
//         }).catch((error)=>{
//                 console.log(error)
//             })
// ***************Default parameter********************//
// const function_default_parameter = (a=9)=>{
//     const sum = a*2
// console.log(sum)
// }
// function_default_parameter()
// ****************IIFE******************//
// (function function_IIFE() {
//     console.log("function_invoked")
// })()
// function_IIFE()
// ***********async/await********
const promises  = new Promise((resolve,reject)=>{
           const random_num = Math.round(Math.random()*1)
           console.log(random_num)
           setTimeout(() => {
            if (random_num == 1) {   
                resolve("promise resolve")
            }
            else{
                reject("promise reject ")
            }    
                   }, 3000);  
        })
 
async function async_function() {
try {
    const res =await promises 
console.log(res) 
} catch (error) {
    console.log("promises reject")
}
}       
async_function()