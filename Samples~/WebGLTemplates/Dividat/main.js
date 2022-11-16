function UnityProgress(gameInstance, progress) {
  if (!gameInstance.Module) {
    return;
  }
  const loader = document.querySelector("#loader");
  const progressBar = document.querySelector("#loader .progress");
  progressBar.value = progress;
  progressBar.innerText = Math.floor(progress * 100) + " %";

  if (progress === 1 && !gameInstance.removeTimeout) {
    gameInstance.removeTimeout = setTimeout(function() {
      loader.className = "hidden";
    }, 2000);
  }
}

const gameContainer = document.querySelector("#gameContainer");
const gameInstance = UnityLoader.instantiate(gameContainer, gameContainer.dataset.buildUrl, {onProgress: UnityProgress});

