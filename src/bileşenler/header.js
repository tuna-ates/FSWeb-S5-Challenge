const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
      
     const header=document.createElement("div");
     header.classList.add("header");

     const date=document.createElement("span");
     date.classList.add("date");
     date.textContent=tarih;
     header.append(date);

     const baslikH1=document.createElement("h1");
     baslikH1.textContent=baslik;
     header.append(baslikH1);

     const info=document.createElement("span");
     info.classList.add("temp");
     info.textContent=yazi;
     header.append(info);

     return header;
  //
}

const headerEkleyici = (secici) => {
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
    
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
 
  const result= Header("DENEME BAŞLIĞI","10.05.2002","deneme deneme deneme deneme deneme deneme");
    const htmlHeader=document.querySelector(secici);
    htmlHeader.append(result);
   
    

}

export { Header, headerEkleyici }
