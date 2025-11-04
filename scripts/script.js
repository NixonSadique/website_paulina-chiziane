const toogleSidebar = () => {
    const nav = document.getElementById("navigator")
    isHidden = nav.classList.contains("hidden")

    if(isHidden){
        nav.classList.remove("hidden")
        return;
    }

    nav.classList.add("hidden")
}