const input = document.getElementById('input')
input.addEventListener("keyup",() => {
    let value = input.value
    let li = document.getElementsByTagName('li')

    for(let i = 0;i < li.length;i++){
        if (li[i].innerHTML.toLocaleLowerCase().includes(value)) {
            li[i].style.display = ''
        } else {
            li[i].style.display = 'none '
        }
    }
} )

