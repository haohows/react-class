let data = [
  { id: 1, content: "清理冰箱" },
  { id: 2, content: "買日用品" },
];

let num = data.length;
const inputByAdd = document.querySelector(".inputByAdd");
const btnByAdd = document.querySelector(".btnByAdd");
const list = document.querySelector(".list");

btnByAdd.addEventListener("click", function () {
  let isCheckEmpty = inputByAdd.value.trim();
  if (!isCheckEmpty) return alert("請輸入內容");
  addItem(inputByAdd.value);
  inputByAdd.value = "";
});

const addItem = (content) => {
  let id = data.length + 1;
  data.push({ id, content });
  render();
};

const removeItem = (id) => {
  let index = data.findIndex((item) => item.id === id);
  data.splice(index, 1);
  render();
};

const render = () => {
  let template = "";
  data.forEach((el) => {
    template += `
    <div class="item">
        <p>${el.content}</p>  
        <button class="btnByRemove" data-id="${el.id}">刪除</button>
    </div>
    `;
  });
  list.innerHTML = template;

  const btnByRemove = document.querySelectorAll(".btnByRemove");
  btnByRemove.forEach((btn) => {
    btn.addEventListener("click", function (evt) {
      let id = Number.parseInt(evt.target.dataset.id);
      removeItem(id);
    });
  });
};

render();
