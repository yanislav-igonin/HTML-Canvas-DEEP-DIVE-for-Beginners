import Link from 'next/link';

const links = [
  { href: '/', label: 'Pulse' },
  { href: '/collider', label: 'Collider' },
  { href: '/flow-field', label: 'Flow Field' },
];

export const TopBar = () => <div className="fixed w-full h-16 flex items-center">
  {links.map(({ href, label }) => (
    <Link className='text-black text-xl font-bold ml-2 mr-2 hover:text-rose-500' key={href} href={href}>
      {label}
    </Link>
  ))}
</div>;
