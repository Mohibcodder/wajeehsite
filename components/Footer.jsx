import Link from 'next/link'
import { 
  FaWhatsapp , 
  FaGithub , 
  FaLinkedinIn, 
  FaInstagram 
} from 'react-icons/fa'
import { CiFacebook } from "react-icons/ci";
const socialLinks = [
  {
    id: 1,
    name: 'Whatsapp',
    icon: <FaWhatsapp  />,
    url: 'https://wa.me/923134190776?text=Hi Mohib.Are U Available'
  },
  {
    id: 2,
    name: 'Facebook',
    icon: <CiFacebook />,
    url: 'https://facebook.com/mohib.don.731'
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/in/mohib-ur-rehman-951825291'
  },
  {
    id: 4,
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/mohibinnovation'
  },
  {
    id: 5,
    name: 'Github',
    icon: <FaGithub  />,
    url: 'https://github.com/Mohibcodder'
  }
]

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">MOHIB UR REHMAN</h3>
            <p className="text-gray-300">Creative designer and developer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link 
                key={link.id} 
                href={link.url} 
                target="_blank"
                className="text-gray-300 hover:text-rose-400 transition"
                aria-label={link.name}
              >
                <span className="text-2xl">{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Mohib Ur Rehman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}