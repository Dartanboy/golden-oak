import NavIcon from "./NavIcon";
import NavLink from "./NavLink";

function Navbar() {
  return (
      <div className='navbar text-white'>
          <nav className='py-4 flex justify-between'>
              <NavIcon />
              <ul className='flex justify-between items-center w-[10%] mr-10'>
                  <NavLink link='/'>Home</NavLink>
              </ul>
          </nav>
      </div>
  );
}

export default Navbar;