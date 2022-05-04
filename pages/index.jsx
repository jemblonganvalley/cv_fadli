import Head from "next/head";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <main className="w-screen min-h-screen flex flex-col bg-slate-100 overflow-x-hidden">
      <Head>
        <title>Fadli Selaz CV</title>
        <link rel="icon" href="/fadli_icon.ico" />
        <meta
          name="description"
          content="Selastio Fadli, Memulai karir sebagai seorang programer di tahun 2013 sebagai web
          developer. Belajar dari sebuah bootcamp programer bernama Hactive8"
        />
      </Head>
      <Menu />
      {/* HEADER */}
      <header className="w-full py-10 bg-gray-900 p-6 gap-4 flex flex-col relative items-start ">
        <div className="flex flex-col gap-4 md:max-w-[600px] md:mx-auto">
          {/* <img
          src="/assets/fadliselaz.jpg"
          alt="foto fadliselaz"
          className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        /> */}
          <p className="text-white font-light">Hello.. Perkenalkan, Saya..</p>

          <h1 className="text-orange-400 font-bold text-7xl">
            Selastio Fadli Rahman
          </h1>
          <p className="text-white font-light">
            Seorang Fullstack Javascript Developer
          </p>
          <p className="text-white font-light">
            Memulai karir sebagai seorang programer di tahun 2013 sebagai web
            developer. Belajar dari sebuah bootcamp programer bernama{" "}
            <b className="text-orange-400">Hacktive 8</b>.
          </p>

          <p className="text-white font-light">
            Dalam karier sebagai programer Javascript, saya pernah dipercaya
            beberapa perusahaan besar di Indonesia, yaitu{" "}
            <b className="text-orange-400">PT Amore Pacific</b> dengan brand
            kosmetik <b className="text-orange-400">LANEIGE</b> dan{" "}
            <b className="text-orange-400">Sulwhasoo</b>, pernah mengerjakan Web
            Portfolio <b className="text-orange-400">IDN Media</b> dan dipercaya
            oleh Partai Terbesai di Indonesia{" "}
            <b className="text-orange-400">PDI Perjuangan</b> untuk mengerjakan
            Website dan Applikasi Mobile Mereka.
          </p>
        </div>
      </header>

      {/* BIODATA */}
      <section
        id="biodata"
        className="w-full flex flex-col p-6 gap-4 py-10 md:max-w-[600px] md:mx-auto"
      >
        <h1 className="text-orange-400 font-bold text-7xl">Biodata</h1>
        <img
          src="/assets/fadliselaz2.jpg"
          alt="foto selastio fadli"
          className="w-full h-[250px] object-cover object-top filter grayscale"
        />
        <p className="text-gray-900 font-light">
          Saya lahir di <b>Jakarta, 13 Juli 1987</b>, dibesarkan di kota bernama
          Depok, tidak jauh dari Jakarta.
        </p>

        <p className="text-gray-900 font-light">
          Anak Pertama dari 3 bersaudara yang semuanya laki laki, mempunyai Ayah
          seorang Arsitek, membuat saya tidak jauh dari dunia seni dan grafis.
        </p>

        <p className="text-gray-900 font-light">
          Setelah lulus Sekolah Menengah Tingkat Pertama, di <b> SMP 181 </b>{" "}
          Jakarta, saya melanjutkan sekolah di <b> SMK Grafika </b> Jakarta
          Selatan, dengan jurusan Desain Grafis.
        </p>

        <p className="text-gray-900 font-light">
          Selanjutnya saya melanjutkan pendidikan ke{" "}
          <b>Universitas Mercu Buana </b>Jakarta, dengan Jurusan Multimedia
        </p>
      </section>

      <section
        id="karier"
        className="w-full flex flex-col p-6 gap-4 py-10 md:max-w-[600px] md:mx-auto"
      >
        <h1 className="text-orange-400 font-bold text-7xl">Karier</h1>
        <img
          src="/assets/karier1.jpg"
          alt="foto selastio fadli"
          className="w-full h-[250px] object-cover object-top filter grayscale"
        />

        <h1 className="text-orange-400 font-bold text-2xl mt-6">2013 - 2018</h1>
        <p className="text-gray-900 font-light">
          Saya memulai karier saya sebagai Branding Team pada sebuah perusahaan
          kosmetik bernama <b>Amore Pacific</b>, menangani beberapa brand
          seperti <b>Laneige</b>, <b>Sulwhasoo</b>, <b>Innisfree</b> dan{" "}
          <b>Mamonde</b>.
        </p>

        <p className="text-gray-900 font-light">
          Di Perusahaan inilah saya diberikan kesempatan untuk upgrade skill
          untuk menjadi seorang Programer, karena saat itu perusahaan sedang
          membutuhkan seorang yang bisa menghandle divisi tersebut.
        </p>

        <p className="text-gray-900 font-light">
          Oleh karena itu, Saya memutuskan untuk mengikuti Bootcamp Programing
          di <b>Hactive 8</b>, dan fokus pada pengembangan applikasi menggunakan
          Javascript.
        </p>

        <h1 className="text-orange-400 font-bold text-2xl">2018 - Saat ini</h1>
        <img
          src="/assets/karier2.png"
          alt="Membuka Bootcamp Programer Gratis Jvalley Bootcamp"
          className="w-full h-[250px] object-cover object-top filter grayscale"
        />
        <p className="text-gray-900 font-light">
          Di tahun 2018, saya memutuskan untuk berhenti bekerja, dan mendirikan
          sebuah Bootcamp Programing Gratis bernama
          <a href="https://jvalleybootcamp.com"> Jvalley Programing Bootcamp</a>
          , yang saat ini sudah memiliki siswa kurang lebih sekitar 500 orang.
        </p>

        <p className="text-gray-900 font-light">
          Selain mengajar, saya juga menjadi Freelancer di beberapa perusahaan
          seperti <b>IDN Media</b>, <b>Amore Pacific</b> tempat dulu saya
          bekerja, dan sebuah Partai Politik Terbesar di Indonesia,{" "}
          <b>PDI Perjuangan</b>.
        </p>
      </section>

      {/* SKIL SECTION  */}
      <section
        id="skill"
        className="w-full flex flex-col p-6 gap-4 py-10 md:max-w-[600px] md:mx-auto"
      >
        <h1 className="text-orange-400 font-bold text-7xl">Skill</h1>
        {/* <img
          src="https://images.pexels.com/photos/547117/pexels-photo-547117.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="foto selastio fadli"
          className="w-full h-[250px] object-cover object-top"
        />
        <small className="text-gray-500 text-xs italic">
          Foto oleh Krivec Ales dari Pexels
        </small> */}

        {/* UI  */}
        <h1
          className="text-orange-400 font-bold text-2xl mt-6"
          id="skill_ui_design"
        >
          UI Desain
        </h1>
        <img
          src="/assets/skill1.png"
          alt="Desain UI menggunakan Applikasi Figma"
          className="w-full h-[250px] object-cover object-top"
        />
        <small className="text-gray-500 text-xs italic">
          Desain UI Applikasi Mobile Hobister
        </small>
        <p className="text-gray-900 font-light">
          Background pendidikan saya yang merupakan Grafis Desain, memudahkan
          saya untuk mengimplementasikan desain UI pada sebuah applikasi
          digital.
        </p>

        <p className="text-gray-900 font-light">
          Saya terbiasa membuat sebuah prototype dengan <b>Figma</b>, sebelum
          melanjutankanya ke proses Frontend Development.
        </p>

        {/* FRONT END */}
        <h1
          className="text-orange-400 font-bold text-2xl mt-6"
          id="skill_frontend"
        >
          Frontend
        </h1>
        <p className="text-gray-900 font-light">
          Untuk Frontend Development, tentunya saya menggunakan teknologi
          Javascript, native maupun menggunakan Library atau Framework.
        </p>

        <p className="text-gray-900 font-light">
          Teknologi yang saya gunakan untuk pengembangan Web Frontend adalah :
        </p>

        <small className="text-gray-500 font-light italic font-xs">
          Silakan klik untuk detail
        </small>

        <ul className="flex flex-col">
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Express JS + View Engine</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Membuat Server Side Web dengan Express Js dan view engine
                seperti Handlebars, Jade, Ejs.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>React JS / React Native</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Membuat Single Page Application menggunakan Library React JS,
                dan terkadang membuat Progressive Web App dengan library ini.
              </p>

              <p className="text-gray-900 font-light mt-2">
                Selain itu, saya menggunakan React Native untuk pengembangan
                applikasi mobile.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Next JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Sebuah framework untuk React JS, yang mempunyai fitur server
                side rendering, untuk client yang mengedepankan fitur SEO, saya
                memilih Framework Next js ini.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Tailwind CSS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Sebuah framework CSS, yang sifatnya utility base, membuat proses
                development Frontend saya menjadi lebih cepat.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>ANT Design CSS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Untuk project project yang membutuhkan development time yang
                cepat, saya sering menggunakan ANT Design. Ant Design juga saya
                gunakan untuk membuat tampilan CMS, karena sudah menyediakan
                component component yang saya butuhkan.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Strapi Headless CMS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Strapi merupakan Framework yang fokus untuk pembuatan CMS,
                karena pembuatannya menggunakan React js, saya sangat terbantu
                ketika membuat sebuah project sederhana yang membutuhkan CMS.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Vercel Serverless</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Vercel memudahkan saya untuk tahap development applikasi web
                menggunakan teknologi Serverless, untuk project-project
                sederhana dan tidak membutuhkan resource server yang tinggi.
                Dengan fitur CICD dari vercel, proses development bisa di
                lakukan dengan cepat.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Google Firebase</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Saya menggunakan Firebase untuk kebutuhan web push notification
                dan user auth, sesekali menggunakan realtime databasenya untuk
                keperluan pengembangan applikasi web dan mobile.
              </p>
            </details>
          </li>
        </ul>

        {/* BACKEND */}
        <h1
          className="text-orange-400 font-bold text-2xl mt-6"
          id="skill_backend"
        >
          Backend
        </h1>

        <p className="text-gray-900 font-light">
          Untuk Backend, beberapa teknologi yang saya gunakan :
        </p>

        <small className="text-gray-500 font-light italic font-xs">
          Silakan klik untuk detail
        </small>

        <ul className="flex flex-col">
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Express JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Express JS Merupakan Framework backend Javascript yang paling
                saya sukai, selain ringan dan cepat, development dengan Express
                JS juga sangat mudah.
              </p>
            </details>
          </li>
          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Adonis JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Adonis saya gunakan untuk project - project fullstack web
                application, karena Framework ini sudah mempunyai fitur yang
                sangat lengkap untuk MVC.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Fastify JS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Fastify saya gunakan untuk project yang masih berkiblat kepada
                Express JS, namun membutuhkan kecepatan response data yang lebih
                cepat.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Go Fiber (Golang)</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Selain menggunakan Javascript ada beberapa bahasa pemograman
                lain yang saya gunakan, yaitu Golang, menurut saya pengembangan
                Backend dengan Golang sangat powerfull, selain cepat, golang
                juga mempunyai fitur static typing bawaan, tidak seperti
                Javascript yang harus menggunakan Typescript.
              </p>
              <p className="text-gray-900 font-light mt-2">
                Saya tidak expert di Golang, tapi sudah beberapa kali
                mengerjakan pekerjaan freelance dengan bahasa pemograman ini,
                dan saya masih terus mendalaminya.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>SQL Database </h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Menggunakan SQL database seperti MYSQL, Postgre dan SQLITE untuk
                project project yang membutuhkan relational dari masing masing
                Table nya.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Non SQL Database </h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Non SQL database saya gunakan untuk project - project yang
                membutuhkan kecepatan akses databasenya, saya biasa menggunakan
                Monggo DB dan Firestore Firebase.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Redis (Memory Database) </h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Saya menggunakan Redis untuk caching pada server, karena sifat
                penyimpanannya yang menggunakan memory, akses ke Redis sangatlah
                cepat.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Version Control Github </h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Sebagai seorang programer, penting untuk kita menguasai version
                control, saya biasa menggunakan GIT dengan Platform Github,
                untuk version control dan kerja team.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Google Cloud Platform / Amazon AWS</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Sebagai seorang Fullstack Javascript Developer, menurut saya
                penting untuk kita menguasai sedikit banyak ilmu Server
                Operation, karena Node JS berjalan di runtime Operating System,
                dimana kita harus bisa setup production code di sisi server.
              </p>

              <p className="text-gray-900 font-light mt-2">
                Saya terbiasa setup server Virtual Machine dari awal, untuk
                memastikan applikasi berjalan dengan baik di server Linux.
                Distro Linux yang saya sering gunakan adalah Debian.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Web Server Nginx / Apache</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Terbiasa menangani setup web server dengan Nginx ataupun Apache
                pada server Linux.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Jenkins (CICD)</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Untuk mempercepat proses Integrasi dan Development, saya
                terbiasa menggunakan Jenkins yang saya install di Virtual
                Machine Google Cloud Platform atau Amazon AWS.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Cloudflare</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Untuk security saya menggunakan Cloudflare sebagai masking DNS,
                selain tentunya security dari sisi code juga.
              </p>
            </details>
          </li>

          <li>
            <details className="flex flex-col gap-2 p-4">
              <summary className="flex gap-2 items-center">
                <h1>Postman</h1>
              </summary>
              <p className="text-gray-900 font-light mt-2">
                Postman adalah applikasi untuk melakukan testing API, selain itu
                saya menggunakan postman untuk membuat dokumentasi API.
              </p>
            </details>
          </li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
