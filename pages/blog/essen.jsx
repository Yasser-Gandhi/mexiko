import Image from 'next/image'
import stylesEssen from '/styles/Essen.module.css'
import Link from 'next/link'

export default function Essen() {
  return (
  <div className={stylesEssen.container}>
      
        <main className={stylesEssen.main}>
        <h1 className={stylesEssen.title}>
          Essen
        </h1>

        <p>
          Hier findest du eine Liste mit allen Dingen, die du in Mexiko machen kannst.
        </p>

        <p className={stylesEssen.hinweisePink}>
        Alle Gerichte, die ich empfehle, findet man in beiden Städten: <strong className={stylesEssen.span}>CDMX und Oaxaca</strong>. 
        <p className={stylesEssen.hinweisePink}>
        Ich habe an jedem Gericht ein Etikett verankert, 
        wo du dieses Gericht lieber probieren solltest, weil es aus dieser Region stammt.
        <strong className={stylesEssen.span}> Ein Bild sagt mehr als tausend Worte.</strong>
        </p>
        Ich hoffe, du schmeckst wirklich mexikanisches Essen. 
        Es gibt immer etwas Neues zu probieren.
        </p>

        <p className={stylesEssen.tipp}>
        MEINE BESTE EMPFEHLUNG: Probiere doch mal alles, was du in Mexiko kannst, 
        ohne Angst vor Scharfem und wenn es Zitrone gibt, 
        drück mal sie auf die Speise, sie schmeckt viel besser.
        </p>

        <Link href="/" ><a className={stylesEssen.zuruck}>Zurück</a></Link>
        <h2 className={stylesEssen.titleH2}>
          Frühstück
        </h2>
        <div className={stylesEssen.grid}>
          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Chilaquiles</h2>
            <Image src="/chilaquiles.jpg" alt="Chilaquiles" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Frittierte Tortillas mit Soße und Hähnchen oder Eier als Beilage. Sehr Lecker</p>
            <span className={stylesEssen.badget}>CDMX</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Tamales</h2>
            <Image src="/tamal-maiz.jpg" alt="Tamales" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>
            Eine Tamale oder Tamal (aus dem Nahuatl Tamalli) (Plural Tamales) ist ein traditionelles zentralamerikanisches Gericht, 
            das aus Masa (Maisteig) besteht, der mit Fleisch, Käse oder anderen Zutaten gefüllt und in Pflanzenblätter eingehüllt gedämpft wird. 
            Die Zubereitung durch Maya und Azteken ist für Mitte des letzten Jahrtausends nachgewiesen.
            </p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Tamal oaxaqueño</h2>
            <Image src="/tamal-oaxaqueño.jpg" alt="Comida" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Ein Tamal, aber mit anderen Blättern gemacht. Anderer Geschmack</p>
            <span className={stylesEssen.badget}>Oaxaca</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Atoles</h2>
            <Image src="/atoles.jpg" alt="Atoles" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Ein heißer Getränk aus Mais, oder Kakao. Es gibt verschiedene Sorten. Probiere mal alles, lol.</p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Fruta</h2>
            <Image src="/fruta.jpg" alt="Fruta" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Obst, aber frischer und güngstiger.</p>
            <p>Wenn du einen Mann mit einem Fahrrad mit einer Sonnenbrille siehst, der sicher Obst verkauft.</p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

        </div>

        <h2 className={stylesEssen.titleH2}>
          Mittagessen
        </h2>
        <div className={stylesEssen.grid}>

          <a href="https://goo.gl/maps/KYnqoKxUDBpznFzK7" target="_blank" className={stylesEssen.card}>
            <h2>Pozole</h2>
            <Image src="/pozole.jpg" alt="Pozole" height={300} width={300} />
            <p>🔥 Ein Mega Muss!!!</p>
            <p>Eine Suppe aus Mais mit Schweinfleisch. Du musst alle Gewürze reinmachen. Frag den Verkäufer, wie du beser
              deinen Pozole vorbereiten kannst. Er wird dir sicher helfen.
            </p>
            <p>Ich empfehle den Pozole in Potzollcalli essen. <a href="https://goo.gl/maps/KYnqoKxUDBpznFzK7" target="_blank">Hier der Link</a></p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
              <h2>Enchiladas</h2>
              <Image src="/enchiladas.jpg" alt="Enchiladas" height={300} width={300} />
              <p>🔥 Ein Muss!!!</p>
              <p>Gerollte Tortilla mit Hähnchen drin, Tomatensoße, Käse und Kopfsalat </p>
              <span className={stylesEssen.badget}>Beide</span>
          </a>
          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Mole</h2>
            <Image src="/mole.jpg" alt="Mole" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Das ost keine echte Speise, sondern eine Soße aus Schokoloda, Chili, Nüsse und andere Dinge. DAS IST WIRKLICH EIN MUSS.</p>
            <span className={stylesEssen.badget}>Oaxaca</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Tlayudas</h2>
            <Image src="/tlayudas.jpg" alt="Tlayudas" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Du musst eine "Tlayuda con tasajo y chapulines" probieren. Bestelle sie das auf Spanisch!</p>
            <span className={stylesEssen.badget}>Oaxaca</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Tacos de carnitas</h2>
            <Image src="/tacos-carnitas.jpg" alt="Comida" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Tacos mit frittiertes Schweinefleisch</p>
            <span className={stylesEssen.badget}>CDMX</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Tacos de canasta</h2>
            <Image src="/taco-canasta.jpg" alt="Comida" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Tacos mit Kartoffeln oder Bohnen. Sie sind lecker.</p>
            <span className={stylesEssen.badget}>CDMX</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Tacos de cochinita</h2>
            <Image src="/tacos-de-cochinita.jpg" alt="Comida" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Tacos mit Schweinefleisch</p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Gorditas de chicharrón</h2>
            <Image src="/gorditas_de_chicharron.jpg" alt="Gorditas de chicharrón" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>
            Eine Gordita ist ein Gericht, das aus Masa zubereitet und mit Käse, Fleisch oder anderen Füllungen gefüllt wird. 
            Es gibt zwei Hauptvariationen dieses Gerichts, von denen eine typischerweise in einem tiefen wokförmigen Comal gebraten wird, 
            Die häufigste und repräsentativste Variante dieses Gerichts ist die "Gordita de Chicharrón", 
            gefüllt mit Chicharron (ein gewürzter Eintopf aus Schweineschwarte), der in ganz Mexiko weit verbreitet ist. 
            Gorditas werden oft als Mittagsgericht gegessen und von verschiedenen Arten von Saucen begleitet.
            </p>
            <span className={stylesEssen.badget}>CDMX</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Agua de jamaica</h2>
            <Image src="/agua-jamaica.jpg" alt="Agua de jamaica" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Jamaica ist es eine mexikanische Blume. Probiere es doch mal!</p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Agua de tamarindo</h2>
            <Image src="/tamarindo.jpg" alt="Agua de tamarindo" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Tamarindo ist es ein exotisches Obst. Kein Ähnliches hast du sicher probiert. Lass es dir schmecken!</p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Agua de horchata</h2>
            <Image src="/horchata.jpg" alt="Agua de horchata" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Reis Wasser mit Milch, Zimt und Zucker.. Probiere es doch mal!</p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Agua de limón con chía</h2>
            <Image src="/agua-limon-con-chia.jpg" alt="Agua de limón con chía" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Wasser Zitrone mit Chia.</p>
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Cerveza Corona</h2>
            <Image src="/corona.jpg" alt="Cerveza Corona" height={300} width={300} />
            <p>🔥 Ein Muss als Souvenir!!!</p>
            <p>Wir haben hier verschiedene Coronas Biere.</p>
       
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Cerveza Negra Modelo</h2>
            <Image src="/modelo.jpg" alt="Cerveza Negra Modelo" height={300} width={300} />
            <p>Ein tolles Bier. Ich mag mehr das dunkle Bier Modelo.</p>
            
            <span className={stylesEssen.badget}>Beide</span>
          </a>


        </div>

        <h2 className={stylesEssen.titleH2}>
          Abendessen
        </h2>
        <div className={stylesEssen.grid}>
          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Tacos al pastor</h2>
            <Image src="/pastor.jpg" alt="Tacos al pastor" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>
              Tacos mit Schweinefleisch mit Zwiebeln, Koriander und Ananas. Du musst sie probieren!
            </p>

            <span className={stylesEssen.badget}>CDMX</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Quesadillas</h2>
            <Image src="/quesadillas.jpg" alt="Quesadillas" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>
            Die Quesadilla (etwa: Käse-Tortilla) ist eine typisch mexikanische Speise auf der Basis einer mexikanischen Tortilla. Im Original wird diese Tortilla mit Käse zubereitet, der in die Mitte einer geklappten Tortilla gelegt wird, die dann gebacken oder frittiert wird. In Mexiko-Stadt und Umgebung wird sie mit verschiedenen Zutaten wie Fleisch, Pilzen, Cuitlacoche, Kartoffeln oder Kürbisblüte zubereitet. Eine andere Zubereitungsmöglichkeit ist, die rohe Tortilla-Masse zu füllen und dann in Fett auszubacken. Wichtig ist, dass die Tortilla geklappt und nicht aufgerollt wird. 
            </p>
  
            <span className={stylesEssen.badget}>Beide</span>
          </a>

          <a href="" target="_blank" className={stylesEssen.card}>
            <h2>Tostadas</h2>
            <Image src="/tostadas.jpg" alt="Tostadas" height={300} width={300} />
            <p>🔥
            Tostada ist in der mexikanischen Küche eine knusprige Tortilla, manchmal mit Knoblauch und Tomaten bestrichen, 
            serviert mit einer Schale mit Olivenöl zum Dippen. Tostadas sind zusammen mit Tacos und Enchiladas als Antojitos 
            (kleine Gelüste) bekannt; sie waren für die mexikanische Arbeiterklasse lange Zeit eine schnelle Mahlzeit, 
            die oft an einer Straßenecke gegessen wurden.

Tostadas bilden im mexikanischen Street Food die Unterlage für zahlreiche Füllungen, meist eine Lage braunes Bohnenpüree, 
darauf eine Lage geschreddertes Fleisch und darüber frisches Gemüse und Salat, gekrönt mit geriebenem Käse und mexikanischer Salsa. Tostadas Tinga sind Snacks mit einer Füllung aus scharfem Hühnchenfleisch.
            </p>
            
            <span className={stylesEssen.badget}>Beide</span>
          </a>



        </div>
        <Link href="/" ><a className={stylesEssen.zuruck}>Zurück</a></Link>
      </main>
  </div>
  )
}