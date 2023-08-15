// const Dropdown = {
    // constructor(dropdown_el){
    //     this.dropdown = dropdown_el
    //     this.dropdown_in = dropdown_el.querySelector('.dropdown_in')
    //     this.opened = 0
    //     this.close()
    // },
    // open(element){
//         element.dropdown_in = element.querySelector('.dropdown_in')
//         element.dropdown_in.style.transition = '0.3s'
//         element.dropdown_in.style.transform = "translateY(0px)"
//         element.dropdown_in.style.opacity = 1
//         element.dropdown_in.style.pointerEvents = 'initial'
//         element.opened = 1
//     },
//     close(element){
//         element.dropdown_in = element.querySelector('.dropdown_in')
//         element.dropdown_in.style.transition = '0.3s'
//         element.dropdown_in.style.transform = "translateY(30px)"
//         element.dropdown_in.style.opacity = 0
//         element.dropdown_in.style.pointerEvents = 'none'
//         element.opened = 0
//     },
//     toggle(element){
//         element.opened ? element.close() : element.open()
//     }
// }

// Dropdown.close(dropdown_a)

function Dropdown(element){
    
    function open(){
        element.dropdown_in = element.querySelector('.dropdown_in')
        element.dropdown_in.style.transition = '0.3s'
        element.dropdown_in.style.transform = "translateY(0px)"
        element.dropdown_in.style.opacity = 1
        element.dropdown_in.style.pointerEvents = 'initial'
        element.opened = 1
    }

    function close(){
        element.dropdown_in = element.querySelector('.dropdown_in')
        element.dropdown_in.style.transition = '0.3s'
        element.dropdown_in.style.transform = "translateY(30px)"
        element.dropdown_in.style.opacity = 0
        element.dropdown_in.style.pointerEvents = 'none'
        element.opened = 0
    }

    function toggle(){
        element.opened ? this.close() : this.open()
    }

    return {
        open: open,
        close: close,
        toggle: toggle,
    }

}

Dropdown(dropdown_a).close()
Dropdown(dropdown_b).close()

// let dropa = new Dropdown(dropdown_a)

// 