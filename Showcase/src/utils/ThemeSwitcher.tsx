import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Paintbrush } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { ThemeType } from "../types";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = ["black", "orange", "purple", "green"];

  return (
    <Menu as="div" className={`relative inline-block text-left theme-${theme}`}>
      <Menu.Button className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none">
        <div className="w-10 h-10 rounded-full flex items-center justify-center border-2 border-current">
          <Paintbrush className="w-5 h-5 " />
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 mt-2 w-36 rounded-md bg-red-50 dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {themes.map((themeOption) => (
              <Menu.Item key={themeOption}>
                {({ active }) => (
                  <button
                    onClick={() => setTheme(themeOption as ThemeType)}
                    className={`
                      ${active ? "bg-gray-100 dark:bg-gray-700" : ""}
                      ${theme === themeOption ? "font-medium" : ""}
                      group flex w-full items-center rounded-md px-2 py-2 text-sm
                    `}
                  >
                    <div
                      className={`w-4 h-4 rounded-full mr-2 theme-${themeOption}`}
                      style={{ backgroundColor: `var(--color-primary)` }}
                    />
                    {themeOption}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ThemeSwitcher;
