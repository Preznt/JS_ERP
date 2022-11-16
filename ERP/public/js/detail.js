document.addEventListener("DOMContentLoaded", () => {
  const infoTable = document.querySelector("table.buyer");
  const btnUpdate = document.querySelector("button.update");
  const btnDelete = document.querySelector("button.delete");
  const btnChange = document.querySelector("button.change");

  infoTable?.addEventListener("click", (e) => {
    const target = e.target;
    if (target.tagName == "TD") {
      const c_id = target.closest("TR").dataset.id;
      document.location.href = `/buyer/${c_id}/detail`;
    }
  });

  btnUpdate?.addEventListener("click", (e) => {
    const btnU_id = e.target.dataset.btnid;
    document.location.href = `/buyer/${btnU_id}/update`;
  });

  btnDelete?.addEventListener("click", (e) => {
    const btnD_id = e.target.dataset.btnid;
    if (confirm("정말 삭제하시겠습니까?")) {
      document.location.href = `/buyer/${btnD_id}/delete`;
      return false;
    }
    alert("취소 되었습니다");
  });
});
