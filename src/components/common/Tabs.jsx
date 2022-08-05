import styled from "styled-components";

const Tabs = (props) => {
  const meta = props.meta;
  return (
    <StyledTabs>
      <div className="tab">{meta.title}</div>
    </StyledTabs>
  );
};

const StyledTabs = styled.section`
  display: flex;
`;

export default Tabs;
