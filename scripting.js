function myFunction() {
  function persoon(naam, kinderen, leeftijd, zelforg, anderorg,geslacht ,voorkeur,vakantie,zelfsport,andersport){
    this.naam = naam;
    this.kinderen = kinderen;
    this.leeftijd = leeftijd;
    this.zelforg = zelforg;
    this.anderorg = anderorg;
    this.geslacht = geslacht;
    this.voorkeur = voorkeur;
    this.vakantie = vakantie;
    this.zelfsport = zelfsport;
    this.andersport = andersport;
}
var kandidaten = [];

var zelf = new persoon(
  document.getElementById("firstName1").value,
  document.getElementById("Kinderen1").value,
  document.getElementById("leeftijd").value,
  document.getElementById("zelfOrg1").value,
  document.getElementById("anderOrg1").value,
  document.getElementById("geslacht").value,
  document.getElementById("voorkeur").value,
  document.getElementById("vakantie").value,
  document.getElementById("zelfsport").value,
  document.getElementById("andersport").value
  );
  
kandidaten.push(new persoon("henk","Ja",20,"Ja","Maakt niet uit","Man","Vrouw","Cruise","Nee","Maakt niet uit"));
kandidaten.push(new persoon("Jan","Nee", 19,"Ja","Liever wel","Man","Man","Strandvakantie","Nee","Maakt niet uit"));
kandidaten.push(new persoon("Eva","Ja",22,"Nee","Liever wel","Vrouw","Maakt niet uit","Trektochten","Ja","Ja"));
kandidaten.push(new persoon("Julie","Nee",23,"Nee","Maakt niet uit","Vrouw","Man","Cruise","Nee","Ja"));
  

 
  document.getElementById("output").innerHTML = 
  'kandidaten.push(new persoon("' + zelf.naam + ' '+ document.getElementById("lastName1").value + '","'+ zelf.kinderen +'",'+ zelf.leeftijd +' ,"'+ zelf.zelforg + '","'+zelf.anderorg + '","'+ zelf.geslacht+'","'+ zelf.voorkeur + '","' + zelf.vakantie + '","'+ zelf.zelfsport + '","'+ zelf.andersport + '"));';
}
