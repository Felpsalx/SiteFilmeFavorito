document.addEventListener('DOMContentLoaded', (e)=>{
    const buttons = document.querySelectorAll('[data-tab-button]');
    for(let i=0; i<buttons.length;i++){
        buttons[i].addEventListener('click',(botao)=>{
            const tab = botao.target.dataset.tabButton;
            const tabs = document.querySelector(`[data-tab-id=${tab}]`);
            hideTab();
            tabs.classList.add('list__item--active') ;
            removebtn();
            botao.target.classList.add('buttons__tab__list--active_button');
        })
    }   
})
function hideTab(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i=0; i<tabsContainer.length;i++){
        tabsContainer[i].classList.remove('list__item--active')
    }
}
function removebtn(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i=0; i<buttons.length;i++){
        buttons[i].classList.remove('buttons__tab__list--active_button')
    }
}