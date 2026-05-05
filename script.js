/**
 * 更新時鐘與日期
 */
function updateClock() {
  const now = new Date();

  // 獲取日期資訊
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const dayOfWeek = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ][now.getDay()];

  // 獲取時間資訊
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // 更新 DOM
  document.getElementById("date-display").textContent =
    `${year}年${month}月${day}日 ${dayOfWeek}`;
  document.getElementById("time-display").textContent = `${hours}:${minutes}`;
  document.getElementById("seconds-display").textContent = `:${seconds}`;
}

// 每秒更新一次
setInterval(updateClock, 1000);

// 初始執行一次，避免載入時顯示空白
updateClock();

// 添加滑鼠移動視差效果 (微互動)
const card = document.getElementById("clock-card");
document.addEventListener("mousemove", (e) => {
  const xAxis = (window.innerWidth / 2 - e.pageX) / 50;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 50;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) translateY(-5px)`;
});

document.addEventListener("mouseleave", () => {
  card.style.transform = `rotateY(0deg) rotateX(0deg) translateY(0px)`;
});
