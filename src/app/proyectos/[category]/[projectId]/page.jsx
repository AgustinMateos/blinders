import { projects } from '../../../../components/ProjectsData';

export default function VideoPage({ params }) {
  const { category, projectId } = params;
  const project = projects[category]?.find((p) => p.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className=" pt-[80px] mx-auto p-4 bg-black">
      <div className="w-full max-h-[100px] md:max-h-[150px] mb-10 mt-5 border-t-2 border-b-2 border-t-[#262626] border-b-[#262626] flex items-center  py-2 md:py-7">
  <h1 className="text-[22px] md:text-[24px] font-bold h-[100%] text-white">
    {project.title}
  </h1>
</div>
      
      {/* Render YouTube iframe */}
      <iframe
        width="100%"
        height="650px"
        src={project.videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className='h-[200px] md:h-[650px] w-full'
      ></iframe>
    </div>
  );
}