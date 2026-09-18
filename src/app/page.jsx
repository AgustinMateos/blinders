import SplitVideo from '@/components/SplitVideo';
import { SITE } from '@/lib/seo';

export const metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div>
      {/* La home es 100% visual: este h1 es el encabezado de la página para buscadores y lectores de pantalla */}
      <h1 className="sr-only">
        Blinders Audiovisual: productora de videoclips para artistas y videos corporativos para marcas y empresas
      </h1>
      <SplitVideo
        videoLeftSrc="/artistasrr.mp4"
        videoRightSrc="/corprr.mp4"
      />
    </div>
  );
}
