import Image from "next/image";
import AppPreview1 from "@/public/images/previews/bookScreen.png";
import AppPreview2 from "@/public/images/previews/publishScreen.png";
import LogoApple from "@/public/images/logo-apple.png";
import LogoGooglePlay from "@/public/images/logo-google-play.png";
import { Sparkles, Bike, Footprints, Zap, Bus, Car, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative pt-6 pb-16 md:pt-8 md:pb-24 lg:pt-10 lg:pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <a
          href="https://waiis.eco/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mb-10 flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl bg-[#5831A8] px-6 py-6 text-white shadow-sm transition-colors hover:bg-[#48258F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5831A8] focus-visible:ring-offset-4 sm:flex-row sm:px-8 lg:mb-12"
        >
          <span aria-hidden="true" className="pointer-events-none absolute -right-8 -top-20 h-48 w-48 rounded-full border-[24px] border-white/5" />
          <span className="relative flex flex-wrap items-center justify-center gap-x-2 text-lg font-medium sm:justify-start">
            {t("waiis_banner_intro")}
            <span className="text-2xl font-bold tracking-tight text-[#F5E85B]">Waiis</span>
          </span>
          <span className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-[#F5E85B] px-4 py-2 text-sm font-semibold text-[#382067]">
            {t("waiis_cta")}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
          </span>
          <span className="sr-only">{t("waiis_new_tab")}</span>
        </a>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="mr-2" />
              {t("Movilidad")}
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight">
                <span className="text-primary">{t("nombre_sharetogo")}</span>
              </h1>
              <div className="text-center lg:text-left space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
                  {t("Aplicacion")}
                </h1>
                <div className="flex flex-wrap text-center justify-center lg:text-left lg:justify-start gap-2 p-4 border-t border-white/10">
                  <div className="flex items-center gap-1 uppercase text-[9.5px] font-bold opacity-70 animate-bounce">
                    <Car size={14} className="text-[#9dd187]" />{" "}
                    {t("mobility1")}
                  </div>
                  <div className="flex items-center gap-1 uppercase text-[9.5px] font-bold opacity-70 animate-bounce">
                    <Bike size={14} className="text-[#9dd187]" />{" "}
                    {t("mobility2")}
                  </div>
                  <div className="flex items-center gap-1 uppercase text-[9.5px] font-bold opacity-70 animate-bounce">
                    <Footprints size={14} className="text-[#9dd187]" />{" "}
                    {t("mobility3")}
                  </div>
                  <div className="flex items-center gap-1 uppercase text-[9.5px] font-bold opacity-70 animate-bounce">
                    <Zap size={14} className="text-[#9dd187]" />{" "}
                    {t("mobility4")}
                  </div>
                  <div className="flex items-center gap-1 uppercase text-[9.5px] font-bold opacity-70 animate-bounce">
                    <Bus size={14} className="text-[#9dd187]" />{" "}
                    {t("mobility5")}
                  </div>
                </div>
              </div>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl">
                {t("empresa_unica")}
              </p>
            </div>
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full sm:w-auto">
              {/* App Store */}
              <a
                href="/downloads"
                className="inline-flex w-full sm:w-64 items-center gap-3 rounded-sm bg-black px-5 py-3 text-white shadow-sm transition-colors hover:bg-primary"
              >
                <Image
                  src={LogoApple}
                  alt="App Store"
                  className="h-7 w-7 object-contain"
                />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[11px] uppercase tracking-[0.12em]">
                    {t("boton_app_store_download")}
                  </span>
                  <span className="text-base font-semibold">
                    {t("boton_app_store")}
                  </span>
                </div>
              </a>

              {/* Google Play */}
              <a
                href="/downloads"
                className="inline-flex w-full sm:w-64 items-center gap-3 rounded-sm bg-black px-5 py-3 text-white shadow-sm transition-colors hover:bg-primary"
              >
                <Image
                  src={LogoGooglePlay}
                  alt="Google Play"
                  className="h-7 w-7 object-contain"
                />
                <div className="flex flex-col leading-tight text-left">
                  <span className="text-[11px] uppercase tracking-[0.12em]">
                    {t("boton_play_store_download")}
                  </span>
                  <span className="text-base font-semibold">
                    {t("boton_play_store")}
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Image
                  src={AppPreview1}
                  priority={true}
                  width={600}
                  height={574}
                  alt="App preview 1"
                  data-aos="zoom-y-out"
                  data-aos-delay="180"
                />
              </div>
              <div>
                <Image
                  src={AppPreview2}
                  priority={true}
                  width={600}
                  height={574}
                  alt="App preview 2"
                  data-aos="zoom-y-out"
                  data-aos-delay="180"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
