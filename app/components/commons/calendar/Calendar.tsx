import Colors from '@/constants/Colors';
import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { ExpandableCalendar, CalendarProvider } from 'react-native-calendars';
import { Theme } from 'react-native-calendars/src/types';

interface Props {
  weekView?: boolean;
  children?: React.ReactNode;
  onChangeDate: (date: string) => void;
}

const ExpandableCalendarScreen = (props: Props) => {
  const { weekView } = props;


  const onDateChanged = useCallback((date: any, updateSource: any) => {
    props.onChangeDate(date);

  }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);



  return (
    <CalendarProvider
      style={styles.calendarProvider}
      date={new Date().toISOString().split('T')[0]}
      onDateChanged={onDateChanged}
    // onMonthChange={onMonthChange}
    // disabledOpacity={0.6}
    // todayBottomMargin={16}
    >
      <ExpandableCalendar
        theme={modernCalendarTheme}
        allowShadow={false}
        // horizontal={false}
        // hideArrows
        // disablePan
        // hideKnob
        // initialPosition={ExpandableCalendar.positions.OPEN}
        //calendarStyle={styles.calendar}
        //headerStyle={styles.header} // for horizontal only
        disableWeekScroll
        //disableAllTouchEventsForDisabledDays
        firstDay={1}
      // closeOnDayPress={false}
      />

      <View>
        {props.children}
      </View>
    </CalendarProvider>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  calendarProvider: {
    marginTop: 15,
    marginBottom: 15,
  },
  calendar: {
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  header: {
    borderRadius: 15,
  },
  section: {
    backgroundColor: 'lightgrey',
    color: 'grey',
    textTransform: 'capitalize'
  }
});

const modernCalendarTheme: Theme = {
  calendarBackground: Colors.white, // White background for a clean look
  textSectionTitleColor: '#b6c1cd', // Light grey for section titles
  selectedDayBackgroundColor: Colors.green, // Green background for selected day
  selectedDayTextColor: '#ffffff', // White text for selected day
  todayTextColor: Colors.green, // Blue color for today's date
  dayTextColor: '#2d4150', // Dark grey for day text
  textDisabledColor: '#d9e1e8', // Light grey for disabled dates
  dotColor: Colors.green, // Blue dots for events
  selectedDotColor: '#ffffff', // White dots for selected day
  arrowColor: Colors.grey, // grey arrows
  monthTextColor: '#2d4150', // Dark grey for month text
  indicatorColor: Colors.green, // Blue indicator
  textDayFontFamily: 'Helvetica', // Modern font
  textMonthFontFamily: 'Helvetica', // Modern font
  textDayHeaderFontFamily: 'Helvetica', // Modern font
  textDayFontWeight: '300', // Light weight for day text
  textMonthFontWeight: 'bold', // Bold weight for month text
  textDayHeaderFontWeight: '300', // Light weight for day header
  textDayFontSize: 16, // Font size for day text
  textMonthFontSize: 18, // Font size for month text
  textDayHeaderFontSize: 16, // Font size for day header
  todayButtonTextColor:  Colors.green, // Blue color for today button text
  todayButtonFontFamily: 'Helvetica', // Modern font for today button
  todayButtonFontWeight: 'bold', // Bold weight for today button
  todayButtonFontSize: 14, // Font size for today button
  arrowStyle: { marginHorizontal: -15 }, // Adjust arrow position
};

