// DOM 요소
const $modalWrap = document.querySelector(".modal-wrap");
const $newBtn=document.querySelector(".new-btn");
// .new-btn 클릭시, .modal-wrap의 hidden 클래스 없애기
$newBtn.addEventListener("click",()=>{
    remove();
});
// .close-btn 클릭시, .modal-wrap에 hidden 클래스 추가
const $closeBtn=document.querySelector(".close-btn");
$closeBtn.addEventListener("click",()=>{
    add();
});
// 힌트) remove대신 add 사용하기

// .open-btn 클릭시, .modal-wrap의 hidden 클래스 없애기
const $openBtn=document.querySelector(".open-btn");
$openBtn.addEventListener("click",()=>{
    remove();
});
// .delete-btn 클릭시, 삭제 여부 물어보는 창 띄워주기
const $deleteBtn=document.querySelector(".delete-btn");
$deleteBtn.addEventListener("click",()=>{
    confirm("정말 삭제하시겠습니까?");
    //confirm=내장함수
});

// 함수 만들기(같은게 있으니까)
const remove=()=>{
    $modalWrap.classList.remove("hidden");
}
const add=()=>{
    $modalWrap.classList.add("hidden");
}

