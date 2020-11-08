import React, {useCallback, useEffect, useState, useMemo} from 'react';
import {Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useAuth} from '../../hooks/auth';
import Icons from 'react-native-vector-icons/Feather';
import {
  Container,
  Header,
  HeaderTitle,
  BackButton,
  UserAvatar,
  ProvidersList,
  ProvidersListContainer,
  ProviderContainer,
  ProviderAvatar,
  ProviderName,
  Calendars,
  Title,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
  Schedule,
  Section,
  SectionTitle,
  CalendarBackgroud,
  CalendarBackgroudTitle,
  ArrowLeft,
  ArrowRight,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}
const CreateAppointment: React.FC = () => {
  const route = useRoute();
  const {user} = useAuth();
  const {goBack, navigate} = useNavigation();

  const [providers, setProviders] = useState<Provider[]>([]);
  const {providerId} = route.params as {
    providerId: string;
  };
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
  const [selectedProvider, setSelectedProvider] = useState(providerId);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleSelectProvider = useCallback((id: string) => {
    setSelectedProvider(id);
  }, []);
  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state);
  }, []);
  const handleDateChanged = useCallback(
    (_event: unknown, date: Date | undefined) => {
      if (Platform.OS === 'android') {
        setShowDatePicker(false);
      }

      if (date) {
        setSelectedDate(date);
      }
    },
    [],
  );
  useEffect(() => {
    api.get<Provider[]>('/providers').then(({data}) => {
      setProviders(data);
    });
  }, []);
  console.log(selectedDate);
  return (
    <Container>
      <Header>
        <BackButton
          onPress={() => {
            goBack();
          }}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>
        <HeaderTitle>Cabeleireiro</HeaderTitle>
        <UserAvatar source={{uri: user.avatar_url}} />
      </Header>
      <ProvidersListContainer>
        <ProvidersList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={providers}
          keyExtractor={(provider) => provider.id}
          renderItem={({item: provider}) => (
            <ProviderContainer
              onPress={() => handleSelectProvider(provider.id)}
              selected={provider.id === selectedProvider}>
              <ProviderAvatar source={{uri: provider.avatar_url}} />
              <ProviderName selected={provider.id === selectedProvider}>
                {provider.name}
              </ProviderName>
            </ProviderContainer>
          )}
        />
      </ProvidersListContainer>
      <Calendars>
        <Title>Escolha a data</Title>
        <OpenDatePickerButton onPress={handleToggleDatePicker}>
          <OpenDatePickerButtonText>
            Selecionar outra data
          </OpenDatePickerButtonText>
        </OpenDatePickerButton>
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            is24Hour
            display="calendar"
            onChange={handleDateChanged}
            value={selectedDate}
          />
        )}

        <Schedule>
          <Title>Escolha o horário</Title>
          <Section>
            <SectionTitle>Manhã</SectionTitle>
            <Calendar
              current={selectedDate}
              minDate={selectedDate}
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
                    justifyContent: 'center',
                  },
                },
              }}
              disabledDaysIndexes={[0, 6]}
              renderHeader={(data) => {
                return (
                  <CalendarBackgroud>
                    <CalendarBackgroudTitle>
                      {monthNames[data.getMonth()]}
                    </CalendarBackgroudTitle>
                  </CalendarBackgroud>
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
          </Section>
          <Section>
            <SectionTitle>Tarde</SectionTitle>
          </Section>
        </Schedule>
      </Calendars>
    </Container>
  );
};

export default CreateAppointment;
