const form = document.getElementById("login");
form.addEventListener("submit", loginUser);

async function loginUser(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const result = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  }).then((res) => res.json());

  if (result.status === "ok") {
    console.log("Got the token", result.data);
    const getGymkhana = await fetch("/gymkhana", {
      method: "GET",
      headers: {
        "Content-Type": "text/html",
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  } else {
    alert(result.error);
  }
}
