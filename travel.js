

const scrolly = document.body.style.top;
document.body.style.position = '';
document.body.style.top = '';
window.scrollTo(0,parseInt(scrolly || '0')* -1);

const btn12 = document.querySelector(".btn-12")
btn12.addEventListener("click",()=>{
   
        window.location.href = "JAZY/JAZY.html"
   
})




const customopen = document.querySelectorAll(".custom-btn")
const customclose = document.querySelector("#close1")
const modal1 = document.querySelector(".modal1")
const pclos = document.querySelector("#pclose1")

console.log(customopen);
customopen.forEach((custom, index) => {
    console.log(custom);
    custom.addEventListener("click", () => {
        modal1.classList.add("modalShow1")

        document.body.style.overflow = "hidden"
        if (index == 0) {

            pclos.innerHTML = ` <span class="letter">o</span>ur gasy tourist guides speak in  Italian language, German language, English language,
            French language, we will guide you to the unforgetable nature beauty in East Cost OF Madagascar. 
            <br> <br>
            Guides zusammenbringt,die Französisch, Englisch, Deutsch und Italienisch sprechen.
            Wir führen Sie zu der unvergesslichen Naturschönheit an der Ostküste von Madagaskar.
            <br> <br>
            La gasy guida parla francofone, anglofone, tedescofone e italofone.
            Vi guideremo verso l'indimenticabile bellezza naturale della costa orientale del Madagascar`
        } else if (index == 1) {

            pclos.innerHTML = `  <span class="letter">t</span>aratra Guide is an association created in 2007,
             grouping professional guides Competitive and passionate, they accompany you in discovering the wonders of the Big Island with its multiple facets.
So, we invite you to explore an exceptional destination: the evergreen and lush coast of eastern Madagascar, 
a true haven of biodiversity recognized worldwide with its five-star fauna and flora. 
<br> <br>
At the heart of this region is Toamasina, a charming and essential city, 
the starting point for unforgettable tours.
<br> <br>
Taratra Guide ist ein im Jahr 2007 gegründeter Verein, der professionelle Reiseleiter vereint. Unsere 
Guides sprechen fließend Deutsch, Englisch, Französisch sowie Italienisch und begleiten Sie mit 
Kompetenz und Leidenschaft dabei, die vielfältigen Wunder der „Großen Insel“ zu entdecken. 
Heute laden wir Sie ein, ein außergewöhnliches Reiseziel zu erkunden: die immergrüne und üppige 
Ostküste Madagaskars. Diese Region ist ein wahres Paradies der Biodiversität und weltweit für ihre 
einzigartige Fauna und Flora bekannt. Im Herzen dieser Region liegt Toamasina – eine charmante 
Stadt und der ideale Ausgangspunkt für unvergessliche Touren.
<br> <br>

Taratra Guide è un'associazione creata nel 2007, che riunisce guide professioniste 
 
Competenti e appassionate, vi accompagnano alla scoperta delle meraviglie della Grande
 Isola con le sue molteplici sfaccettature.
Oggi vi invitiamo a esplorare una destinazione eccezionale: la costa sempreverde e lussureggiante dell'Est del Madagascar, un vero paradiso di biodiversità riconosciuto a livello mondiale con la sua fauna e flora a cinque stelle. Al cuore di questa regione si trova Toamasina, una città affascinante e imperdibile, punto di partenza per circuiti indimenticabili.
<br> <br>
 Taratra Guide est une l’association Créée en 2007, 
 et regroupe des guides professionnels francophones, 
 anglophones, germanophones et italophones.
  Compétents et passionnés, ils vous accompagnent à la découvertedes merveilles de la Grande Île
   aux multiples facettes.
    Aujourd’hui, nous vous invitons à explorer une destination exceptionnelle : 
    la côte sempervirente et luxuriante de l’Est de Madagascar, 
    un véritable havre de biodiversité reconnu mondialement avec ses faunes et flores à cinq étoiles.
     Au cœur de cette région se trouve Toamasina, 
     ville charmante et incontournable, point de départ de circuits inoubliables.`
        } else if (index == 2) {

            pclos.innerHTML = `   THE EMAIL ADRESS:
            <br> <br>  
                        <a href="https://mail.google.com/mail/u/0/?pli=1#sent?compose=new" target="_blank" id="link">
                        taratraguide@ymail.com 
                        </a>
                        <br>
                        <a href="https://mail.google.com/mail/u/0/?pli=1#sent?compose=new" target="_blank" id="link">
                           taratraguide@gmail.com</a>
                           <br> <br>  
                           THE WHATSAP NUMBERS:

  <br> <br>  
   +261 34 66 686 64 - +261 34 37 908 06 - +261 038 57 761 92

  <br> <br> THE  TARATRA TOURIST GUIDE ASSOCIATION HONOR PRESIDENT : RAZAFINDRANIVO JULIE YVETTE`

        } else if (index == 3) {

            pclos.innerHTML = `
    
    <ul class="scroll1"> 
    <li > <a href="#canal" class="scroll">pangalana canal</a> </li>
</ul>

<ul class="scroll1">
    <li> <a   href="#masterguide" class="scroll">masterguide</a> </li>
</ul>

<ul class="scroll1">
    <li> <a   href="#tamatavy" class="scroll">tamatavy</a> </li>
</ul>

<ul class="scroll1">
    <li> <a   href="#foot" class="scroll">scroll to bottom</a> </li>
</ul>
`
        }


    })
 })


customclose.addEventListener("click", () => {
    modal1.classList.remove("modalShow1")
    document.body.style.overflowY = "scroll"

})





// ---------------------------- fin header

const btnOpen = document.querySelectorAll(".open")
const btnClose = document.querySelector(".close")
const modal = document.querySelector("#modal")
const pclose = document.querySelector(".pclose")
console.log(pclose);
pclose.textContent = "ity"

console.log(btnClose);

console.log(btnOpen);

btnOpen.forEach((btn, index) => {
    console.log(btn);
    btn.addEventListener("click", () => {
        modal.classList.add("modalShow")
        
        document.body.style.overflow = "hidden"
        if (index == 0) {

            pclose.innerHTML = ` PANGALANA CANAL
            <br><br>
            <span class="letter">l</span> et's talk, for example, about  <strong>the Pangalanes Canal</strong>:
            <strong>The second longest canal in the world after the one in China,
            </strong> 
            the Pangalanes Canal is a ribbon of water bordered by lagoons,
             lakes, marshes, and rivers. Designed to connect the East coast,
              it preserves the imprints of history: 
              from the Malagasy monarchy with Radama I up to the colonial era where the project was finalized.
              It is an ideal place for naturalists, adventurers, 
              and all those seeking unique and memorable experiences.
              
              <br><br>
              Der Canal des Pangalanes: Ein Band aus Wasser und Geschichte 
              Nach dem Kaiserkanal in China ist der Canal des Pangalanes der zweitlängste Kanal der Welt. Er 
              verbindet Lagunen, Seen, Sümpfe und Flüsse zu einem faszinierenden Wasserweg.<br><br> Das Projekt, das 
              <strong> bereits unter der madagassischen Monarchie durch Radama I </strong>. angedacht wurde, fand in der 
              Kolonialzeit seinen Abschluss. Heute ist er ein Refugium für Naturforscher, Abenteurer und alle, die 
              das Authentische suchen. 
              Stationen und Entdeckungen  
              <br><br>
              Parliamo ad esempio <strong>del Canale des Pangalanes:</strong>
              <strong>Secondo canale più lungo al mondo dopo quello della Cina,</strong>  il Canale des Pangalanes è un nastro d'acqua bordato da lagune, laghi, paludi e fiumi. Progettato per collegare la costa orientale, conserva le impronte della storia: dalla monarchia malgascia con Radama I fino all'epoca coloniale in cui il progetto fu completato.
              È un luogo ideale per naturalisti, avventurieri e tutti coloro che cercano esperienze uniche e memorabili.
              
              <br><br>
              Parlons par exemplele <strong>Canal des Pangalanes:</strong>
               Deuxième plus long canal du monde après celui de Chine, 
               le Canal des Pangalanes est un ruban d’eau bordé de lagunes,
                lacs et marais, fleuves. Conçu pour relier la côte Est,
                 il conserve les empreintes de l’histoire : de la monarchie malgache 
                 avec Radama Ier jusqu’à l’époque coloniale où le projet fut finalisé. 
                 C’est un lieu idéal pour les naturalistes, 
                 les aventuriers et tous ceux qui recherchent des expériences uniques et mémorables.
             
              `
        } else if (index == 1) {
            pclose.innerHTML = `  AMBODISAINA
            <br><br>
            
            
            <span class="letter">a</span>mbodisaina (Tapakala) 
            – Located 10 km from Toamasina, this warm village  
            <strong>immerses you in the daily life of the Betsimisaraka:
            </strong> crafts, traditional fishing, basketry, and tasting the famous Betsabetsa,
             a local hydromel made from sugarcane juice ingrained in the DNA of the Betsimisaraka, 
             especially during festive moments. It is also the cradle of education on the big island around 1818.
<br><br>
BETSABETSA:
Nur 10 km von Toamasina entfernt, tauchen Sie in diesem herzlichen Dorf in den Alltag der 
Betsimisaraka ein. Erleben Sie traditionelles Handwerk, Fischerei und die Kunst des Korbflechtens.
<br><br> 
Eine Kostprobe des berühmten Betsabetsa darf nicht fehlen – dieser lokale Honigwein aus 
Zuckerrohrsaft ist tief in der Kultur der Region verwurzelt. 
Wussten Sie schon? Hier liegt auch die 
Wiege der modernen Bildung Madagaskars, die um 1818 ihren Anfang nahm.
<br><br>
BETSABETSA:
Ambodisaina (Tapakala) 
– Situato a 10 km da Toamasina,
 questo villaggio caloroso vi immerge nella vita quotidiana dei Betsimisaraka: 
 artigianato, pesca tradizionale, intreccio di ceste e degustazione del famoso Betsabetsa, 
 un idromele locale a base di succo di canna da zucchero radicato nel DNA dei Betsimisaraka, 
 specialmente durante i momenti di festa. È anche la culla dell'istruzione nella grande isola intorno al 1818.
<br><br>

Escales et découvertes BETSABETSA Ambodisaina (Tapakala)– Situé à 10 km de Toamasina,
<strong>ce village Chaleureux vous plonge dans le quotidien des Betsimisaraka:
</strong> artisanat, pêche traditionnelle, vannerie et dégustation du fameux Betsabetsa, 
un hydromel local à base de jus decanne à sucre encré dans l’ADN des Betsimisaraka surtout durant 
les moments de festivités.
 C’est aussi le berceau de l’éducation dans la grande île vers 1818.

                <br><br>`  

        } else if (index == 2) {
            pclose.innerHTML = ` ANDRANOKODITRA
            <br><br>
            
          
   <span class="letter">a</span>ndranokoditra and the Vohibola Forest – 
An emblematic village of ecotourism with  <strong>its paradisiacal beaches and idyllic panoramas. </strong>

Its forest, despite a fire in 2024, harbors exceptional biodiversity:
 <strong>The world's smallest chameleon (Brookesia minima),</strong>
Another tiny batrachian (Stumpffia pygmaea), <strong>the world's smallest frog,</strong>
Other rare amphibians and reptiles like
 Plethodontohyla notosticta and Guibemantis pulcher to crown the exploration with our very circumspect guides.
As well as the world's <strong>smallest orchid (Synorchis).</strong> 
<br><br> 
                                                                                                 
Weiter zu:
Andranokoditra und der Wald von Vohibola 
Dieses emblematische Ökotourismus-Dorf besticht durch<strong>paradiesische Strände</strong>.
<br><br> Trotz eines 
Waldbrandes im Jahr 2024 beherbergt der angrenzende Wald weiterhin eine außergewöhnliche 
Artenvielfalt: 
Das kleinste Chamäleon der Welt (Brookesia minima). 
Die kleinste Froschart der Welt (Stumpffia pygmaea). 
<br><br>
Seltene Reptilien und Amphibien wie Plethodontohyla notosticta und Guibemantis pulcher. 
Sowie die winzige Orchidee Synorchis.
<br><br>
Continuando verso:
Andranokoditra e la foresta di Vohibola – 
<strong>Un villaggio emblematico dell'ecoturismo con spiagge paradisiache e panorami idilliaci.</strong>
 La sua foresta, nonostante un incendio nel 2024, ospita una biodiversità eccezionale:
 <strong>Il camaleonte più piccolo del mondo</strong> (Brookesia minima),
 <strong>Un altro batrace minuscolo (Stumpffia pygmaea),</strong> la rana più piccola del mondo,
Altri anfibi e rettili rari come Plethodontohyla notosticta e Guibemantis pulcher per coronare
 l'esplorazione con le nostre guide molto attente.
Nonché l'orchidea più piccola del mondo (Synorchis).
<br><br>
Lemurophoenix, piante carnivore e diversi <strong>lemuri endemici tra cui il maki, l'aye-aye,</strong>  
il sifaka e l'impressionante Indri Indri (il lemure più grande del mondo). 
Il tutto è associato ai 100.000 palmi che si estendono e abbelliscono il rinomato hotel Palmarium in 
un scrigno naturale e meraviglioso che rivela tutta la bellezza immacolata del luogo.
<br><br>

<br><br>
Continuant à Andranokoditra et la forêt de Vohibola–<strong>Un village emblématique d’écotourisme avec ses plages paradisiaques et panorama idylliques.</strong>
  Sa forêt, malgré un incendie en 2024, abrite une biodiversité exceptionnelle :  
  <strong>Le plus petit caméléon du monde </strong>(Brookesia minima), 
   Un autre batracien minuscule (Stumpffia pygmaea),
  <strong>la plus petite grenouille du monde, D’autresamphibienset reptiles rares</strong> comme la Plethsodontohyla
   notosticta et le Guibemantis Pulcher 
  pour couronner l’exploration avec nos guides très circonspects.
Ainsi que <strong>la plus petite orchidée du monde (Synorchis).
`          }



        else if (index == 3) {
            pclose.innerHTML = ` ANKAN NY NOFY 
            <br><br>

            <span class="letter">O</span>ur journey continues to
        Ankanin'ny Nofy: literally meaning The Dream Nest – Nestled on the edge of Lake Ampitabe, 
this paradisiacal place combines white sandy beaches and exuberant nature
that perfectly expresses the <strong>beauty and richness of Malagasy nature</strong> . 
 You will discover unique species like Dypsis and Lemurophoenix palms, 
carnivorous plants, and several endemic lemurs including the  <strong>ring-tailed lemur (maki)</strong> , 
the aye-aye, the sifaka, and the impressive Indri Indri (the world's largest lemur). 
All of this is associated with the 100,000 palms that extend and embellish the renowned Palmarium hotel
 in a natural and wonderful setting that reveals the immaculate beauty of the place.
<br><br>
Ankanin’ny Nofy: Das „Nest der Träume“ 
<br><br>
Am Ufer des Ampitabe-Sees gelegen, vereint dieser Ort weißen Sandstrand mit <strong>unberührter Natur.</strong> 
Entdecken Sie seltene Palmenarten wie Dypsis und Lemurophoenix, fleischfressende Pflanzen und 
endemische Lemuren – darunter der Maki, der seltene Aye-Aye, Sifakas und der beeindruckende Indri 
Indri, der größte Lemur der Welt.
<br><br>
Über 100.000 Palmen zieren das Gelände des renommierten Hotels 
Palmarium und schaffen eine traumhafte Kulisse.
<br><br>
Notre périple se poursuit à Ankanin’ny Nofy : 
littéralement signifie Le Nid de Rêve– Niché au bord du 
lac Ampitabe, ce lieu paradisiaque allie la plage de sable blanc 
et nature exubérante qui exprime à merveille la beauté et 
la richesse de la nature malagasy.
<br><br>
 On y découvre des <strong>espèces uniques comme les palmiers Dypsis et Lemurophoenix,</strong>
des plantes carnivores  et plusieurs lémuriens endémiques dont le maki, l’aye-aye,
   le sifaka et l’impressionnant   Indri Indri (le plus grand lémurien du monde). 
   Le tout est associé avec les 100 000 palmiers s’étendent 
   et embellissent le réputé hôtel Palmarium dans un écrin naturel 
   et merveilleux dévoile toute la beauté immaculée de l’endroit.`

        }


        else if (index == 4) {
            pclose.innerHTML = ` MANAMBATO
            <br><br>
            
            <span class="letter">m</span>anambato: offers many activities:hiking, 
            mountain biking to discover the three small lakes
            for sports and nature enthusiasts, or even rock climbing
             on the Lovers' Mountain or going to the lake's highest point, the "Marotanana Plateau," 
             and   its <strong>panoramic view</strong> stretching with such immensity.
       Why not visit essential oil plantations? Or a boat ride
       allows you to reach Vavony and Antandrokomby with their grandiose and breathtaking landscapes.
        <br><br>
        Manambato: Ein tropischer Garten am See 
        Manambato liegt idyllisch am Ufer des Rasoabe-Sees. Die Stille der aufeinanderfolgenden Seen 
        (Ampitabe, Rasoamasay und Rasoabe) ist Balsam für die Seele.
        <br><br> 
        Aktivitäten: Wandern, Mountainbiken oder das Erklimmen des „Berges der Liebenden“. Vom „Plateau 
        de Marotanana“ aus genießen Sie einen <strong>atemberaubenden Panoramablick.</strong> 
        Kultur & Natur: Besuchen Sie Plantagen für ätherische Öle oder unternehmen Sie eine Bootsfahrt 
        nach Vavony und Antandrokomby. 
        <br><br>
        Terminiamo ora la nostra avventura a Manambato: che non è altro che un giardino tropicale 
        e lussureggiante sulle rive del lago Rasoabe, 
        il terzo lago molto calmo e in totale quiete dopo il passaggio sul lago Ampitabe e Rasoamasay, 
        circondato dalla sua ricca storia e cultura di questa regione.
        <br><br>
        Manambato offre numerose attività:escursioni a piedi, mountain bike
        alla scoperta dei tre piccoli laghi per gli amanti dello sport e della natura,
         o arrampicata sulla Montagna degli Amanti o fino al punto culminante del lago, 
         il «Plateau de Marotanana», e il suo  <strong>punto panoramico che</strong>  si estende in una tale immensità.
        Perché non una visita alle piantagioni di oli essenziali.
        <br><br>
         Oppure una gita in barca che permette di raggiungere Vavony e Antandrokomby 
         con i loro paesaggi grandiosi e mozzafiato.
        <br><br>
        Terminons maintenant notre aventure à Manambato: qui n’est autre qu’un Jardin tropical et luxuriante 
        au bord du lac Rasoabe 
        le troisième lac très calme et en toute quiétude après le passage sur le lac Ampitabe et Rasoamasay 
        rimé par ses riches histoire et culture de cet région.  Manambato offre des nombreuses activités : 
        randonnées, VTT à la découvertedes trois petits lacs pour les amateurs de sport et le nature, 
        ou encore faire une varappe sur la Montagnedes Amoureux ou encore en allant point culminant du lac 
        le« Plateau de Marotanana », et son point de <strong>vue panoramique</strong> s'étirant avec une telle immensité.
         Pourquoi pas une visite de plantations d’huiles essentielles. Ou encore 
        une balade en bateau permet de rejoindre Vavony et Antandrokomby avec leurs 
        paysages grandioses et époustouflants.
    `

        }
        else if (index == 5) {
            pclose.innerHTML = ` An UNFORGETABLE STAY:
            <br><br>
            <span class="letter">f</span>rom exploring traditional villages to meeting warm and hospitable villagers, 
             <strong>as well as unique fauna and flora in the world,</strong>
  without forgetting basketry products or <strong>various Malagasy crafts,</strong> 
  fresh fruits and fish to feast on for a great festive meal, and the Betsabetsa to prepare.
   Each moment promises memorable and unprecedented discoveries. Only your arrival and availability limit the program.
Moments of Conviviality
To enrich the experience, savor a pantagruelian meal based on fresh products: 
at a banquet or picnic on the canal's edge, or a convivial evening around a campfire after 
contemplating the magical sunset.
<br><br>
Momente der Geselligkeit 
Um Ihr Erlebnis abzurunden, verwöhnen wir Sie mit fangfrischen Produkten der Region. Ob bei einem 
opulenten Bankett, einem Picknick am Kanalufer oder einem geselligen Abend am Lagerfeuer nach 
einem zauberhaften Sonnenuntergang – die <STRong>madagassische Gastfreundschaft</STRong> wird Sie verzaubern.
<br><br> 
Ein unvergesslicher Aufenthalt 
Von traditionellen Dörfern bis hin zu Begegnungen mit herzlichen Menschen und einer weltweit 
einzigartigen Natur – jeder Moment verspricht eine Neuentdeckung. Wir richten uns ganz nach Ihrer 
Verfügbarkeit.
<br><br>
Un soggiorno indimenticabile:
Dall'esplorazione dei villaggi tradizionali agli incontri con i villaggi calorosi 
e ospitali così come la fauna e flora uniche al mondo, senza dimenticare i prodotti di intreccio o 
 <strong>vari artigianati malgasci,</strong> la frutta fresca e la pesca per un grande pasto festivo 
 e il Betsabetsa da preparare. Ogni istante promette scoperte memorabili e inedite. 
 Resta solo il vostro arrivo e la vostra disponibilità a limitare il programma.
<br><br>
Moments de convivialité:
 Pour enrichir l’expérience, savourez un repas pantagruélique à base de produits frais : 
 à la banquet ou pique-nique au bord du canal ou soirée conviviale autour d’un feu de camp après avoir contempler 
 le coucher de soleil féerique.
Un séjour inoubliable Del’exploration des villages traditionnels aux rencontres des villageois chaleureux 
et hospitalier ainsi que la faune et flore uniques au monde, 
sans oublier <strong>les produits de vanneries ou divers artisanat Malagasy,</strong> 
les fruits et pêche frais y régaler pour un grand repas de festivité et les et le Betsabetsa à concocter.
 Chaque instant promet des découvertes mémorables et inédites. 
 Il ne reste que votre arrivé et votre disponibilité qui limite le programme.
`
        }



        //   ----------------master guide------------------

        else if (index == 6) {
            pclose.innerHTML = ` IVOLOINA PARK
            <br><br>
            
            <span class="letter">i</span> voloina Park 12 km north of the city recommended to all people
          who would like to see <strong>the native or endemic fauna and
          flora of Madagascar,</strong> for example: different kinds of lemurs,
          turtles, frogs, Boa, chameleons ....
          <br><br>

          Ivoloina-Park 
          Nur 12 km nördlich der Stadt gelegen. Ideal für Naturliebhaber, die Madagaskars endemische Flora 
          und Fauna hautnah erleben wollen: Lemuren, Schildkröten, Frösche, Boas, Chamäleons und vieles 
          mehr. 
          <br><br>
          Parco Ivoloina:
          A 12 km a nord della città consigliato a tutte le persone
          che vorrebbero vedere <strong>la fauna e flora autoctona o endemica
          del Madagascar,</strong> ad esempio: diversi tipi di lemuri,
          tartarughe, rane, Boa, camaleonti ....`
        }

        else if (index == 7) {

            pclose.innerHTML = ` FOUL POINTE
            <br><br>
            
            <span class="letter">c</span>ontinuing our journey north about 60 km from Toamasina, 
            a magnificent place Mahavelona or Foulpointe is
          bordered by a fine sandy beach protected by a <strong>coral barrier</strong> 
          to frolic without fear in the sea with a beautiful
          view that illuminates the city for your vacation.
          Take advantage of going to the lagoon via a pirogue to see starfish and sea urchins.
          And just 1km from Foulpointe stand the ruins of the <strong>Hova Fort dated 1820.</strong>
           The walls of this fort "Manda" are
          made of an ingenious  <strong>mixture of sand, shells and coral, limestone and eggs with stone</strong>
           that acted as cement and
          to relive the nostalgic history of the <strong>Betsimisaraka kingdom and its culture.</strong> 
          <br><br>
          Foulpointe (Mahavelona) 
          Etwa 60 km nördlich von Toamasina erwartet Sie ein herrlicher Sandstrand, geschützt durch ein 
          Korallenriff – <STRong>perfekt zum sicheren Schwimmen.</STRong> 
          <br><br>
          Highlight: Eine Pirogenfahrt in der Lagune zu Seesternen und Seeigeln. 
          <br><br>
          Kultur: Besuchen Sie die historische Hova-Festung „Manda“ (1820), erbaut aus einer einzigartigen 
          Mischung aus Sand, Korallen und Kalkstein. 
         
        
          
          <br><br>
          Continuando il nostro viaggio verso nord circa 60 km da Toamasina, 
          un posto magnifico Mahavelona o Foulpointe
          è bordato da una spiaggia di sabbia fine protetta da<strong>una barriera corallina</strong>
            per sguazzare senza paura nel mare
          con una bella vista che illumina la città per la vostra villeggiatura.
          Approfittate di andare alla laguna via piroga per vedere stelle marine e ricci di mare.
          E proprio a 1 km da Foulpointe si ergono le rovine <strong>del Forte Hova datato 1820.</strong>
           Le mura di questo forte „Manda“
          sono fatte di una miscela ingegnosa di sabbia, conchiglie e corallo, calcare e uova con pietra che fungeva da
     cemento e per rivivere la storia nostalgica del  <strong>regno Betsimisaraka e la sua cultura.</strong>
    
     `
        }
        else if (index == 8) {
            pclose.innerHTML = ` BORAHA ISLAND
            <br><br>
            
            <span class="letter">s</span>ainte Marie, the  island paradisiac with its unique splendid beaches,
            <strong>the natural pool,</strong> islets natte or islets madame without forgetting 
            <i>île au Fourbons</i> 
          and its natures with luxuriant and verdant vegetation. Especially during the good season
          (in July and August), a boat trip to see the humpback whales or Zagnaharibe.
          <br><br>
          Nosy Boraha oder Sainte Marie
          <br><br>
          Nosy Boraha (Sainte Marie) 
          Ein tropisches Paradies mit prächtigen Stränden und den Nachbarinseln Île aux Nattes und Île 
          Madame. 
          Walbeobachtung: Im Juli und August können Sie hier die<STRong>majestätischen Buckelwale</STRong>  (Zagnaharibe) 
          hautnah erleben.
          <br><br>
          Nosy Boraha o Sainte Marie
          <br><br>
          Sainte Marie, l'isola paradisiaca con le sue spiagge uniche splendide,
          <strong>la piscina naturale,</strong>isolotti natte o isolotti madame senza dimenticare
          l'<i>île au Fourbons</i> e le sue nature con vegetazioni lussureggianti e verdeggianti.
          Soprattutto durante la buona stagione
          (in luglio e agosto), un'uscita in barca per avvistare le balene a gobba o Zagnaharibe.
          `
        }

        else if (index == 9) {
            pclose.innerHTML = `Farafaty 
            <br><br>
            
            <span class="letter">f</span>arafaty where the remains of the Hovas fort at the
          time are located. <strong>A whole history before, during and after
          colonization on the East coast of Madagascar,</strong> passing through
          Mangalimaso to Ivoloina the village full of bamboo, sand
          trafficking behind and stone trafficking.
          <br><br>
          Farafaty-Wanderung
          <br><br>
          Eine geschichtsträchtige Route zu den Überresten der Hova-Festung. Erfahren Sie alles über die Zeit 
          vor, während und nach der Kolonisation, während wir durch Bambuswälder und traditionelle Dörfer 
          wandern. 
          <br><br>
          Escursione di Farafaty
          <br><br>
          Farafaty dove si trovano i resti del forte degli Hovas all'epoca.
          Tutta una storia prima,
          durante e dopo <strong>la colonizzazione sulla costa orientale del Madagascar,</strong>
          passando per Mangalimaso fino a Ivoloina il villaggio pieno di bambù,
          traffici di sabbia dietro e traffici di pietra.
        `
        }

        else if (index == 10) {
            pclose.innerHTML = ` THE PALM FOREST 
            <br><br>
            
            <span class="letter">d</span>estination south of Toamasina, about 20km is the agro-touristic site.
          <br><br>
          The cradle of industry in Madagascar. The palm forest and various trial crops:
        <strong>  Vanilla, Pepper, pink berry, Macadamia, Jatrofa, Ylang Ylang...</strong>
          with an area of 3000 ha, the visit of the certified bio factory for sustainable development and
          the panoramic view from a belvedere followed by <strong> a cocktail of exotic fruits makes
          the unprecedented excursion</strong>
         
          of the natural stone in the form of male sex, swimming with a waterfall sample of the Fetraomby circuit,
          there is also the Marovato cave circuit, the Andriantantely or wild circuit,
          <br><br>
           <strong>Sahamamy circuit the graphite site.</strong>  You have the choice for a circuit lasting 3 to 9 days.
          At the same time, You will be the guests of the local population who are already experienced
          in welcoming tourists with the village association "RIANALA".
          Come discover the authentic Malagasy way of life.
          Incredible panoramas, varied landscapes and the magnificent tropical forest.
          <br><br>
          Palmeraie de l'Ivondro & Ökotourismus
          <br><br>
           
          Südlich von Toamasina (20 km) liegt dieses agro-touristische Zentrum (3000 ha). 
          Besichtigung: Bio-Zertifizierte Fabrik für Vanille, Pfeffer, Macadamia und Ylang-Ylang. 
          <br><br>
          Abenteuer: Wir bieten auch Mehrtagestouren (3 bis 9 Tage) an, wie die Fetraomby- oder Sahamamy
          Route. Erleben Sie den authentischen madagassischen Lebensstil bei der lokalen Bevölkerung (Verein 
          „RIANALA“). 
          <br><br>
          
          Palmerais de l'Ivondro:
          Destinazione a sud di Toamasina, circa 20 km si trova il sito agro-turistico.
          La culla dell'industria in Madagascar. La foresta di palme e varie colture di prova:
           <strong>Vaniglia, Pepe, bacca rosa, Macadamia, Jatrofa, Ylang Ylang...</strong>con una superficie di 3000 ha,
          la visita della fabbrica certificata bio per uno sviluppo sostenibile e la vista panoramica
          da un belvedere <strong>seguita da un cocktail di frutti esotici</strong>rende l'escursione inedita.
          <br><br>
          della pietra naturale a forma di sesso maschile, bagno con una cascata campione del circuito Fetraomby,
          c'è anche il circuito grotta di Marovato, il circuito Andriantantely o selvaggio,
          Circuito Sahamamy il cantiere di grafite. Avete la scelta per un circuito della durata da 3 a 9 giorni.
          Allo stesso tempo, Sarete gli ospiti della popolazione locale che sono già esperti nell'accoglienza dei
          turisti
          con l'associazione villageoise „RIANALA“. Venite a scoprire il modo di vita malgascio autentico.
          I panorami incredibili, i paesaggi variati e la magnifica foresta tropicale.     `
        }

        else if (index == 11) {
            pclose.innerHTML = ` AMPASIGNAMBO
            <br><br>
            <span class="letter">a</span> pproximately 20km from the city by boat or by hiking is  <strong>the capital of exotic fruits:</strong> 
            
          tasting of mangosteen, lychees, oranges, mandarins, kumquats, rambutans, cinnamon apples,
          starfruits galore, with reforestation for sustainable tourism.
          <br><br>
          Ampasignambo Agro-Camping 
          <br><br>
          Die „Hauptstadt der exotischen Früchte“. Erreichbar per Boot oder Wanderung. Genießen Sie 
          Mangostanen, Litschis, Zimtäpfel und Sternfrüchte direkt vom Baum – ein Projekt für nachhaltigen 
          Tourismus. 
          <br><br>
          Ampasignambo agro-camping: Approssimativamente a 20 km dalla città in barca o in
          escursione si distingue <strong>la capitale dei frutti esotici: </strong>degustazione di mangostano,
          litchi, arance, mandarini, kumquat, rambutan, mele cannella, carambole a gogo, con un
          rimboschimento per un turismo sostenibile.`
        }


        else if (index == 12) {
            pclose.innerHTML = ` RIAGNA PARC 
            <br><br>
            
            <span class="letter">a</span>  little further south, 20 km from Toamasina a haven of <strong> enchantment
            and relaxation: </strong>
           swimming in the waterfall, the different luxuriant Flores,
          Visit of sacred site,...
          Among the activities not to be missed in this must-see site.
          <br><br>
          Riagna Parc
          <br><br>
        
Ein Ort der Ruhe und Verzauberung: Schwimmen Sie unter Wasserfällen und entdecken Sie die 
üppige Flora und heilige Stätten der Region. 
          <br><br>
          Riagna Parc
          <br><br>
          Un po' più a sud, a 20 km da Toamasina <strong>un paradiso di incanto e relax:</strong>
          bagno nella cascata, i diversi Flores lussureggianti, Visita del sito sacro,...
          Tra le attività da non perdere in questo sito imperdibile.`
        }
        else if (index == 13) {
            pclose.innerHTML = ` FETRAOMBY
            <br><br>
            
            <span class="letter">i</span>t is a circuit <strong>full of adventure rich in discovery
            in the virgin forest</strong> if you are looking for a rather
          original circuit of the Ecotourism kind. Babakoto or
          Indri Indri, <strong>the largest Lemur of Madagascar with its very
          different songs from all lemurs,</strong> hiking on foot and on a raft,
          picnic meal in the heart of the forest. Discovery.
          <br><br>
          Fetraomby-Abenteuer 
          <br><br>
          
          Für echte Entdecker! Eine ökotouristische Route tief in den Urwald. Hören Sie den Gesang des Indri
          Indri (Babakoto), wandern Sie zu Fuß oder auf Flößen und genießen Sie ein Picknick im Herzen der 
          Wildnis.
          <br><br>
          Fetraomby
          <br><br>
          È un circuito  <strong>pieno di avventura ricco </strong>di scoperte
          nella foresta vergine se state cercando un circuito piuttosto originale del genere Ecoturismo.
          Babakoto o Indri Indri,  <strong> il più grande Lemure del Madagascar con i suoi canti molto diversi da tutti i
          lemuri,</strong>
         
          escursione a piedi e su una zattera, pasto picnic nel cuore della foresta. Scoperta
          <br><br>`
        }


        else if (index == 14) {
            pclose.innerHTML =
                `ANDASIBE
                <br><br>
                
                <span class="letter">m</span>antadia Park, Mitsinjo, VAKOANA and V.O.I.M.M.A about 200 km from the city of Toamasina.
        According to your choice between these Parks.
        Mitsinjo and V.O.I.M.M.A, it is easy to spot <strong>the Indri-indri or Babakoto,
        black and white lemur, known for its striking melodious voice,</strong>  
        its face like a teddy bear.
        Many local stories with the Babakoto before they became sacred animals for the local population.
        There are also different types of frogs, birds as well as other Lemur species.
        <br><br>
        Andasibe-Mantadia Nationalpark 
        <br><br>
       
        Etwa 200 km von Toamasina entfernt. Besuchen Sie Mitsinjo oder V.O.I.M.M.A., 
        um den berühmten 
        Indri-Indri mit seinem Teddybär-Gesicht und seiner melodischen Stimme zu sehen.
         Ein Paradies für 
        Vogelbeobachter und Orchideenliebhaber. 
        <br><br>
        Andasibe
        <br><br>
        Parco Mantadia, Mitsinjo, VAKOANA e V.O.I.M.M.A circa 200 km dalla città di Toamasina.
        Secondo la vostra scelta tra questi Parchi.
        Mitsinjo e V.O.I.M.M.A, è facile avvistare ,<strong>l'Indri-indri o Babakoto,
        lemure bianco e nero, noto per la sua voce melodiosa impressionante</strong>
        il suo viso come un orsacchiotto. Molte storie locali con i Babakoto prima
        che diventassero animali sacri per la popolazione locale.
        Ci sono anche diversi tipi di rane, uccelli nonché altre specie di Lemuri.
`
        }

        else if (index == 15) {
            pclose.innerHTML =
                `TAMATAVY
                <br><br>
                
                <span class="letter">t</span>amatavy, 
          walk along the commerce street where you can find <strong>the administrative buildings during the colonial era.</strong>
           The Bien Aimé square or banians square which is  <strong>the heart of the history of the city of Tamatave.</strong>
           As well as the column square, let's visit the different Creole houses. 
           The administrative buildings on Independence Avenue. 
           And Terminus on BD Ratsimilaho by the sea.
            By cyclo-pousse or on foot, you will relive the interesting history, 
            so let yourself be impressed by these infrastructures before, during and after colonization.
            <br><br>
            Stadtrundfahrt:  « Das alte Tamatave » 
            <br><br>
            Erleben Sie die Geschichte Toamasinas zu Fuß oder per Cyclo-Pousse. Wir besuchen die 
            Kolonialbauten in der Rue du Commerce, den Place Bien-Aimé (Banyan-Platz), den Säulenplatz sowie 
            die kreolischen Häuser und die Avenue de l'Indépendance. 
               <br><br>
               Tour della città „Il vecchio TAMATAVE“
               <br><br>
               Torniamo a Toamasina, percorrere la via del commercio dove si possono trovare 
               gli edifici  <strong>amministrativi durante l'epoca coloniale.</strong>
               La piazza Bien Aimé o piazza dei baniani che è il cuore della  <strong>storia della città di Tamatave.</strong>
               Così come la piazza della colonna, visitiamo le diverse case creole. 
               Gli edifici amministrativi sull'avenue dell'indipendenza.
                E Terminus sul BD Ratsimilaho in riva al mare. In cyclo-pousse o a piedi,
                 rivivrete la storia interessante, quindi lasciatevi impressionare da queste infrastrutture prima, 
                 durante e dopo la colonizzazione.`

        }





        else if (index == 16) {
            pclose.innerHTML = `Îlot Prunes
            <br><br>
            
            <span class="letter">t</span>he superb "historical monument" 
       in reinforced concrete stands at Nosy Alagnana, 
       Ilaintsambo or Ilot Prunes which is 17km from the city. 
       In addition to this  <strong>60m high lighthouse,</strong>the flying fox as well as
       its biodiversity,  <strong>the giant underwater aquarium,</strong>  the beautiful beach,
       the lagoon protected by a coral reef will embellish your day away from daily stresses.
       <br><br> 

       Îlot Prunes (Nosy Alagnana) 
       <br><br> 
  
Etwa 17 km vor der Küste liegt diese Insel mit ihrem beeindruckenden 60 m hohen Leuchtturm aus 
Stahlbeton. Entspannen Sie am Strand, schnorcheln Sie im „Unterwasser-Aquarium“ des Korallenriffs 
oder beobachten Sie die dort lebenden Flughunde. 
         <br><br> 
         Îlot Prunes:
         <br><br> 
      Il superbo „monumento storico“ in cemento armato si erge a Nosy Alagnana, 
      Ilaintsambo o Îlot Prunes che è a 17 km dalla città. 
     Oltre  <strong>a questo faro alto 60 m,</strong>il pipistrello volante nonché la sua biodiversità,
     <strong> l'acquario sottomarino gigante,</strong> la bella spiaggia,
      la laguna protetta da una barriera corallina abbelliranno la vostra giornata lontana dallo stress quotidiano.
      <br><br> 
`
        }

        else if (index == 17) {
            pclose.innerHTML = `"Well done work, shared satisfaction"
„Gut gemachte Arbeit, geteilte Zufriedenheit“
«Lavoro ben fatto, soddisfazione condivi`




        }

    })
    const header = document.querySelector("header")
document.addEventListener("scroll",()=>{
// console.log(window.scrollY)

// if (window.scrollY > 1812){
//     head.classList.add("header-css")
// }else{
//     head.classList.remove("header-css")

// }

})
})


btnClose.addEventListener("click", () => {
    modal.classList.remove("modalShow")
        document.body.style.overflowY = "scroll"

})


// -----------------------------------

document.addEventListener("scroll",()=>{
    let scrollY =  window.scrollY
    console.log(scrollY);
    
})

