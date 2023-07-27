// document.addEventListener("DOMContentLoaded", function() {
//     const slide = document.getElementById("slide");
//     const items = slide.getElementsByClassName("item");
//     for (let i = 0; i < items.length; i++) {
//         items[i].classList.remove("item-active");
//     }
//     items[0].classList.add("item-active");
// });


document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}
  