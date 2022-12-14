const navItemEl = document.querySelectorAll('.nav-item')

for(const item of navItemEl){

    item.addEventListener('mouseover', (event)=>{
        for(const child of item.children){
            if(child.classList.contains('text-slate-300')){
                child.classList.replace('text-slate-300', 'text-blue-600')
            }
            else {
                child.classList.replace('text-slate-600', 'text-blue-600')
            }
        }
    })

    item.addEventListener('mouseleave', (event)=>{
        for(const child of item.children){
            if(child.classList.contains('text-blue-600') && child.classList.contains('icon')){
                child.classList.replace('text-blue-600','text-slate-300')
            }
            else {
                child.classList.replace('text-blue-600','text-slate-600')
            }
        }
    })
}