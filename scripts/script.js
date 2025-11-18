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

const formManagement = () => {
    alert('Obrigado por visitar o Website! Volte Sempre!')
}