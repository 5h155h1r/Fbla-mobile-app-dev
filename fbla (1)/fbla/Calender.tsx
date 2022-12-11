import { addDays, format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Agenda } from 'react-native-calendars';

type EventNames = {
  name: string;
};

type Events = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

const Calender: React.FC = () => {
  const [items, setItems] = useState<{ [key: string]: Events[] }>({});

  useEffect(() => {
    // run once

    //gets data for each day of the week from this adress
    const getData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );
      const dates: Events[] = await response.json();

      //maps the data so that it can be used
      const mappedData = dates.map((event, day) => {
        //uses today as first parameter then adds the amount of days in the index which is the variable day
        const date = addDays(new Date(), day);

        return {
          //copy everything from event
          ...event,
          //adds and reformats date so that agenda can interpret it
          date: format(date, 'yyyy-MM-dd'),
        };
      });

      const reduced = mappedData.reduce(
        //declare x as an accumulator and do this for every mapped data
        (x: { [key: string]: Events[] }, event) => {
          //destructures the event so that it has everything but date
          const { date, ...rest } = event;

          //sets the accumulator key to date so that for that date it gets everything but the date since date isn't an AgendaEntry type
          x[date] = [rest];

          //returns this accumulator value so that this all actually happens and doesn't just do nothing
          return x;
        },
        {}
      );

      //sets the items to this now reduced value
      setItems(reduced);
    };

    //gets all the data from the function
    getData();
  }, []);

  //renders the actual agenda and each event and day in the agenda from the Events list
  const renderItem = (eventx: Events) => {
    return (
      //Styles everything
      <View style={styles.eventContain}>
        <Text style={styles.paragraph}>{eventx.title}</Text>
      </View>
    );
  };

  //styles the agenda
  return (
    <SafeAreaView style={styles.safe}>
      <Agenda
        items={items}
        renderItem={renderItem}
        theme={{
          agendaDayTextColor: 'green',
          agendaDayNumColor: 'red',
          agendaTodayColor: 'green',
          agendaKnobColor: 'white',
        }}
      />
    </SafeAreaView>
  );
};

//styles the dates in the agenda
const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  eventContain: {
    backgroundColor: 'black',
    margin: 3,
    borderRadius: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  paragraph: {
    color: 'white',
  },
});

export default Calender;
