import { css } from "styled-components";
import styled from "styled-components/native";

const center = css`
  justify-content: center;
  align-items: center;
`;
const CenterView = styled.View`
  flex: 1;
  ${center};
  background-color: #f5fcff;
`;

export default CenterView;