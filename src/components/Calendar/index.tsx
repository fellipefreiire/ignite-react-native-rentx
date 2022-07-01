import React from 'react';
import { Feather } from '@expo/vector-icons'
import {
  Calendar as CustomCalender,
  LocaleConfig
} from 'react-native-calendars'
import { useTheme } from 'styled-components';

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN', 'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br'

export const Calendar: React.FC = () => {
  const { colors, fonts } = useTheme()

  return (
    <CustomCalender
      renderArrow={(direction) =>
        <Feather
          name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
          size={24}
          color={colors.text}
        />
      }
      headerStyle={{
        backgroundColor: colors.background_secondary,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.text_detail,
        paddingBottom: 10,
        marginBottom: 10,
      }}
      theme={{
        textDayFontFamily: fonts.primary_400,
        textDayHeaderFontFamily: fonts.primary_500,
        textDayHeaderFontSize: 10,
        textMonthFontFamily: fonts.secondary_600,
        textMonthFontSize: 20,
        monthTextColor: colors.title,
        arrowStyle: {
          marginHorizontal: -15
        }
      }}
      firstDay={1}
      minDate={new Date().toString()}
    />
  );
}