import Styles from "./FloraContent.module.css";

type ArticleProps = {
  title: string;
  children: React.ReactElement<HTMLLIElement> | React.ReactElement<HTMLLIElement>[];
};

const FloraContent = () => {
    const Article = ({ title, children }: ArticleProps) => {
        return (
            <article>
                <h2>{title}</h2>
                <ul>
                    {children}
                </ul>
            </article>
        )
    };

    return (
        <div className={Styles.FloraContentView}>
            <article>
                <h2>{`Aloe Vera`}</h2>
                <ul>
                    <li>Antiinflammatorisk, smärtstillande, cellregenererande, påskyndar läkningen av brännskador, förfrysningssår, sår</li>
                    <li>Tack vare gelens fuktgivande egenskaper främjar den sårläkningsprocessen, regenererar och skyddar huden, är användbar för akne, inflammerad hud, solbränna, främjar syntesen av kollagen som är nödvändig för bildandet av bindvävsfiber och påskyndar sårsammandragning, minskar rynkor</li>
                    <li>Tack vare sin immunsystemstimulerande effect har den en antiviral effect som kan neutralisera herpes och influensavirus</li>
                    <li>Starkt laxermedel, renar och avgiftar tarmkanalen</li>
                    <li>Extremt effektiv mot munhåleproblem och afte</li>
                </ul>
            </article>
            <article>
                <h2>{`Blåbär (Vaccinium myrtillus)`}</h2>
                <ul>
                    <li>Bäst att ätas rå</li>
                    <li>Upprätthåller hälsan hos ben och leder</li>
                    <li>Sänker blodtrycket, säkerställer hälsan hos det kardiovaskulära systemet, förhindrar utvecklingen av cancerceller, minskar försämringen av våra kognitiva förmågor</li>
                    <li>Upprätthåller matsmältningsbalansen: slappnar av eller stramar efter behov, nyttigt för att förbättra synen</li>
                </ul>
            </article>
            <article>
                <h2>{`Blåklint (Centaurea Cyanus)`}</h2>
                <ul>
                    <li>På medeltiden ansågs det vara en universell ört för både yttre och inre sjukdomar</li>
                    <li>Användes för svårläkta sår, febernedsättande, spindel- och skorpionbett</li>
                    <li>Den ovanjordiska delen innehåller tanniner, flavonoider, bitterämnen och slem</li>
                    <li>Blommorna brukar användas, plockas i solen och torkas snabbt</li>
                    <li>Dess te är ett aptitstimulerande, kramplösande, matsmältnings- och urindrivande medel, men dess te konsumeras i blandningar snarare än ensamt</li>
                    <li>Hjärtlugnande, blodtryckssänkande, reumatiska symtom lindrande</li>
                    <li>För feber, hosta, bronkit, hals sköljmedel, för ögonproblem till exempel konjunktivit</li>
                    <li>Har en mild antibiotisk effekt på halsinflammation, förskönar hår och hud</li>
                    <li>Lugnande, sammandragande effekt</li>
                </ul>
            </article>
            <article>
                <h2>{`Brakved (Rhamnus frangula)`}</h2>
                <ul>
                    <li>Den inre gröna barken samlas tidigt på våren innan löven blir gröna, den används efter två års lagring på torr plats, inte färskt, annars orsakar den kräkning</li>
                    <li>Det användes som ett laxermedel mot kronisk förstoppning, dess frukt har en mild laxerande effekt</li>
                    <li>Blandad med andra örter som nässlor, maskros eller enbär som blod renare</li>
                    <li>Vid gall- och leverproblem kombineras med kronärtskocka</li>
                    <li>Även användbart för hemorrojder</li>
                </ul>
            </article>
            <article>
                <h2>{`Brännässla (Urtica dioica)`}</h2>
                <ul>
                    <li>Dess blad och rötter används för läkning</li>
                    <li>Innehåller vitamin A, B, C, K, liksom Fe, Sn, Ca, klorofyll, myrsyra, flavonoider, histamin, fytokemikalier</li>
                    <li>Vätskedrivande, hemostatiskt, desinfektionsmedel, avgiftningsmedel, febernedsättande, immunförstärkare, smörjmedel, blod renare, reumatism- och anemiförbättrande, sårläkande, stimulerar hårväxt, bekämpar njurproblem väl, reglerar blodtryck och blodsockernivån, aptitstimulerande, avkopplande ört</li>
                    <li>Det lindrar smärtan vid gikt och ledvärk, löser upp fettskiktet på blodkärlens väggar, förhindrar bildandet av blodproppar, stärker musklerna i blodkärlsväggarna, applicering av nässeltekompresser på smärtsamma åderbråck i extremiteterna ger lindring, renar urinsystemet, löser upp njursand, stimulerar leverns avgiftningsfunktion och förbättrar livmodermusklernas ämnesomsättning, dess blodcirkulation och till och med löser upp mindre cystor, förbättrar blodtillförseln till corpus cavernosum, ökar befruktningsförmågan, te av dess rot har en god effekt på prostataförstorning</li>
                    <li>Kan användas rå, pressad, kokt, i form av te eller extrakt, även användbar i sittbad</li>
                </ul>
            </article>
            <article>
                <h2>{`Cikoria (Cichorium intybus)`}</h2>
                <ul>
                    <li>För medicinska ändamål används roten, dess tunnare skott och dess blad</li>
                    <li>Innehåller inulin, fruktos, sesquiterpenlaktoner, tanniner, kolin, eterisk olja, dess blad innehåller cikoriasyra, vitaminerna A, C, K, och små mängder B och E, samt Mg, J och mindre halter Fe, P, Ca</li>
                    <li>Studier visar att det är en matsmältningsstimulerande, aptitstimulerande, gallbildningsstimulerande, en utmärkt lever- och njuravgiftningsmedel, vätskedrivande, används som en kompletterande behandling för gikt, har en lugnande effekt, sänker blodsockernivån, vissa tanniner spelar en roll i tarmflorabalansen, dess råa rot används mot inälvsmaskar, goda resultat har uppnåtts vid behandling av furunkulos och akne, vid kronisk förstoppning och gulsot, vid behandling av magsår, den sänker triglycerid- och kolesterolnivåerna i blodet</li>
                    <li>Koka roten i 4-5 minuter, använd 1-3 koppar av dess te, beroende på sjukdomen</li>
                    <li>Dess blad kan ätas råa, till exempel i sallader</li>
                    <li>Kaffeersättning görs av dess rot</li>
                </ul>
            </article>
            <article>
                <h2>{`Citronmeliss (Melissa officinalis)`}</h2>
                <ul>
                    <li>Lugnande medel, används för behandling av sömnstörningar och matsmältningsbesvär, herpes</li>
                    <li>Nervtonic, bra för tidig depression, nervösa hjärtbesvär</li>
                    <li>Stimulerar lever- och gallfunktionen, har anti-flatulens, diaforetisk effekt, sänker blodtrycket, förebygger huvudvärk och är ett allmänt kramplösande medel, reglerar sköldkörtelfunktionen och minskar nervositet till följd av överproduktion, antiviral, även bra mot herpes</li>
                    <li>Drick dess te för depression, 2-3 koppar om dagen mellan måltiderna, för influensa drick 2 koppar åt gången</li>
                    <li>Externt för svullnader, blåmärken och reumatiska smärtor</li>
                    <li>Vi kan göra ett extrakt av löv som plockats före blomningen, och håller effektivitet i två år</li>
                    <li>Håller myggor borta</li>
                </ul>
            </article>
            <article>
                <h2>{`Dansk körvel (Anthriscus cerefolium)`}</h2>
                <ul>
                    <li>Förbättrar matsmältningen, sänker blodtrycket, har till och med använts mot hicka, har en blodförtunnande effekt</li>
                    <li>Används färsk, fryst eller torkad som krydda, ätbar i soppor, såser, sallader, äggröra, en viktig krydda för svamprätter</li>
                    <li>Dess te är bra för njurar, urinblåsa och matsmältningssjukdomar</li>
                    <li>Liknar persilja</li>
                </ul>
            </article>
            <article>
                <h2>{`En (Juniperus communis)`}</h2>
                <ul>
                    <li>Karminativ, aptitstimulerande, matsmältningsstimulerande, njur- och gallstensupplösare</li>
                    <li>Användes av indianer för att påskynda menstruationen och för att underlätta förlossningen</li>
                    <li>Bären används för att göra sylt, som konsumeras 1-2 teskedar om dagen som diuretikum, galla eller njurstimulerande medel</li>
                    <li>Används även som hushållskrydda, speciellt till viltkött</li>
                    <li>Man röker mat och köttprodukter med dess ved</li>
                    <li>Dess te samt olja är också användbara</li>
                    <li>Mot besvär av tuberkulos och bronkit</li>
                    <li>Utmärkt vitaminkälla, färska bär innehåller mycket C-vitamin, som dock bryts ner under torkning</li>
                    <li>Avgiftar kroppen, den kan användas för att behandla reumatism, gikt och andra ledbesvär, är smärtstillande, muskelavslappnande, förbättrar effektivt ödematösa tillstånd, används för att ta hand om åderbråck i benen</li>
                    <li>Reglerar talgkörtlarnas funktion, denn används för inflammerad fet hud, effektiv mot celluliter på grund av dess metaboliska stimulans</li>
                </ul>
            </article>
            <article>
                <h2>{`Fackelblomster (Lythrum salicaria)`}</h2>
                <ul>
                    <li>Vi samlar den övre 20-25 cm delen vid blomning</li>
                    <li>Antidiarré, hämnar utväcklingen av patogen mikrobiell tarmflora, stoppar blödningar, sammandragande, främjar ärrbildning, desinfektionsmedel</li>
                    <li>Används internt för dysenteri, tyfus, mag- och tarmblödningar och basillär diarré</li>
                    <li>Externt, för åderbråck, i form av kompresser eller bad, för flytningar genom vaginal sköljning</li>
                    <li>Har inga kända biverkningar</li>
                </ul>
            </article>
            <article>
                <h2>{`Flockarun (Centaurium erythraea)`}</h2>
                <ul>
                    <li>Vi samlar den ovanjordiska delen under blomningen och torkar den i skuggan</li>
                    <li>Bevisat att den stimulerar gallfunktion, matsmältning, ökar aptiten, renar blod och lindrar tarm-, mag- och leversjukdomar</li>
                    <li>Te: blötlägg 1 tesked ört i 3dl kallt vatten i 8-10 timmar, värm det sedan något innan du dricker det</li>
                    <li>Febernedsättande, har använts sedan urminnes tider mot malaria, gulsot, ormbett; njurproblem, anemi, hudproblem, diabetes, alkohol eller kemisk förgiftning, eksem, hjälper till med sårläkning, bra även mot skabb</li>
                    <li>En ordentligt torkad växt behåller sina medicinska egenskaper under lång tid, bunden i klasar och hängd på en skuggig, luftig plats</li>
                    <li>Vätskedrivande, blodtryckssänkande, immunförsvarsstärkande, därför en mycket använd ört</li>
                    <li>Innehåller vitaminer B, C, K samt mineraler K, Mg, Ca, Fe, har bitter smak</li>
                </ul>
            </article>
            <article>
                <h2>{`Fläcklungört (Pulmonaria officinalis)`}</h2>
                <ul>
                    <li>Örtmedicin för luftvägsjukdomar</li>
                    <li>För medicin använder vi intakta blad, som samlas in mellan juni och augusti</li>
                    <li>Innehåller kiselsyra, flavonoider, tanniner, slem och allantoin</li>
                    <li>Tack vare sitt sleminnehåll har det visat sig hjälpa mot luftvägssjukdomar, men det används även vid inflammation av tarmslemhinnan</li>
                    <li>Det används i form av te och har inga biverkningar</li>
                    <li>Urindrivande och återställande på grund av dess höga Mg och C-vitaminhalt</li>
                    <li>Mjukgörande, antiinflammatorisk, smärtstillande, sammandragnde, mot diarré, bronkospasmlindrande och slemlösande</li>
                    <li>Används för bronkit, laryngit, njurproblem, förkylningar, heshet, hostdämpande, mot mag- och duodenalsår, urinvägsproblem och astma</li>
                </ul>
            </article>
            <Article title="Grodblad (Plantago)">
                <li>Det har använts som mat från forntida tider, bladen råa eller kokta, frön som ris</li>
                <li>Bladen används för medicinska ändamål, när de appliceras färska på sår påskyndar de läkningen, är sammandragande och desinficerande</li>
                <li>Bra bakteriedödande, antiinflammatorisk, sårläkande, bra mot insektsbett, används rå för mindre brännskador, blodkoaguleringsmedel, lindrar tandvärk, bra för konjunktivit, hemorroider</li>
                <li>Dess te är ett slemlösande och hostdämpande medel, som används mot halsbränna och diarré, mot luftvägsinflammation och i form av sköljning och gurgling mot inflammation i mun- och halsslemhinnan</li>
            </Article>
            <Article title="Gråbo (Artemisia vulgaris)">
                <li>För örtte används de övre blommande skotten som har en bitter smak</li>
                <li>Dess te är utmärkt aptitförstärkare, stimulerar gallfunktionen efter feta måltider, kramplösande, anthelmintikum</li>
                <li>Te: lägg 1-2 teskedar gråbosblad i en kopp varmt vatten, låt det stå i 2 minuter och sila sedan</li>
                <li>Används före måltider som ett aptitstimulerande, eller efter måltider för att minska matsmältningsbesvär</li>
                <li>Anticancer, antiinflammatorisk, avgiftande, kramplösande, leverskyddande, antioxidant, bakteriedödande, svampdödande, antihypertensiv, kolesterolsänkande</li>
                <li>Inulin som finns i dess rötter har god effekt mot hjärnhinneinflammation, tuberkulos och epilepsi, samt hysteri, mensvärk, kramper, sömnstörningar, nervositet, amenorré, klimakteriebesvär och uppblåshet</li>
                <li>Användning är kontraindicerad vid mag- och tarmsår</li>
                <li>Ätbar växt</li>
            </Article>
            <Article title="Gullris (Solidago virgaurea)">
                <li>Blomstjälken plockas när den börjar blomma</li>
                <li>Innehåller flavonoider, saponiner, eterisk olja, tanniner, bitterämnen, inulin, kanelsyraderivat, dess innehåll varierar beroende på insamlingsplatsen</li>
                <li>Diuretikum, antiinflammatorisk, kramplösande, antihypertensiv, antiparasitisk, anticancer, antioxidant, antimutagen, lipolytisk, bitter tonic, hjärtskyddande, sammandragande, hemostatisk, lugnande, förbättrar matsmältningen</li>
                <li>Dess te används för reumatism, högt blodtryck, njursten och cystit</li>
                <li>Det användes tidigare för sårläkning och senare för diarré, hosta, kronisk lungiflammation och tandköttssår</li>
                <li>En läkande växt för sjukdomar i de övre luftvägarna, urinvägarna och njurarna</li>
                <li>Klåda, kliande ögon, allergisk bihåleinflammation, gikt</li>
                <li>Har inga kontraindikationer</li>
            </Article>
            <Article title="Gullviva (Primula veris)">
                <li>Blommar tidigt på våren, dess blommor och rötter är användbara för medicinska skäl, alla typer är lika värdefulla örter</li>
                <li>Lugnar ihållande hosta, hjälper till att bryta upp och hosta upp fast slem</li>
                <li>Dess rot är mycket rik på saponin, som är en viktig ingrediens i många hostlindrande teer</li>
                <li>Används vid katarr i övre luftvägarna, astmatiska, giktaktade och neuralgiska besvär, huvudvärk av nervöst ursprung och hjärtsvaghet</li>
            </Article>
            <Article title="Gåsört (Potentilla anserina)">
                <li>Bladen och blommande stjälkar samlas in för medicinska</li>
                <li>Mycket effektiv mot diarré och enterit</li>
                <li>Dess te är ett inre kramplösande medel, förbättrar anemi, lindrar magsmärtor, bra mot tarmparasiter, mot alla typer av blödningar, nefrit, njursten, tjocktarmscancer, livmodercancer, överdriven menstruationsblödning, osteoporos, magsår, tarmsår, artrit -externt i sittbad mot hemorrojder, för gynekologiska problem av alla slag, som en lokal sköljning för leukorré, som förband mot gingivit, hudsår, brännskador; fet hud, eksem, rinnande ögon, frossa, frostskador</li>
                <li>Det har en irrterande effekt på magslemhinnan, så drick dess te efter måltider</li>
                <li>Desinfektionsmedel, sammandragande, lugnande, hemostatiska</li>
                <li>Rekommenderas inte för njur- och leverpatienter</li>
            </Article>
            <Article title="Hagtorn (Crataegus)">
                <li>Sänker blodtrycket ock kolesterolnivåerna, förebygger åderförkalkning</li>
                <li>Det åldrande hjärtats elixir, ett naturligt läkemedel mot hjärtsvikt, arytmier, spasmer i arteriolerna, en utmärkt vasodilator</li>
                <li>Har en lugnande effekt och därför används även för att behandla kronisk sömnlöshet, yrsel och ångerst, lindrar stress</li>
                <li>Ackummuleras inte i kroppen, så överdosering kan inte inträffa, dess blommor, blad och frukter kan användas</li>
                <li>Extremt bra hjärtstärkare och hjärtavslappnande, har god effekt på ett stressat, överbelastat, trött hjärta, håller hjärtmuskelceller och blodkärlsväggar flexibla, stimulerar blodtillförseln till hjärtmuskler</li>
                <li>Vid akuta problem, drick 2-3 koppar te per dag, och i förebyggande syfte, drick 1 kopp te per vecka kontinuerligt och permanent</li>
                <li>Det kan minska dosen av medicin, blomman är mer effektiv än frukten</li>
            </Article>
            <Article title="Havtorn (Hippophae rhamnoides)">
                <li>Dess frukt skördas efter att den mognar, före frost</li>
                <li>Rå innehåller A, B1, B2, C och andra vitaminer samt folsyra</li>
                <li>Lämplig för vitamintillskott, förkylningsförebyggande, leversjukdomar</li>
                <li>Dess bär och blad har medicinska egenskaper</li>
                <li>Ökar effektiviteten av vår kropps eget försvar, dess antiinflammatoriska effekt hjälper till med sårläkning, läkning av hudsjukdomar, skyddar mot UV-strålning, är bra för torr sprucken hud, för allmän svaghet, och speciellt efter infektionssjukdomar och operationer</li>
                <li>Bra vintermedicin, fördröjer åldrandet, ökar ämnesomsättningen, sänker blodsockernivån, förhindrar håravfall</li>
                <li>Används utmärkt för kosmetiska ändamål</li>
            </Article>
            <Article title="Hjorttunga (Asplenium scolopendrium)">
                <li>Dess blad har sammandragande, hemostatiska, koleretiska, vätskedrivande, svettdrivande, sårläkande effekt samt lossar avlagningar i luftvägarna</li>
                <li>Används externt för att behandla brännskador och hemorrojder, som ansiktspackning och som hårbalsam</li>
                <li>Används internt för diarré, lever- och gallbesvär</li>
                <li>Används som en mjälttonic, nyttigt vid trängsel i gallblåsan, gallsten</li>
            </Article>
            <Article title="Hjärtstilla (Leonurus cardiaca)">
                <li>Som ört, samlar vi dess blomskott när de blommar</li>
                <li>Kramplösande, hjärtstärkande, lugnande medel, sömnmedel, antiinflammatoriskt, antibakteriellt, antiviralt, smärtstillande, antioxidant, bra mot depression, cancer, livmoderproblem, hjärnskador, leverproblem, prostatit, magkramper, epilepsi, högt blodtryck, klåda, muskelsvaghet, lungproblem</li>
                <li>Har en mild vasodilaterande och glattmuskelavslappnande effekt</li>
                <li>Stressavlastare, användbar för att behandla ångest, hjärtklappning, nervös irritabilitet och hjärtsvaghet</li>
                <li>Blandat med citrongräs och vänderot, det kan användas för att göra ett effektivt lugnande te, och kan även användas för hypertyreos</li>
                <li>-blandat med hallonblad är det ett rekommenderat te före och efter förlossningen eftersom det minskar blodförlusten</li>
            </Article>
            <Article title="Hästhov (Tussilago farfara)">
                <li>Både dess blad och blommor används för medicin</li>
                <li>Utmärkt ört för luftvägssjukdomar, renar effektivt lugnorna och de övre luftvägarna från sekret, har en hostdämpande och slemhinnelindrande effekt, kan även tas mot astma, bronkit, kikhosta och kronisk hosta</li>
                <li>Antiinflammatorisk, värt att prova vid allergier</li>
                <li>Användes förr för hud, muskeloskeletala systemet, influensa, förkylningar, feber, reumatism, gikt</li>
                <li>Te: 1-2 teskedar torkade hästhovblad, låt stå i 15 minuter i kokt vatten</li>
                <li>Rekommenderas i små mängder, undvik konsumtion under graviditet och amning</li>
            </Article>
            <Article title="Islandslav (Cetraria islandica)">
                <li>Det var en del av islänningarnas dagliga kost, som sallad neutraliseras dess bittra smak i alkaliskt vatten innan tillagning, så de gjorde grönsakssoppa av den</li>
                <li>Antioxidant, antimikrobiell, antiinflammatorisk, immunförsvarsstärkande, hjälper till att bekämpa förkylningar, kan lindra halsont, torrhosta och slemproduktion</li>
                <li>Mycket rik på K, Ca, P, J och vitaminer, lugnande för irritterad luftvägs- och magslemhinna</li>
                <li>Stimulerar funktionen av bukspottkörteln och det vegetativa nervsystemet samt produktionen av galla</li>
            </Article>
            <Article title="Isop (Hyssopus officinalis)">
                <li>Hela växten används för medicinska ändamål</li>
                <li>Dess te används för kroniska andningsproblem som heshet, hosta, astma, det främjar svettning och löser avlagringar, det är urindrivande</li>
                <li>Desinfektionsmedel, hjälper ärrbildning för sår genom omslag eller bad</li>
                <li>Det stimulerar aptiten och reglerar matsmältningen tack vare sina bittra ämnen</li>
                <li>Används som en sköljmedel för att behandla tandkötts- och halsinflammation</li>
                <li>Verkar blodtryckssänkande</li>
                <li>Gurgla med teet om du har torrhosta</li>
                <li>Som krydda till kakor, sallader och som smaksättning till keso</li>
                <li>Vi dricker dess te mot mag- och tarmbesvär</li>
            </Article>
            <Article title="Johannesört (Hypericum perforatum)">
                <li>De blommande skotten samlas in i juni-juli</li>
                <li>Dess te används mot nervositet, depression och sömnstörningar, men också för att behandla hudinflammation och svårläkta sår</li>
                <li>Har en gynsam effekt på människokroppen vid besvär som magsår, njur- och gallblåsproblem, och nervösa gastrointestinala besvär samt bra mot munskador</li>
                <li>Dess olja används för att lindra reumatisk smärta, behandla vissa hudsjukdomar, furunkels och andra suppurationer, ytliga yttre blödningar, blåmärken, stukningar, ländryggen och gikt</li>
                <li>Regelbunden konsumtion av dess te ökar gallproduktionen och reglerar blodcirkulationen</li>
                <li>Vid depression märks dess effekt först efter 3-4 veckor</li>
                <li>I salvaform, indikerad mot kramper och nervsmärtor</li>
                <li>Om du krossar dess blomma kommer den att släpa ut en röd juice</li>
            </Article>
            <Article title="Järnört (Verbena officinalis)">
                <li>Det blommande bladskottet används för medicinska ändamål</li>
                <li>Innehåller koffeinsyraderivat, eterisk olja, iridoidglykosider, flavonoider</li>
                <li>Menstruationsrubbningar, ingrediens i te blandningar som stimulerar mjölkutsöndringen, bra slemlösande medel, katarr i de övre luftvägarna, lever och gallblåsan, aptitstimulerande medel, immunförstärkare, sänker högt blodtryck, febernedsättande, antiinflammatorisk, allergistillande, lugnande medel, antibakteriell, smärtstillande, används för anemi, för vissa hudinfektioner, används vid huvudvärk</li>
            </Article>
            <Article title="Kalmus (Acorus calamus)">
                <li>Roten används för medicin</li>
                <li>God aptitstimulerande, stimulerar magsyraproduktionen, har en urinsyraavlägsnande effekt, renar tarmarna, lugnar nerverna, lindrar uppblåsthet, artrit, mild diarré, anemi, magsår, kväljningar, tarmhypotoni, lungcancer; mjälte, lever och bukspottkörtelstimulerande medel</li>
                <li>Externt användbar för köldskador och dålig perifer blodtillförsel i armar och ben</li>
                <li>Dess blad är doftande, dess grundstam har en bitter-kryddig smak</li>
                <li>Den europeiska arten innehåller ett kemiskt ämne som kan vara cancerframkallande, denna finns inte i den amerikanska arten</li>
                <li>Används för medicinska ändamål sedan urminnes tider, växer i svavelhaltiga träskmarker</li>
            </Article>
            <Article title="Kamomill (Matricaria recutita)">
                <li>Blommorna plockas på torrt, soligt väder</li>
                <li>Antiinflammatorisk, mild lugnande, smärtstillande, desinfektionsmedel, kapillärtonic, avsvällande, matsmältningsförbättrare, sårläkande, histaminhämmare</li>
                <li>Lätt magsyrabildande, koleretisk, febernedsättande, bra för förkylningar</li>
                <li>Invärtes kramplösande, lämlig för urinblåsinflammation, nefrit, gastrit, diarré, leversjukdomar, astma hos barn, vissa fall av allergier, enterokolit, tarmkolik hos spädbarn</li>
                <li>Utvärtes i form av omslag, sköljning, gurgling, lavemang, i badvatten för brännskador, hemorrojder, vaginit, sår, akne, halsont, irriterad-, röd hud, tandböld, nagelbäddsinflammation, afte, inom gynekologi används det för att minska förlossningens varaktighet, för att lindra mensvärk, glänser hår och lugnar hårbotten, mot mjäll och för fet hårbotten</li>
                <li>Regelbunden konsumtion lindrar magbesvär, illamående, kväljningar och symtom på tarminflammation</li>
            </Article>
            <Article title="Kransborre (Marrubium vulgare)">
                <li>Under maj-juni samlar vi in de övre blomskotten på växten, dock inte de överblåsta blommorna, som används för sin helande effekt</li>
                <li>Innehåller saponiner, flavonoider, tanniner, steroler</li>
                <li>Känd för att vara ett utmärkt hostdämpande och slemlösande medel</li>
                <li>Det har en gynsam effekt på bromkit, trakeit och astma, stimulerar matsmältningskörtlarnas funktion, används mot gallbesvär, är ett diuretikum, användbart mot förstoppning och mot tarmparasiter</li>
                <li>Externt lämplig för purulenta eller svårläkta sår, antiinflammatorisk, aptit- och ämnesomsättningshöjare, har en lugnande effekt, extremt effektiv för att förebygga och behandla migrän och huvudvärk, kramplösande</li>
            </Article>
            <Article title="Kryddsalvia (Salvia officinalis)">
                <li>Dess blad samlas in i juni-juli för medicinska ändamål</li>
                <li>Innehåller många aktiva ämnen: eteriska oljor, tanniner, diterpener, flavonoider, tujon, kamfer, borneol, linalool, eukalyptol...</li>
                <li>Används för en mängd olika åkommor, har antiinflammatoriska, bakteriedödande och svettreglerande effekter, och används att gurgla med vid gingivit, hosta och inflammation i mun- och svalgslemhinnan, desinfektionsmedel</li>
                <li>Det användes en gång för konservering, men idag används det som ett diuretikum, för sårbehandling, ormbett, inälvsmask, enterit, epilepsi, bröskorgstbesvär, stimulerar menstruation, vid sömnlöshet, ögonsjukdomar och halsont; dess olja har en minnesförbättrande, genskyddande effekt och beter sig på samma sätt som östrogen; uppblåsthet, rekommenderas för matsmältningsbesvär, hemostatisk, tonic, hjärnvård, astma, förkylning, diarré, blodsockersänkande</li>
                <li>Bladsaften används för att behandla insektsbett och mindre svullnader, i badet mot hemorrojder och som en god krydda i köket, måttlig konsumption rekommenderas pga. tujoninnehållet</li>
            </Article>
            <Article title="Kungsmynta (Origanum Vulgare)">
                <li>Vi skördar den övre delen av växtens ovanjordiska blomskott</li>
                <li>Innehåller eteriska oljor, tanniner, flavonoider</li>
                <li>Utmärkt aptitstimulerande, hostdämpande, nervstillande, antiinflammatorisk, bakteriedödande, har god effekt på uppblåsthet, besvärlig matsmältning, karminativ, koleretisk, kramplösande, mot mun- och svalginflammation, stimulerar hypofysens funktion som reglerar könshormonerna</li>
                <li>Anses vara naturens antibiotika</li>
                <li>För vissa kvinnliga könssjukdomar kan te-gräs rester användas som grötomslag tillsammans med vaginallavemang, dessutom är det mycket användbart i badvatten</li>
            </Article>
            <Article title="Kustdaggkåpa (Alchemilla xanthochlora)">
                <li>Det blommande skottet används för medicinska ändamål</li>
                <li>Känd som ett livmoderstimulerande medel, under graviditeten och före förlossningen kan vi dricka dess te</li>
                <li>För menstruationsbesvär, för mag- och tarminflammation</li>
                <li>Ett bra naturläkemedel med hemostatiska, antiinflammatoriska och sammandragande effekter, har liknande egenskaper som lomme</li>
                <li>Användbar även i badvatten</li>
            </Article>
            <Article title="Kvanne (Angelica archangelica)">
                <li>Blad, frukt och rötter kan användas för medicinska ändamål</li>
                <li>Aptitstimulerande, matsmältningsstimulerande och kramplösande, välkänd karminativ, magtonik</li>
                <li>Används för gallsten, dess te har en blodrenande effect, är urindrivande och minskar hosta</li>
                <li>Bad och kräm har en gynsam effect på reumatiska besvär</li>
                <li>Långvarig användning kan orsaka ljuskänslighet</li>
            </Article>
            <Article title="Kvickrot (Elymus repens)">
                <li>Dess rhizomer kan användas råa eller i form av te</li>
                <li>Innehåller slem, vitaminer och eteriska oljor</li>
                <li>Febernedsättande, diuretikum, blodtryckssänkande, antiinflammatorisk, används för cystit, gikt, hosta och trakeit</li>
                <li>Externt användbar för bildandet av bindvävsfiber på huden, speciellt för behandling av aknebenägen hud</li>
                <li>Kvickrot innehåller mycket fiber, protein, B-vitaminer och är en källa till Fe, Ca, Mg, Zn och andra viktiga spårämnen</li>
                <li>Används för att behandla nervositet, sömnlöshet, hjälper matsmältningen, sänker kolesterolnivån</li>
            </Article>
            <Article title="Lavendel (Lavandula)">
                <li>Dess blommor plockas vid blomning</li>
                <li>Insektsmedel (mot mal, bladlöss)</li>
                <li>Dess te är ett nervstillande medel, används för att behandla nervbaserde mag- och tarmsjukdomar, sömnstörningar, känt som huvudvärkstillande, kramplösande,desinfektionsmedel och bra mot insektsbett</li>
                <li>Utmärkt för behandling av reumatiska smärtor och neuralgi i form av bad</li>
                <li>Hudvårdsprodukter som innehåller lavandelolja kan säkert användas på spädbarn</li>
                <li>Dess olja har en sårläkande effekt, minskar bildandet av ärr och är effektiv mot svampinfektioner</li>
                <li>Lindrar sjukdomar i de övre luftvägarna, astma, allergisk nästäppa, rinit, influensa, halsont; att andas in den eteriska oljan eller späda den med andra oljor och massera bröstet med är lämpligt för förkylning</li>
                <li>Hjälper till med återhämtning efter förlossningen, stoppar håravfall, förbättrar minnet, lindrar symtom på sjösjuka, kan motverka illamående, lugnar värmevallningar vid menopaus</li>
                <li>Lugnar spädbarn när de gnuggas på magen vid kramp (1 droppe lavandelolja/20 ml mandelolja)</li>
            </Article>
            <Article title="Lin (Linum usitatissimum)">
                <li>Innehåller slem, fet olja, protein, cyanogen glykosidblandning, rik på Omega3-fettsyror, vitamin B6, E, K</li>
                <li>Omega 3 fettsyror stödjer hjärnans och nervsystemets funktion, minskar risken för hjärt-kärlsjukdomar</li>
                <li>Den starka antioxidanteffekten minskar risken för bröst- och prostatacancer, minskar antalet fria radikaler</li>
                <li>Det används för att reglera matsmältningen i fall av tarmslapphet, mag- och tarmsjukdomar och förstoppning, sänker kolesterolnivåerna och förbättrar blodsockernivåerna</li>
                <li>De mineraler den innehåller: Mg, Mn, P bidrar till att bibehålla friska ben och tänder</li>
                <li>Förhindrar åderförkalkning, används som en varm kompress för att behandla bölder och furunkels</li>
                <li>Tyger av linne har naturliga antibakteriella egenskaper som förhindrar till exempel tillväxten av Escherichia coli och Staphilococcus aureus</li>
                <li>Viktigt: lämna inte malda/hackade frön i ett varmt, luftigt, soligt rum eftersom Omega3 lätt härsknar, även inom 30 minuter</li>
            </Article>
            <Article title="Lind (Tilia)">
                <li>Blommorna plockas innan fullblomning med dess högblad vid soligt väder under juni månad</li>
                <li>Har antibakteriella effekter, därför är den utmärkt mot förkylning och hosta, även mot feber</li>
                <li>Lindrar bronkit symptom, har en slemlösande effekt, är en bra behandling mot inflammation och infektion, sänker blodtrycket och är bra mot migrän</li>
                <li>Dess te är ett effektivt svättdrivande vid förkylningar, har en bra nervtonic och lugnande effekt, därför är det en utmärkt kvällsdrink</li>
                <li>Behagligt när blandas i badvatten</li>
                <li>Drick dess te efter måltider för dess kramplösande effekt, förbättrar matsmältningen</li>
                <li>Kombinerat med svarta fläderblommor i lika stora proportioner förbättrar immunförsvaret</li>
                <li>Lindhonung har den starkaste antiinflammatoriska effekten</li>
                <li>En typ av medicinskt kol är gjort av lindträ, vilket är en användbar behandlingsmedel för inflammation i de nedre extremiteterna</li>
            </Article>
            <Article title="Lingon (Vaccinium vitis-idaea)">
                <li>Rik på vitaminer, antioxidanter och spårämnen</li>
                <li>Innehåller mineraler: Ca, Mg, K, Na, Fe, Zn, Mn, P och vitaminerna A, B, C, E</li>
                <li>Har en kärlskyddande effekt på grund av dess flavonoidhalt</li>
                <li>Tack vare den bakteriedödande effekten av proantocyanidin kan det framgångsrikt användas mot vissa bakterier i munhålan och urinvägarna</li>
                <li>Den stora mängden fenol den innehåller har en antioxidant effekt, stärker immunförsvaret, skyddar blodkärl, avgiftar, förhindrar stenbildning och utveckling av inflammatoriska och tumörsjukdomar</li>
                <li>Bäst att ätas rå</li>
                <li>Konsumera vid prostataproblem, njursjukdom, diabetes, åderförkalkning, högt blodtryck</li>
            </Article>
            <Article title="Lomme (Capsella bursa-pastoris)">
                <li>Hemostatisk, reglerar menstruationscykeln, minskar menstruationssmärta genom att stimulera livmodermusklerna, lindrar näsblod, mag- och tarmblödningar, hematuri och hemoptys</li>
                <li>Blandat med hagtorn i förhållandet 4 hagtorn/1 lomme, det sänker blodtrycket och renar blodkärlen, bra för hjärtfunktionen</li>
                <li>Förbättrar blocirkulationen i de nedre lemmarna</li>
                <li>{`Tinkturextrakt (från hela växten) är användbart externt för muskelvärk; placera det skållade gräset över natten där spasmen uppstår och låt ångbandaget sitta på till morgonen`}</li>
                <li>Vid kraftiga mensblödningar, skålla en rågad matsked teört med en kvarts liter varmt vatten, låt den vila i 15 minuter, drick den ljummen 1-3 koppar om dagen, externt lugnar det blödningen</li>
                <li>Blodtrycksregulator, hjärttonic, kan lindra ledvärk</li>
                <li>Bladen kan ätas färska eller torkade</li>
            </Article>
            <Article title="Luddunört (Epilobium parviflorum)">
                <li>Ört för prostatakörteln</li>
                <li>Vi samlar den ovanjordiska delen av örten när de första blommorna dyker upp, skär upp örten färsk och använd</li>
                <li>Innehåller antioxidanter och antiinflammatoriska medel, rik på flavonoider, tanniner, gallotanniner och flera essentiella syror</li>
                <li>I form av te och extrakt är det känt för sina gynnsamma effekter på njurar, urinblåsa och speciellt prostatakörteln tack vare sin eikosapentaensyra</li>
                <li>Rekommenderas vid benign prostatahyperplasi, minskar frekvent urinering genom att stärka urinretention</li>
                <li>Har inga biverkningar, fyra veckors kur rekommenderas vilket räcker för återhämtning</li>
                <li>Te: tillsätt en tesked torkad ört i en kopp varmt vatten, sila efter femton minuter, drick en på fastande mage på morgonen och den andra en timme före sänggåendet</li>
            </Article>
            <Article title="Läkemalva (Althaea officinalis)">
                <li>Örtens unga blad, blommor och rötter används för medicinska ändamål. Roten har få aktiva ämnen på sommaren, därför bör den samlas från september till april, roten möglar lätt</li>
                <li>Rekommenderas för behandling av ont i halsen, inflammatoriska sjukdomar i mun och svalg, hosta, mild inflammation i mag- tarmslemhinnan, immunförsvar förstärkare, bra för hudinflammation, furunkelbehandling med mosad läkemalva i form av en kompress</li>
                <li>Vi gör kallt te från roten genom att blötlägga det i 30 minuter och använder det att gurgla med vid förkylning, heshet, torrhosta och tonsilit</li>
                <li>Antiinflammatorisk för luftvägar, njurar och matsmältningssystem, mjukgörande och slemlösande, urindrivande, mukolytiskt och sårläkande</li>
            </Article>
            <Article title="Malört (Artemisia absinthium)">
                <li>I full blom, samla max 50 cm av det lövblommande skottet annars blir aromen för bitter och stark</li>
                <li>Förbättrar matsmältningen, aptitstimulerande, minskar uppblåsthet kramplösande, används vid lever-, mag-, tarm- och gallgångsjukdomar, mot diarré, har en avslappnande effekt</li>
                <li>Dess te minskar illamående och feber, stimulerar menstruationen och är ett effektivt anthelmintikum</li>
                <li>Används för anemi och återhämtning efter sjukdom</li>
                <li>Desinfektionsmedel, urindrivande, rengörande, bitter tonic, antiinflammatorisk, sammandragande utvärtes och invärtes</li>
                <li>Svampdödande, neuroprotektiva, bakteriedödande, insekticid, parasiticid, anti-kolera och anti-malaria, antidepressivt, antiepileptiskt och leverskyddande</li>
            </Article>
            <Article title="Mariatistel (Silybum marianum)">
                <li>Känt för att ha en hepatoskyddande effekt, som hjälper till att behandla kroniska leversjukdomar och giftiga leverskador, matsmältningsrubbningar, gallsten och gulsot</li>
                <li>En av dess aktiva ingredienser är silymarin, som är antiinflammatoriskt och blockerar effekterna av leverskadande gifter, droger och giftiga svampar</li>
                <li>Silybin har en stark antioxidanteffekt, vilket minskar oxidativ leverskada orsakad av toxiner, minskar LDL-kolesterol och triglyceridnivån, ökar HDL-kolesterolnivån</li>
                <li>De aktiva ingredienserna finns i frukten, de är inte lösliga i vatten, så teet är inte särskilt effektivt</li>
            </Article>
            <Article title="Maskros (Taraxacum officinale)">
                <li>Hela växten är bra medicin, unga blad kan ätas som sallad</li>
                <li>Innehåller flavonoider, tanniner, inulin, steroler, kaliumsalter, karotenoider, bitterämnen</li>
                <li>Det har ett utmärkt aptitstimulerande effekt, förbättrar matsmältningen, har antiinflammatoriska effekter, är lämpligt för att behandla gall- ochnleversjukdomar, dess te är urindrivande och blod renare, används som omslag på reumatiska besvär och ömma leder</li>
                <li>Reglerar njurfunktionen, ökar gallproduktionen, ökar saliv- och magsyrproduktionen, är även bra mot tonsillit, avgiftar levern</li>
                <li>Bra mot anemi, åderbråck, celluliter, hemorrojder, tarmfermentering, eksem, lymfadenit, gikt, gallsten och njursten, övervikt, diabetes, te gjort av dess rot har anticancer effekt</li>
                <li>Drick 2-3 koppar te för bättre effekt</li>
            </Article>
            <Article title="Mejram (Majorana hortensis)">
                <li>Vi skördar de lummiga blommande stjälkarna under juli-augusti</li>
                <li>Utmärkt för mag-, tarm- och gallbesvär</li>
                <li>Den eteriska oljan har kramplösande, karminerande, aptitstimulerande, hostdämpande, nervlugnande och slemlösande effekter</li>
                <li>Lindrar nästäppa vid förkylning om man applicerar mejramsalva i näshålan och omgivningen, salvan är lämplig för att lindra reumatisk smärta</li>
                <li>Vid uppblåsthet, gnuggas området ovanför naveln med mejramolja och den försvinner inom 15-20 minuter</li>
                <li>Lindrar smärta i samband med menstruationsblödning, migrän, muskelsmärta, nervösa spänningar, köldskador, blåmärken, förbättrar sömnen och reglerar blodtrycket</li>
                <li>Den har antibakteriella och antivirala effekter, dess te kan konsumeras vid misstanke om matförgiftning eller viral gastrit, och när diarré uppstår; även känd som en krydda</li>
                <li>Överdriven konsumtion rekommenderas ej, kan minska sexlusten</li>
            </Article>
            <Article title="Mistel (Viscum album)">
                <li>Dess blad och grenspetsar används</li>
                <li>Kramplösande, bra mot inre blödningar, stärker hjärtat, sänker pulsen, har god effekt på blodtrycket, har en cancerläkande effekt, är även effektiv åderförkalkning och hormonproblem, är bra för att reglera hjärtrytmen, förbättrar blodkärlens permeabilitet, bra mot yrsel och tinnitus, åderbrock, förbättrar koncentrationsförmågan</li>
                <li>Diuretikum, lugnar sår-, livmoder-, lung-och näsblödningar, kan också användas vid hosta, kikhosta och asmatiska spasmer</li>
                <li>Dess lugnande effekt hjälper till att förebygga epileptiska anfall, den används mot huvudvärk, stärker immunförsvaret och livmoderns muskler, ökar chansen för befruktning, sänker blodsockernivåerna något</li>
                <li>Vi gör alltid te genom att blötlägga det i kallt vatten över natten</li>
                <li>Inte att förväxla med gul mistel</li>
                <li>Kan samlas in från november till februari och dess aktiva ingredienser beror i viss del på värdträdet</li>
            </Article>
            <Article title="Munkpeppar (Vitex agnus-castus)">
                <li>Dess frukt verkar på det vegetativa nervsystemet, lindrar symtom på högt blodtryck och hjärtklappning, har en lugnande effekt och är även lämplig för att lindra premenstruella symtom, reglerar menstruationscykeln</li>
                <li>Det förbättrar corpus luteum störningar, kan konsumeras under hela cykeln och minskar också effektivt obehagliga kramper i nedre delen av magen</li>
            </Article>
            <Article title="Nicktistel (Carduus nutans)">
                <li>Plockas den ovanjordiska delen under blomningen dess te användes för behandling av prostatabesvär</li>
                <li>Användbar vid behandling av leversjukdomar, malaria, njursten och förstoppning</li>
            </Article>
            <Article title="Nypon (Rosa canina)">
                <li>Värdefull för sin vitamin A, B1, B2, C, K, P, E innehåll</li>
                <li>Dess te är användbart vid behandling av förgiftning, matsmältningsbesvär, leversjukdomar, feber, tarmparasiter och hjärtklappning</li>
                <li>Te gjort på nyponfrön är användbart vid problem med njurar och urinblåsa</li>
                <li>Mot kronisk bronkit och hosta i hög ålder</li>
                <li>C vitamin ökar kroppens motståndskraft, flavonoider har en antiinflammatorisk och antibiotisk immunförsvarsstärkande effekt och pektiner hjälper matsmältningen</li>
                <li>Har mångsidiga användningsområden: te, soppa, sylt, alkoholhaltiga drycker</li>
                <li>Teet ska göras på högst 40 grader C, annars går det mesta av C-vitaminet förlorat</li>
                <li>Den innehåller mest C-vitamin av alla vilda växter, tio gånger mer än citroner</li>
            </Article>
            <Article title="Persilja (Petroselinum crispum)">
                <li>K vitaminhalten bidrar till benhälsan, C vitaminhalten stärker immunförsvaret, betakarotenantioxidanten skyddar mot fria radikaler</li>
                <li>Vid daglig konsumption stöder den njurfunktionen, bryter ner njursten, minskar ledvärk tack vare sin antiinflammatoriska effekt och förbättrar anemi tack vare sitt höga järninnehåll</li>
                <li>Dess antioxidanter förstör cancerceller och minskar risken för typ 2-diabetes</li>
                <li>Har en muskelavslappnande effekt och stödjer även matsmältningen</li>
                <li>Att gnugga ett getingstick med ett färskt persiljablad kommer att lindra smärtan</li>
                <li>Används ofta som krydda i köket</li>
            </Article>
            <Article title="Ringblomma (Calendula officinalis)">
                <li>Blommorna plockas på soliga dagar i början av blomningen</li>
                <li>För gallblåsinflammation, gallsten, hepatit, blodrenare, febernedsättande, förbättrar synen genom att rengöra blodkärlen i bakre delen av ögat, stimulerar produktionen av östrogenhormonet, används internt vid behandling av cystit och gastrit-externt mot åderbråck, bensår, liggsår, svårläkta sår, köldskador, hudförändringar, bistick, klåda, slemhinneinflammationer, eksem, sår, som munvatten för tandköttsvård, blåmärken, hudsprickor, hudregenerator</li>
                <li>Kosmetisk ingrediens, rekommenderas även för att lindra smärta orsakad av hudutslag och solbränna, mot rynkor</li>
                <li>Salvan lindrar även bröstvårtans inflammation under amning</li>
                <li>Desinfektionsmedel, har sårläkande, bra kramplösande, stimulerande, antiinflammatorisk, antibakteriell, antiviral, och anti ärrbildande effekt, används för att behandla astma, hosta, sömnlöshet, ångest och hjärtklappning</li>
                <li>Används som te, i salvor, kompresser, i badvatten för 15 minuters bad</li>
                <li>Starkt avkok kan användas för att behandla nagelsvamp</li>
                <li>Kan ätas rå i sallader och som krydda</li>
            </Article>
            <Article title="Rysk martorn (Erymgium planum)">
                <li>Slemlösande medel, luftvägsdesinfektionsmedel, hosta, bronkit, diuretikum, gikt, hårbotteninflammation hos barn, aptitstimulerande medel</li>
                <li>Innehåller flavoner, saponiner, fenolsyra och eteriska oljor</li>
                <li>Vi samlar den ovanjordiska delen av örten under blomningen</li>
            </Article>
            <Article title="Rödplister (Laminum purpureum)">
                <li>Den ovanjordiska delen av den unga plantan skördas</li>
                <li>Innehåller många mineraler, betakaroten och C-vitamin</li>
                <li>Kan ätas rå i sallader, smoothies, pesto, och kokt i rätter, i form av te eller extrakt</li>
                <li>Diuretikum, bra mot urinvägsinfektioner, sammandragande, bakteriedödande, svampdödande, antiinflammatorisk, hemostatisk, mot irriterande hosta, matsmältningsregulator, avgiftande, milt laxermedel</li>
                <li>Allergiska besvär, ont i halsen, effektiv för kraftiga menstruationsblödningar, för mindre skador, insektsbett, vid skrubbsår är örtoljan eller salva bra, påskyndar läkningen av hemorrojder</li>
            </Article>
            <Article title="Röllika (Achillea millefolium)">
                <li>Röllika te anses vara en kvinnas läkare, och dess kramplösande egenskaper kan användas för att behandla smärtsamma menstruationer</li>
                <li>Utmärkt antiinflammatorisk för slämhinnor: vaginal och livmoderinflammation, gingivit...</li>
                <li>Sammandragande, sårläkande effekt, minskar menstruationsblödningar och kramper</li>
                <li>Buksmärtor, uppblåshet, förbättrar matsmältningen effectiv mot migränhuvudverk</li>
                <li>Stimulerar produktionen av gallsekretion</li>
                <li>Oumbärlig för urinvägssjukdomar och andningsproblem</li>
                <li>De aktiva ingredienserna i dess blommor botar även eksem och hösnuva och verkar på benmärgen och ökar blodbildningen</li>
            </Article>
            <Article title="Skelört (Chelidonium majus)">
                <li>Om du applicerar växtsaften på vårtor eller eksem kommer det att förstöra virusen som orsakar dem, antiviralt och antibakteriellt</li>
                <li>Används för mag- och tarmspasmer och inflammationer, lever- och gallblåsa besvär, för gallsten, gulsot, kärl- och hjärtsjukdomar, gråstarr, trötta ögon, fläckig hornhinna, pankreatit, håravfall, candida trichoronas, herpes, högt blodtryck, migrän...</li>
                <li>Innehåller cirka 30 alkaloider, flavonoider och proteolytiska enzymer, men den torkade växten är bara effektiv i 6 månader</li>
                <li>Kramplösande, smärtstillande, antiinflammatorisk, avgiftande, urindrivande, hämmar celldelning, har anticancereffekter</li>
                <li>När du gör te, tillsätt en halv tesked torkad ört till 1 liter vatten, även lämplig för kompresser på sår men inte på öppna sår</li>
                <li>Plocka den en solig, regnfri dag, annars blir den brun</li>
            </Article>
            <Article title="Slåttergubbe (Arnica montana)">
                <li>Man kan göra örtte av dess blommor samt rötterna är också användbara</li>
                <li>Har en desinficerande effekt, stärker magen, hjälper ämnesomsättningen</li>
                <li>Dess extrakt appliceras på purulenta inflammatoriska sår</li>
                <li>Har god effekt mot reumatism, rekommenderas för behandling av stukningar och blåmärken, lindrar klåda orsakad av insektbett</li>
                <li>Används för att behandla muskelsmärta</li>
                <li>Slottergubben hjälper till i läkningsprocessen av ytliga åderbråck</li>
            </Article>
            <Article title="Småborre (Agrimonia eupatoria)">
                <li>Den övre blommande delen de nedre stjälkbladen används medicinskt</li>
                <li>Innehåller tanniner, flavonoider, kiselsyra</li>
                <li>Sammandragande, antibiotika, blodrenare, urindrivande, antiinflammatorisk, för behandling av inflammationer i mun- och svalgslemhinnan, mild gastroenterit, aptitstimulerande medel, förbättrar gallans funktion och leverns avgiftande aktivitet, för milda ytliga inflammationer i huben, bölder, gallsten, kolit, diarré</li>
                <li>Det brukar blandas med salvia och ringblomma för fotbad; blandat med johannesört, bra mot akne och som hudvårdsprodukt</li>
                <li>Du kan göra alkoholextrakt som ska förvaras i mörk glasflaska</li>
                <li>Som munvatten, en av de bästa att gurgla med för inflammation stämband, tandkött, svalg och munslemhinna</li>
                <li>Lämplig som tilläggsbehandling i form av badkurer vid långvariga reumatiska besvär och svårläkta sår</li>
            </Article>
            <Article title="Stor kardborre (Arctium lappa)">
                <li>För medicinska ändamål bör roten av den första årets icke-blommande växten samlas in mellan oktober och april, som är tät, köttig och har bitter smak</li>
                <li>Bra hårvårdsprodukt, förhindrar håravfall, mjäll och fett i hårbotten</li>
                <li>Innehåller inulin, slem, bitterämnen, organiska syror</li>
                <li>Bra vätskedrivande, blod renare, gallstens- och njurstensupplösare, diaforetiskt</li>
                <li>Rekommenderas för behandling av eksem och svårläkta sår på huden</li>
                <li>Dess extrakt används som en salva mot reumatisk muskel- och ledvärk</li>
            </Article>
            <Article title="Styvmorsviol (Viola tricolor)">
                <li>Indicerat för epilepsi, astma, hudsjukdomar, eksem, kikhosta, bronkit, diuretika, reumatism och cystit, slemlösande medel</li>
                <li>Dess extrakt är antiinflammatoriskt, antibakteriellt, lugnande, antiviralt, immunförstärkande, vasodilator, anticancer</li>
                <li>Hela växten innehåller antioxidanter och flavonoider, samt aminosyror, salicylater, alkaloider, eteriska oljor, slem, saponiner, vax, vitamin A och C</li>
                <li>Kardiovaskulära sjukdomar, mild blodtrycksänkande, diabetes, leverproblem, inflammationer, immunförsvars problem</li>
                <li>Används externt för fet, aknebenägen hud och för att behandla infantilt seborroiskt eksem</li>
                <li>Säkert att konsumera, har en lätt mintig smak</li>
            </Article>
            <Article title="Såpnejlika (Saponaria officinalis)">
                <li>Dess rhizomer med rötter skördas för medicinska ändamål</li>
                <li>Dess te är slemlösande, mot ont i halsen, milt diuretikum, antireumatiskt, rengörande, används vid behandling av inälvsmask med lavemang</li>
                <li>Kan användas som tvål på grund av dess saponininnehåll, känsliga tyger tvättas fortfarande med det idag</li>
            </Article>
            <Article title="Tiggarnöt (Tribulus terrestris)">
                <li>Används mot lever- och njursjukdomar, konjunktivit och huvudvärk, för att förbättra den sexuella förmågan hos båda könen, och har en positiv effekt på det kardiovaskulära systemet genom att sänka kolesterolnivåerna</li>
                <li>I norra Asien konsumeras som mat</li>
                <li>Används som en allmän tonic</li>
                <li>Minskar klimakteriebesvär, påskyndar återhämtningen vid hjärtproblem, förbättrar blodcirkulationen, ökar kroppens immunitet, minskar trötthet och nervösitet, främjar syretillförseln till hjärnan, stimulerar minnet, reglerar blodsockernivån hos diabetiker</li>
                <li>Antiinflammatorisk, anticancer, smärtstillande</li>
            </Article>
            <Article title="Timjan (Thymus vulgaris)">
                <li>Varje typ är en medicinalväxt</li>
                <li>Vi plockar örtens blommande lövskott utan stjälk</li>
                <li>Dess eteriska oljor: tymol och carvacrol har bakteriedödande, desinficerande, karminativa och kramplösande effekter</li>
                <li>Halsinflammation lindras genom att tugga färska blad</li>
                <li>Stimulerar matsmältningen, många använder den vid andningsbesvär</li>
                <li>Dess te används för att gurgla med vid hosta eller halsont</li>
                <li>Höjer lågt blodtryck, lindrar externt klåda orsakad av insektsbett</li>
                <li>Det lugnar musklerna, lämpligt för trötta fötter genom fotbad</li>
                <li>Lämpligt för bad, används även som krydda</li>
            </Article>
            <Article title="Tistelgullfrö (Xanthium spinosum)">
                <li>Används för hydrofobi, rabies, feber, diarré, cancer, inflammatoriska sjukdomar till exempel reumatoid artrit</li>
                <li>Dess te konsumeras mot prostataförstoring</li>
                <li>Drick dess te i de tidiga stadierna av cystopielit och njursten</li>
            </Article>
            <Article title="Trampört (Polygonum aviculare)">
                <li>Den ovanjordiska delen samlas in för medicinska ändamål</li>
                <li>Innehåller flavonoider, vax, slem, eterisk olja, tannin, sockerarter, fetter, kiselsyra, salicilsyra, mineraler och C-vitamin</li>
                <li>Sammandragande, antidiarré, urindrivande, blodtryckssänkande och mineraliserande</li>
                <li>Förbättrar anemi, återhämtning, bra aktiv ingrediens i kampen mot reumatism, lungsjukdomar, gikt</li>
                <li>Externt sårsammandragande och bra mot hemorrojder</li>
                <li>Hemostatisk, därför kan den användas vid mag-, tarm- och lungblödningar, såväl som mot enterit, inälvsmaskar, förstorning eller inflammation i prostatakörteln, njur- och blåsproblem vid stenbildning</li>
            </Article>
            <Article title="Vildhallonblad">
                <li>Ett värdefullt elixir som hjälper till med befruktning, ägglossning och implantation och förbättrar äggkvaliteten</li>
                <li>Stärker blodkärlsväggarna och håller urinsyran i ordning, bra mot diarré</li>
                <li>Används tillsammans med kustdaggkåpa men kan även drickas för sig</li>
            </Article>
            <Article title="Vitplister (Lamium album)">
                <li>Vi samlar örtens blommande lövskott för dess läkande effekt</li>
                <li>Innehåller iridoidglykosider, triterpen saponiner, slem, tanniner, flavonoider, eterisk olja</li>
                <li>Har bevisad effekt för luftvägssjukdomar, katarral och infektionssjukdomar i urinvägarna, såväl som mag- och tarmbesvär, förstorad prostata, blödningar, näsblod, tarmkramper, matsmältningsbesvär, nervösa störningar under klimakteriet, kvinnliga flytningar, menstruationssmärtor</li>
                <li>Externt används det för att minska hudsjukdomar, brännskador, åderbråck, hemorrojder, bensår, gikttumörer, inflammation i munhålan och halsen</li>
                <li>Kan användas i form av extrakt, te, lokala lavemang, omslag, i badvatten, ätbart rå eller tillagad</li>
            </Article>
            <Article title="Vårtbjörk (Betula pendula)">
                <li>Unga blad plockas som sedan skållas eller blötläggs för att göra te</li>
                <li>C vitamin, mineraler: Ca, Mg, K, Fe, flavonoider, antioxidanter, saponiner, alkoholer</li>
                <li>Det stärker immunförsvaret och skelettet, hjälper till med blodbildning, korrekt funktion av nervsystemet, muskelfunktion, spelar en viktig roll i att neutralisera fria radikaler och på så sätt fördröja åldrande och skydda mot cellskador, antiinflammatoriskt, regelbunden konsumtion hjälper mot artrit, reumatism, urindrivande, hjälper njurfunktionen och förhindrar bildning av njursten, avgiftar, används även vid magbesvär</li>
            </Article>
            <Article title="Våtarv (Stellaria media)">
                <li>På 1600-talet användes den mot skabb, idag används den mot hudsjukdomar, bronkit, reumatiska smärtor, ledvärk, mensvärk och som grötomslag mot skärsår och blåmärken</li>
                <li>Ätbar, används ofta rå i sallader, har en söt smak, kan ätas stekt eller kokt, tack vare sin höga järnhalt används den mot anemi, som grötomslag på hudsår</li>
                <li>Innehåller saponiner som är giftiga för vissa fiskarter</li>
                <li>Rik på vitamin A, C, såväl som Mg, P, kvarts och protein, det har antioxidant, antiinflammatorisk, svampdödande, smärtstillande, antidiabetiska och ångestdämpande effekter</li>
                <li>Njur- och leverrengöringsmedel, förstör hepatit B-viruset, stenupplösande, ges till sjuka för dess närande, uppfriskande effekt, dess te rekommenderas mot tarmblödning</li>
            </Article>
            <Article title="Vänderot (Valeriana officinalis)">
                <li>Örtens rot och rhizom används för medicin, som samlas in på våren och hösten, rengörs torrt och torkas sedan snabbt i skuggan; dess blad kan ha olika former</li>
                <li>Innehåller eterisk olja, valepotriater, alkaloid, sesquiterpenes, eugenol, vitaminer B1, B2, B3, B5, B6, C, mineraler Ca, Mg, Fe, Zn, Cu</li>
                <li>Effektivt lugnande medel, lugnande, mot hysteri, nervositet, nervösa störningar i mag- tarmsystemet, kardiovaskulära systemet, stress; det har använts sedan urminnes tider för sömnstörningar och sömnlöshet, huvudvärk, migrän, epilepsi, förbättrar depression, mot uppblåsthet, matsmältning och immunförsvar, för behandling av klimakteriets värmevallningar, minskar avsevärt hjärnans glukosmetabolism, muskelspasmer, tarmirritation; externt för eksem, sår, antiinflammatorisk, smärtstillande</li>
                <li>Användbart i form av extrakt, rå pulver blandat i mat, te, badvatten</li>
            </Article>
            <Article title="Åkerfräke (Equisetum arvense)">
                <li>Blod renare, diuretikum, hemostatisk, effektiv mot hosta, även bra mot reumatism och gikt</li>
                <li>Kan användas för sköra naglar och håravfall</li>
                <li>Hjälper sårläkning, effektivt för urinvägsinfektioner, tandkötts-, mun- och halsinfektioner, gurgling är effektiv, drick teet för TB och astma</li>
                <li>Förstärkar immunförsvaret, även användbart i badvatten för njursand och vid njurbäckeninflammation; badtid 15 minuter</li>
                <li>Även effektiv som kompress</li>
            </Article>
            <Article title="Åsnetörne (Ononis spinosa)">
                <li>Naturläkemedel mot njur- och blåsproblem</li>
                <li>Växtens rot och blommande bladskott används för medicinska ändamål</li>
                <li>Används för njur- och blåssjukdomar, är ett bra diuretikum, förhindrar bildandet av urin stenar</li>
                <li>Det hornliknande rothuvudet tas bort vid uppsamling</li>
                <li>Vid terapi, drick 2-3 koppar te dagligen</li>
                <li>Det användes för gikt, reumatism, ödem, njurbäckeninflammation, cystit, eksem och andra hudsjukdomar, hemorrojder, kronisk förstoppning och proktit</li>
                <li>Antiinflammatorisk, hjälper till att utsöndra klor och natrium</li>
            </Article>
            <Article title="Äkta vallört (Symphytum officinale)">
                <li>Växten för benfrakturer och muskelskador</li>
                <li>Roten innehåller flera aktiva ingredienser, men bladen används</li>
                <li>Används i form av krämer och omslag i mosad form</li>
                <li>Hjälper till att läka frakturer, stukningar, ryckningar, blåmärken</li>
                <li>Man kan lita på dess läkande effekt vid muskel-, led-, nervinflammation och tendinit</li>
                <li>En av dess huvudsakliga aktiva ämnen, allantoin, stimulerar blodtillförseln och ökar cellregenereringsprocesserna</li>
                <li>Dess extrakt är en bra benförstärkare, främjar ärrbildning vid benfraktur, dess epitel- och cellbildande effekt stimulerar sårläkning, är även utmärkt vid åderbråck och tandlossing</li>
                <li>Rekommenderas inte för användning på öppna sår, och bör inte heller användas invärtes i överskott eftersom den är giftig för levern</li>
                <li>Det rekommenderas att samla innan blomningen</li>
            </Article>
            <Article title="Älgört (Filipendula ulmaria)">
                <li>Den blommande lummiga delen av örten bör samlas i juli-augusti</li>
                <li>Känd för sina goda urindrivande, blodrenande och febernedställande effekter</li>
                <li>Smärtstillande, dess te kan drickas mot diarré</li>
                <li>Används även mot nefrit, cystit och reumatism, sammandragande, tonic</li>
                <li>Dess te kan kompletteras med lindblommor, vi kan göra läsk av den</li>
                <li>Att lämna 1-2 teskedar torkade blommor i en kopp kallt vatten över natten har bäst effekt</li>
            </Article>
            <Article title="Ärenpris (Veronica officinalis)">
                <li>Det blommande skottet används som medicin</li>
                <li>Innehåller iridoider, flavonoider, triterpen saponiner, kanelsyraderivat</li>
                <li>Lindrar mag-, tarm- och reumatiska besvär, löser upp avlagringar i luftvägarna vid förkylning, är hostdämpande, mot diarré, blod renare, matsmältningsstimulerande och används även mot ledvärk</li>
                <li>Användbar som te, alkoholextrakt</li>
                <li>Inte att förväxla med teveronica</li>
                <li>Avgiftande, effektivt för kroniska eksem, inflammatoriska och svårläkta sår, lugnande, förbättrar minnet, eliminerar yrsel, bra för lever- och mjältsjukdomar</li>
                <li>Dess alkoholhaltiga extrakt kan ha en läkande effekt på reumatiska och giktsjukdomar</li>
            </Article>
            <Article title="Ögontröst (Euphrasia)">
                <li>Plocka/beskär blommorna i midsommar försiktigt för att inte skada plantan</li>
                <li>Det är utmärkt botemedel mot vissa ögonsjukdomar, som till exempel vid konjunktivit, vagel och hösnuva</li>
                <li>Du kan använda omslag externt för att slappna av och lugna trötta ögon</li>
                <li>Dess te är användbart vid mag- och tarmbesvär och har en immunförsvarsstärkande effekt</li>
                <li>Ögondroppar eller salvor gjorda av extrakt av dess blommor är bra för ögoninflammation, ögonsmärta och förbättrar synen</li>
                <li>Välkänd för sina desinficierande, antimikrobiella och antiinflammatoriska effekter, även användbart mot hosta</li>
                <li>Beläget i bergsområden, i utkanten av skogar, är dess blad gröna även vintertid</li>
                <li>En sann naturskatt, som finns på Gotland, erkänd och älskad över hela världen för sina helande egenskaper och skönhet</li>
            </Article>
            <Article title="Ölandskungsljus (Verbascum densiflorum)">
                <li>Blommorna plockas utan foderbladen tidigt på morgonen efter att daggen har avdunstat och sedan måste de torkas snabbt i starkt solljus</li>
                <li>Används för katarral och inflammatoriska sjukdomar i de övre luftvägarna, minskar hostimpulser, förbättrar immuniteten</li>
                <li>Antiinflammatorisk, lugnande, smärtstillande, urindrivande, smakgivande och slemlösande</li>
                <li>Dess te är användbart både internt och externt för hosta, hemorrojder, brännskador, köldskador, furunkulosbölder, stickningar</li>
                <li>Saponinerna de innehåller förhindrar gällandning</li>
            </Article>
            <Article title="Lackticka (Ganoderma lucidum)">
                <li>Den kan hittas på trädstammar med svag livskraft, rötter, lövskogar, men även på andra ställen</li>
                <li>Saprofytisk, kineserna har konsumerat det i tusentals år och utnyttjat dess medicinska egenskaper</li>
                <li>Har en gynsamt effekt på det kardiovaskulära systemet, är närvlugnande, immunförstärkande, antiinflammatorisk och dess dagliga användning bidrar till att berika kroppen med vitaminer, mineraler och aminosyror</li>
                <li>Levertonic, ökar ämnesomsättningen, anti-cancer, sårläkande, mot reumatism, botar lunginflammation, bakteriedödande</li>
                <li>Är inte ätbar; kan användas i extrakt-, te- eller pulverform</li>
                <li>Liknande arter från familjen Ganoderma har liknande effekter: Ganoderma applanatum & Ganoderma tsugai</li>
            </Article>
            <Article title="Sidenticka (Trametes versicolor)">
                <li>Oätlig, saprofag, medicinsk svamp som finns på döda trädstammar</li>
                <li>Innehåller oleinsyra, alkaloider, glykoproteiner, polysackarider, aromatiska och heterocykliska komponenter</li>
                <li>Leverskyddande, antimikrobiell, antiviral, antitumör, smärtstillande, immunförstärkande, antioxidant</li>
                
                <li>Vi gör te av det, vissa maler det till pulver och konsumerar det i mat eller gör ett extrakt</li>
            </Article>
            <Article title="Sprängticka (Inonotus obliquus)">
                <li>Växer på trädstammar, oftast på björk, dess sammansättning beror också på moderträdet</li>
                <li>Innehåller polysackarider, melanin, fenolföreningar, triterpener, är världens rikaste källa till antioxidanter</li>
                <li>Skyddar mot bakteriella och virussjukdomar, binder fria radikaler, mot maligna cellförökning: sarkom, melanom, lever- och kolontumörer, leukemi, lungcancer med mera; det har visat sig vara effektivt mot kroniska inflammatoriska besvär, skyddar blodkärlsväggarna, hjälper till med kroniska inflammatoriska tarmsjukdomar, hjälper till med fettomsättningen, sänker kolesterol och minskar därigenom åderförkalkning, kärlsammandragning, högt blodtryck, är blodförtunnande, förbättrar cirkulationen, bromsar blodsockerhöjningen, diabetes och är effektiv mot psoriasis</li>
                <li>Är inte ätbart, vi gör te av det, bitarna kan kokas flera gånger, tills tevattnet inte längre blir brunt, kan även användas i form av extrakt eller pulver</li>
                <li>Möglar lätt, så den måste förvaras torrt</li>
            </Article>
        </div>
    )
};

export default FloraContent;

// disabled due to fact checking, originated under "Sidenticka (Trametes versicolor)"
// <li>{`Rekommenderas vid följande behandlingar: immunbrist(HIV, HPV), cancerformer som till exempel skelettcancer, levercancer, prostatacancer, lung- och bröstcancer, reumatism, influensa, herpes, även för att stärka mjälten och levern, förbättrar utsöndringen av gifter, tar bort slem, kronisk gulsot, trötthet, inflammation i de övre luftvägarna, matsmältningsorganen och urinvägarna, stödjer cellens självförsvar genom att förhindra spridning av cancerceller, minskar biverkningarna av strålbehandling, mot åderförkalkning, diabetes, åldrande och neurodegenerativa sjukdomar: demens, Parkinsons med flera`}</li>