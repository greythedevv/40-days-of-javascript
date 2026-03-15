function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  try {
    const res = await fetchData();
    console.log("Then block:", res);

    throw new Error("Something went wrong!");

  } catch (error) {
    console.error("Caught error:", error.message);
  }
}

start();
