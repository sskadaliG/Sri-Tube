export const LOGO = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1004px-Logo_of_YouTube_%282015-2017%29.svg.png?20200109235614"

export const MENU_LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-cwMeLLj8MfIo3HoXJKFcOFB1g9U4DDMHA&s"

export const INITIAL_LOGO ="https://cdn2.vectorstock.com/i/1000x1000/86/71/golden-letter-s-monogram-initial-sign-vector-38148671.jpg"

const GOOGLE_API_KEY = process.env.REACT_APP_API_KEY;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key="+ GOOGLE_API_KEY;
