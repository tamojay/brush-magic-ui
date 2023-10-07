import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cx from "classnames";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
  faPalette,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import {
  menuItemClick,
  actionItemClick,
  changeBackgroundColor,
} from "@/slice/menuSlice";
import { MENU_ITEMS } from "@/constants";

import styles from "./index.module.css";

const Menu = ({ clearCanvasHandler }) => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);

  const handleMenuClick = (menuItem) => {
    dispatch(menuItemClick(menuItem));
    dispatch(actionItemClick(null));
  };

  const handleActioItemClick = (menuItem) => {
    dispatch(actionItemClick(menuItem));
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
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icon} />
      </div>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.UNDO)}
      >
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.REDO)}
      >
        <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => handleActioItemClick(MENU_ITEMS.DOWNLOAD)}
      >
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={clearCanvasHandler}>
        <FontAwesomeIcon icon={faTrash} className={styles.icon} />
      </div>
      <div className={styles.iconWrapper} onClick={handleToggleBackgroundColor}>
        <FontAwesomeIcon icon={faPalette} className={styles.icon} />
      </div>
    </div>
  );
};

export default Menu;
