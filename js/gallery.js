// ===== Gallery Page Logic (replaces GALLERY_IMAGES import from constants.ts) =====
// NOTE: Original images sourced from @/lib/constants (GALLERY_IMAGES) — not recoverable via extraction.
// Replace this array with your actual gallery image paths/alt text.
const galleryImages = [
  // { src: "assets/images/gallery1.jpg", alt: "Strategia 2025 - Opening Ceremony" },
];

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  const grid = document.getElementById("gallery-grid");
  if (!galleryImages.length) {
    grid.innerHTML = "<p class='text-gray-500 col-span-full text-center py-10'>Gallery images coming soon.</p>";
    return;
  }
  grid.innerHTML = galleryImages.map(img => `
    <div class="gallery-item">
      <img src="${img.src}" alt="${img.alt}" loading="lazy" />
    </div>
  `).join("");
});
