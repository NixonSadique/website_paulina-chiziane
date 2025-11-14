// const toogleSidebar = () => {
//     const nav = document.getElementById("navigator")
//     isHidden = nav.classList.contains("hidden")

//     if(isHidden){
//         nav.classList.remove("hidden")
//         return;
//     }

//     nav.classList.add("hidden")
// }


const toogleSidebar = () => {
    const nav = document.getElementById("navigator");
    const openIcon = document.getElementById("open");
    const closeIcon = document.getElementById("close");
    const isCollapsed =  nav.classList.contains("collapsed");

    if(isCollapsed){
        nav.classList.remove("collapsed");
        closeIcon.classList.remove("hidden")
        openIcon.classList.add("hidden")
        return;
    }

    nav.classList.add("collapsed");
    openIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
}