const joinArr = [];

function addJoin(){
    const id = document.querySelector("input[name = id]").value;
    const pwd = document.querySelector("input[name = pwd]").value;
    const gender = document.querySelector("input[name = gender]").value;

    //객체 생성
    const obj = {
        id : id,
        pwd : pwd,
        gender : gender
    };
    joinArr.push(obj);
    console.log(obj);
}

function enrollJoin(){
    const jsonStr = JSON.stringify(joinArr);
    localStorage.setItem("join", jsonStr);
}

function selectJoin(){
    const select = localStorage.getItem("join");
    const arr = JSON.parse(select);

    console.log(arr);
    

    for(let obj of arr){
        const liTag = document.createElement("li");
        liTag.appendChild(document.createTextNode(obj.id + " | "+ obj.pwd + " | " + obj.gender));
        const divTag = document.querySelector("#join-list");
        divTag.appendChild(liTag);
    }
}