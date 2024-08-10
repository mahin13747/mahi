document.addEventListener("DOMContentLoaded",function(){


    let Button=document.getElementById("calculate");


    Button.addEventListener("click",function(){
        const billamount=document.getElementById("bill-amount").valueAsNumber;
        const tippercent=document.getElementById("percentage").valueAsNumber;


        const tipamount= (billamount * tippercent)/100;


        const tipresult=document.getElementById("tipdisplay")
        tipresult.textContent="The Tip Amount : "+(tipamount)


        // const tiptotal=document.getElementById("total")
        // tiptotal.textContent="The Total Amount : "+(tipamount+billamount)
    })
})