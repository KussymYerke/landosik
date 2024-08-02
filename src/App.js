import * as React from "react";

function Navbar() {
  return (
    <nav className="flex relative gap-5 justify-between w-full text-base font-medium tracking-tight max-md:flex-wrap max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1924bf9380af054c82176e8dec4496fd2f2b2443696dc8d83124776afd610ad2?apiKey=f0565c05649044c09c5a9cc7ba5651cb&"
        className="shrink-0 max-w-full aspect-[4] w-[210px]"
        alt=""
      />
      <div className="flex gap-5 justify-between my-auto max-md:flex-wrap">
        <button>Кто мы</button>
        <button>Что мы делаем</button>
        <button>Наши продукты</button>
        <button>Контакты</button>
      </div>
    </nav>
  );
}

function MainSection() {
  return (
    <section className="relative self-center mt-60 text-7xl tracking-tighter uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl">
      Инновационный
    </section>
  );
}

function SubSection() {
  return (
    <section className="flex relative gap-0 self-center mt-8 w-full max-w-[1173px] max-md:flex-wrap max-md:max-w-full">
      <div className="text-7xl tracking-tighter uppercase max-md:max-w-full max-md:text-4xl">центр развития</div>
      <button
        className="ml-10 justify-center self-start px-10 py-4 text-2xl font-medium tracking-tight rounded-[1000px] w-fit max-md:px-5"
        style={{
          background: 'linear-gradient(to right, #FF00FF 0%, #0000CD 100%)'
        }}
      >
        Стать партнёром
      </button>
    </section>
  );
}

function EndingSection() {
  return (
    <section className="relative self-center mt-4 mr-16 mb-36 text-7xl tracking-tighter uppercase max-md:mr-2.5 max-md:mb-10 max-md:max-w-full max-md:text-4xl">
      идей и технологий
    </section>
  );
}

function Description({ title, description1, description2, largeDescription }) {
  return (
    <section className="flex gap-5 justify-between text-white font-thin max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
      <h2 className="self-start opacity-30 text-sm tracking-tight leading-5 uppercase whitespace-nowrap">{title}</h2>
      {(description1 || description2) && (
        <div className="flex gap-5 opacity-70 text-base leading-5 max-md:flex-wrap max-md:max-w-full">
          <p className="w-[268px]">{description1}</p>
          <p className="w-[268px] flex-auto self-start">{description2}</p>
        </div>
      )}
      {(largeDescription) && (
        <h1 className="w-[80%] text-2xl uppercase font-extralight text-justify">{largeDescription}</h1>
      )}
    </section>
  );
}

function Card({ imageSrc, title, description }) {
  return (
    <div className="flex flex-col grow px-5 py-5 text-sm text-white rounded-3xl border border-solid border-white border-opacity-20 max-md:mt-6">
      <img loading="lazy" src={imageSrc} className="w-20 aspect-square" alt="" />
      <h3 className="mt-6 tracking-tight uppercase leading-[130%]">{title}</h3>
      <p className="mt-3 leading-5">{description}</p>
    </div>
  );
}

function Image({ src, widthClass, heightClass, aspectClass }) {
  return (
    <img
      loading="lazy"
      src={src}
      className={`${widthClass} ${heightClass} ${aspectClass}`}
      alt=""
    />
  );
}

function ProductCard({ src, title, description }) {
  return (
    <div className="flex gap-5 px-5 py-4 mt-4 border-t border-solid border-white border-opacity-20 max-md:flex-wrap">
      <div className="flex-1 self-start text-base font-medium tracking-tight leading-5">
        {title}
      </div>
      <div className="flex-1 text-sm leading-5 opacity-60 font-thin">{description}</div>
    </div>
  );
}

function ProductDetails({ title, description }) {
  return (
    <section className="flex flex-col grow text-white max-md:mt-6 max-md:max-w-full">
      <ProductCard title="Uni-x" description="Образовательная платформа для различных учебных организаций" />
      <ProductCard title="Cartera" description="Краткое описание продукта длинной в восемь - десять слов" />
      <ProductCard title="Smart house system" description="Платформа для различных учебных организаций" />
      <ProductCard title="Building navigation system" description="Краткое описание продукта длинной в восемь слов" />
      <ProductCard title="FDBK" description="Образовательная платформа для различных учебных организаций" />
      <ProductCard title="Робот - Найза" description="Краткое описание продукта длинной в восемь - десять слов" />
      <ProductCard title="Дрон" description="Платформа для различных учебных организаций" />
      <ProductCard title="Fire detection algorithm" description="Краткое описание продукта длинной в восемь слов" />
    </section>
  );
}

function Products() {
  return (
    <main className="px-5 w-[80%] mx-auto">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <section className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
          <h2 className="text-sm tracking-tight leading-5 text-white opacity-30 font-thin uppercase max-md:mt-10">
            Наши продукты
          </h2>
        </section>
        <section className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
          <figure className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[32%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col justify-center items-center self-stretch my-auto w-full bg-white rounded-3xl aspect-square max-md:mt-10">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9773c704b1b2bb7fde764fd1e6d5295cc07c2f194547fdc1f148c2b62ce1c74e?apiKey=f0565c05649044c09c5a9cc7ba5651cb&"
                  alt=""
                  className="w-full aspect-square rounded-xl"
                />
              </div>
            </div>
            <ProductDetails />
          </figure>
        </section>
      </div>
    </main>
  );
}


function PartnerLogos() {
  const logos = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e36f0fafbd0a3706b825562b34fd41b085aa3c9ca59edbfbc88572a532cac4fc?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/77b08af8137f0f4fd41363d95c6ec6184d18326c46c2b1853925c8ed1f5354d5?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/2d45c5667a352ef0dcb82e596c62b7bc1e12072473ad333177a4566f47ed8e31?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d062d35da9eb7bb2dc0bed4a12159eb33e14fa037ce180dbf95b5633f21fa334?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/64145af4aa471721e707d39a4faefee65b775571f4925e5ae8df2c7c1110d69d?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7ca53ddeb7d1cba7e7b230014f3c1d0488ac5eb1411f0cc88cbe63fb49851e4b?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ac78ce0c73e27a5a65bb7af6e8581dbdcee23235a6c93f960d8fd1f17008ac42?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/2a2572f8765129625d8de83aa07f8709e690c12157ac4f9ed3423f23daa7affa?apiKey=f0565c05649044c09c5a9cc7ba5651cb&",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/e1546d0d44e81f1e000e904108910e4f6c048ceaab9618bdd283cd6cd3c07483?apiKey=f0565c05649044c09c5a9cc7ba5651cb&"
  ];

  return (
    <section className="flex gap-5 justify-between mt-11 flex-wrap max-md:mt-10 mx-auto w-[80%]">
      {logos.map((logo, index) => (
        console.log(logo, index),
        <Image
          key={index}
          src={logo}
          widthClass={ index === 2 || index === 6 ? "w-[217px]" : "w-[346px]"}
          heightClass={index === 1 || index === 4 ? "w-[217px]" : ""}
          aspectClass={
            index === 0 || index === 2 || index === 6 || index === 8
              ? "aspect-[1.59]"
              : "aspect-square"
          }
        />
      ))}
    </section>
  );
}

function FormGroup({ label, id, isTextarea }) {
  const inputClasses = "bg-transparent border-b-2 border-white text-white placeholder-gray-300 focus:outline-none w-full";
  return (
    <div className="mb-4">
      <label htmlFor={id} className="sr-only">{label}</label>
      {isTextarea ? (
        <textarea id={id} className={inputClasses} placeholder={label} aria-label={label} rows="3" />
      ) : (
        <input type="text" id={id} className={inputClasses} placeholder={label} aria-label={label} />
      )}
    </div>
  );
}

function ContactForm() {
  return (
    <div className="bg-black p-10 text-white w-full max-w-4xl mx-auto">
      <form className="flex flex-col">
        <FormGroup id="phone-number" label="Номер телефона" />
        <div className="flex gap-4 mb-4">
          <FormGroup id="name-1" label="Имя" />
          <FormGroup id="name-2" label="Имя" />
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="privacy-policy" className="w-5 h-5 text-blue-500" />
          <label htmlFor="privacy-policy" className="ml-2 text-sm">
            Я ознакомлен с <span className="underline">политикой конфиденциальности</span> и согласен на обработку моих персональных данных
          </label>
        </div>
        <button className="bg-white text-black px-8 py-2 rounded-full self-center hover:bg-gray-300 transition-colors">
          Стать партнёром
        </button>
      </form>
    </div>
  );
}


function FooterContact() {
  return (
    <footer className="flex gap-5 items-start mt-5 w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-5 justify-between self-stretch text-base leading-5 text-white max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/88c467dbac8b1c6c4cbd41e97baea1f8424b87055f5a1e1b2b7701d7dbd0b82b?apiKey=f0565c05649044c09c5a9cc7ba5651cb&"
          className="shrink-0 max-w-full aspect-[4] w-[210px]"
          alt=""
        />
        <div className="flex flex-col">
          <p>+7 776 800 0633</p>
          <p className="mt-2.5">+7 707 667 3710</p>
        </div>
      </div>
      <div className="flex gap-5">
        <p className="flex-auto my-auto text-base leading-5 text-white">almavalleyhub@gmail.com</p>
        <div className="flex gap-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d343cb8c89e4c9bf76a4531e2990978b0967e5a48deb60352a7d8a8333e0ff?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" className="shrink-0 w-6 aspect-square" alt="" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebfdc75a7c2122e4704e17dff735d1bdc5059e8ed5478d06f356ab8509ef30c2?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" className="shrink-0 w-6 aspect-square" alt="" />
        </div>
      </div>
      <p className="flex-auto text-sm leading-5 text-right text-white">
        © 2022 AlmaValley. Все права защищены.
      </p>
    </footer>
  );
}

function App() {
  return (
    <div className="flex flex-col pb-5 bg-black">
      <div className="flex overflow-hidden relative flex-col px-20 pt-5 pb-20 w-full text-white leading-[130%] min-h-[900px] max-md:px-5 max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/54540ba9f5d00bafe8474ab2c18e14e88168f140dc58f015c704d6ab5fadc1b5?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" className="object-cover absolute inset-0 size-full" alt="" />
        <Navbar />
        <MainSection />
        <SubSection />
        <EndingSection />
      </div>
      <section className="flex flex-col mb-20 gap-10 mt-7 w-[80%] mx-auto px-5">
        <Description
          title="Кто мы"
          description1="Alma Valley - это сообщество творческих индивидуумов, стремящихся к постоянному развитию и воплощению новаторских идей в жизнь."
          description2="Мы верим в силу инноваций и совместного творчества, чтобы преобразовывать мир вокруг нас."
        />
      </section>
      <section className="flex flex-col mb-50 gap-10 mt-7 w-[80%] mx-auto px-5">
        <Description
            title="Что мы делаем"
            largeDescription="Мы занимаемся разработкой передовых технологий, обучаем новым навыкам и знаниям через образовательные программы и способствуем развитию робототехники."
        />
      </section>
      <section className="mt-36 max-md:mt-10 w-[80%] mx-auto">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <Card imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a5e50f40de6a0b440b2b27cfd179d8a892c7f862015cdccafb75f4c82b21dc18?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" title="Разработка" description="Мы занимаемся разработкой передовых технологий" />
          <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
            <p className="text-base leading-5 text-white font-thin max-md:mt-6 opacity-70">
              Наши направления включают в себя 3D-технологии и компьютерное зрение, открывая бесконечные возможности для инноваций.
            </p>
          </div>
          <Card imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/0d037d0b0b619493522eb8844ed147e266abd28a9e0df81afc32e24de80756f3?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" title="Образование" description="Мы обучаем новым навыкам и знаниям" />
          <Card imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/09f8a6f46f3d403c19d4a5604d696036b16d0f6a708c8412934b127eb461b814?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" title="Робототехника" description="Мы способствуем развитию робототехники" />
        </div>
      </section>
      <section className="self-center mt-6 max-w-full w-[562px] mb-32">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <Card imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1a39c3aebc356ba7458d76bdc769a7949f5a66702f8bab69e90679d277a67b10?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" title="3д - технологии" description="Мы занимаемся разработкой передовых технологий" />
          <Card imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/43ec0e662b10b0bbf0bda30db18b132834dca78d0ca0515c7c1cb4ad7d9791ad?apiKey=f0565c05649044c09c5a9cc7ba5651cb&" title="Компьютерное зрение" description="Мы занимаемся разработкой передовых технологий" />
        </div>
      </section>
      <Products/>
      <PartnerLogos />
      <div className="flex gap-5 mt-40 text-white uppercase leading-[130%] max-md:flex-wrap max-md:mt-10 w-[80%] mx-auto">
        <h2 className="self-start text-sm tracking-tight font-thin opacity-30">Обратная связь</h2>
        <h2 className="self-end text-3xl tracking-tighter max-md:max-w-full ml-72">
          Хотите стать частью нашего сообщества
        </h2>
      </div>
      <section className="self-end mt-3.5 mr-36 text-3xl tracking-tighter leading-10 text-white uppercase w-[854px] max-md:mr-2.5 max-md:max-w-full">
        и вместе с нами вносить вклад в развитие инноваций?
      </section>
      <form className="flex justify-between mt-11 w-full max-md:px-5 max-md:mt-10 w-[80%] mx-auto">
        <p className="flex-auto self-start leading-5 text-white opacity-50 w-[10%]">
          Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время!
        </p>
        <ContactForm />
      </form>
      <hr className="shrink-0 mt-36 h-px border border-solid bg-white bg-opacity-20 border-white border-opacity-20 max-md:mt-10 max-md:max-w-full" />
      <FooterContact />
    </div>
  );
}

export default App;