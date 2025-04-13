import Link from 'next/link'

const socialLinks = [
    {
      id: 1,
      name: 'Behance',
      icon: 'behance',
      url: 'https://www.behance.net/ridasyed'
    },
    {
      id: 2,
      name: 'Dribbble',
      icon: 'dribbble',
      url: 'https://dribbble.com/ridasyed'
    },
    {
      id: 3,
      name: 'LinkedIn',
      icon: 'linkedin',
      url: 'https://www.linkedin.com/in/ridasyed'
    },
    {
      id: 4,
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://www.instagram.com/ridasyed'
    }
  ]

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Wajeeh ul Hassan</h3>
            <p className="text-gray-300">Creative designer and developer</p>
          </div>
          
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <Link 
                key={link.id} 
                href={link.url} 
                target="_blank"
                className="text-gray-300 hover:text-rose-400 transition"
              >
                <span className="sr-only">{link.name}</span>
                <i className={`fab fa-${link.icon} text-xl`}></i>
              </Link>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rida Syed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}