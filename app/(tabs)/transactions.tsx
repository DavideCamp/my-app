import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import spendingList from '@/data/spending.json'
import Colors from '@/constants/Colors'
import SpendingBlock from '@/components/SpendingBlock'


const Page = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={[styles.container, { paddingTop: 40 }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ gap: 10 }}>
              <Text style={{ color: Colors.white, fontSize: 16 }}>
                My <Text style={{ fontWeight: 700 }}>Expenses</Text>
              </Text>
            </View>
          </View>
          <SpendingBlock spendingList={spendingList} />
        </ScrollView>
      </View>
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  text: {
    color: Colors.white,
  },
})