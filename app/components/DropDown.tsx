import Colors from '@/constants/Colors';
import React from 'react'
import { StyleSheet, View, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';


export default function CostumDropDown() {
    const [country, setCountry] = React.useState('1');
    const options = [
        { label: 'January', value: '1' },
        { label: 'February', value: '2' },
        { label: 'March', value: '3' },
        { label: 'April', value: '4' },
        { label: 'May', value: '5' },
        { label: 'June', value: '6' },
        { label: 'July', value: '7' },
        { label: 'August', value: '8' },
        { label: 'September', value: '9' },
        { label: 'October', value: '10' },
        { label: 'November', value: '11' },
        { label: 'December', value: '12' },
    ]
    return (
     
            <SelectDropdown
                data={options}
                onSelect={(selectedItem, index) => {
                    setCountry(selectedItem.value);
                }}
                renderButton={(selectedItem, isOpen) => {
                    return (
                      <View style={styles.dropdownStyle}>
                        <Text>{selectedItem?.label || 'Select a month'}</Text>
                      </View>
                    );
                  }}
                renderItem={(item, index, isSelected) => (
                    <View style={styles.itemStyle}>
                        <Text>{item.label}</Text>
                    </View>
                )}
                dropdownStyle={{ backgroundColor: Colors.white, borderColor: Colors.grey, borderWidth: 1, borderRadius: 25 }}
            />
            

    )

}
const styles = StyleSheet.create({
    dropdownStyle: {
        flex: 1,
        backgroundColor: Colors.white,
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 25,
        padding: 0,
        marginBottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        minHeight: 40,
    },
    itemStyle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 10,
    },
})
