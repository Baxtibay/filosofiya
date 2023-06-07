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
    quostion: "«Estetika» atamasın birinshi bolıp kim ilimiy aylanısqa kirgizgen ?",
    a: "Aleksandr Gotlib Baumgarten",
    b: "Vilgelm  Fridrix  Gegel",
    c: "Gotfrid  Vilgelm  Leybnic",
    d: "Gotfrid  Vilgelm  Leybnic"
  },
  {
    quostion: "Estetikanıń  predmetin anıqlań: 1. Tábiyatta, jámiyette, iskusstvoda gózzallıqtıń orın alıwınıń barlıq formaları; 2.Insan tárepinen gózzallıqtı sezimlik ańlaw hám baqlawdıń barlıq formaları; 3. Gózzallıq nızamlarına sáykes dóretiwshiliktiń barlıq formaları.",
    a: "1,2,3 ",
    b: "1,2",
    c: "1,3",
    d: "1"
  },
  {
    quostion: "Estetikanıń tómendegi tiykarġı wazıypaların anıqlań 1) insan tárepinen reallıqtı estetikalıq biliw procesin úyreniw;2) sociallıq turmıstıń hám insan minez-qulqınıń hár qıylı qubılısların estetikalıq bahalawdı islep shıġıw;3) insan tárepinen dún`yanıń kórkem ózlestiriliwi nızamların, kórkem dóretiwshilik nızamların biliw; 4) dún`yanı birpútin ózlestiriw, tábiyatta, jámiyette, iskusstvoda gózzallıqtıń orın alıwınıń barlıq formalarıni ózlestiriw;;5) insan hám jámiyettiń estetikalıq sanasın qáliplestiriw.",
    a: "1,2,3,4,5 ",
    b: "4,5",
    c: "1,2,3",
    d: "1,2,4,5"
  },
  {
    quostion: "Estetikanıń strukturası komponentti anıqlań ?",
    a: "Estetikalıq sana, estetikalıq iskerlik, estetikalıq múnásibet",
    b: "Qabıllaw; sezimler; talaplar, talġam; ideallar",
    c: "Gózzallıq hám kelbetsizlik, kóterińkilik hám páskeshlik, tragediyalıq hám kúlkililik",
    d: "Qabıllaw; sezimler; talaplar, talġam; ideallar"
  },
  {
    quostion: "Estetikanıń tiykarġı kategoriyaların aniqlan ?",
    a: "Gózzallıq hám kelbetsizlik, kóterińkilik hám páskeshlik, tragediyalıq hám kúlkililik",
    b: "Estetikalıq sana, estetikalıq iskerlik, estetikalıq múnásibet",
    c: "Qabıllaw; sezimler; talaplar, talġam; ideallar",
    d: "Estetikalıq sana, estetikalıq iskerlik, estetikalıq múnásibet"
  },
  {
    quostion: "Reklama tuwralı ilim – bul ?",
    a: "Advertologiya",
    b: "Applikaciya",
    c: "Skrapbuking",
    d: "Dekorativ-ámeliy iskusstvo"
  },
  {
    quostion: "Anglishan tilinde – joybarlaw, sızıw, oylaw, sonday-aq joybar, joba, súwret degen ?",
    a: "Dizayn",
    b: "Reklama",
    c: "Dekupaj",
    d: "Dekorativ"
  },
  {
    quostion: "Latın tilinde  «bezeymen» degen ?",
    a: "Dekorativ-ámeliy iskusstvo",
    b: "Dizayn",
    c: "Reklama",
    d: "Estetika"
  },
  {
    quostion: "Estetikalıq mádeniyattıń komponentleri ?",
    a: "Qabıllaw; sezimler; talaplar, talġam; ideallar",
    b: "Estetikalıq sana, estetikalıq iskerlik, estetikalıq múnásibet",
    c: "Gózzallıq hám kelbetsizlik, kóterińkilik hám páskeshlik, tragediyalıq hám kúlkililik",
    d: "Estetikalıq sana, estetikalıq iskerlik, estetikalıq múnásibet"
  },
  {
    quostion: "Gózallıq haqqındaǵı táliymat ?",
    a: "Estetika",
    b: "Gnoseologiya",
    c: "Logika",
    d: "Etika"
  }, /*tema 8 sorawlari */
  {
    quostion: "«Kоrrupciyaǵа qаrsı gúrеs hаqqındа»ǵı Ózbеkstаn Rеspublikаsı nızamı nеshе bаp hám statyadаn ibаrаt ?",
    a: "6 bаp, 34 stаtya",
    b: "4 bаp, 36 stаtya",
    c: "5 bаp, 30 stаtya",
    d: "3 bаp, 33 stаtya"
  },
  {
    quostion: "Kоrrupciya bеlgilеrinе iyе bоlǵаn, islengenligi ushın nızаm hújjеtlеrindе juwаpkеrshilik názеrdе tutılǵаn qılmıs bul ?",
    a: "kоrrupciyaǵа tiyisli huqıqbuzаrlıq",
    b: "kоrrupciya",
    c: "máplеr kеsilispesi",
    d: "máplеr kеsilispesi"
  },
  {
    quostion: "Kоrrupciyaǵа qаrsı gúrеs bоyınshа iskеrlikti tikkelley ámеlgе аsırıwshı mámlеkеt оrgаnlаrı qаysı qаtаrdа kórsеtilgеn: 1) Ózbеkstаn Rеspublikаsı Kоrrupciyaǵа qаrsı gúrеsiw agentligi 2) Ózbеkstаn Rеspublikаsı Bаs prоkurаturаsı;  3) Ózbеkstаn Rеspublikаsı Milliy qáwipsizlik хızmеti; 4) Ózbеkstаn Rеspublikаsı Ishki islеr ministrligi;  5) Ózbеkstаn Rеspublikаsı Ádillik minisrligi; 6) Ózbеkstаn Rеspublikаsı Bаs prоkurаturа jаnındаǵı Ekonomikalıq jınayatlarǵa qarsı gúresiw dеpаrtаmеnti; 7) Puqaralar ózin-ózi basqarıw organları 8) Mámleketlik emes shólkemler 9) Ǵalaba xabar quralları",
    a: "1,2,3,4,5,6",
    b: "7,8,9",
    c: "1,3,5,7,9",
    d: "1,2,3,4,5,6,7,8,9"
  },
  {
    quostion: "Mámleketlik organı, mámleket qatnasındaǵı shólkem yaki puqaralardıń ózin-ózi basqarıw organı lawazımlı shaxsına óz lawazımlı shaxstıń óz xızmet dárejesinen paydalanǵan halda islewi lazım yaki múmkin bolǵan belgili háreketti para bergen shaxstıń máplerin gózlep orınlawı yaki orınlamawı esesine nızamǵa qayshı ekenligin bile turıp,  jeke ózi yamasa dáldálshı arqalı  materiallıq baylıqlar beriw yaki onı múlkiy mápdar etiw ?",
    a: "Para beriw",
    b: "Para alıw",
    c: "Para alıs-beriste dáldálshılıq qılıw",
    d: "kоrrupciya"
  },
  {
    quostion: "Jеkе (tikkеlеy yaki wákillikli) mápdаrlıq shахstıń lаwаzım yaki хızmеt májbúriyatlаrın lаzım dárеjеdе оrınlаwǵа tásir kórsеtip аtırǵаn yamаsа tásir kórsеtiwi múmkin bоlǵаn hámdе jеkе mápdаrlıq pеnеn puqаrаlаrdıń, shólkеmlеrdiń, jámiyеttiń yaki mámlеkеttiń huqıqlаrı hám nızаmlı máplеri оrtаsındа qаrаmа-qаrsılıq júzеgе kеliwi múmkin bоlǵаn jаǵdаy ?",
    a: "máplеr kеsilispesi",
    b: "kоrrupciya",
    c: "kоrrupciyaǵа tiyisli huqıqbuzаrlıq",
    d: "kоrrupciyaǵа tiyisli huqıqbuzаrlıq"
  },
  {
    quostion: "Para alıw yamasa beriw jónindegi shártlesiwge erisiwge qaratılǵan iskerlik, sonday-aq, mápdar shaxslardıń tapsırması menen tikkeley beriw ?",
    a: "Para alıs-beriste dáldálshılıq qılıw",
    b: "Para alıw",
    c: "Para beriw",
    d: "kоrrupciya"
  },
  {
    quostion: "Mámleketlik organ, mámleket qatnaslarındaǵı shólkem yaki puqaralardıń ózin-ózi basqarıw organı lawazımlı shaxsınıń óz xızmet dárejesinen paydalanǵan halda islewi tiyis yamasa múmkin bolǵan málim bir háreketti para berip atırǵan shaxstıń máplerin gózlep orınlawı yamasa orınlamawı esesine jeke ózi yamasa dáldálshı arqalı nızamǵa qayshı ekenligin bile turıp, materiallıq baylıqlar alıwı yaki múlkiy mápdar bolıwı ?",
    a: "Para alıw",
    b: "Para beriw",
    c: "Para alıs-beriste dáldálshılıq qılıw",
    d: "kоrrupciya"
  },
  {
    quostion: "Kоrrupciyaǵа qаrsı gúrеsiwdiń tiykаrǵı principlеri qаysı qаtаrdа kórsеtilgеn: 1) nızаmlılıq; 2) puqаrаlаr huqıqlаrı, еrkinliklеri hám nızаmlı máplеriniń ústinligi;  3) аshıqlıq hám tınıqlıq; 4) sistеmаlıq; 5) mámlеkеt hám puqаrаlıq jámiyеttiń shеrikligi;  7) kоrrupciyanıń аldın аlıwǵа tiyisli is-ilajlаr ústinligi;  8) juwapkеrshiliktiń аnıqlıǵı",
    a: "1,2,3,4,5,6,7,8",
    b: "1,2,3,4",
    c: "1,2,3",
    d: "1,2,3,4,5"
  },
  {
    quostion: "Shахstıń óz lаwаzımı yaki хızmеt dárеjеsinеn jеkе máplеrin yamаsа ózgе shахslаrdıń máplеrin gózlеp mаtеriаllıq yaki matеriаllıq еmеs pаydа аlıw mаqsеtindе nızаmǵа qаyshı túrde usınıw ?",
    a: "korrupciya",
    b: "máplеr kеsilispesi",
    c: "kоrrupciyaǵа tiyisli huqıqbuzаrlıq",
    d: "máplеr kеsilispesi"
  },
  {
    quostion: "Xalıq aralıq korrupciya qarsı gures kuni sánesin anıqlań ?",
    a: "9 dekabr",
    b: "2 mart",
    c: "8 dekabr",
    d: "4 yanvar"
  }, /*10 tema*/
  {
    quostion: "Din — arabsha sóz bolıp, qanday mánilerdi ańlatadı. ?",
    a: "barliq juwaplar duris",
    b: "boysınıw",
    c: "isenim",
    d: "boysinbaw"
  },
  {
    quostion: "Insan balası basına qanday da bir músiybet, qıyınshılıq túskende, ózine dinnen shalǵıtıwshı, kewlin jay etiwshi, jubatıwshı kúsh tapqan ?",
    a: "Dinniń táselle beriwshilik wazıypası",
    b: "Dinniń kommunikativlik wazıypası",
    c: "Din birlestiriw wazıypası",
    d: "ruwxıy-mánáwiy tárbiyalaw wazıypası"
  },
  {
    quostion: "Insanlar arasında awızbirshilikti bekkemlewge xızmet etedi. Hárbir din sıyınıwshıların óz qaǵıydalarına ámel etiwge shaqıradı ?",
    a: "Din birlestiriw wazıypası",
    b: "Dinniń táselle beriwshilik wazıypası",
    c: "Dinniń kommunikativlik wazıypası",
    d: "Ruwxıy-mánáwiy tárbiyalaw wazıypası"
  },
  {
    quostion: "Diniy úrp-ádet, máresim hám bayramlardı birgelikte ótkeriwge, aǵayinshilik, tanısshılıq, bir dinlilik qatnasıqların bekkemlewge shaqıradı ?",
    a: "Dinniń kommunikativlik wazıypası",
    b: "Dinniń táselle beriwshilik wazıypası",
    c: "ruwxıy-mánáwiy tárbiyalaw wazıypası",
    d: "Din birlestiriw wazıypası"
  },
  {
    quostion: "Din аdаmzаt tаriyхındа: 1) ulıwmа insаniy ádеp-ikrаmlılıq ólshеmlеrin ózinе sińdirip аlıp, оlаrdı hámmmе ushın májburiy minеz-qulıq qаǵıydаlаrınа аylаntırǵаn. 2) аdаmlаrdı birgеliktе tаtıw jаsаwǵа kómеklеskеn; 3)  аdаmlаrdа isеnim sеzimin bеkkеmlеgеn hámdn turmıs sınаwlаrı, mаshqаlа hám qıyınshılıqlаrın jеńip ótiwlеrindе kúsh bаǵıshlаǵаn; 4)  ulıwmа аdаmzаtlıq hám ruwхıy qádiriyatlаrdı sаqlаp qаlıw hámdе аwlаddаn-аwlаdǵа jеtkiziwgе járdеm bеrgеn hám usı jоl mеnеn mádеniyat rаwаjınа úlkеn tásir kórsеtgеn ?",
    a: "1,2,3,4",
    b: "1,3",
    c: "1,2",
    d: "1"
  },
  {
    quostion: "«Sekulyarizaciya» sózi latınsha  «saeculum»  sózinen  alınǵan bolıp, qanday mánini ańlatadı ?",
    a: "Dúnyalıq",
    b: "diniy",
    c: "ilahiy",
    d: "ilimiy"
  },
  {
    quostion: "Diniy  shólkemler  mámleketten  ajıratılǵan  bolsa da,  din ?",
    a: "jámiyetten  ajıratılmaǵan",
    b: "mámleketten ajıratılmaǵan",
    c: "shaxstan ajıratılǵan",
    d: "jámiyetten  ajıratılǵan"
  },
  {
    quostion: "Din – isenim hám ol …. ?",
    a: "Hár bir adamniń shaxsiy isi esaplanadı",
    b: "Mámleket isi esaplanadı",
    c: "Jámiyet isi esaplanadı",
    d: "Millet isi esaplanadı"
  },
  {
    quostion: "Qanday jámiyetler hám birlespeler dúziw qadaǵan etiledi: 1) Konstituciyalıq dúzimdi kúsh penen ózgertiwdi maqseti etip qoyǵan. 2) Respublikanıń suverenitetine, pútinligine hám qáwipsizligine; 3) puqaralarınıń konstituciyalıq huqıqlarına hám erkinliklerine qarsı háreket etetuǵın;4) urıstı, sociallıq, milliy, rasalıq hám diniy óshpenlilikti násiyatlaytuǵın; 5) xalıqtıń den sawlıǵına hám ádep ikramlılıǵına qol qatatugıń 6) áskeriylestirilgen birlespeler,  7) milliy hám diniy belgileri boyınsha siyasiy partiyalar dúziw ?",
    a: "1,2,3,4,5,6,7",
    b: "5,6,7",
    c: "1,2,3",
    d: "1,2,3,4"
  },
  {
    quostion: "Din qanday sezim ?",
    a: "isenim",
    b: "Gumanlanıw",
    c: "Isendiriw",
    d: "Taǵdirge tán beriw"
  }, /*11- tema joqaridag'i*/
  {
    quostion: "Buddizm dininiń tiykarın salıwshısı ?",
    a: "Siddhartha Gautama",
    b: "Kun TSzi",
    c: "Lао-TSzi",
    d: "Konfuciy"
  },
  {
    quostion: "Buddizm dinniń tiykarǵı ideyası - «Ómir- bul azap, aqiret». Onıń tort haqıqatın izbe-izlikte anıqlań?4) «qiynaqlardan qutılıw jolı bar ekenligi»",
    a: "1,2,3,4",
    b: "2,3,4,1",
    c: "1,3,2,4",
    d: "4,3,2,1"
  },
  {
    quostion: "Buddizm dininiń muqaddes kitabı – bul ?",
    a: "Tripitaka",
    b: "Bibliya",
    c: "Qurani Karim",
    d: "Avesto"
  },
  {
    quostion: "Хristiаnlik dini O`rtа Aziyaǵa, tiykarınan, Ózbekstanǵa eki jol menen kirip kelgen. Ekinshi jol ?",
    a: "Orta Aziyanıń Rossiya tárepinen basıp alınıwı",
    b: "Еvrоpаdа katoliklerge qarsı qaratılǵan reformatsiya háreketi",
    c: "Xristianlıqqa úgitlewshi missionerlerdiń úgit-násiyatlaw iskerligi arqalı",
    d: "Kаtоlik hám Prаvоslаv (оrtоdоks) shirkewlerge ajıralıp ketiwi aqibetinde"
  },
  {
    quostion: "Buddа táliymatınıń tiykarında qanday ideyalar jatadı ?",
    a: "«ómir – bul azap-aqibetler»",
    b: "áep-ikramlılıq normaları",
    c: "Meditatsiya",
    d: "Danishpanliq"
  },
  {
    quostion: "Хristiаnlıq dini tiykarshısı, payǵambarı ?",
    a: "Iisus Хristоs",
    b: "Bibi Mаryam",
    c: "Аwliye Petr",
    d: "Muwsa"
  },
  {
    quostion: "Хristiаnlik dini O`rtа Aziyaǵa, tiykarınan, Ózbekstanǵa eki jol menen kirip kelgen. Birinshi jol ?",
    a: "Xristianlıqqa úgitlewshi missionerlerdiń úgit-násiyatlaw iskerligi arqalı",
    b: "Orta Aziyanıń Rossiya tárepinen basıp alınıwı",
    c: "Еvrоpаdа katoliklerge qarsı qaratılǵan reformatsiya háreketi",
    d: "Kаtоlik hám Prаvоslаv (оrtоdоks) shirkewlerge ajıralıp ketiwi aqibetinde"
  },
  {
    quostion: "Xristian dini baǵdarların anıqlań ?",
    a: "Katolik, provaslov, Protestant",
    b: "Suniylik, shialik, xorijiylik",
    c: "Xinayana, Maxayana, Lamanizm",
    d: "Katolik, provaslov, Protestant"
  },
  {
    quostion: "Xristian dini muqaddes kitabi ?",
    a: "Bibliya",
    b: "Qurani Karim",
    c: "Tripitaka",
    d: "Avesto"
  },
  {
    quostion: "Buddizm dini bolimlerin aniqlan 1) meditatsiya 2) adep-ikramliliq normalari 3) danishpanliq ?",
    a: "1,2,3",
    b: "2,3",
    c: "1,3",
    d: "1"
  }, /*12 - tema testi joqarida*/
  {
    quostion: "arab tilinde sıyınıw, baǵınıw –dúnyada keń tarqalǵan dinlerdiń biri - bul ?",
    a: "Islam dini",
    b: "Buddizm",
    c: "Xristian dini",
    d: "Zardushtiylik dini"
  },
  {
    quostion: "Islam dini dereklerinde jazılıwına qaraǵanda qaysi jıldan baslap Muhammed alayhissalamǵa Alla taaladan ilahiy ayatlar ayan bola baslaydı ?",
    a: "610-jıldan baslap",
    b: "632-jıldan baslap",
    c: "622-jıldan baslap",
    d: "510-jıldan baslap"
  },
  {
    quostion: "Arabsha, qıráát, oqıw —islam dinine sıyınıwshılardıń muqaddes kitabı ?",
    a: "Quran",
    b: "Shariat",
    c: "Hadis",
    d: "Mazhab"
  },
  {
    quostion: "Quran jigirma úsh jıl dawamında bildirilgen bolıp, qansha súreden quralǵan ?",
    a: "114 súre",
    b: "622 súre",
    c: "110 súre",
    d: "610 súre"
  },
  {
    quostion: "Qaysi jili hijrat (kóshiw) atın alıp, musılman jıl esabınıń baslanıw sánesi bolıp esaplanadı ?",
    a: "622-jılı",
    b: "632-jılı",
    c: "610-jılı",
    d: "571-jılı"
  },
  {
    quostion: "Payǵambar Muhammad (s.a.w.)  óliminen  keyin onıń eń jaqın dawamshıları musılmanlar jámáátine basshılıq etti. Oalrdi izbe izlikte aniqlan? 1) Abu Bakir 2) Omar ibn  Xattab  3) Usman  ibn  Affon hám 4) Ali ibn Abu Talib",
    a: "1,2,3,4",
    b: "1,3,2,4",
    c: "2,4,1,3",
    d: "4,3,2,1"
  },
  {
    quostion: "Ábu Hanifa atı menen  belgili  Nuǵman  ibn  Sobit Kufiy atı menen baylanıslı mazhabtı anıqlan ?",
    a: "Hanafiylik",
    b: "Hanbaliylik",
    c: "Malikiylik",
    d: "Hafiylik"
  },
  {
    quostion: "Islam ádep-ikramlılıǵı menen bezeniw ushın kerekli bolǵan ilimlerdi úyretetuǵın taraw ?",
    a: "Sufizm",
    b: "Sunniylik",
    c: "Shiallik",
    d: "Shetelli"
  },
  {
    quostion: "Qaysi táliymatı tiykarında «Qálbiń  Allada bolsın  da,  qolıń  jumıs  penen  bánt  bola  bersin», — degen uran jatadı ?",
    a: "Naqshbandiylik",
    b: "Yassawiya",
    c: "Kubrawiya",
    d: "Kubrawiya"
  },
  {
    quostion: "Islam dininiń tiykarǵı bayramları bul 1) Ramazan hayıtı 2) Qurban hayıtları 3) Sunnet ?",
    a: "1,2",
    b: "1",
    c: "2,3",
    d: "1,3"
  }, /*13 - tema testi joqarida*/
  { /*Qosimsha*/
    quostion: "Globallasıwdıń kóp qırlılıġı jáhán bazarına qanday ózgerisler alıp kirdi ?",
    a: "barlıq juwaplar durıs",
    b: "kórsetilgen tovarlar hám xızmetlerge jáhán narxları qaliplesedi",
    c: "túrli tovarlar hám xızmetler jáhán bazarları jaratıldı",
    d: "«rezonans  effekti» payda boldı"
  },
  {
    quostion: "Latın tilinde qulıq, ádet degen mánini bildiredi ?",
    a: "Moral",
    b: "Utilitarizm",
    c: "Evdemonizm",
    d: "Gedonizm"
  },
  {
    quostion: "Globalistika negizinde  qаndаy prоcessler jаtаdı ?",
    a: "qаrаmа-qаrsı prоcessler hám integraciya",
    b: "túrles pánlerdiń tutаsıwı",
    c: "A hám B",
    d: "Ilmiy biliwdiń qаtlаmlаsıwı"
  },
  {
    quostion: "jámiyet ushın dástúriy bolǵan diniy qádiriyatlar hám aqidalıq tiykarlardı inkar etip, olarǵa qarsı bolǵan «ideyalar» hám ámel lerdi agressiv tárizde tarqatıw ?",
    a: "Diniy ektremizm",
    b: "Dogmatizm",
    c: "Terrorizm",
    d: "Ekstremizm"
  },
  {
    quostion: "Orınlanıwı qatań májbúriy esaplanǵan is-háreketler ?",
    a: "Parız",
    b: "Adep",
    c: "Hadal",
    d: "Sunnet"
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