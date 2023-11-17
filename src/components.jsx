import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledButtonLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #E64C3C; /* Button background color */
  color: #fff; /* Button text color */
  text-decoration: none;
  border-radius: 5px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-align: center; /* Center the text horizontally */

  &:hover {
    background-color: #c6402c; /* Button background color on hover */
  }
`;