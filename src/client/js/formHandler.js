const application_key = "c9b48b6478c2721af730178f70f57656";

var options = {
  method: "POST",
  hostname: "http://api.meaningcloud.com",
  path: `/sentiment-2.1?key=${application_key}&lang=en&txt=`,
  headers: {},
  maxRedirects: 20,
};

async function handleSubmit(e) {
  e.preventDefault();

  //console.log("Clicked");
  const input = document.getElementById("name").value;
  const data = {
    text: input,
  };
  console.log(input);
  //   const txt = encodeURIComponent(input);
  //   console.log(txt);
  //   const fullPath = options.hostname + options.path + txt;
  //console.log(fullPath);
  const resp = await fetch("http://localhost:8081/submit", {
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    method: "POST",
  })
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => {
      console.error(error);
    });
  //   const res = await fetch(fullPath, {
  //     method: "POST",
  //   });
  //   try {
  //     const data = await res.json();
  //     // console.log(data);
  //     Client.checkForName(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
}

export { handleSubmit };
