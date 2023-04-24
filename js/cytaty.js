var cytaty = [
    '"Samotność sprawia, że ludzie stają się silniejsi." - Sasuke Uchiha, Naruto',
    '"I chodź zostaniemy rozdzieleni , nasze dusze zjednoczą się ponownie pod naszym sztandarem." - Hakuouki Hakketsuroku ',
    '"Jeśli nie chcesz utracić kogoś ci ważnego, powinieneś chronić go do samego końca" - No. 6 ',
    '"Czy wiesz, dlaczego śnieg jest biały? Ponieważ zapomniał, jakiego koloru był dawniej." - Code Geass ',
    '"Dla przyjaciół się nie umiera dla nich się żyje" - Fairy Tail ',
    '"Nie płacz za innych. Naucz się płakać i walczyć za siebie" - No.6',
    '"Byłem martwym, dopóki nie spotkałem ciebie. Udającym życie, bezsilnym ciałem. Istnienie bez siły, bez możliwości zmiany swego kursu, było podobne do powolnej śmierci." - Code Geass ',
    '"Jeśli miałabym kogoś zabić, to ciebie. Będziesz moją pierwszą ofiarą. Nie wybiorę nikogo innego, obiecuję. Czy to nie jest miłe? Spróbuj zrozumieć. Jeśli to ja cię zabiję, będę najbliższą ci osobą na łożu śmierci. Czyż to nie romantyczne?" – Bakemonogatari ',
    '"Ludzie nie widzą tego, czego nie chcą widzieć. Nikt nie chce się wyróżniać. Dlatego ludzie nic nie robią, nawet gdy widzą, że coś jest nie tak." - Highschool of the Dead Apokalipsa Zombie ',
    '„Ludzie, którzy czują strach, stają się silniejsi.” – Soul Eater ',
    '„Nie płacz. Jeśli przedrzesz się przez las cierpień, ujrzysz przed sobą jezioro szczęścia. Nieważne, jak bardzo zabłądziłeś, zawsze jest jakieś wyjście.” – Soul Eater ',
    '„Przegrałeś w momencie, gdy znalazłeś coś wartego chronienia.” – No.6 ',
    '„Nadal nie rozumiem wielu rzeczy, ale jednego jestem pewien. Przeraźliwie boję się ciebie stracić. Wiem to aż do bólu. Nie potrafię znieść myśli, że mogłoby cię nie być.” – No.6 ',
    '„Krzyż nie ratuje ludzi... Ale jest czymś niezbędnym, aby ich uratować.” – D.Gray – Man ',
    '„Nad czarnym jak smoła niebem i morzem istnieją kłamstwa ciemniejsze nawet od czerni.” – D.Gray – Man ',
    '"Fałszywe łzy ranią innych ludzi, fałszywe uśmiechy ranią nas samych..." – Code Geass ',
    '"To chyba nieprzyjemne zostać podeptanym, ale deptać po kimś, to naprawdę miłe uczucie" – Kuroshitsuji ',
    '„Strach nie jest czymś złym. To świadomość swoich słabości. Ludzie, którzy znają swoje słabości, stają się silniejsi.” - Fairy Tail ',
    '„Czasem kiedy masz wszystkiego dość... spoglądasz w gwiazdy... i one zawsze tam są...” - Mushishi ',
    '„Na głupotę nie ma lekarstwa. Nic nie jest wieczne na tym świecie.” - Hellsing ',
    '„Powody są dla tych, którzy nie potrafią bez nich żyć.” - Bleach ',
    '„Coś raz stracone nigdy nie powróci.” - Kuroshitsuji ',
    '„Nigdy nie odwracaj wzroku – czy to od koszmaru, czy od prawdy.” - Bleach',
    '„Zdrada, którą widzisz, nie jest przerażająca. Naprawdę przerażająca jest zdrada, której nie widzisz.” – Bleach',
    '„To przygnębiające. Nieważne, jak ktoś był zły - śmierć z zemsty pozostawia za sobą wyłącznie pustkę. Pustkę, której nic nie wypełni.” – Code: Breaker',
    '„Nie będę brudził sobie rąk krwią słabeuszy.” – Bleach ',
    '„Walka pozbawiona choć cienia moralności niczym nie różni się od bezmyślnej rzezi. Jednak rzeź dokonana w imię moralności zwie się sprawiedliwością.” – Bleach ',
    '„Nie poświęca się czyjegoś życia nawet za cenę własnego.” - Casshern Sins ',
    '„Ludzie, niezależnie od tego, kim są, chcą wierzyć, że można zwyciężyć... Ale porównując "czas" i "przeznaczenie", "wiara" ta jest zbyt krucha i bezcelowa.” – Code Geass ',
    'Świat bezustannie się morduje. Każdy z nas próbuje się usprawiedliwić, mówiąc, że to, co robi, jest właściwe. Lecz nie istnieje powód pozwalający zabić drugą osobę. Sam akt odebrania życia jest... zły. Jeśli istnieje coś pokroju duszy, to wygląda na to, że nie ma w planach pomocy tobie." - Tokyo Ghoul √A'
];

function pokazCytat() {
    var rand = cytaty[Math.floor(Math.random()*cytaty.length)];
    var rand2 = cytaty[Math.floor(Math.random()*cytaty.length)];
    var rand3 = cytaty[Math.floor(Math.random()*cytaty.length)];
    var rand4 = cytaty[Math.floor(Math.random()*cytaty.length)];
    var rand5 = cytaty[Math.floor(Math.random()*cytaty.length)];
    var rand6 = cytaty[Math.floor(Math.random()*cytaty.length)];

    document.getElementById("cytat1").innerHTML = rand;
    document.getElementById("cytat2").innerHTML = rand2;
    document.getElementById("cytat3").innerHTML = rand3;
    document.getElementById("cytat4").innerHTML = rand4;
    document.getElementById("cytat5").innerHTML = rand5;
    document.getElementById("cytat6").innerHTML = rand6;
}
pokazCytat();





