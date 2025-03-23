document.addEventListener("DOMContentLoaded", () => {
    const tops = [
      "images/top1.png", "images/top2.png", "images/top3.png", "images/top4.png",
      "images/top5.png", "images/top6.png", "images/top7.png", "images/top8.png"
    ];
  
    const bottoms = [
      "images/bottom1.png", "images/bottom2.png", "images/bottom3.png", "images/bottom4.png",
      "images/bottom5.png", "images/bottom6.png", "images/bottom7.png", "images/bottom8.png"
    ];
  
    let currentTop = 0;
    let currentBottom = 0;
  
    const topDisplay = document.getElementById("top-display");
    const bottomDisplay = document.getElementById("bottom-display");
  
    function updateDisplay() {
      topDisplay.src = tops[currentTop];
      bottomDisplay.src = bottoms[currentBottom];
    }
  
    document.querySelectorAll(".arrow").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        const isLeft = btn.classList.contains("left");
  
        if (type === "top") {
          currentTop = (currentTop + (isLeft ? -1 : 1) + tops.length) % tops.length;
        } else {
          currentBottom = (currentBottom + (isLeft ? -1 : 1) + bottoms.length) % bottoms.length;
        }
  
        updateDisplay();
      });
    });
  
    document.getElementById("random-outfit").addEventListener("click", () => {
      currentTop = Math.floor(Math.random() * tops.length);
      currentBottom = Math.floor(Math.random() * bottoms.length);
      updateDisplay();
    });
  
    updateDisplay(); // Initial load
  });
  