import styled from 'styled-components';


export const StyledList = styled.ul`
  margin-top: 12px;
`;
export const ListItem = styled.li`
  font-size: 14px;
  padding: 6px;
  background-color: #2a2a2a;
  border-radius: 14px;

  :not(:last-child) {
    margin-bottom: 12px;
  }

  span {
    color: #FA8072;
  }
`;
export const ReviewsDescr = styled.p`
  color: #888888;
  margin-top: 6px;
`;
