import { HomeIcon, PlayIcon, TvIcon } from "@heroicons/react/24/solid";

type Props = {};

const menus = [
  {icon: <HomeIcon />, menu: 'Home'},
  {icon: <TvIcon />, menu: 'Movie'},
  {icon: <PlayIcon />, menu: 'Show'},
]

export default function NavMenu({}: Props) {
  return (
    <ul className="flex gap-x-5 items-center">
      {menus.map(menu => (
        <li className="text-sm flex gap-x-2 items-center" key={menu.menu}>
          <div className="w-5 h-5">
            {menu.icon}
          </div>
          <span>{menu.menu}</span>
        </li>
      ))}
    </ul>
  );
}
