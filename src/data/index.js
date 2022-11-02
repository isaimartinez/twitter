import {  FaHouseUser, FaEllipsisH, FaTwitter, FaHashtag, FaBell, FaEnvelope,
  FaBookmark, FaList, FaUser
} from 'react-icons/fa'

import profilePic from '../assets/Profile.jpeg'
import DiaDeMuertos from '../assets/DiaDeMuertos.png'
import Ucrania from '../assets/Ucrania.jpeg'
import Chilangos from '../assets/Chilangos.jpeg'

export const profile = {
  name: "Isaí Martínez",
  user: "MtzVentura17",
  profilePic: profilePic
}

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