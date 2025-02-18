import { BsCalendar4Week } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import UseSidebarWithNavbar from "./UseSidebarWithNavbar";
import { CiLogout } from "react-icons/ci";
import { isOwnerOrManager } from "../../utils/access";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const SidebarWithNavbar = () => {
  const { currentPath, logout, role } = UseSidebarWithNavbar();

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#F7F8FA]">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring focus:ring-offset-4 focus:ring-[#E6EBF2]"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <a href="/dashboard" className="flex ms-2 md:me-24">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                />
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center ms-3">
                <div>
                  <button
                    type="button"
                    className="flex text-sm bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E6EBF2]"
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className="z-50 hidden my-4 text-base list-none bg-[#F7F8FA] divide-y divide-gray-100 rounded-sm shadow-sm"
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900" role="none">
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate"
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 bg-[#F7F8FA] transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto ">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/dashboard/schedule"
                className={`flex items-center p-2 font-bold rounded-lg hover:bg-gray-200 group ${
                  currentPath === "/dashboard/schedule"
                    ? "text-[#2563EB]"
                    : "text-[#606C80]"
                }`}
              >
                <BsCalendar4Week className="shrink-0 w-5 h-5 transition duration-75" />
                <span className="ms-3">Schedule</span>
              </a>
            </li>
            {isOwnerOrManager(role ?? "") && (
              <li>
                <a
                  href="/dashboard/worker"
                  className={`flex items-center p-2 font-bold rounded-lg hover:bg-gray-200 group ${
                    currentPath === "/dashboard/worker"
                      ? "text-[#2563EB]"
                      : "text-[#606C80]"
                  }`}
                >
                  <FaUserFriends className="shrink-0 w-5 h-5 transition duration-75" />
                  <span className="ms-3">Worker</span>
                </a>
              </li>
            )}
            {isOwnerOrManager(role ?? "") && (
              <li>
                <a
                  href="/dashboard/outlet"
                  className={`flex items-center p-2 font-bold rounded-lg hover:bg-gray-200 group ${
                    currentPath === "/dashboard/outlet"
                      ? "text-[#2563EB]"
                      : "text-[#606C80]"
                  }`}
                >
                  <HiOutlineBuildingOffice2 className="shrink-0 w-5 h-5 transition duration-75" />
                  <span className="ms-3">Outlet</span>
                </a>
              </li>
            )}
            <li>
              <a
                onClick={logout}
                className={`flex items-center p-2 font-bold rounded-lg hover:bg-gray-200 group ${
                  currentPath === "/dashboard/logout"
                    ? "text-[#2563EB]"
                    : "text-[#606C80]"
                }`}
              >
                <CiLogout className="shrink-0 w-5 h-5 transition duration-75" />
                <span className="ms-3">Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default SidebarWithNavbar;
