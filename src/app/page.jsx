// import Navbar from '@/components/Navbar';
import SplitVideo from '@/components/SplitVideo';

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
      <SplitVideo
        videoLeftSrc="/artistasrr.mp4 " 
        videoRightSrc="/corprr.mp4"
        posterLeft="/artistas.svg" 
        posterRight="/empresas.svg" 
         
      />
    </div>
  );
}