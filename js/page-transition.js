(function () {
  var overlay = document.getElementById("page-transition");
  if (!overlay) return;

  var strips = overlay.querySelectorAll(".page-transition-strip");
  var LAST_DELAY = (strips.length - 1) * 45;
  var DURATION = 600;
  var TOTAL = LAST_DELAY + DURATION;

  function reveal() {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        overlay.classList.add("is-hidden");
      });
    });
  }

  if (document.readyState === "complete") {
    reveal();
  } else {
    window.addEventListener("load", reveal);
  }

  function isInternalLink(link) {
    if (!link || !link.getAttribute) return false;
    var href = link.getAttribute("href") || "";
    if (!href || href.charAt(0) === "#") return false;
    if (href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) return false;
    if (link.target === "_blank") return false;
    if (link.hasAttribute("download")) return false;
    if (/^https?:\/\//i.test(href) && link.origin !== window.location.origin) return false;
    return true;
  }

  function isSamePageHashLink(link) {
    if (!link || !link.getAttribute) return false;
    var href = link.getAttribute("href") || "";
    return href.charAt(0) === "#" && href.length > 1;
  }

  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var link = e.target.closest("a");
    if (!link) return;

    if (isSamePageHashLink(link)) {
      var target;
      try {
        target = document.querySelector(link.getAttribute("href"));
      } catch (err) {
        target = null;
      }
      if (!target) return;
      e.preventDefault();
      overlay.classList.remove("is-hidden");
      setTimeout(function () {
        target.scrollIntoView({ behavior: "auto", block: "start" });
        reveal();
      }, TOTAL);
      return;
    }

    if (!isInternalLink(link)) return;
    e.preventDefault();
    var dest = link.href;
    overlay.classList.remove("is-hidden");
    setTimeout(function () {
      window.location.href = dest;
    }, TOTAL);
  });
})();
