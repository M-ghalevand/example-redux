import Link from "next/link";
import {
  ContactPhoneRounded,
  MenuBookRounded,
  PermContactCalendarRounded,
  AccountCircleRounded,
  CottageRounded,
  MenuRounded,
  // AppsIcon,
} from "@mui/icons-material";
import AppsIcon from "@mui/icons-material/Apps";

import style from "../../styles/nav.module.scss";

function myFunc() {
  const x = document.getElementById("mynav");
  if (x.classList.item(2) === "XsHidden") {
    x.classList.remove("XsHidden");
    x.classList.add("XsBlock");
  } else {
    x.classList.remove("XsBlock");
    x.classList.add("XsHidden");
  }
}
export default function Nav({ nav, about, resume, blog, conteact, app }) {
  return (
    <header>
      <div className={style.HeaderContent}>
        <div className={`${style.HeaderMobile} ${style.NavBlock}`}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={style.HeaderToggle} onClick={myFunc}>
            <MenuRounded />
          </a>
          <p>منوچهر قلعه وند</p>
        </div>

        <div
          className={`${style.HeaderMain} XsHidden`}
          id="mynav"
          data-simplebar="init"
        >
          <div className={style.ImageContainer}>
            <p className={style.HeaderName}>منوچهر قلعه وند</p>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/profile-img.jpg" alt="Manouchehr GhaleVand" />
          </div>

          <div className={style.CustomNavTabsProductPage}>
            <Link href="/">
              <a className={`${nav} nav-link`}>
                <span className={style.NavMenuIcon}>
                  <CottageRounded />
                </span>
                <span className={style.NavName}>خانه</span>
              </a>
            </Link>
            <Link href="/about">
              <a className={`${about} nav-link`}>
                <span className={style.NavMenuIcon}>
                  <AccountCircleRounded />
                </span>
                <span className={style.NavName}>درباره</span>
              </a>
            </Link>
            <Link href="/resume">
              <a className={`${resume} nav-link`}>
                <span className={style.NavMenuIcon}>
                  <PermContactCalendarRounded />
                </span>
                <span className={style.NavName}>رزومه</span>
              </a>
            </Link>
            <Link href="/blog">
              <a className={`${blog} nav-link`}>
                <span className={style.NavMenuIcon}>
                  <MenuBookRounded />
                </span>
                <span className={style.NavName}>وبلاگ</span>
              </a>
            </Link>
            <Link href="/contact">
              <a className={`${conteact} nav-link`}>
                <span className={style.NavMenuIcon}>
                  <ContactPhoneRounded />
                </span>
                <span className={style.NavName}>تماس</span>
              </a>
            </Link>

            <Link href="/index">
              <a className={`${app} nav-link`}>
                <span className={style.NavMenuIcon}>
                  <AppsIcon />
                </span>
                <span className={style.NavName}>app</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .active {
            color: #fff !important;
          }
        `}
      </style>
    </header>
  );
}
