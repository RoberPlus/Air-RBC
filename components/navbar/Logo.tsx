import { MdOutlineHouseboat } from 'react-icons/md';
import { Button } from '../ui/button';
import Link from 'next/link';

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <MdOutlineHouseboat className="w-7 h-7" />
      </Link>
    </Button>
  );
};

export default Logo;
