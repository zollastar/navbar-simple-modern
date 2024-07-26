// Mengambil elemen nav
const elNav = document.querySelector('nav');

// Mengambil semua elemen li di dalam ul sebagai array
const elLinks = Array.from(elNav.querySelectorAll("ul li"));

// Menetapkan jumlah total item navigasi sebagai properti CSS custom
elNav.style.setProperty('--total', elLinks.length);
console.log(elLinks.length);

// Membuat instance baru dari Flipping dengan easing custom
const flipping = new Flipping({
  easing: 'cubic-bezier(.5, 0, .5, 1)'
});

// Menambahkan event listener klik untuk setiap item navigasi
elLinks.forEach( (elLink,i) => {
  elLink.addEventListener('click', flipping.wrap(()=>{
    // Menghapus atribut data-active dari semua item navigasi
    elLinks.forEach( l => delete l.dataset.active );
    // Menambahkan atribut data-active pada item navigasi yang diklik
    elLink.dataset.active = true;
    // Menetapkan indeks item aktif sebagai properti CSS custom
    elNav.style.setProperty('--active', i);
  }));
});

// Mengatur item navigasi pertama sebagai aktif saat pertama kali dimuat
elLinks[0].dataset.active = true;
elNav.style.setProperty('--active', 0);