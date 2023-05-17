function Hide() {
    let btn = document.getElementById('btn');
    let para = document.getElementById('para');

    if (para.style.display != 'none'){
        para.style.display = 'none';
    } else {
        para.style.display = 'block';
    }
}

btn.addEventListener('mouseover', function(){
    console.log('mouseover');
});

btn.addEventListener('mouseout', function(){
    console.log('mouseout');
});

para2.addEventListener('mouseover', function(){
    alert('Mouse over para2');
});