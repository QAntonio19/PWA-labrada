if (navigator.serviceWorker) {
    console.log("SW.compatiable")
    navigator.serviceWorker.register('./sw.js')
  }