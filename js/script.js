
//portfolio item filter

const filterContanier = document.querySelector(".portfolio-filter")
filterBtns = filterContanier.children,
totalfilterBtn=filterBtns.length,
portfolioItem=document.querySelector(".portfolio-items").children;


for(let i=0; i=totalfilterBtn; i++){

   // filterBtns[i].addEventListener("click",function(){
        //filterContanier = document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
        
    });
}
