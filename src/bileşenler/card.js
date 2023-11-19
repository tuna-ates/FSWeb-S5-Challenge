import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const card=document.createElement("div");
  card.classList.add("card");
  //card is childeren 
  const headlineİnfo=document.createElement("div");
  headlineİnfo.classList.add("headline");
  headlineİnfo.textContent=makale.anabaslik;
  card.append(headlineİnfo);

  const authorİnfo=document.createElement("div");
  authorİnfo.classList.add("author");
  card.append(authorİnfo);
  
  // author is child
  const imgContainerİnfo=document.createElement("div");
  imgContainerİnfo.classList.add("img-container");
  authorİnfo.append(imgContainerİnfo);

  // img-container child
  const img=document.createElement("img");
  img.setAttribute("src",makale.yazarFoto);
  imgContainerİnfo.append(img);
  //author is child
  const spanİnfo=document.createElement("span");
  spanİnfo.textContent=`${makale.yazarAdi} tarafından`;
  authorİnfo.append(spanİnfo);


  card.addEventListener("click",(e)=>{
    console.log(headlineİnfo);
  })
  return card 
  


}


const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  axios.get(`http://localhost:5001/api/makaleler`)
  .then((resolve)=>{
    console.log("makale",resolve.data.makaleler);
   
    for(let prb in resolve.data.makaleler){
      resolve.data.makaleler[prb].forEach(element => {
          document.querySelector(secici).append(Card(element));
       });
    }
    
    
  })
  
  
}

export { Card, cardEkleyici }
