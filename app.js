
// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
if (toggle) {
  toggle.addEventListener('click', () => menu.classList.toggle('show'));
}

// WhatsApp link config
function buildWhatsAppLink(number, text){
  const clean = number.replace(/[^\d]/g,'');
  const msg = encodeURIComponent(text || '');
  return `https://wa.me/${clean}?text=${msg}`;
}

(function initWhatsApp(){
  const cfg = window.NUTRIMEDIF_CONFIG || {};
  const href = buildWhatsAppLink(cfg.whatsappNumber || '', cfg.presetMessage || '');
  ['whatsappCta','whatsappAbout','whatsappFooter','whatsappFooter2'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.setAttribute('href', href);
  });
})();

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href.length > 1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu.classList.remove('show');
    }
  });
});
