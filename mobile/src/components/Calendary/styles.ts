import styled, {css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const CalendarBackgroud = styled.View`
  height: 30px;
`;
export const CalendarBackgroudTitle = styled.Text`
  font-size: 18px;
  color: #999591;
  font-family: 'RobotoSlab-Regular';
  margin-top: 5px;
  margin-right: 5%;
  margin-left: 5%;
  text-align: center;
`;

export const ArrowLeft = styled.View`
  height: 30px;
  width: 30px;
  position: absolute;
  left: 10px;
  top: -4px;
`;

export const ArrowRight = styled.View`
  height: 30px;
  width: 30px;
  position: absolute;
  right: 10px;
  top: -4px;
`;

export const Day = styled(RectButton)<{
  selected: boolean;
}>`
  ${(props) =>
    props.selected &&
    css`
      background: #ff9000;
    `}
`;
export const DayTitle = styled.Text<{
  Status: string;
}>`
  text-align: center;
  color: ${(props) =>
    props.Status === 'disabled' ? 'transparent' : '#666360'};
`;
