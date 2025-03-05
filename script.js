let ans = "";
document.querySelector('#equal').addEventListener('click',()=>{
    try{
        result = new Function("return "+ans)(); // This will take ans-string as input and return it after calcuation.
        if(isNaN(result) || !isFinite(result)){
            throw new Error("Invalid Input");
        }
        ans = result.toString();
    }
    catch(error){
        ans = "Invalid Input";
    }
    document.querySelector('.IOContainer').innerText = ans;
});
document.querySelector('#AC').addEventListener('click',()=>{
    ans = "";
    document.querySelector('.IOContainer').innerText = ans;
});
document.querySelector("#del").addEventListener('click',()=>{
    ans = ans.slice(0,-1);
    document.querySelector('.IOContainer').innerText = ans;
})


document.querySelectorAll(".eachButton").forEach((button)=>{
    if(button.id == "button3"){
        button.addEventListener('click',()=>{
            ans += '**';
            document.querySelector('.IOContainer').innerText = ans;
        });
    }
    else{
        button.addEventListener('click',()=>{
            ans += button.innerText;
            document.querySelector('.IOContainer').innerText = ans;
        });
    }
});
