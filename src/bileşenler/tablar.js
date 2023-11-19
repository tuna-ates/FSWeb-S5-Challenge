import axios from "axios";

const Tablar = (konular) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konular") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konular dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
  const parentDiv=document.createElement("div");
  parentDiv.classList.add("topics");

  konular.forEach(element => {
      const childDiv=document.createElement("div");
      childDiv.classList.add("tab");
  childDiv.textContent=element;
  parentDiv.append(childDiv);
  });
  return parentDiv;
}

axios.get(`http://localhost:5001/api/konular`)
.then((resolve)=>{
  console.log("sonuc:",resolve.data.konular);

tabEkleyici(Tablar(resolve.data.konular));
})
const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
 document.querySelector(".deneme1").append(secici);
   
}

export { Tablar, tabEkleyici }
