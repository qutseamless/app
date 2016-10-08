/**
 * @module app actions
 */


 /**
  * show menu
  */
 export const appShowMenu = () => showMenu(true);


 /**
  * hide menu
  */
 export const appHideMenu = () => showMenu(false);


/**
 * show/hide menu
 */
const showMenu = menu => ({
  type: 'APP_PUT_STATE',
  data: { menu },
});
