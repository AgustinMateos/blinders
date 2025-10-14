import { projects } from '../../../../components/ProjectsData';

export default function VideoPage({ params }) {
  const { category, projectId } = params;
  const project = projects[category]?.find((p) => p.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div className=" pt-[80px] mx-auto p-4 bg-black">
      <h1 className="text-3xl font-bold text-white mb-4">{project.title}</h1>
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
        className='h-[200px] md:h-[650px]'
      ></iframe>
    </div>
  );
}