document.addEventListener("DOMContentLoaded", () => {
  const btnInput = document.querySelector("button.input");
  const btnSave = document.querySelector("button.save");
  const inputs = document.querySelectorAll("input");

  const nav = document.querySelector("nav");

  nav?.addEventListener("click", (e) => {
    const target = e.target;
    let href = "/";
    if (target.tagName == "LI") {
      const content = target.textContent;
      if (content == "Home") {
        href = "/";
      } else if (content == "주문관리") {
        href = "/order";
      } else if (content == "결제관리") {
        href = "/payment";
      } else if (content == "거래처관리") {
        href = "/buyer";
      } else if (content == "상품관리") {
        href = "/product";
      }
      document.location.href = href;
    }
  });

  btnInput?.addEventListener("click", () => {
    document.location.href = "/buyer/input";
  });

  btnSave?.addEventListener("click", () => {
    // const idInput = inputs[0];
    // const nameInput = inputs[1];

    // if (!idInput.value) {
    //   alert("거래처ID 를 입력해주세요");
    //   idInput.focus();
    //   return false;
    // } else if (!nameInput.value) {
    //   alert("거래처ID 를 입력해주세요");
    //   nameInput.focus();
    //   return false;
    // }

    document.querySelector("form.buyer").submit();
  });
});
