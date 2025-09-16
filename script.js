document.addEventListener("DOMContentLoaded", function () {
  const copyBtn = document.getElementById("copy-btn");
  const pixKey = document.getElementById("pix-key");

  copyBtn.addEventListener("click", async function () {
    try {
      await navigator.clipboard.writeText(pixKey.textContent.trim());
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Chave copiada!";
      copyBtn.disabled = true;
      copyBtn.classList.add("copied");
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.disabled = false;
        copyBtn.classList.remove("copied");
      }, 2000);
    } catch (err) {
      alert(
        "Não foi possível copiar a chave Pix. Por favor, copie manualmente."
      );
    }
  });
});
