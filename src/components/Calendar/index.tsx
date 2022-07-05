import React from 'react';
import { Feather } from '@expo/vector-icons'
import {
  Calendar as CustomCalender,
  LocaleConfig,
  DateData,
  CalendarProps
} from 'react-native-calendars'
import { useTheme } from 'styled-components';
import { ptBr } from './localeConfig';
import { generateInterval } from './generateInterval'

LocaleConfig.locales['pt-br'] = ptBr
LocaleConfig.defaultLocale = 'pt-br'

export interface IMarkedDateProps {
  [date: string]: {
    color: string
    textColor: string
    disabled?: boolean
    disabledTouchEvent?: boolean
  }
}

export interface DayProps extends DateData { }

export const Calendar: React.FC<CalendarProps> = ({
  markedDates,
  onDayPress
}) => {
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
      markingType='period'
      markedDates={markedDates}
      onDayPress={onDayPress}
    />
  );
}

export { generateInterval }