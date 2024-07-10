"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

import { anton, montserrat, noto, oswald, playfair } from "@/lib/fonts";
import { useCustomerDataModal } from "@/hooks/use-customer-data-modal";
import { CustomerDataModal } from "@/components/modals/customer-data-modal";

export default function Home() {
  const onOpen = useCustomerDataModal((state) => state.onOpen);
  const isOpen = useCustomerDataModal((state) => state.isOpen);

  const images = [
    {
      src: "/amaryvivir.webp",
      alt: "amaryvivir",
      height: 400,
      width: 200,
      name: "Amar y Vivir",
      year: 2020,
    },
    {
      src: "/amaryvivir.webp",
      alt: "amaryvivir",
      height: 150,
      width: 100,
      name: "Amar y Vivir",
      year: 2019,
    },
    {
      src: "/amaryvivir.webp",
      alt: "amaryvivir",
      height: 150,
      width: 100,
      name: "Amar y Vivir",
      year: 2018,
    },
    {
      src: "/amaryvivir.webp",
      alt: "amaryvivir",
      height: 150,
      width: 100,
      name: "Amar y Vivir",
      year: 2017,
    },
    {
      src: "/amaryvivir.webp",
      alt: "amaryvivir",
      height: 150,
      width: 100,
      name: "Amar y Vivir",
      year: 2016,
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 500 },
    visible: { opacity: 1, y: 0 },
  };

  const navVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const section2Ref = useRef(null);
  const isInView = useInView(section2Ref, { once: true });

  const section1ref = useRef(null);
  const navbarShow = useInView(section1ref);

  const section3ref = useRef(null);
  const section3Intersection = useInView(section3ref, { amount: 0.95 });

  return (
    <main className="relative snap-y snap-mandatory overflow-y-scroll h-full">
      <AnimatePresence>
        {!navbarShow && (
          <motion.nav
            initial="hidden"
            animate="visible"
            variants={navVariants}
            transition={{ duration: 0.5 }}
            className="w-full fixed top-0 left-0 z-40"
          >
            <div className="flex justify-end w-full">
              <div className="flex items-center gap-2 mt-2 mr-8">
                <Image
                  src="/logosinfondo.png"
                  alt="logo-vino-rodante"
                  height={40}
                  width={40}
                  className="ml-4"
                />
                <h1 className={`${anton.className} text-xl text-customLogo`}>
                  VINO RODANTE
                </h1>
              </div>
              <div
                className={`flex justify-between w-[35%] mt-3 ${
                  section3Intersection ? "text-white" : "text-neutral-800"
                }`}
              >
                <div>
                  <ul
                    className={`${noto.className} flex gap-8 text-md transition-colors duration-500`}
                  >
                    <li>CLUB</li>
                    <li>VINOS</li>
                    <li>EVENTOS</li>
                    <li>SOBRE NOSOTROS</li>
                  </ul>
                </div>
                <div
                  className={`${noto.className} mr-12 text-md transition-colors duration-500`}
                >
                  LOGIN
                </div>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <section className={`h-screen snap-start mb-2 z-50`} ref={section1ref}>
        <div className="flex w-full h-screen">
          <div className="w-1/2 relative">
            <Image
              src="/cellar3.jpg"
              alt="Wine Cellar"
              layout="fill"
              className="object-cover"
            />
          </div>

          <div className="w-1/2 flex flex-col justify-between items-start p-10">
            <h1 className={`${playfair.className} text-6xl font-bold`}>
              La mejor manera de explorar el fascinante mundo del vino
            </h1>
            <div className="mt-6">
              <h2 className="text-lg font-bold">CLUB DE VINO RODANTE</h2>
              <p className="text-md">
                Our most popular wine club, you will get a good mix of red,
                white, rose, and orange, either still or pet-nat style.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`h-screen snap-start`} ref={section2Ref}>
        <div className="w-full h-full flex flex-col items-center justify-end pb-20">
          <div className="w-full flex flex-col items-center justify-center p-12">
            <motion.h3
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 0.8 }}
              className={`${montserrat.className} text-neutral-600`}
            >
              VINOS SELECCIONADOS
            </motion.h3>
            <motion.h1
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants}
              transition={{ duration: 0.8 }}
              className={`${playfair.className} text-6xl text-neutral-800`}
            >
              Nuestra selección del mes
            </motion.h1>
          </div>
          <div className="flex justify-between gap-6 mx-12">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center"
              >
                <motion.div
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={itemVariants}
                  transition={{ duration: 0.8 }}
                  className="bg-neutral-200 py-8 mb-4"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    height={400}
                    width={400}
                  />
                </motion.div>
                <p className="mt-2">{image.name}</p>
                <p>{image.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className={`relative h-screen text-white snap-start py-20 px-6 `}
        ref={section3ref}
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <video className="w-full h-full object-cover" autoPlay muted loop>
            <source src="/botellas-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="w-2/3 flex flex-col">
          <p className={`${playfair.className} text-2xl p-8 leading-relaxed`}>
            El Club Vino Rodante ofrece una emocionante manera de descubrir los
            mejores vinos argentinos en cajas especialmente seleccionadas con
            ofertas de regiones o variedades específicas y paquetes variados
            seleccionados. Los vinos son especiales, a veces partidas limitadas,
            y expresan la amplitud de la vinificación argentina.
          </p>
          <p className={`${playfair.className} text-2xl p-8 leading-relaxed`}>
            Al suscribirse al club, recibirán una caja mensual de vinos
            seleccionados meticulosamente por su calidad excepcional. Esta
            suscripción no solo les permitirá disfrutar de vinos exclusivos,
            sino también embarcarse en un viaje para descubrir y apreciar la
            rica variedad en terroirs y estilos que nuestro país tiene para
            ofrecer.
          </p>
          <button
            className="px-8 flex gap-2 items-center text-lg hover:font-semibold transition-all duration-200"
            onClick={onOpen}
          >
            Suscribirse
            <Plus color="white" />
          </button>
        </div>
      </section>
    </main>
  );
}
