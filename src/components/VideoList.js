import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';
import useVideos from '../hooks/useVideos';

const VideoList = () => {

  const videos = useVideos();

  return (
    <div className="flex flex-wrap  pt-2 ">
      {videos.map((video) => <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video}></VideoCard></Link>)}
    </div>
  )
}

export default VideoList