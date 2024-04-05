import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type TopNavProps = {
  webRef: any;
};

export default function TopNav({webRef}: TopNavProps) {
  return (
    <>
      {Platform.OS === 'ios' && (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => webRef.current.goBack()}
            style={styles.backButton}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    flexDirection: 'row',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: 'black',
  },
});
