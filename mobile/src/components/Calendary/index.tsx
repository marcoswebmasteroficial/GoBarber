import React from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Icons from 'react-native-vector-icons/Feather';
import {
  CalendarBackgroud,
  CalendarBackgroudTitle,
  ArrowLeft,
  ArrowRight,
  Day,
  DayTitle,
} from './styles';

const monthNames = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];
LocaleConfig.locales.pt = {
  monthNames: monthNames,
  monthNamesShort: [
    'Jan',
    'Fev.',
    'Mar',
    'Abr',
    'Mai',
    'Junh',
    'Julh',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: [
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
  ],
  dayNamesShort: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  today: 'Aujourdhui',
};
LocaleConfig.defaultLocale = 'pt';
const Calendary: React.FC = ({children, ...rest}) => {
  return (
    <Calendar
      theme={{
        backgroundColor: '#2d2a31',
        calendarBackground: '#2d2a31',
        arrowColor: '#8b9898',
        monthTextColor: '#f4ede8',
        selectedDayBackgroundColor: '#ff8a2f',
        selectedDayTextColor: '#9c0',
        todayTextColor: '#FFFF',
        dayTextColor: '#535151',
        'stylesheet.calendar.header': {
          header: {
            alignItems: 'center',
            backgroundColor: '#3e3b47',
            flexDirection: 'row',
            padding: 10,
            alignContent: 'center',
            justifyContent: 'space-between',
          },
        },
      }}
      renderHeader={(data) => {
        return (
          <CalendarBackgroud>
            <CalendarBackgroudTitle>
              {monthNames[data.getMonth()]} {'-'} {data.getFullYear()}
            </CalendarBackgroudTitle>
          </CalendarBackgroud>
        );
      }}
      dayComponent={({date, state}) => {
        const dia_atual = new Date(date.year, date.month, date.day);
        return (
          <Day
            selected={dia_atual != selectedDate ? false : true}
            onPress={() => {
              if (Platform.OS === 'android') {
                setShowDatePicker(false);
              }
              if (date) {
                setSelectedDate(dia_atual);
              }
            }}>
            <DayTitle Status={state}>{date.day}</DayTitle>
          </Day>
        );
      }}
      renderArrow={(direction) => {
        if (direction === 'left') {
          return (
            <ArrowLeft>
              <Icons name="arrow-left" size={25} color="#95908c" />
            </ArrowLeft>
          );
        } else {
          return (
            <ArrowRight>
              <Icons name="arrow-right" size={25} color="#95908c" />
            </ArrowRight>
          );
        }
      }}
    />
  );
};

export default Calendary;
