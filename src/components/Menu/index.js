import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cx from "classnames";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
  faPalette,
  faTrash,
  faGithub,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";

import {
  menuItemClick,
  actionItemClick,
  changeBackgroundColor,
  clearCanvas,
} from "@/slice/menuSlice";

import { MENU_ITEMS } from "@/constants";

const Menu = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const handleMenuClick = (itemName) => {
    dispatch(menuItemClick(itemName));
  };

  const handleActioItemClick = (itemName) => {
    dispatch(actionItemClick(itemName));
  };

  const handleClearCanvas = () => {
    dispatch(clearCanvas());
  };

  const handleToggleBackgroundColor = () => {
    dispatch(changeBackgroundColor());
  };

  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
        data-tooltip-id="pencil"
        data-tooltip-content="Pencil"
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
        data-tooltip-id="eraser"
        data-tooltip-content="Eraser"
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.UNDO)}
        data-tooltip-id="undo"
        data-tooltip-content="Undo"
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.REDO)}
        data-tooltip-id="redo"
        data-tooltip-content="Redo"
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.DOWNLOAD)}
        data-tooltip-id="download"
        data-tooltip-content="Download as png"
      >
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={handleClearCanvas}
        data-tooltip-id="clear"
        data-tooltip-content="Clear"
      >
        <FontAwesomeIcon icon={faTrash} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={handleToggleBackgroundColor}
        data-tooltip-id="changebg"
        data-tooltip-content="Change background"
      >
        <FontAwesomeIcon icon={faPalette} className={styles.icon} />
      </div>
      <Tooltip id="pencil" />
      <Tooltip id="eraser" />
      <Tooltip id="undo" />
      <Tooltip id="redo" />
      <Tooltip id="download" />
      <Tooltip id="clear" />
      <Tooltip id="changebg" />
    </div>
  );
};

export default Menu;
