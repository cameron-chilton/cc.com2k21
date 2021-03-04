import React from "react";
import { string, node, bool, func, object } from "prop-types";
import Modal from "react-aria-modal";
import { compactObj } from "../utils/modalUtils";

/**
 * Constructs a generic modal window with the body of the modal up to
 * the user.
 *
 * @props
 *  @param {string} mainId id attribute for the main modal window
 *  @param {string} titleId id attribute for the header title of the modal
 *  @param {string} containerCss Space separated list of CSS classes to apply to the main container
 *  @param {node} children The content of the modal window
 *  @param {boolean} isOpen Controls whether or not the modal is open
 *  @param {function} onExit Triggered when a close request happens
 *
 *  @param {function?} getApplicationNode Method to find the root DOM node of the entire app (Default: d.gEBI("root"))
 *  @param {boolean?} alert Should the the modal have a role of alertdialog? (Default: false)
 *  @param {boolean?} focusDialog On modal launch should the dialog itself receive initial focus? (Default: false)
 *  @param {string?} initialFocus If specified, CSS selector of the element that should recieve focus on modal launch (Default: null)
 *  @param {function?} onEnter Callback function for when the modal first opens (Default: null)
 *  @param {boolean?} escapeExits Should the modal be closable when the user clicks `Esc` (Default: true)
 *  @param {boolean?} underlayClickExits Should the modal be closable when the user clicks the background underlay (Default: true)
 *  @param {boolean?} focusTrapPaused Should the focus trap be disabled? (Default: false)
 *  @param {object?} focusTrapOptions Object passed to the internal implementation of the focus trap (Default: null)
 *  @param {boolean?} scrollDisabled Should scrolling behind the modal be disabled? (Default: true)
 *  @param {boolean?} includeDefaultStyles If set to false you must specify all styles externally, including positioning. (Default: true)
 *  @param {string?} dialogClass Custom CSS class for the main dialog element (Default: null)
 *  @param {string?} dialogId Custom id attribute for the main dialog element (Default: null (internal default: react-aria-modal-dialog))
 *  @param {object?} dialogStyle Available to override or customize any of the default styles applied to the modal (Default: null)
 *  @param {object?} underlayStyle Available to override or customize any of the default styles of the grey underlay for the modal (Default: null)
 *  @param {string?} underlayClass Custom CSS class for the modal's grey underlay (Default: null)
 *  @param {string?} underlayColor RGBA function value for the color of the underlay (Default: null (internal default: rgba(0,0,0,0.5)))
 *  @param {boolean?} verticallyCenter Should modal contents be vertically centered? (Default: null)
 *
 * @see https://github.com/davidtheclark/focus-trap For more information on the internal implementation of the focus trap and available options
 */
const ReactAriaModalWrapper = ({
  mainId,
  titleId,
  containerCss,
  children,
  isOpen,
  onExit,
  // Optional props for Modal library
  getApplicationNode=(() => document.getElementById("root") ),
  alert=false,
  focusDialog=false,
  initialFocus,
  onEnter,
  escapeExits=true,
  underlayClickExits=true,
  focusTrapPaused=false,
  focusTrapOptions,
  scrollDisabled=true,
  // Optional props for CSS/styling
  includeDefaultStyles=true,
  dialogClass,
  dialogId,
  dialogStyle,
  underlayStyle,
  underlayClass,
  underlayColor,
  verticallyCenter=true,
}) => {

  const modalProps = compactObj({
    titleId,
    mounted: false,
    onExit,
    getApplicationNode,
    alert,
    focusDialog,
    initialFocus,
    onEnter,
    escapeExits,
    underlayClickExits,
    focusTrapPaused,
    focusTrapOptions,
    scrollDisabled,
    includeDefaultStyles,
    dialogClass,
    dialogId,
    dialogStyle,
    underlayStyle,
    underlayClass,
    underlayColor,
    verticallyCenter,
  });

  return(
    <Modal { ...modalProps } >
      <div className={containerCss} id={mainId}>
        { children }
      </div>
    </Modal>
  );
};

ReactAriaModalWrapper.propTypes = {
  mainId: string.isRequired,
  titleId: string.isRequired,
  containerCss: string.isRequired,
  children: node.isRequired,
  isOpen: bool.isRequired,
  onExit: func.isRequired,
  getApplicationNode: func,
  alert: bool,
  focusDialog: bool,
  initialFocus: string,
  onEnter: func,
  escapeExits: bool,
  underlayClickExits: bool,
  focusTrapPaused: bool,
  focusTrapOptions: object,
  scrollDisabled: bool,
  includeDefaultStyles: bool,
  dialogClass: string,
  dialogId: string,
  dialogStyle: object,
  underlayStyle: object,
  underlayClass: string,
  underlayColor: string,
  verticallyCenter: bool,
};

export default ReactAriaModalWrapper;

