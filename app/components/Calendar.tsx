import Colors from '@/constants/Colors';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ExpandableCalendar, CalendarProvider} from 'react-native-calendars';

interface Props {
  weekView?: boolean;
    children?: React.ReactNode;
}

const ExpandableCalendarScreen = (props: Props) => {
  const {weekView} = props;


  // const onDateChanged = useCallback((date, updateSource) => {
  //   console.log('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
  // }, []);

  // const onMonthChange = useCallback(({dateString}) => {
  //   console.log('ExpandableCalendarScreen onMonthChange: ', dateString);
  // }, []);



  return (
    <CalendarProvider
      date={new Date().toISOString().split('T')[0]}
      // onDateChanged={onDateChanged}
      // onMonthChange={onMonthChange}
      showTodayButton
      // disabledOpacity={0.6}
      // todayBottomMargin={16}
    >
  
        <ExpandableCalendar
        style={styles.calendar}
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          // initialPosition={ExpandableCalendar.positions.OPEN}
          //calendarStyle={styles.calendar}
          // headerStyle={styles.header} // for horizontal only
          // disableWeekScroll
          // disableAllTouchEventsForDisabledDays
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
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 25,
    marginTop: 20,
  },
  header: {
    backgroundColor: 'lightgrey'
  },
  section: {
    backgroundColor: 'lightgrey',
    color: 'grey',
    textTransform: 'capitalize'
  }
});