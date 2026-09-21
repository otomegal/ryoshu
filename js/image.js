// 1. Create an array of objects pairing each image with its caption
const items = [
  {
    image: 'files/jeanne/_slb025_X.jpg',
    caption: '_s1b025 on X'
  },
  {
    image: 'files/jeanne/671isreal_X.jpg',
    caption: '671isreal on X'
  },
    {
    image: 'files/jeanne/a_ffections_X.jpg',
    caption: 'a_ffections on X'
  },
  {
    image: 'files/jeanne/a1g3bra4_X.jpg',
    caption: 'a1g3bra4 on X'
  },
  {
    image: 'files/jeanne/cheromo159_X.jpg',
    caption: 'cheromo159 on X'
  },
  {
    image: 'files/jeanne/ClaireIXO_X.jpg',
    caption: 'ClaireIXO on X'
  },
  {
    image: 'files/jeanne/gy8102_X.jpg',
    caption: 'gy8102 on X'
  },
  {
    image: 'files/jeanne/HazessZ_X.jpg',
    caption: 'HazessZ on X'
  },
  {
    image: 'files/jeanne/hodupm_X2.png',
    caption: 'hodupm on X'
  },
  {
    image: 'files/jeanne/indigoofferra_X.jpg',
    caption: 'indigoofferra on X'
  },
  {
    image: 'files/jeanne/iseong___X.jpg',
    caption: 'iseong__ on X'
  },
  {
    image: 'files/jeanne/k13mni3s_X.jpg',
    caption: 'k13mni3s on X'
  },
  {
    image: 'files/jeanne/Kalmia_001_X.jpg',
    caption: 'Kalmia_001 on X'
  },
  {
    image: 'files/jeanne/Koqn4qUZ2A83548_X.jpg',
    caption: 'Koqn4qUZ2A83548 on X'
  },
  {
    image: 'files/jeanne/LaazyWb_X.jpg',
    caption: 'LaazyWb on X'
  },
  {
    image: 'files/jeanne/M_otaku_X.jpg',
    caption: 'M_otaku on X'
  },
  {
    image: 'files/jeanne/meco194_X.jpg',
    caption: 'meco194 on X'
  },
  {
    image: 'files/jeanne/misg1111_X.jpg',
    caption: 'misg1111 on X'
  },
  {
    image: 'files/jeanne/Morpha1__X.jpg',
    caption: 'Morpha1_ on X'
  },
  {
    image: 'files/jeanne/N00xx2_X.jpg',
    caption: 'N00xx2 on X'
  },
  {
    image: 'files/jeanne/NeOunge__X.jpg',
    caption: 'NeOunge_ on X'
  },
  {
    image: 'files/jeanne/nnnnnnnnn_atsoo_X.jpg',
    caption: 'nnnnnnnnn_atsoo on X'
  },
  {
    image: 'files/jeanne/nyxng0__X.jpg',
    caption: 'nyxng0_ on X'
  },
  {
    image: 'files/jeanne/oniohno___X.jpg',
    caption: 'oniohno__ on X'
  },
  {
    image: 'files/jeanne/R_ramo00_X.jpg',
    caption: 'R_ramo00 on X'
  },
  {
    image: 'files/jeanne/reeveri2_X.jpg',
    caption: 'reeveri2 on X'
  },
  {
    image: 'files/jeanne/rhyphric_X.jpg',
    caption: 'rhyphric on X'
  },
  {
    image: 'files/jeanne/Rowwwsic_X.jpg',
    caption: 'Rowwwsic on X'
  },
  {
    image: 'files/jeanne/s3v1_ad3_X2.jpg',
    caption: 's3v1_ad3 on X'
  },
  {
    image: 'files/jeanne/sadakoim__X.jpg',
    caption: 'sadakoim_ on X'
  },
  {
    image: 'files/jeanne/sLeo08_02_X.jpg',
    caption: 'sLeo08_02 on X'
  },
  {
    image: 'files/jeanne/ThistleToPain_X.png',
    caption: 'ThistleToPain on X'
  },
  {
    image: 'files/jeanne/Ue3mHhdziU8946_X.jpg',
    caption: 'Ue3mHhdziU8946 on X'
  },
  {
    image: 'files/jeanne/Unjoeyes_X.jpg',
    caption: 'Unjoeyes on X'
  },
  {
    image: 'files/jeanne/vieriev__X.jpg',
    caption: 'vieriev_ on X'
  }
];

// 2. Function to pick a random item and update the DOM
function showRandomItem() {
  const randomIndex = Math.floor(Math.random() * items.length);
  const selected = items[randomIndex];

  // 3. Set the image source and caption text
  document.getElementById('randomImage').src = selected.image;
  document.getElementById('randomCaption').textContent = selected.caption;
}

// Run the function when the page loads
window.onload = showRandomItem;
