import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    justifyContent: "center",
    height: "16%",
    paddingStart: 20,
    backgroundColor: "#3A78C0",
  },
  textHeader: {
    fontSize: 32,
    color: "#fff",
  },
  input: {
    marginTop: 10,
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    fontSize: 20,
    borderColor: "#d6d6d6",
  },
  buttonCalcular: {
    marginHorizontal: 12,
    paddingVertical: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#53C658",
  },
  buttonClear: {
    marginHorizontal: 12,
    paddingVertical: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FDBD19",
  },
  textButtonClear: {
    fontSize: 32,
    color: "#fff",
  },

});