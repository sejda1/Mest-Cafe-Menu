const menu = {
  kahvalti: {header: "KAHVALTI ve ATIŞTIRMALIKLAR", image: "/breakfast.jpeg", Options: [
    {
      title: "Kahvaltı Tabağı",
      desc: "Beyaz peynir, Kaşar peyniri, Tel peynir, Siyah zeytin, Yeşil zeytin, Domates, Salatalık, Omlet, Salam, Reçel, Tereyağı, Acuka, Bal, Kavurma </br> (1 adet çay ile servis edilir)",
      price: 300,
    },
    { title: "Sahanda Omlet", price: 120 },
    { title: "Sahanda Kaşarlı Yumurta", price: 130 },
    { title: "Sahanda Sucuklu Yumurta", price: 150 },
    { title: "Sahanda Kavurmalı Yumurta", price: 170 },
    { title: "Sahanda Kavurma", price: 200 },
    { title: "Sahanda Sucuk", price: 150 },
    { title: "Dilim Kavurma", price: 180 },
    { title: "Sade Menemen", price: 120 },
    { title: "Kaşarlı Menemen", price: 150 },
    { title: "Sucuklu Menemen", price: 170 },
    { title: "Kuymak", price: 200 },
    { title: "Kaşarlı Bazlama Tost", price: 120 },
    { title: "Sucuklu Kaşarlı Bazlama Tost", price: 140 },
    { title: "Kavurmalı Kaşarlı Bazlama Tost", price: 160 },
    { title: "Patates Tava", price: 100 },
    { title: "Soğan Halkası", price: 100 },
  ]},
  corbalar: {header:"ÇORBA ve </br> SULU YEMEKLER", image: "/corba.png", Options: [
    {title: "(Günlük olarak çeşitleri değişkenlik göstermektedir.)", price: "Tam", halfPrice: "Yarım"},
    { title: "Mercimek Çorbası", price: 60 },
    { title: "Kelle Çorbası", price: 90 },
    { title: "Tas Kebabı", price: 180, halfPrice: 120 },
    { title: "Fırın Tavuk But", price: 140, halfPrice: 100 },
    { title: "Musakka-Karnıyarık", price: 160, halfPrice: 100 },
    { title: "İzmir Köfte", price: 160, halfPrice: 120 },
    { title: "Sebzeli Köfte", price: 160, halfPrice: 120 },
    { title: "Kuru Fasulye", price: 100, halfPrice: " "+70},
    { title: "Pilav", price: 50, halfPrice: " "+40},
  ]},
  salatalar:{ header:"SALATALAR", image: "/salata.jpeg", Options: [
    { title: "Çoban Salata", price: 80 },
    { title: "Mevsim Yeşillikleri", price: 80 },
  ]},
  anayemek: {header:"ANA YEMEKLER", image:"/anayemek .png", Options:[
    { title: "Mest Köfte", price: 350 },
    { title: "Kasap Köfte", price: 300 },
    { title: "Kaşarlı Köfte", price: 350 },
    { title: "Adana/Urfa Porsiyon (250gr) ", price: 350 },
    { title: "Et Dürüm", price: 200 },
    { title: "Tavuk Dürüm", price: 175 },
    { title: "Köfte Dürüm", price: 200 },
    { title: "Adana/Urfa Dürüm (125gr)", price: 200 },
    { title: "Kuzu Şiş", price: 0 },
    { title: "Kuzu Külbastı", price: 420 },
    { title: "Kuzu Pirzola", price: 420 },
    { title: "Izgara Antrikot", price: 420 },
    { title: "Izgara Bonfile", price: 450 },
    { title: "Tavuk Şiş", price: 230 },
    { title: "Kanat", price: 250 },
    { title: "Ekmek Arası Köfte", price: 150 },
  ]},
  burger: {header: "BURGER", image:"/burger.png" , Options:[
    {
      title: "Mest Burger",
      desc: "(Patates Kızartması Eşliğinde Servis Edilir.)",
      price: 230,
    },
    {
      title: "Mest Cheese Burger",
      desc: "(Patates Kızartması Eşliğinde Servis Edilir.)",
      price: 250,
    },
    {
      title: "Mest Double Burger",
      desc: "(Patates Kızartması Eşliğinde Servis Edilir.)",
      price: 400,
    },
  ]},
  mezeler: {header: "MEZELER", image:"/meze .jpeg", Options:[
    { title: "Atom", price: 0 },
    { title: "Haydari", price: 0 },
    { title: "Havuç Tarator", price: 0 },
    { title: "Patlıcan Salatası", price: 0 },
    { title: "Kuru Cacık", price: 0 },
    { title: "İçli Köfte", price: 0 },
  ]},

  tatlilar: {header:"TATLILAR", image:"/tatlilar.png", Options:[
    { title: "San Sebastian", price: 150 },
    { title: "Çikolatalı San Sebastian", price: 200 },
    { title: "Cheese Cake", price: 175 },
    { title: "Sufle", price: 200 },
    { title: "İbiza", price: 125 },
    { title: "Supangle", price: 125 },
    { title: "Tiramisu", price: 150 },
    { title: "Sütlaç", price: "" },
    { title: "Dondurma (1 Top)", price: 30 },
  ]},
  sicakicecek: {header:"SICAK İÇECEKLER", image:"/sicak-icecekler.jpeg",  Options:[
    { title: "Americano", price: 70 },
    { title: "Espresso", price: 70 },
    { title: "Cappucino", price: 90 },
    { title: "Latte", price: 90 },
    { title: "Latte Macchiato", price: 90 },
    { title: "Karamel Latte", price: 100 },
    { title: "Karamel Macchiato", price: 100 },
    { title: "Mocha", price: 90 },
    { title: "Chai Tea Latte", price: 90 },
    { title: "Filtre Kahve", price: 80 },
    { title: "Sütlü Filtre Kahve", price: 95 },
    { title: "Türk Kahvesi", price: 70 },
    { title: "Nescafe", price: 70 },
    { title: "Sıcak Çikolata", price: 90 },
    { title: "Sıcak Beyaz Çikolata", price: 90 },
    { title: "Sahlep", price: 90 },
    { title: "Çay", price: 20 },
    { title: "Bitki Çayı", price: 80 },
  ]},
  sogukkahveler: {header:"SOĞUK KAHVELER", image:"/ice-coffee.jpeg",  Options:[
    { title: "Ice Latte", price: 100 },
    { title: "Ice Karamel Latte", price: 110 },
    { title: "Ice Americano", price: 80 },
    { title: "Ice Latte Macchiato", price: 110 },
    { title: "Ice Karamel Macchiato", price: 110 },
    { title: "Dalgano", price: 90 },
  ]},
  serinletici: {header:"SERİNLETİCİ İÇECEKLER" , image: "/soguk-icecekler .png", Options:[
    { title: "Ice Chocolate", price: 110 },
    { title: "Ice Chai Tea Latte", price: 100 },
    { title: "Milkshake Çeşitleri", desc: "(Çilek, Kakao, Muz)", price: 120 },
    {
      title: "Bubble Tea Çeşitleri",
      desc: "(Yaban mersini, Çilek, Elma, Mango)",
      price: 150,
    },
    {
      title: "Alkolsüz Kokteyl Çeşitleri",
      desc: "(Mojito, Blue Lagoon, Cosmopolitan, Aronya)",
      price: 150,
    },
  ]},
  mesrubat: {header:"MEŞRUBATLAR", image:"/mesrubatt.jpeg" , Options:[
    { title: "Su", price: 15 },
    { title: "Sade Soda", price: 20 },
    { title: "Meyveli Soda", price: 25 },
    { title: "Churchill", price: 50 },
    { title: "Cola", price: 50 },
    { title: "Fanta", price: 50 },
    { title: "Sprite", price: 50 },
    { title: "Tonik", price: 50 },
    { title: "Limonata", price: 60 },
    { title: "Meyve Suyu Çeşitleri", price: 50 },
    { title: "Redbull", price: 90 },
    { title: "Ice Tea", price: 50 },
    { title: "Ayran", price: 30 },
    { title: "Şalgam", price: 30 },
  ]},
  sarkuteri: {header:"ŞARKÜTERİ ÜRÜNLERİ", image:"/sarkuteri.jpeg", Options:[
    { title: "(Belirtilen fiyatlar 1 Kg içindir.)" , price: "kg/" },
    { title: "Sucuk", price: 600 },
    { title: "Köfte", price: 600 },
    { title: "Kavurma", price: "1.000 "},
    { title: "Hamburger", price: 600 },
    { title: "Bonfile", price: "1.000 "},
    { title: "Antrikot", price: "1.000 "},
    { title: "Kuzu Lokum", price: "1.000" },
    { title: "Külbastı", price: "1.000" },
    { title: "Pirzola", price: "1.000 "},
    { title: "Yoğurt"+" "+"(200g)", price: 80 },
  ]},
};

function MenuItem(menuData) {
  let html = "";
  Object.keys(menuData).forEach(sectionKey => {
    const section = menuData[sectionKey];
    html += `
      <div class="mini-baslik">
        <img class="image" src="${section.image}" alt="${section.header}" />
        <p>${section.header}</p>
      </div>
    `;
    section.Options.forEach(item => {
      html += `
        <div class="mini-menu">
          <div class="mini-item">
            <span class="mini-header">${item.title}</span>
            <div class="price">
            ${item.halfPrice ? '<span class="half-price">' + item.halfPrice + ' ₺</span>' : ''}
            ${item.price ? ' <span class="mini-price">' + item.price + ' ₺</span>' : ''}
          </div>
           </div>
            ${item.desc ? '<br /><span class="aciklama">' + item.desc + '</span>' : ''}
         </div>
      `;
    });
  });

  return html;
}

document.addEventListener("DOMContentLoaded", () => {
  const kahvalti = document.getElementById("kahvalti");
  const corbalar = document.getElementById("corbalar");
  const salatalar = document.getElementById("salatalar");
  const anayemek = document.getElementById("anayemek");
  const burger = document.getElementById("burger");
  const mezeler = document.getElementById("mezeler");
  const serinletici = document.getElementById("serinletici");
  const tatlilar = document.getElementById("tatlilar");
  const sicakicecek = document.getElementById("sicakicecek");
  const sogukkahveler = document.getElementById("sogukkahveler");
  const mesrubat = document.getElementById("mesrubat");
  const sarkuteri = document.getElementById("sarkuteri");

  kahvalti.innerHTML = MenuItem({ kahvalti: menu.kahvalti });
  corbalar.innerHTML = MenuItem({ corbalar: menu.corbalar });
  salatalar.innerHTML = MenuItem({ salatalar: menu.salatalar });
  anayemek.innerHTML = MenuItem({ anayemek: menu.anayemek });
  burger.innerHTML = MenuItem({ burger: menu.burger });
  mezeler.innerHTML = MenuItem({ mezeler: menu.mezeler });
  serinletici.innerHTML = MenuItem({ serinletici: menu.serinletici });
  tatlilar.innerHTML = MenuItem({ tatlilar: menu.tatlilar });
  sicakicecek.innerHTML = MenuItem({ sicakicecek: menu.sicakicecek });
  sogukkahveler.innerHTML = MenuItem({ sogukkahveler: menu.sogukkahveler });
  mesrubat.innerHTML = MenuItem({ mesrubat: menu.mesrubat });
  sarkuteri.innerHTML = MenuItem({ sarkuteri: menu.sarkuteri });
});

