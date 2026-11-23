"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";


export default function Home() {
  const [voxMentorestado, setVoxMentorEstado] = useState("oculto");
  const [cleanDataestado, setCleanDataEstado] = useState("oculto");
  const [sindromeXFragilestado, setSindromeXFragilEstado] = useState("oculto");
  const bolhas = Array.from({ length: 20 });
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [idioma, setIdioma] =useState("pt");
  const [menuAberto, setMenuAberto] = useState(false);
  const enviarEmail = () => {
  const assunto = encodeURIComponent("Contato pelo portfólio");

  const corpo = encodeURIComponent(
  `Nome: ${nome}
  Email: ${email}

  Mensagem:
  ${mensagem}`
    );

      const url = `https://mail.google.com/mail/?view=cm&fs=1&to=chrissasaoka8257@gmail.com&su=${assunto}&body=${corpo}`;

      window.open(url, "_blank");
    };
  return (
    <main className="bg-black text-white">

      <header 
        className="fixed top-0 left-0 w-full z-50 text-emerald-500 flex items-center justify-between px-6 md:px-10 py-6 backdrop-blur-md"
      >
        <p>
          Chris.Dev
        </p>

        {/* Desktop */}
        <nav className="hidden md:flex gap-9">
          <a href="#Inicial">
            {idioma === "pt" ? "Inicial" : "Initial"}
          </a>

          <a href="#Sobre">
            {idioma === "pt" ? "Sobre mim" : "About me"}
          </a>

          <a href="#Tecnologias">
            {idioma === "pt" ? "Tecnologias" : "Technologies"}
          </a>

          <a href="#Projetos">
            {idioma === "pt" ? "Projetos" : "Projects"}
          </a>

          <a href="#Contato">
            {idioma === "pt" ? "Contato" : "Contact"}
          </a>
        </nav>

        <button
          onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}
          className="hidden md:block cursor-pointer"
        >
          {idioma === "pt" ? "EN" : "PT"}
        </button>

        {/* Mobile */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="md:hidden text-2xl cursor-pointer"
        >
          ☰
        </button>

        {/* Menu mobile */}
        {menuAberto && (
          <nav className="absolute top-full left-0 w-full bg-zinc-950 flex flex-col items-center gap-6 py-6 md:hidden">
            <a href="#Inicial" onClick={() => setMenuAberto(false)}>
              {idioma === "pt" ? "Inicial" : "Initial"}
            </a>

            <a href="#Sobre" onClick={() => setMenuAberto(false)}>
              {idioma === "pt" ? "Sobre mim" : "About me"}
            </a>

            <a href="#Tecnologias" onClick={() => setMenuAberto(false)}>
              {idioma === "pt" ? "Tecnologias" : "Technologies"}
            </a>

            <a href="#Projetos" onClick={() => setMenuAberto(false)}>
              {idioma === "pt" ? "Projetos" : "Projects"}
            </a>

            <a href="#Contato" onClick={() => setMenuAberto(false)}>
              {idioma === "pt" ? "Contato" : "Contact"}
            </a>

            <button
              onClick={() => setIdioma(idioma === "pt" ? "en" : "pt")}
              className="cursor-pointer"
            >
              {idioma === "pt" ? "EN" : "PT"}
            </button>
          </nav>
        )}
      </header>



      <section 
        id="Inicial"
        className="relative min-h-[80vh] bg-zinc-950 overflow-hidden"
        style={{clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)"}}
      >
      
      {bolhas.map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 1.2],
          }}
          transition={{
            duration: 1.5 + (i % 3),
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
          className="absolute rounded-full blur-xl bg-emerald-400/50"
          style={{
            width: `${20 + (i % 5) * 10}px`,
            height: `${20 + (i % 5) * 10}px`,
            top: `${(i * 13) % 90}%`,
            left: `${(i * 17) % 90}%`,
          }}
        />
      ))}

      <div className="flex min-h-[80vh]">

        <div className="w-1/2 flex items-center justify-center">
          <div className="max-w-xl text-center">
            <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-5xl font-bold relative z-10">
              Full Stack Developer & CS Student
            </motion.h1>

            <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-lg text-gray-400 mt-6 relative z-10">
              {idioma === "pt"
              ? "Curto pegar uma ideia solta e transformar em algo que realmente funcione. É assim que eu mais gosto de aprender"
              : "I really like to take an loose idea and transform it into something that really works. Thats how i like to learn"}
            </motion.p>

            <div className="flex gap-6 items-center justify-center">
                <motion.a 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                href="#Projetos"
                className="border border-emerald-700 rounded-xl p-5 mt-6">
                  {idioma === "pt"
                  ? "Ver projetos"
                  : "View projects"}
                </motion.a>


                <motion.a
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }} 
                href="#Contato"
                className="border border-emerald-700 rounded-xl p-5 mt-6">
                  {idioma === "pt"
                  ? "Contato"
                  : "Contact"}
              </motion.a>
            </div>
          </div>
        </div>

        

        <motion.div 
        animate={{ y: [0, -6, 0]}}
        transition={{duration: 3, repeat:Infinity, ease:"easeInOut"}}
        className="w-1/2 flex items-center justify-center relative z-10">
          <Image
            src="/Portfolio/eu.png"
            alt="Avatar"
            width={300}
            height={300}
          />
        </motion.div>

      </div>
      </section>



      <section 
      id="Sobre"
      className="min-h-[80vh] flex flex-col items-center justify-center bg-emerald-950"
      style={{clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)"}}
      >
        <div className="w-1/2 ml-auto pr-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="text-5xl font-bold text-center"
        >
          {idioma === "pt"
          ? "Por trás da tela"
          : "Behind the scenes"}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-lg text-gray-400 mt-4 text-center"
        >
          {idioma === "pt"
          ? ( <>Me chamo Christian, tenho 19 anos e curso <span className="text-emerald-400">Ciência da Computação</span> na PUCPR.</>)
          : ( <>Im Christian, i am 19 years old and i am currently studying <span className="text-emerald-400">Computer Science</span> at PUCPR.</>)}
          <br/>
          <br/>
          {idioma === "pt"
          ? ( <>Atualmente trabalho na CHPRO como <span className="text-emerald-400">Analista Desenvolvedor Trainee</span>, onde sigo ganhando experiência e entendendo cada vez mais como tecnologia funciona no mundo real.</>)
          : ( <>Currently working at CHPRO as <span className="text-emerald-400">Trainee Software Developer</span>, where i continue gaining experience and understanding more about how tecnology works in the real world.</>)}
          <br/>
          <br/>
          {idioma === "pt"
          ? ( <>Sempre fui muito curioso com o que acontece por trás das coisas. Não gosto só de ver algo funcionando, gosto de entender o que tem por trás da tela, da interface e de toda a pintura.</>)
          : ( <>I always been so curious about how things work behind the screen. I dont like to only see something working, i like to undestand whats behind the screen, the interface and behind the picture.</>)}
          <br/>
          <br/>
          {idioma === "pt"
          ? ( <>Entre código, ideias, testes e alguns bugs no caminho, vou aprendendo na prática e construindo coisas que realmente me interessam. <span className="text-emerald-400">Ainda tenho muito para descobrir</span>, e acho que é justamente isso que mais me anima na área de tecnologia.</>)
          : ( <>Between codes, ideas, tests and some bugs in the way, i keep learning through practice and building things that really interest me. <span className="text-emerald-400">I still have so much to discover</span>, and i think thats exactly what makes technology so much more interesting.</>)}
        </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ once: false }}
          className="border border-emerald-800 bg-zinc-950 rounded-xl p-6 font-mono w-1/3 mr-auto ml-35 -mt-85">
          <p className="text-emerald-400">&gt; whoami</p>
          <p className="text-gray-300">Christian Sasaoka</p>

          <br />

          <p className="text-emerald-400">&gt; pwd</p>
          <p className="text-gray-400">/somewhere/figuring-things-out</p>
          <p className="text-emerald-400">&gt; ls</p>
          <p className="text-gray-400">ideas projects unfinished-stuff probably-a-bug</p>
          <p className="text-emerald-400">&gt; git status</p>
          <p className="text-gray-400">changes everywhere</p>
          <p className="text-emerald-400">&gt; ping reality</p>
          <p className="text-gray-400">still working on everything</p>
          <motion.p
          animate={{opacity: [0, 2, 0]}}
          transition={{duration: 1, repeat: Infinity}}
          className="text-emerald-400"
          >
          _
          </motion.p>

        </motion.div>
        
      </section>



      <section 
      id="Tecnologias"
      className="min-h-[80vh] flex flex-col items-center justify-center relative z-0 bg-zinc-950"
      style={{clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%"}}
      >

      <div className="flex flex-col items-center -translate-y-15">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="text-5xl font-bold"
        >
          {idioma === "pt"
          ? (<>Tecnologias</>)
          : (<>Technologies</>)}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="text-xl text-gray-400 mt-6 text-center"
        >
          {idioma === "pt"
          ? (<>Entre uma ideia e outra, essas são as <span className="text-emerald-400">tecnologias</span> que mais acabam aparecendo no caminho.</>)
          : (<>Between some ideas, these are the <span className="text-emerald-400">technologies</span> that comes up most along my path.</>)}
        </motion.p>
      </div>

      <div className="flex justify-between w-full px-20">
        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-5xl font-bold"
          >
            FrontEnd
          </motion.h2>

          <motion.span  
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: false }}
            className="w-fit px-4 py-2 border border-gray-600 rounded-full"
          >
            TypeScript
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: false }}
            className="px-4 py-2 border border-gray-600 rounded-full"
          >
            HTML
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: false }}
            className="px-4 py-2 border border-gray-600 rounded-full"
          >
            CSS
          </motion.span>

        </div>

        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-5xl font-bold"
          >
            BackEnd
          </motion.h2> 

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: false }}
            className="px-4 py-2 border border-gray-600 rounded-full"
          >
            FastAPI
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: false }}
            className="px-4 py-2 border border-gray-600 rounded-full"
          >
            Python
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: false }}
            className="px-4 py-2 border border-gray-600 rounded-full"
          >
            API REST
          </motion.span>
        </div>


        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-5xl font-bold"
          >
            Database
          </motion.h2> 

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            viewport={{ once: false }}
            className="px-4 py-2 border border-gray-600 rounded-full"
          >
            SQL
          </motion.span>
        </div>


        <div className="flex flex-col items-center gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-5xl font-bold"
          >
            Tools
          </motion.h2> 

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            viewport={{ once: false }}
            className="px-4 py-2 border border-gray-600 rounded-full"
          >
            Next.js
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            viewport={{ once: false }}
            className="px-4 py-2 border border-gray-600 rounded-full"
          >
            SAP
          </motion.span>
        </div>
      </div>

      <div className="flex flex-col items-center mt-25">
        <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-5xl font-bold"
          >
            {idioma === "pt"
          ? (<>Usando atualmente</>)
          : (<>Currently using</>)}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="text-xl text-gray-400 mt-8 text-center"
          >
            React • Next.js • TypeScript
          </motion.p>
      </div>
      </section>



      <section 
      id="Projetos"
      className="min-h-[80vh] flex flex-col relative z-10 pt-20 bg-emerald-950"
      style={{clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%"}}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="text-5xl font-bold flex items-center justify-center"
        >
          {idioma === "pt"
          ? (<>Projetos</>)
          : (<>Projects</>)}
        </motion.h2>
      

      <div className="flex gap-6 flex-wrap mt-8 items-start">
        <motion.div 
          onClick={() => {
            setVoxMentorEstado("analisando");

            setTimeout(() => {
              setVoxMentorEstado("revelado");
            }, 1000);
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="mt-8 w-80 px-10 ml-10"
        >
          {voxMentorestado === "revelado" && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
            opacity: 1,
            y: 0,

            backgroundColor: [
              "#022c22",
              "#b91010",
              "#022c22",
            ],

            borderColor: [
              "#9ca3af",
              "#b91010",
              "#9ca3af",
            ],

            boxShadow: [
              "0 0 0px rgba(52,211,153,0)",
              "0 0 25px rgba(211, 52, 52, 0.6)",
              "0 0 0px rgba(52,211,153,0)",
            ],
          }}
            transition={{ duration: 0.9 }}
            className="border border-gray-400 rounded-xl p-6 w-80"
          >
            <h3 className="text-2xl font-semibold">
              VoxMentor
            </h3>

            <p className="text-gray-400 mt-3">
              {idioma === "pt"
              ? (<>O VoxMentor é uma plataforma de estudos com IA que permite enviar materiais, selecionar conteúdos e conversar por voz com um tutor virtual.</>)
              : (<>VoxMentor is an AI-powered study platform that allows users to upload materials, select content, and talk to a virtual tutor through voice.</>)}
              <br />
              Next.js • TypeScript • FastAPI • MySQL • OpenAI API
            </p>

            <motion.a
              href="https://github.com/ChristianHsasaoka/VoxMentor"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              className="inline-block mt-4 border border-gray-400 rounded-lg px-4 py-2"
            >
              {idioma === "pt"
              ? (<>Ver no Github</>)
              : (<>View on Github</>)}
            </motion.a>
          </motion.div>
        )}

          {voxMentorestado === "analisando" && (
          <motion.div
          className="border border-gray-400 rounded-xl p-8 mt-1"
          >
            <motion.h3>
              {idioma === "pt"
              ? (<>ANALISANDO...</>)
              : (<>ANALYSING...</>)}
            </motion.h3>

            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
                className="h-full bg-gray-300"
              />
            </div>
          </motion.div>
          )}

          {voxMentorestado === "oculto" && (
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="border border-gray-400 rounded-xl p-8 mt-1 text-2xl font-semibold cursor-pointer">
              {idioma === "pt"
              ? (<>Projeto oculto</>)
              : (<>Hidden project</>)}
            <p className="text-gray-400 mt-1 font-normal">
              {idioma === "pt"
              ? (<>Clique para investigar</>)
              : (<>Click to investigate</>)}
            </p>
          </motion.h3>
          ) }
        </motion.div>

        
        <motion.div 
          onClick={() => {
            setCleanDataEstado("analisando");

            setTimeout(() => {
              setCleanDataEstado("revelado");
            }, 1000);
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: false }}
          className="mt-8 w-80 px-10 ml-10"
        >
          {cleanDataestado === "revelado" && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{
            opacity: 1,
            y: 0,

            backgroundColor: [
              "#022c22",
              "#8310b9",
              "#022c22",
            ],

            borderColor: [
              "#9ca3af",
              "#8310b9",
              "#9ca3af",
            ],

            boxShadow: [
              "0 0 0px rgba(52,211,153,0)",
              "0 0 25px rgba(147, 52, 211, 0.6)",
              "0 0 0px rgba(52,211,153,0)",
            ],
          }}
              transition={{ duration: 0.9 }}
              className="border border-gray-400 rounded-xl p-6 w-80"
            >
              <h3 className="text-2xl font-semibold">
                CleanData
              </h3>

              <p className="text-gray-400 mt-3">
                {idioma === "pt"
                ? (<>A CleanData é uma ferramenta web para upload e análise de arquivos CSV, identificando total de registros, campos vazios e dados duplicados em uma interface responsiva. Facilitando na análise de dados</>)
                : (<>CleanData is a web tool for uploading and analyzing CSV files, identifying the total number of records, empty fields, and duplicate data through a responsive interface, making data analysis easier.</>)}
                <br />
                HTML • CSS • JavaScript
              </p>

              <motion.a
                href="https://github.com/ChristianHsasaoka/CleanData"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-4 border border-gray-400 rounded-lg px-4 py-2"
              >
                {idioma === "pt"
              ? (<>Ver no Github</>)
              : (<>View on Github</>)}
              </motion.a>
            </motion.div>
          )}

          {cleanDataestado === "analisando" && (
            <motion.div
              className="border border-gray-400 rounded-xl p-8 mt-1"
            >
              <motion.h3>
                {idioma === "pt"
              ? (<>ANALISANDO...</>)
              : (<>ANALYSING...</>)}
              </motion.h3>

              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gray-300"
                />
              </div>
            </motion.div>
          )}

          {cleanDataestado === "oculto" && (
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="border border-gray-400 rounded-xl p-8 mt-1 text-2xl font-semibold cursor-pointer"
            >
              {idioma === "pt"
              ? (<>Projeto oculto</>)
              : (<>Hidden project</>)}

              <p className="text-gray-400 mt-1 font-normal">
                {idioma === "pt"
              ? (<>Clique para investigar</>)
              : (<>Click to investigate</>)}
              </p>
            </motion.h3>
          )}
        </motion.div>


          <motion.div 
            onClick={() => {
              setSindromeXFragilEstado("analisando");

              setTimeout(() => {
                setSindromeXFragilEstado("revelado");
              }, 1000);
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: false }}
            className="mt-8 w-80 px-10 ml-10"
          >
            {sindromeXFragilestado === "revelado" && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{
            opacity: 1,
            y: 0,

            backgroundColor: [
              "#022c22",
              "#dfbb46",
              "#022c22",
            ],

            borderColor: [
              "#9ca3af",
              "#dfbb46",
              "#9ca3af",
            ],

            boxShadow: [
              "0 0 0px rgba(52,211,153,0)",
              "0 0 25px rgba(247, 216, 43, 0.6)",
              "0 0 0px rgba(52,211,153,0)",
            ],
          }}
                transition={{ duration: 0.9 }}
                className="border border-gray-400 rounded-xl p-6 w-80"
              >
                <h3 className="text-2xl font-semibold">
                  Síndrome do X Frágil
                </h3>

                <p className="text-gray-400 mt-3">
                  {idioma === "pt"
                  ? (<>Uma aplicação web desenvolvida para organizar informações, sintomas, scores e avaliações relacionadas à pacientes de Síndrome do X Frágil.</>)
                  : (<>A web application developed to organize information, symptoms, scores, and assessments related to patients with Fragile X Syndrome.</>)}
                  <br />
                  HTML • CSS • JavaScript
                </p>

                <motion.a
                  href="https://github.com/ChristianHsasaoka/Sindrome-do-X-Fragil"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-block mt-4 border border-gray-400 rounded-lg px-4 py-2"
                >
                  {idioma === "pt"
                  ? (<>Ver no Github</>)
                  : (<>View on Github</>)}
                </motion.a>
              </motion.div>
            )}

            {sindromeXFragilestado === "analisando" && (
              <motion.div
                className="border border-gray-400 rounded-xl p-8 mt-1"
              >
                <motion.h3>
                  {idioma === "pt"
                  ? (<>ANALISANDO...</>)
                  : (<>ANALYSING...</>)}
                </motion.h3>

                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1 }}
                    className="h-full bg-gray-300"
                  />
                </div>
              </motion.div>
            )}

            {sindromeXFragilestado === "oculto" && (
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: false }}
                className="border border-gray-400 rounded-xl p-8 mt-1 text-2xl font-semibold cursor-pointer"
              >
                {idioma === "pt"
                ? (<>Projeto oculto</>)
                : (<>Hidden project</>)}

                <p className="text-gray-400 mt-1 font-normal">
                  {idioma === "pt"
                  ? (<>Clique para investigar</>)
                  : (<>Click to investigate</>)}
                </p>
              </motion.h3>
            )}
          </motion.div>
      </div>
      </section>



      <section 
      id="Contato"
      className="min-h-[80vh] flex flex-col items-center justify-center bg-zinc-950"
      style={{clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%"}}
      >

        <div className="w-full max-w-6xl flex justify-between items-start gap-10">

          <div className="w-1/3">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="text-5xl font-bold"
            >
              {idioma === "pt"
              ? (<>Vamos conversar?</>)
              : (<>Let's talk?</>)}
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="text-lg text-gray-400 mt-6 max-w-xl">
                {idioma === "pt"
                ? (<>Se você gostou do meu trabalho e quer conversar sobre uma oportunidade,
              projeto ou apenas conversar sobre tecnologia, sinta-se à vontade
              para entrar em contato comigo!</>)
                : (<>If you like my work and would like to talk about an opportunity, a project, or simply chat about technology, feel free to get in touch!</>)}
            </motion.p>
          </div>


          <div className="w-1/3 flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder={idioma === "pt" ? "Nome" : "Name"}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="bg-transparent border border-gray-700 rounded-lg px-4 py-3"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <motion.input
              type="email"
              placeholder={idioma === "pt" ? "Email" : "Email"}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="bg-transparent border border-gray-700 rounded-lg px-4 py-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <motion.textarea
              placeholder={idioma === "pt" ? "Mensagem" : "Message"}
              rows={4}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="bg-transparent border border-gray-700 rounded-lg px-4 py-3 resize-none"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />

            <motion.button
              onClick={enviarEmail}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="border border-gray-500 rounded-lg px-6 py-3 cursor-pointer"
            >
              {idioma === "pt" ? "Enviar mensagem" : "Send Message"}
            </motion.button>
          </div>


          <div className="w-1/3 flex flex-col items-end gap-3">
            <motion.a
              href="mailto:chrissasaoka8257@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="px-4 py-2"
            >
              ✉️ chrissasaoka8257@gmail.com
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/christian-sasaoka/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="px-4 py-2"
            >
              🔗 linkedin.com/in/christian-sasaoka/
            </motion.a>

            <motion.a
              href="https://github.com/ChristianHsasaoka"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="px-4 py-2"
            >
              ⌨️ github.com/ChristianHsasaoka
            </motion.a>
          </div>

        </div>
      </section>
    </main>
  )
}