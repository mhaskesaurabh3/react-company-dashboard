import Home from '../src/Components/Pages/Home/Home';
import UserIcon from './assets/UserIcon.svg';
import ProductIcon from './assets/ProductIcon.svg';
import InboxIcon from './assets/InboxIcon.svg';
import TeamMember from './Components/Pages/TeamMember/TeamMember';
import Product from './Components/Pages/ProductPage/Product';
import Inbox from './Components/Pages/InboxPage/Inbox';

// const icon = {
//   className: 'w-5 h-5 text-inherit',
// };

interface Route {
  icon: JSX.Element;
  name: string;
  path: string;
  element: JSX.Element;
}

export const routes: Route[] = [
  {
    icon: <UserIcon />,
    name: 'Team Members',
    path: '/team-member',
    element: <TeamMember darkMode={undefined} setDarkMode={undefined} />,
  },
  {
    icon: <ProductIcon />,
    name: 'Products',
    path: '/product',
    element: <Product />,
  },
  {
    icon: <InboxIcon />,
    name: 'Inbox',
    path: '/inbox',
    element: <Inbox />,
  },
];

export default routes;
