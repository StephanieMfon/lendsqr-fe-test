import { SIDE_NAVIGATION } from "@/utilities/data";
import { Dispatch, SetStateAction } from "react";
import styles from "./navlinks.module.css";
import Link from "next/link";
import { Icon } from "@/components/Ui/Icon";
import { useSelectedLayoutSegment } from "next/navigation";
// import { handleLogout } from "@/components/Dashboard/Sidebar";
import { useRouter } from "next/navigation";
import ROUTES from "@/utilities/routes";
import { IoSearchSharp } from "react-icons/io5";
export function Pages({
  setMenuOpen,
}: {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const activePath = useSelectedLayoutSegment();

  let active_page = useSelectedLayoutSegment();
  if (active_page === null) active_page = "analytics";
  return (
    <div className={styles.container}>
      <div className={styles.nav_items}>
        <form className={styles.form}>
          <input type="text" placeholder="Search for anything" />
          <button type="submit">
            <IoSearchSharp style={{ fontSize: "20px" }} />
          </button>
        </form>

        <div className={styles.right}>
          <Link className={styles.docs} data-cy="nav-menu-link-Home" href="#">
            Docs
          </Link>

          <div className={styles.nav_icons}>
            <Icon name="bell" />

            <div className={styles.profile}>
              <img src="/dashboard/avatar.png" alt="Avatar" />

              <span>Adedeji</span>

              <Icon name="dropdown" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.left_sidebar}>
        {SIDE_NAVIGATION.ITEMS.map(({ name, route, icon, activePage }: any) => {
          return (
            <Link
              key={name}
              className={`${styles.menu_item}  ${
                active_page === activePage && styles.active_page
              }`}
              href={route}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              <Icon name={icon} />

              <p>{name}</p>
            </Link>
          );
        })}
        <div className={`${styles.menu_item}`}>
          <Icon name="logout" />
          <p>Logout</p>
        </div>
      </div>
    </div>
  );
}
