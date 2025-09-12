
import views from '../utils/views';

const VideoCard = ({ info }) => {

  const { snippet, statistics } = info;

  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="p-2 w-80 hover:cursor-pointer">
      <img className="rounded-lg my-2" alt="video-logo" src={thumbnails.medium.url} />
      <ul >
        <li className="font-bold text-md pt-2 pb-1">{title}</li>
        <li className="text-gray-600 text-sm font-medium">{channelTitle}</li>
        <li className="text-gray-600 text-sm font-medium">{views(statistics.viewCount)} views</li>
      </ul>
    </div>
  )
}

export default VideoCard;