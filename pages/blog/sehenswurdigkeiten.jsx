import Image from 'next/image'
import stylesBlog from '/styles/Blog.module.css'
import Link from 'next/link'

export default function Sehenswurdigkeiten() {
  return (
  <div className={stylesBlog.container}>
      
        <main className={stylesBlog.main}>
        <h1 className={stylesBlog.title}>
          Sehenswurdigkeiten
        </h1>

        <p className={stylesBlog.description}>
          Hier findest du eine Liste mit allen Dingen, die du in Mexiko machen kannst.
        </p>
        <p>Wenn du auf die Fotos klickst, wirst du zu Google Maps weitergeleitet.</p>

        

        <Link href="/" ><a className={stylesBlog.zuruck}>Zurück</a></Link>

        <div className={stylesBlog.grid}>
          <a href="https://goo.gl/maps/6qjTXzT77LLf2s5H9" target="_blank" className={stylesBlog.card}>
            <h2>Zócalo</h2>
            <Image src="/zocalo-cdmx.jpg" alt="Zocalo Mexico" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Mach viele Fotos am Mittag und in der Nacht. 
              Die Gebäude sind mit Lichtern geschmückt.</p>
          </a>

          <a href="https://goo.gl/maps/DrUba94cAnarVLKw8" target="_blank" className={stylesBlog.card}>
            <h2>Kathedrale</h2>
            <Image src="/catedral-de-mexico.jpg" alt="Catedral de la CDMX" height={300} width={300} />
            <p>Das ist eine schöne Kathedrale. Diese Kathedrale symbolisiert die Vereinigung 
              zwischen dem europäischen Glauben und den Traditionen der Azteken. 
              Die Jungfrau von Guadalupe ist die am meisten verehrte in Lateinamerika.</p>
          </a>

          <a href="https://goo.gl/maps/UwCYUaZNFKiTCcRt5" target="_blank" className={stylesBlog.card}>
            <h2>Museum Templo Mayor</h2>
            <Image src="/templo-mayor.jpg" alt="Templo Mayor" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <br />
            <p>
                Dieser Ort ist nur Geschichte. Repräsentiert die drei großen Epochen Mexikos:
                <ol>
                  <li>
                      Die Azteken (untere Ebene des Boden)</li>
                  <li>
                      Die Eroberung der Spanier (die Zerstörung der Pyramiden und die Errichtung 
                      von Palacio Nacional und die Kathedrale
                  </li>
                  <li>
                      Die moderne Stadt und Gesellschaft (unser Leben jetzt als Mexikaner und du jetzt hier und deine Erfahrung)
                  </li>
                </ol>
            </p>
            <br />
            <p>Keine Getränke sind erlaubt!!!!!</p>
          </a>


          <a href="https://goo.gl/maps/6qjTXzT77LLf2s5H9" target="_blank" className={stylesBlog.card}>
            <h2>Madero Straße</h2>
            <Image src="/madero.jpg" alt="Calle Madero CDMX" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Madero ist eine Fußgängerzone, wo du La Torre Latino, Los Azulejos Gebäude treffen kannst.
              Das ist ein Muss!
            </p>
          </a>

          <a href="https://goo.gl/maps/YXBdhGZma7q3gYB77" target="_blank" className={stylesBlog.card}>
            <h2>Alameda Central</h2>
            <Image src="/alameda-central.jpg" alt="Alameda Central" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>Laufe durch die Alameda Central und genieße die Brunnen. 
              Vielleicht siehst du die Kinder, die dort schwimmen. LOL. 
              Da gibt es auch eine kleine Kiosco.</p>
          </a>

          <a href="https://g.page/munal-inba?share" target="_blank" className={stylesBlog.card}>
            <h2>Museo Nacional de Arte (MUNAL)</h2>
            <Image src="/munal.jpg" alt="Museo Nacional de Arte" height={300} width={300} />
            <p>
            Es ist ein sehr schönes Museum, sehr groß. Besuche es doch, wenn ihr Zeit habt. 
            Aber versucht mal, um ein paar Fotos da zu machen. Es ist eine Straße hinter dem Torre Latinoamericana.
            </p>
          </a>

          <a href="https://goo.gl/maps/dTiMKBaufoJfp2s1A" target="_blank" className={stylesBlog.card}>
            <h2>Bellas Artes</h2>
            <Image src="/bellas-artes.jpg" alt="Bellas Artes" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>
            Das monumentale Gebäude gilt als das höchste und wichtigste Kulturhaus Mexikos, 
            das sowohl dem Theater, dem Tanz, der Musik und Oper, den visuellen Künsten, 
            der Literatur und der Architektur geweiht ist. Die UNESCO erklärte das Bauwerk deswegen 1987 zum Kunstmonument. 
            </p>
          </a>

          <a href="https://goo.gl/maps/GLZY5Jf3SuDtxVNTA" target="_blank" className={stylesBlog.card}>
            <h2> Casa de los Azulejos </h2>
            <Image src="/azulejos.jpg" alt="Alameda Central" height={300} width={300} />
            <p>
            Die Casa de los Azulejos ("Haus der Fliesen") oder Palacio de los Condes del Valle de Orizaba (Palast der Grafen des Tals von Orizaba) ist ein Barockpalast aus dem 18. Jahrhundert in Mexiko-Stadt, der vom Grafen des Valle de erbaut wurde Orizaba-Familie. Das Gebäude zeichnet sich durch seine Fassade aus, die an drei Seiten mit blau-weißen kolonialen Talavera-Fliesen aus dem Bundesstaat Puebla verkleidet ist.
            </p>
          </a>

          <a href="https://goo.gl/maps/su1Fd7SQD3uLtnux8" target="_blank" className={stylesBlog.card}>
            <h2>Mirador Torre Latinoamericana</h2>
            <Image src="/mirador.jpg" alt="Mirador Torre Latinoamericana" height={300} width={300} />
            <p>
            🔥 Ein Muss, nur, ob du Fotos machen von oben machen willst
            </p>
          </a>

          <a href="https://g.page/MuseoArtePopular?share" target="_blank" className={stylesBlog.card}>
            <h2>Museo de Arte Popular (MAP)</h2>
            <Image src="/map.jpg" alt="Museo de Arte Popular" height={300} width={300} />
            <p>
            Das Museo de Arte Popular (Museum für Volkskunst) ist ein Museum in Mexiko-Stadt, Mexiko, das einen Teil des mexikanischen Kunsthandwerks und der Volkskunst fördert und bewahrt. 
            Das Museum verfügt über eine Sammlung, die Textilien, Töpferwaren, Glas, Piñatas, Alebrijes, Möbel und vieles mehr umfasst.
            </p>
          </a>

          <a href="https://goo.gl/maps/zq888X8YwjeT2EhAA" target="_blank" className={stylesBlog.card}>
            <h2>Monumento a la Revolución</h2>
            <Image src="/revo.jpg" alt="Monumento a la Revolución" height={300} width={300} />
            <p>
            Das Monumento a la Revolución (Denkmal der Revolution) ist ein großes Bauwerk aus den 1930er Jahren im Zentrum der mexikanischen Hauptstadt Mexiko-Stadt zur Erinnerung an die Mexikanische Revolution und Ehrengrabstätte ihrer Revolutionäre. 
            </p>
          </a>

          <a href="https://goo.gl/maps/YbM883L5T5424mFL6" target="_blank" className={stylesBlog.card}>
            <h2>El Ángel de la Independencia</h2>
            <Image src="/angel.jpg" alt="El Ángel de la Independencia" height={300} width={300} />
            <p>
            El Ángel de la Independencia, bzw. das Monumento a la Independencia, ist ein Denkmal in Mexiko-Stadt, das sich auf einem Kreisverkehr beim Paseo de la Reforma in der Innenstadt befindet.
            </p>
          </a>

          <a href="https://goo.gl/maps/siaHkoczzcoH4ro59" target="_blank" className={stylesBlog.card}>
            <h2>Zona Rosa</h2>
            <Image src="/zona-rosa.jpg" alt="Zona Rosa" height={300} width={300} />
            <p>
            Die Zona Rosa ist ein Viertel, wo man die LGBT+Szene finden kann.
            </p>
          </a>

          <a href="https://goo.gl/maps/ZKP9grFTAy9PUjBS7" target="_blank" className={stylesBlog.card}>
            <h2>Fuente de Cibeles</h2>
            <Image src="/cibeles.jpg" alt="Fuente de Cibeles" height={300} width={300} />
            <p>
            Der Cybele-Brunnen (spanisch: Fuente de Cibeles) in Mexiko-Stadt ist eine bronzene Nachbildung des Brunnens auf der Plaza de Cibeles in Madrid, der während der Regierungszeit Karls III. von dem Architekten Ventura Rodríguez zwischen 1777 und 1792 erbaut wurde. Die mexikanische Version befindet sich an einem Kreisverkehr auf der Plaza Villa de Madrid, wo die Straßen Oaxaca, Durango, Medellín und El Oro in Colonia Roma zusammenlaufen.
            </p>
          </a>

          <a href="https://goo.gl/maps/j43YVdvmsaAZPr5x8" target="_blank" className={stylesBlog.card}>
            <h2>Pirámides de Teotihuacán</h2>
            <Image src="/teotihuacan.jpg" alt="Pirámides de Teotihuacán" height={300} width={300} />
            <p>🔥 Ein MEGA Muss!!!
                  NUR GESCHICHTE
            </p>
            <p>
            Die Pirámides de Teotihuacán (spanisch: Pirámides de Teotihuacán) sind eine archäologische Stätte in Mexiko-Stadt. Sie liegen im Stadtteil Teotihuacán und wurden 2007 zum Weltkulturerbe der UNESCO erklärt. Sie sind bekannt für ihre Pyramiden.
            </p>
          </a>

          <a href="https://goo.gl/maps/q9UK4GcFT4uMLQ29A" target="_blank" className={stylesBlog.card}>
            <h2>Castillo de Chapultepec</h2>
            <Image src="/castillo.jpg" alt="Castillo de Chapultepec" height={300} width={300} />
            <p>
            🔥 Ein Mega Muss!!!
              Nicht verpassen!
              Da haben wir die Geschichte zwischen die Azteken, Spanier, sogar Österreich.
              Der Bosque de Chapultepec ist der grösste Park in Mexiko-Stadt, 
              mit einem reichhaltigen kulturellen Angebot und Sehenswürdigkeiten 
              wie das Chapultepec-Schloss, der Botanische Garten, der Zoo und 
              das Nationalmuseum für Anthropologie.
            </p>
          </a>

          <a href="https://goo.gl/maps/XjWjCfWgSA7TReNL6" target="_blank" className={stylesBlog.card}>
            <h2>Monumento a Los Niños Heroes</h2>
            <Image src="/ninos-heroes.jpg" alt="Monumento a Los Niños Heroes" height={300} width={300} />
            <p>
            Das Monumento a Los Niños Héroes (Denkmal der Kinderhelden) ist ein Denkmal in Mexiko-Stadt, das an die Kinder erinnert, die während der Schlacht von Chapultepec im Mexikanisch-Amerikanischen Krieg starben.
            </p>
          </a>

          <a href="https://goo.gl/maps/44WFa1YQ7ybA5BWm7" target="_blank" className={stylesBlog.card}>
            <h2>Lago de Chapultepec</h2>
            <Image src="/lago.jpg" alt="Lago de Chapultepec" height={300} width={300} />
            <p>🔥 Ein Mega Muss!!!</p>
            <p>
            Der Chapultepec-See (spanisch: Lago de Chapultepec) ist ein See im Chapultepec-Park in Mexiko-Stadt. Er ist 1,5 km lang und 1 km breit und hat eine Fläche von 1,5 km². Er ist 20 m tief und hat eine maximale Tiefe von 30 m. Der See ist mit dem Chapultepec-Schloss verbunden.
            </p>
          </a>

          <a href="https://goo.gl/maps/n1Zg6d6j4Qb9pKse7" target="_blank" className={stylesBlog.card}>
            <h2>Zoológico de Chapultepec</h2>
            <Image src="/zoologico.jpg" alt="Lago de Chapultepec" height={300} width={300} />
            <p>
            Der Chapultepec-Zoo (spanisch: Zoológico de Chapultepec) ist ein Zoo in Mexiko-Stadt. Er liegt im Chapultepec-Park und ist einer der ältesten Zoos der Welt. Er wurde 1929 eröffnet und ist seit 1934 Teil des Nationalmuseums für Anthropologie.
            </p>
          </a>

          <a href="https://goo.gl/maps/dTiMKBaufoJfp2s1A" target="_blank" className={stylesBlog.card}>
            <h2>Museo de Antropología</h2>
            <Image src="/antropologia.jpg" alt="Castillo de Chapultepec" height={300} width={300} />
            <p>🔥 Ein Mega Muss!!!</p>
            <p>
            Das Nationalmuseum für Anthropologie (spanisch: Museo Nacional de Antropología) ist ein Museum in Mexiko-Stadt. Es ist eines der bedeutendsten Museen der Welt für die präkolumbianische Kultur und die Geschichte Mexikos. Es befindet sich im Chapultepec-Park und ist seit 1934 Teil des Chapultepec-Zoos.
            </p>
          </a>

          <a href="https://goo.gl/maps/Augusm2SxyMPQnwe8" target="_blank" className={stylesBlog.card}>
            <h2>Auditorio Nacional</h2>
            <Image src="/auditorio.jpg" alt="Auditorio Nacional" height={300} width={300} />
            <p>
            Das Nationaltheater (spanisch: Auditorio Nacional) ist ein Konzerthaus in Mexiko-Stadt. Es wurde 1952 von dem Architekten Pedro Ramírez Vázquez erbaut und ist eines der wichtigsten Konzerthäuser Lateinamerikas.
            </p>
          </a>

          <a href="https://g.page/elmuseosoumaya?share" target="_blank" className={stylesBlog.card}>
            <h2>Museo Soumaya</h2>
            <Image src="/soumaya.jpg" alt="Museo Soumaya" height={300} width={300} />
            <p>
            Das Museo Soumaya (spanisch: Museo Soumaya) ist ein Museum in Mexiko-Stadt. Es wurde 1999 von Carlos Slim Helú eröffnet und ist nach dem mexikanischen Geschäftsmann Carlos Slim benannt. Es ist eines der bedeutendsten Museen der Welt für moderne Kunst.
            </p>
          </a>

          <a href="https://goo.gl/maps/a8BkxKTTZT1jEbhC7" target="_blank" className={stylesBlog.card}>
            <h2>Parque México</h2>
            <Image src="/parque-mexico.jpg" alt="Parque México" height={300} width={300} />
            <p>
              Der Bereich ist sehr schön, um spazieren zu gehen und sich zu entspannen. Es gibt auch viele Geschäfte und Restaurants.
            </p>
          </a>

          <a href="https://goo.gl/maps/hRm5axhpkGRRHxax6" target="_blank" className={stylesBlog.card}>
            <h2>Mercado Roma</h2>
            <Image src="/mercad-roma.jpg" alt="Mercado Roma" height={300} width={300} />
            <p>
              Du kannst hier sicher mexikanisches gourmet Essen und Getränke. Es gibt auch viele Geschäfte und Restaurants.
            </p>
          </a>

          <a href="https://goo.gl/maps/J6KjpWidC8FADNKMA" target="_blank" className={stylesBlog.card}>
            <h2>Coyoacán</h2>
            <Image src="/coyoacan.jpg" alt="Coyoacán" height={300} width={300} />
            <p>🔥 Ein Mega Muss!!!</p>
            <p>
            Coyoacán ist ein Stadtteil von Mexiko-Stadt. Er liegt im Südwesten der Stadt und ist nach dem mexikanischen Maler Diego Rivera benannt. Er ist bekannt für seine vielen Parks und Museen.
            </p>
          </a>

          <a href="https://goo.gl/maps/1gos7Bg5NpRXAiFaA" target="_blank" className={stylesBlog.card}>
            <h2>Mercado de Coyoacán</h2>
            <Image src="/mercado-coyoacan.jpg" alt="Mercado de Coyoacán" height={300} width={300} />
            <p>
            Der Mercado de Coyoacán (spanisch: Mercado de Coyoacán) ist ein Markt in Mexiko-Stadt. Er liegt im Stadtteil Coyoacán und wurde 1930 eröffnet. Er ist einer der ältesten Märkte der Stadt.
            </p>
          </a>

          <a href="https://goo.gl/maps/CxPqmE36YYvzaA1HA" target="_blank" className={stylesBlog.card}>
            <h2>Museo de Frida Kahlo</h2>
            <Image src="/frida.jpg" alt="Museo de Frida Kahlo" height={300} width={300} />
            <p>
            Das Museo Frida Kahlo (spanisch: Museo Frida Kahlo) ist ein Museum in Mexiko-Stadt. Es ist nach der mexikanischen Malerin Frida Kahlo benannt und befindet sich in ihrem ehemaligen Wohnhaus in der Colonia Coyoacán.
            </p>
          </a>

          <a href="https://goo.gl/maps/KJ6G7VE3HhsmH7q89" target="_blank" className={stylesBlog.card}>
            <h2>Ciudad Universitaria (CU)</h2>
            <Image src="/cu.jpg" alt="Ciudad Universitaria" height={300} width={300} />
            <p>🔥 Ein Mega Muss!!!</p>
            <p>
            Die Ciudad Universitaria (spanisch: Ciudad Universitaria) ist ein Stadtteil von Mexiko-Stadt. Er liegt im Südwesten der Stadt und ist nach der Universidad Nacional Autónoma de México benannt. Er ist bekannt für seine vielen Universitäten und Museen.
            </p>
            <p>Dort habe ich mein Studium absolviert.</p>

          </a>

          <a href="https://goo.gl/maps/MbPGi36xHWPg44Yx6" target="_blank" className={stylesBlog.card}>
            <h2>Xochimilco</h2>
            <Image src="/xochimilco.jpg" alt="Xochimilco" height={300} width={300} />
            <p>🔥 Ein Muss!!!</p>
            <p>MUSIK, ESSEN UND FREUNDSCHAFT findest du dort sicher.</p>
            <p>
             Die Xochimilcos Trajineras sind die typischen mexikanischen Schiffe, 
             die mit bunten Blumen geschmückt sind und von einem Mann oder einer Frau gesteuert werden. 

            </p>
          </a>

        </div>
        <Link href="/" ><a className={stylesBlog.zuruck}>Zurück</a></Link>
      </main>
  </div>
  )
}