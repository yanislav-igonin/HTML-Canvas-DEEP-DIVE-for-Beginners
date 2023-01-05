import Link from 'next/link';

const links = [
  { href: '/', label: 'Pulse' },
  { href: '/collider', label: 'Collider' },
  { href: '/flow-field', label: 'Flow Field' },
  { href: '/lava-lamp', label: 'Lava Lamp' },
];

export const TopBar = () => <div className="fixed w-full h-16 flex items-center z-10">
  {links.map(({ href, label }) => (
    <Link className='text-white text-xl font-bold ml-2 mr-2 hover:text-rose-500' key={href} href={href}>
      {label}
    </Link>
  ))}
</div>;
