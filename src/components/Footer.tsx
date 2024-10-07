import Link from 'next/link'

const footerLinks = [
  {
    title: 'Community',
    links: [
      { name: 'Discord', href: '#' },
      { name: 'X (formerly Twitter)', href: '#' },
    ],
  },
  {
    title: 'Builders',
    links: [
      { name: 'Github Discussions', href: '#' },
      { name: 'Builder Bounties', href: '#' },
      { name: 'Report a Bug', href: '#' },
    ],
  },
  {
    title: 'More',
    links: [
      { name: 'Website', href: '#' },
      { name: 'Blog', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors duration-300">
                      {link.name} <span className="inline-block ml-1">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-gray-800 text-center text-gray-400">
          <p>2024 Nillion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}