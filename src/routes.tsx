import Home from './Components/Pages/Home';
import UserIcon from './assets/UserIcon.png';
import ProductIcon from './assets/ProductIcon.png';
import InboxIcon from './assets/InboxIcon.png';
import TeamMember from './Components/Pages/TeamMember/TeamMember';
import Product from './Components/Pages/Product';
import Inbox from './Components/Pages/Inbox';

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
    element: <TeamMember />,
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
