(() => {
  const btn = document.getElementById("copyBtn");
  const linkEl = document.getElementById("rsvpLink");

  if (!btn || !linkEl) return;

  btn.addEventListener("click", async () => {
    const url = linkEl.textContent.trim();
    try {
      await navigator.clipboard.writeText(url);
      btn.textContent = "Copié ✅";
      setTimeout(() => (btn.textContent = "Copier le lien 🔗"), 1400);
    } catch (e) {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = url;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      btn.textContent = "Copié ✅";
      setTimeout(() => (btn.textContent = "Copier le lien 🔗"), 1400);
    }
  });
})();
