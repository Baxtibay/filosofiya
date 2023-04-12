const form = document.querySelector('.form');


const answersDB = () => [
  {
    quostion: "Filosofiya sóziniń kelip shıġıwı (etimologiyası) qaysı juwapta durıs kórsetilgen",
    a: "Grek tilinen alınġan, «danalıqtı súyemen» mánisin bildiredi",
    b: "Latın tilinen alınġan, «danalıqtı súyemen» mánisin bildiredi",
    c: "Inglis tilinen alınġan, «danalıqtı súyemen» mánisin bildiredi",
    d: "Grek tilinen alınġan, «danalıqtı tán alaman» mánisin bildiredi"
  },
  {
    quostion: "Dún`yaġa kóz-qaras  -  bul?",
    a: "Insanndı qorshap turġan dún`ya hám onıń onda tutqan ornına bolġan kóz-qaraslar jıyıntıġı",
    b: "Insannıń jámiyet turmısına hám onıń onda tutqan ornına bolġan kóz-qaraslar jıyıntıġı",
    c: "Insannıń tábiyatqa hám onıń onda tutqan ornına bolġan kóz-qaraslar jıyıntıġı",
    d: "Insannıń óz ómirine bolġan kóz-qarasları jıyıntıġı"
  },
  {
    quostion: "Filosofiya funkciyaların kórsetiń:",
    a: "yaqaraslıq, kritikalıq, metodologiyalıq, aksiologiyalıq, boljaw, biliw, tárpbiyalaw",
    b: "metodologiyalıq, aksiologiyalıq, boljaw, prakseologiyalıq",
    c: "Dún`yaqaraslıq, metodologiyalıq, aksiologiyalıq, prakseologiyalıq",
    d: "Dún`yaqaraslıq, kritikalıq, metodologiyalıq, aksiologiyalıq, boljaw, sintetikalıq"
  },
  {
    quostion: "Insanda biliwge qızıġıwshılıqtı oyatatuġın,  mifologiya,  din yaki ilim juwaplarınan qanaatlanbaġan insannıń ózine málim bilimler hám tájiriybege, belgili bir isenimge hám intuiciyaġa tayanġan halda racional tiykarlanġan juwaplar beriwge háreketet etuġın, sorawlar tuwdıratuġın hár qanday ob’ektiv hám sub’ektiv bolmıs – bul",
    a: "filosofiyanıń predmeti",
    b: "filosofiyanıń maqseti",
    c: "filosofiyanıń funkciyaları",
    d: "filosofiyanıń ob’ekti"
  },
  {
    quostion: "Ózin qorshaġan dún`yanı sezgiler járdeminde sezimlik qabıl etiw – bul",
    a: "Dún`yanı seziw",
    b: "Dún`yanı qabıl etiw",
    c: "Dún`yanı túsiniw",
    d: "Dún`yaġa kóz-qaras"
  },
  {
    quostion: "Qorshaġan bolmıstı ideal obrazlarda kóz-aldına keltiriw – bul",
    a: "Dún`yanı qabıl etiw",
    b: "Dún`yanı seziw",
    c: "Dún`yaġa kóz-qaras",
    d: "Dún`yanı túsiniw"
  },
  {
    quostion: "Insannıń hám onı qorshaġan dún`yanıń mánis-mazmunın anıqlaw, sonday-aq tábiyatta júz beriwshi waqıya hám processlerdiń óz-ara baylanısların túsiniwge qaratılġan aqılıy-biliw iskerligi – bul",
    a: "Dún`yanı túsiniw",
    b: "Dún`yaġa kóz-qaras",
    c: "Dún`yanı seziw",
    d: "Dún`yanı qabıl etiw"
  },
  {
    quostion: "Filosofiya dún`yanı nege tayanġan halda tusindiredi ?",
    a: "aqıl hám bilimge",
    b: "isenim hám itiqatqa",
    c: "ádep-ikramlılıq hám gózzallıqqa",
    d: "itiqat hám tuyġılarġa"
  },
  {
    quostion: "Insannıń ózin qorshaġan bolmısqa hám óz-ózine bolġan múnásibetine jantasıwlar sisteması, sonday-aq adamlardıń usı jantasıwlar menen belgilengen turmıslıq idealları, itiqatları, biliw hám iskerlik principleri, qádiriyatlar hám orientirler – bul ?",
    a: "Dún`yaqaras",
    b: "Filosofiya",
    c: "Qádiriyatlar",
    d: "ádep-ikramlılıq"
  },
  {
    quostion: "Filosofiya teması – bul ?",
    a: "Dúnya hám insan sisteması",
    b: "Insan hám insan sisteması",
    c: "Sana hám bolmıs sisteması",
    d: "Insan - jámiyet sisteması"
  },
  {
    quostion: "Qarama-qarsılıqlar birligi nızamın anıqlań ?",
    a: "Qarama-qarsılıqlar, Qarama-qarsı múnásibetler, Birdeylik hám parıq",
    b: "Sapa, Qásiyet, Muġdar, Sekiriw",
    c: "Biykarlawdı biykarlawda",
    d: "Sana hám bolmıs sisteması"
  },
  {
    quostion: "Muġdar ózgerisleriniń sapa ózgerislerine ótiwi nızamın anıqlań ?",
    a: "Sapa, Qásiyet, Muġdar, Sekiriw",
    b: "Qarama-qarsılıqlar, Qarama-qarsı múnásibetler, Birdeylik hám parıq",
    c: "Biykarlawdı biykarlawda",
    d: "Biykarlawdı biykarlawda"
  },
  {
    quostion: "Qanday nızam oġan muwapıq rawajlanıw procesi jańanıń eskini dialektikalıq biykar etiwleriniń sheksiz shınjırınan ibarat boladı, bunda rawajlanıw dáslepki basqıshlarınıń barlıq áhmiyetli aspektleri jańada saqlanadı hám ulıwma bul process hújimker, joqarılap barıwshı baġdarga iye boladı ?",
    a: "Biykarlawdı biykarlaw nızamı",
    b: "Qarama-qarsılıqlar birligi nızamı",
    c: "Muġdar ózgerisleriniń sapa ózgerislerine ótiwi nızamı",
    d: "Biykarlawdı biykarlawda"
  },
  {
    quostion: "(1) ob`ektiv bolmıstıń ishki, nisbatan jasırın hám turaqlı tárepini ifodalash ushın baġdarlangan bolıp, ol nárseniń, processning tábiyatini hám olarġa tán bolġan nızamlıqlarıni belgileydi.(2) – bul nárseda, processda qarshimizda tikkeley kórinis tabıwshı qásiyetler, táreplar jıyıntıġıni ifodalash ushın baġdarlangan kategoriya ?",
    a: "1) Mánis 2) qubılıs",
    b: "1) Sebep; 2) aqıbet",
    c: "1) Mazmun; 2) forma",
    d: "1) Pútin; 2) bólek"
  },
  {
    quostion: "1) usı nárse, process, qubılıstı belgilewshi elementler, táreplar, qásiyetler, baylanıslar hám tendenciyalarning jıyıntıġı.2) nárseniń dúzilisi, strukturasıni, mazmun elementleriniń uyushish, bir-biri hám sırtqı faktorlar menen óz-ara baylanıs qılıw usulini sıpatlawshı ishki baylanıs. ?",
    a: "1) Mazmun; 2) forma",
    b: "1) Pútin; 2) bólek",
    c: "1) Sebep; 2) aqıbet",
    d: "1) Mánis 2) qubılıs"
  },
  {
    quostion: "1) – nárse, qubılıs hám onı quraġan bóleklerdiń belgili bir tártipte ornalasıwı hám óz-ara baylanısqan birliktiń ańlatpası. 2) – pútin quramına kiretuġın, onıń quramında ġana óz wazıypası (funkciyası)n atqara alatuġın jekelik ?",
    a: "1) Pútin; 2) bólek",
    b: "1) Sebep; 2) aqıbet",
    c: "1) Mánis 2) qubılıs",
    d: "1) Mazmun; 2) forma"
  },
  {
    quostion: "Júz beriwi jańa qubılıstıń júzege keliwine alıp keliwshi qubılıs (a) deb ataladı. Sebep tásirinde júzege keliwshi qubılıs bolsa (b) dep ataladı ?",
    a: "a) Sebep; b) aqıbet",
    b: "a) Mazmun; b) forma",
    c: "a) Mazmun; b) forma",
    d: "a) Pútin; b) bólek"
  },
  {
    quostion: "1) - bul qubılıslar ortasındaġı olardıń nızamlı ózgerisi hám rawajlanıwın belgilewshi turaqlı, áhmiyetli ishki baylanıslar. 2) – ob`ektlerdiń júzege keliwi yaki orın alıwınıń mashqalalılıġın yaki sózsiz emesligini belgilewshi kategoriya ?",
    a: "1) Zárúriyat 2) Tosınlıq",
    b: "1) İmkaniyat 2) reallıq",
    c: "1) Mazmun; 2) forma",
    d: "1) Pútin; 2) bólek"
  },
  {
    quostion: ")- nárseniń onıń tamamlanbaġan, potencial rawajlanıwındaġı ob`ektiv bar bolġan hám ishten belgilengen halatın sáwlelendiriwshi filosofiyalıq túsinik. 2)– ámelge asqan, aktuallasqan bolmıstı sıpatlawshı filosofiyalıq kategoriya: reallıq ámelge asqan imkaniyat esaplanadı ?",
    a: "1) İmkaniyat 2) reallıq",
    b: "1) Zárúriyat 2) Tosınlıq",
    c: "1) Pútin; 2) bólek",
    d: "1) Mazmun; 2) forma"
  },
  {
    quostion: "Dialektika nızamların anıqlań: 1) Qarama-qarsılıqlar birligi nızamı 2) Muġdar ózgerisleriniń sapa ózgerislerine ótiwi nızamı 3) Biykarlawdı biykarlaw nızamı ?",
    a: "1,2,3",
    b: "1,2",
    c: "3",
    d: "1"
  },
  {
    quostion: "Biliw haqqındaǵı táliymat - bul ?",
    a: "Gnoseologiya",
    b: "Antropologiya",
    c: "Ontologiya",
    d: "Aksiologiya"
  },
  {
    quostion: "Ratsionallıq dálillewsiz tikkeley qaraw usılında shınlıqqa erisiw uqıplılıǵın ańlatadı ?",
    a: "Intuiciya",
    b: "Bilim",
    c: "Biliw",
    d: "Haqiyqat"
  },
  {
    quostion: "Bul haqıyqatqa sáykes keletuǵın hám tiykarlanǵan isenim ?",
    a: "Bilim",
    b: "Biliw",
    c: "Haqiyqat",
    d: "Intuiciya"
  },
  {
    quostion: "Predmettiń obrazınıń seziw organına tutas tásir etiwi bul ?",
    a: "Qabıllaw",
    b: "Sezim",
    c: "Elesletiw",
    d: "Abstrakt oylaw"
  },
  {
    quostion: "Seziw hám qabıllawlardıń tiykarında adam miyinde ne payda boladı ?",
    a: "Elesletiwler",
    b: "Sezim",
    c: "Qabillaw",
    d: "Abstrakt oylaw"
  },
  {
    quostion: "Predmetlerdi olardıń ulıwma hám tiykarġı belgilerinde sáwlelendiretuġın oy ?",
    a: "Túsinik",
    b: "Pikir",
    c: "Oy juwmaġı",
    d: "Gipoteza"
  },
  {
    quostion: "Bul oydıń sonday forması, onda túsiniklerdiń baylanısınıń járdeminde birnárse tuwralı oy ya tastıyıqlanadı ya biykarlanadı ?",
    a: "Pikir",
    b: "Gipoteza",
    c: "Oy juwmaġı",
    d: "Túsinik"
  },
  {
    quostion: "Bul oylaw procesi hám onıń nátiyjesinde eki ya birneshe pikirlerden jańa pikir kelip shıġadı ?",
    a: "Oy juwmaġı",
    b: "Túsinik",
    c: "Pikir",
    d: "Gipoteza"
  },
  {
    quostion: "biziń dun`ya tuwralı bilimlerimizdiń hám kóz-qaraslarımızdıń dun`yanıń ózine, ob`ektiv reallıqqa sáykesligi bolıp tabıladı ?",
    a: "Haqiyqat",
    b: "Intuiciya",
    c: "Gipoteza",
    d: "Bilim"
  },
  {
    quostion: "Biliwdiń wazıypası hám maqseti ?",
    a: "Haqıyqatqa jetiw",
    b: "Bilim alıw",
    c: "Intuiciya",
    d: "Tajiriybe arttırıw"
  },
  {
    quostion: "Logika sózi áyyemgi grek tilinen alınıp, «logos» termini qanday manini ańlatadı ?",
    a: "«túsinik» «aqıl» «pikirlew»",
    b: "«bilim» «aqıl» «biliw»",
    c: "«túsinik» «isenim» «isendiriw»",
    d: "«túsinik» «pikir» «juwmaq»"
  },
  {
    quostion: "Oylawdıń tiykarǵı formaların anıqlań ?",
    a: "Túsinik, pikir, oy juwmaǵı",
    b: "Birdeylik, qarsılaspaw, úshinshisin jibermew, jetkilikli tiykar",
    c: "Sezim, qabıl etiw, eleslew",
    d: "Dedukciya, indukciya, analogiya"
  },
  {
    quostion: "Oylawdıń nızamların anıqlań ?",
    a: "Birdeylik, qarsılaspaw, úshinshisin jibermew, jetkilikli tiykar",
    b: "Túsinik, pikir, oy juwmaǵı",
    c: "Dedukciya, indukciya, analogiya",
    d: "Tezis, argument, demonstraciya"
  },
  {
    quostion: "Belgili bir predmetler ushın ulıwma bolġan belgiler sistemasına tiykarlanıp predmetlerdi ulıwmalastıratuġın hám ayırıp kórsetetuġın oydıń forması ?",
    a: "Túsinik",
    b: "Intuiciya",
    c: "Pikir",
    d: "Oy juwmaǵı"
  },
  {
    quostion: "Predmetlerdegi qásiyetlerdiń, olar arasındaġı qatnaslar hám baylanıslardıń biykarlanıw yamasa maqullanıw formasında beriliwin sáwlelendiriwshi oydıń forması ?",
    a: "Pikir",
    b: "Oy juwmaǵı",
    c: "Túsinik",
    d: "Intuiciya"
  },
  {
    quostion: "Pikirlerde sáwlelengen bilimlerden jańa pikirde sáwlelengen bilimdi alıw processin ańlatatuġın oydıń forması ?",
    a: "Oy juwmaǵı",
    b: "Intuiciya",
    c: "Pikir",
    d: "Túsinik"
  },
  {
    quostion: "Ulıwmalıq bilimnen dara bilimge ótiw nátiyjesinde alınġan oy juwmaġı - bul ?",
    a: "deduktivlik oy juwmaġı",
    b: "induktivlik oy juwmaġı",
    c: "analogiyalıq oy juwmaġı",
    d: "deduktivlik oy juwmaġı"
  },
  {
    quostion: "Jekelik bilimnen ulıwmalıq bilimge ótiw nátiyjesinde alınġan oy juwmaġı - bul ?",
    a: "induktivlik oy juwmaġı",
    b: "deduktivlik oy juwmaġı",
    c: "analogiyalıq oy juwmaġı",
    d: "deduktiv oy juwmaġı"
  },
  {
    quostion: "Dara bilimnen dara bilimge ótiw nátiyjesinde alınġan oy juwmaġı - bul ?",
    a: "Analogiyalıq oy juwmaġı",
    b: "Deduktivlik oy juwmaġı",
    c: "Induktivlik oy juwmaġı",
    d: "dara bilim"
  },
  {
    quostion: "Dálil  túsinigi  óz-ara  baylanısqan qanday úsh  elementten  turadı ?",
    a: "Tezis, argument, demonstraciya",
    b: "Dedukciya, indukciya, analogiya",
    c: "Túsinik, pikir, oy juwmaǵı",
    d: "Birdeylik, qarsılaspaw, úshinshisin jibermew, jetkilikli tiykar"
  },
  {
    quostion: "Jámiyet haqqındaǵı táliymat ?",
    a: "Sociallıq filosofiya",
    b: "Gnoseologiya",
    c: "Ontologiya",
    d: "Filosofiyalıq antrpologiya"
  },
  {
    quostion: "Qanday sóz arab tilinde jámáát, jámlengen, birlesken degen mánini bildiredi ?",
    a: "Jámiyet",
    b: "Kollektiv",
    c: "Shembilik",
    d: "Máhálle"
  },
  {
    quostion: "Jámiyette qanday nızamlar ústem boladı ?",
    a: "Sociallıq nızamlar",
    b: "Ekonomikalıq nızamlar",
    c: "Siyasiy nızamlar",
    d: "Biologiyallıq nızamlar "
  },
  {
    quostion: "Insan  haqqındaǵı táliymat ?",
    a: "Filosofiyalıq antrpologiya",
    b: "Gnoseologiya",
    c: "Ontologiya",
    d: "Sociallıq filosofiya"
  },
  {
    quostion: "Belgili aymaqta óz máplerin birgelikte qorǵaw hám talapların birgelikte qanaatlandırıw ushın birlesken adamlardıń jámááti ?",
    a: "Jámiyet",
    b: "Máhálle",
    c: "Mámleket",
    d: "Jámáát"
  },
  {
    quostion: "Bolmıs haqqında táliymat – bul ?",
    a: "Ontologiya",
    b: "Antropologiya",
    c: "Gnoseologiya",
    d: "Filosofiya"
  },
  {
    quostion: "Materiyanıń jasaw usılı – bul ?",
    a: "Háreket",
    b: "Waqıt",
    c: "Keńislik",
    d: "Materiya"
  },
  {
    quostion: "Ulıwma bolatuǵın ózgeris – bul ?",
    a: "Háreket",
    b: "Waqıt",
    c: "Keńislik",
    d: "Materiya"
  },
  {
    quostion: "Bolmısqa qarama-qarsı túsinik ?",
    a: "Bolımsızlıq",
    b: "Waqıt",
    c: "Háreket",
    d: "Keńislik"
  },
  {
    quostion: "Materiyanıń dúzilis tártibi, kólemin, álemdegi nárselerdiń óz-ara jaylasıw jaǵdayın sáwlelendiredi ?",
    a: "Keńislik",
    b: "Materiya",
    c: "Háreket",
    d: "Waqıt"
  },
  {
    quostion: "Processlerdiń dawamlılıǵın, waqıyalardıń izbe-izlik tártibin ańlatadı ?",
    a: "Waqıt",
    b: "Keńislik",
    c: "Materiya",
    d: "Háreket"
  },
  {
    quostion: "Qaysı sóz grek tilinde «haqıyqat, naǵız, bar», «táliymat» degen mánini bildiredi ?",
    a: "Ontologiya",
    b: "Filosofiya",
    c: "Antropologiya",
    d: "Gnoseologiya"
  },
  {
    quostion: "Bul - Sheksiz hám mángi jasaytuǵın barlıq álemdi ańlatadı ?",
    a: "Bolmıs",
    b: "Keńislik",
    c: "Háreket",
    d: "Waqıt"
  },
  {
    quostion: "Adamnan ǵárezsiz jasaytuǵın obektiv reallıqtı ańlatadı ?",
    a: "Materiya",
    b: "Háreket",
    c: "Waqıt",
    d: "Keńislik"
  },
  {
    quostion: "Qaysı sóz latın tilinde «múmkin bolǵan» dep ataladı ?",
    a: "Virtuallıq",
    b: "Waqıt",
    c: "Háreket",
    d: "Keńislik"
  },
  {
    quostion: "QUESTION ?",
    a: "CORRECT",
    b: "ANSWER",
    c: "ANSWER",
    d: "ANSWER"
  },
  {
    quostion: "QUESTION ?",
    a: "CORRECT",
    b: "ANSWER",
    c: "ANSWER",
    d: "ANSWER"
  },

];

answersDB().forEach((item, index) => {
  console.log(item.a)


  const container = document.createElement('div')
  container.innerHTML = `

      <ul class="test-list">
      <span class="quostion-text">${index + 1}. ${item.quostion}</span>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.a}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.b}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.c}
              </label>
            </li>
            <li class="test-item">
              <label>
                <input type="radio" name="${index}"> ${item.d}
              </label>
            </li>
        </ul>
  `
  form.append(container)
})