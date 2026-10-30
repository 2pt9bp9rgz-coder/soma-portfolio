const ACCESS_KEY = "c5fba814-2d1e-4b9b-87d0-2dfa66c228e5";

const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");
const submitBtn = form.querySelector(".form-submit");

function setStatus(message, type) {
  statusEl.textContent = message;
  statusEl.className = `form-status form-status--${type}`;
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const description = form.description.value.trim();
  const types = Array.from(form.querySelectorAll('input[name="type"]:checked')).map((el) => el.value);

  submitBtn.disabled = true;
  setStatus("送信中...", "pending");

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: "【ポートフォリオサイト】お問い合わせ",
        from_name: "Soma Nisihara Portfolio",
        お名前: name,
        メールアドレス: email,
        お問い合わせ種別: types.join("、") || "未選択",
        お問い合わせ内容: description,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("送信しました。ご連絡ありがとうございます！", "success");
      form.reset();
    } else {
      setStatus("送信に失敗しました。時間をおいて再度お試しください。", "error");
      submitBtn.disabled = false;
    }
  } catch (err) {
    setStatus("送信に失敗しました。通信環境をご確認ください。", "error");
    submitBtn.disabled = false;
  }
});
