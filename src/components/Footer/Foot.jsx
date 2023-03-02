import React from "react";
import { Footer } from "flowbite-react";
import css from "./Foot.module.scss";

function Foot() {
  return (
    <div className={css.wrapper}>
      <Footer container={true}>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src="./rick-icon.png"
              alt="Flowbite Logo"
              name="Rick & Morty"
              className={css.logo}
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Rick & Morty™" year={2023} />
        </div>
      </Footer>
    </div>
  );
}

export default Foot;
