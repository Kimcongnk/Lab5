import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, ActivityIndicator, Text, Pressable,Alert } from 'react-native';
import Modal from 'react-native-modal';
import { WebView } from 'react-native-webview';
import MyComponent from './MyComponent';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Khi ứng dụng được khởi động, đặt hẹn giờ để ẩn ActivityIndicator sau 6 giây
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      // Xóa hẹn giờ nếu component unmounted trước khi hẹn giờ hoàn thành
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        // Nếu đang loading, hiển thị ActivityIndicator
        <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />
      ) : (
        <>
          {/* Nếu không loading, hiển thị WebView và nút mở Modal */}
          <WebView
            source={{ uri: 'https://caodang.fpt.edu.vn/' }}
            style={{ flex: 1 }}
          />

       
        </>
      )}
<View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                                <MyComponent/>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    maxHeight: 500,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  }, centeredView: {

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
},
modalView: {

    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
});

export default App;
