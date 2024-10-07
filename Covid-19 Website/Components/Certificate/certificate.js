window.onload = function(){
    document.getElementById("download").addEventListener("click", ()=>{
        const application = document.getElementById("application");
        console.log(application);
        console.log(window);
        html2pdf().from(application).save();
    })
}