import React from "react";
import iconClose from './icon-close-modal.svg'
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButtonLink = styled(Link)`
display: inline-block;
padding: 10px 20px;
background-color: #394867; /* Button background color */
color: #fff; /* Button text color */
text-decoration: none;
border-radius: 5px;
font-size: 1rem;
transition: background-color 0.3s ease;
text-align: center; /* Center the text horizontally */

&:hover {
  background-color: #526a82; /* Button background color on hover */
}
`;

const Modal = ({ value, setValue, title, buttonText, showModal, handleSubmit, incorrectPassword }) => {
  return (
    <div aria-modal role="dialog" className="modal" id="modal-default">
      <div className="modal__dialog">
        <div className="modal__content">
          <div className="wfx flex flex-nowrap flex-row align-items-center justify-content-between margin-bottom-24">
            <div className="wfx h6 no-margin-bottom">{title}</div>
            <img src={iconClose} alt="" onClick={() => showModal(false)} className="sortable" />
          </div>
          <div className="modal__body">
            <h2 style={{ marginBottom: '24px' }}>What did osama break in the third grade?</h2>
            <input
              type="text"
              value={value}
              onChange={setValue}
              placeholder="What did osama break in the third grade?"
              style={{ width: '100%' }}
            />
            {/* Display the input value */}
            {incorrectPassword && <p>Asma do you even know me, try again 😭. If this isn't asma, leave now! 👮🏽‍♀️🚔😡.</p>}
          </div>
          <div className="modal__footer">
            <StyledButtonLink onClick={() => handleSubmit(value)}>{buttonText}</StyledButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
