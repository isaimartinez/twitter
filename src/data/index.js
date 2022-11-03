import {  FaHouseUser, FaEllipsisH, FaTwitter, FaHashtag, FaBell, FaEnvelope,
  FaBookmark, FaList, FaUser, FaImage, FaSlidersH, FaSmile, FaCalendar, FaCommentDots,
  FaRetweet
} from 'react-icons/fa'
// ============ PICS ============
import profilePic from '../assets/Profile.jpeg'
import DiaDeMuertos from '../assets/DiaDeMuertos.png'
import Ucrania from '../assets/Ucrania.jpeg'
import Chilangos from '../assets/Chilangos.jpeg'

// ============ VIDS ============
import FasVid from '../assets/Fascinating.mp4'
import PerVid from '../assets/Personas.mp4'

export const profile = {
  name: "Isaí Martínez",
  user: "MtzVentura17",
  profilePic: profilePic
}

export const feed = [
  {
    name: "Fascinating",
    user: "fasc1nate",
    timeAgo: "14h",
    description: "In 1995, U.S. and Canadian wildlife officials released 14 wolves in Yellowstone National Park. No one expected the miracle that the wolves would bring. Video by Nat Geo Wild / Appreciate.",
    profilePic: "https://pbs.twimg.com/profile_images/1552059284086611968/l0vA92Sh_400x400.jpg",
    comments: "1.234",
    share: "28,8 mil",
    likes: "114,5 mil",
    info: {
      text: "Parques Nacionales",
      icon: <FaCommentDots />
    },
    isVideo: true,
    video: {
      views: "8,39 M",
      file: FasVid
    }
  },
  {
    name: "pessoas caindo ou quase",
    user: "uecaiu",
    timeAgo: "1 Nov",
    description: "",
    profilePic: "https://pbs.twimg.com/profile_images/1557461840854241281/NaAZx3ic_400x400.jpg",
    comments: "243",
    share: "2,106",
    likes: "21,7 mil",
    info: {
      text: "pessoas caindo ou quase retwitteó",
      icon: <FaRetweet />
    },
    isVideo: true,
    video: {
      views: "429,9 mil",
      file: PerVid
    }
  },
  {
    name: "Mike Solana",
    user: "micsolana",
    timeAgo: "15 h",
    description: "holy shit that fact check 😂",
    profilePic: "https://pbs.twimg.com/profile_images/1134194710573010944/1R6h8Nai_400x400.png",
    comments: "2730",
    share: "14,7 mil",
    likes: "115,4 mil",
    isVideo: false,
    img: "https://pbs.twimg.com/media/FgjoZFjWQAALRl0?format=jpg&name=large"
  }
]


export const options = [
  {
    label: "Fotos y Videos",
    icon: <FaImage />
  },
  // {
  //   label: "GIF",
  //   icon: <FaImage />
  // },
  {
    label: "Encuesta",
    icon: <FaSlidersH />
  },{
    label: "Emoji",
    icon: <FaSmile />
  },{
    label: "Programación",
    icon: <FaCalendar />
  },
]

export const whoToFollow = [
  {
      name: "Math Wallace",
      verified: true,
      pic: "https://pbs.twimg.com/profile_images/1561717677600686083/Dm80jwOp_400x400.jpg",
      user: "MattWallace888"
  },{
    name: "Noémi",
    verified: true,
    pic: "https://pbs.twimg.com/profile_images/1547344068916563968/1kjVBY1h_400x400.jpg",
    user: "NoemiKhachian"
  },{
    name: "Lex Fridman",
    verified: true,
    pic: "https://pbs.twimg.com/profile_images/956331551435960322/OaqR8pAB_400x400.jpg",
    user: "lexfridman"
  },

]

export const whData = [
  {
    title: "México celebra el Día de Muertos",
    type: "Noticias",
    live: true,
    info: "Tendencias sobre #DiaDeMuertos",
    pic: DiaDeMuertos
  },
  {
    title: "Telegram",
    type: "Tendencia en México",
    live: false,
    info: "430 mil Tweets",
    pic: null
  },
  {
    title: "Corea del Norte",
    type: "Tendencia en México",
    live: false,
    info: "41,1 mil Tweets",
    pic: null
  },{
    title: "Lo último sobre la Guerra en Ucrania",
    type: "Guerra en Ucrania",
    live: true,
    pic: Ucrania
  },{
    title: "¿De qué mueren los chilangos?",
    type: "Tendencia en México",
    live: false,
    pic: Chilangos
  }
]

export const sidebarLinks = [
  {
    name: "",
    icon: <FaTwitter/>
  },{
    name: "Inicio",
    icon: <FaHouseUser/>
  },
  {
    name: "Explorar",
    icon: <FaHashtag/>
  },
  {
    name: "Notificaciones",
    icon: <FaBell/>
  },
  {
    name: "Mensajes",
    icon: <FaEnvelope/>
  },
  {
    name: "Guardados",
    icon: <FaBookmark/>
  },
  {
    name: "Listas",
    icon: <FaList/>
  },
  {
    name: "Perfil",
    icon: <FaUser/>
  },
  {
    name: "Mas Opciones",
    icon: <FaEllipsisH/>
  },
]