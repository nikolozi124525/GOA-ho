function delayedReject() {
    return new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(" Task failed after 1 second"));
      }, 1000);
    });
  }
  
 
  delayedReject()
    .catch(error => console.error("Caught error:", error.message));
  