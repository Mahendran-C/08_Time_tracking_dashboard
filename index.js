// alert("Hello Mahi");
function handleClick(value) {
  let elem1 = document.getElementById("card-daily");
  let elem2 = document.getElementById("card-weekly");
  let elem3 = document.getElementById("card-monthly");
  if (value === "card-daily") {
    elem1.classList.add("active");
    elem2.classList.remove("active");
    elem3.classList.remove("active");
  } else if (value === "card-weekly") {
    elem2.classList.add("active");
    elem1.classList.remove("active");
    elem3.classList.remove("active");
  } else if (value === "card-monthly") {
    elem3.classList.add("active");
    elem1.classList.remove("active");
    elem2.classList.remove("active");
  }

  hideElem(value);
}

function hideElem(value) {
  let daily = document.getElementsByClassName("daily");
  let weekly = document.getElementsByClassName("weekly");
  let monthly = document.getElementsByClassName("monthly");
  switch (value) {
    case "card-daily":
      {
        for (var i = 0; i < daily.length; i++) {
          daily[i].style.display = "flex";
          weekly[i].style.display = "none";
          monthly[i].style.display = "none";
        }
      }
      break;
    case "card-weekly":
      {
        for (var i = 0; i < daily.length; i++) {
          weekly[i].style.display = "flex";
          daily[i].style.display = "none";
          monthly[i].style.display = "none";
        }
      }
      break;
    case "card-monthly":
      {
        for (var i = 0; i < daily.length; i++) {
          monthly[i].style.display = "flex";
          daily[i].style.display = "none";
          weekly[i].style.display = "none";
        }
      }
      break;
    default: {
      alert("somthing went wrong!");
    }
  }
}
