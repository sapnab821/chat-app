import { TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useActionSheet } from '@expo/react-native-action-sheet';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

const CustomActions = ({ wrapperStyle, iconTextStyle, onSend, storage, userID }) => {
    const actionSheet = useActionSheet();

    //displays actions user can perform such as take a picture, send a picture, and send their location
    const onActionPress = () => {
        const options = ['Choose From Library', 'Take a Picture', 'Send Location', 'Cancel']

        const cancelButtonIndex = options.length - 1;

        actionSheet.showActionSheetWithOptions(
            {
                options,
                cancelButtonIndex,
            },
            async (buttonIndex) => {
                switch (buttonIndex) {
                    case 0:
                        pickImage();

                        return;
                    case 1:
                        takePhoto();

                        return;
                    case 2:
                        getLocation();

                    default:
                }
            },
        );
    }

    const getLocation = async () => {
        let permissions = await Location.requestForegroundPermissionsAsync();
        if (permissions?.granted) {
            const location = await Location.getCurrentPositionAsync({});
            if (location) {
                onSend({
                    location: {
                        longitude: location.coords.longitude,
                        latitude: location.coords.latitude,
                    },
                });
            } else Alert.alert("Error occurred while fetching location");
        } else Alert.alert("Permissions haven't been granted.");
    }

    //sends an image to the database to be stored as a blob with the generatedReference id
    const uploadAndSendImage = async (imageURI) => {
        // generate unique string reference so storage accepts multiple files
        const uniqueRefString = generateReference(imageURI);
        // convert imageURI into blob for Firebase Storage
        const response = await fetch(imageURI);
        const blob = await response.blob();
        // create image reference and upload
        const newUploadRef = ref(storage, uniqueRefString);
        uploadBytes(newUploadRef, blob).then(async (snapshot) => {
            console.log("File has been uploaded successfully");
            // get remote image URL and send in message
            const imageURL = await getDownloadURL(snapshot.ref);
            onSend({ image: imageURL });
        });
    };


    //user can pick image from library to be sent
    const pickImage = async () => {
        let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissions?.granted) {
            let result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) await uploadAndSendImage(result.assets[0].uri);
            else Alert.alert("Permissions haven't been granted.");
        }
    }

    //the user can take photo using the camera on their device
    const takePhoto = async () => {
        let permissions = await ImagePicker.requestCameraPermissionsAsync();
        if (permissions?.granted) {
            let result = await ImagePicker.launchCameraAsync();
            if (!result.canceled) await uploadAndSendImage(result.assets[0].uri);
            else Alert.alert("Permissions haven't been granted.");
        }
    }

    //generates reference for database to use, create and retrieve image in the database
    const generateReference = (uri) => {
        const timeStamp = (new Date()).getTime();
        const imageName = uri.split("/")[uri.split("/").length - 1];
        return `${userID}-${timeStamp}-${imageName}`;
    }


    return (

        <TouchableOpacity style={styles.container} onPress={onActionPress}>
            <View style={[styles.wrapper, wrapperStyle]} >
                <Text style={[styles.iconText, iconTextStyle]}>+</Text>
            </View>

        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    container: {
        width: 26,
        height: 26,
        marginLeft: 10,
        marginBottom: 10,
    },
    wrapper: {
        borderRadius: 13,
        borderColor: '#b2b2b2',
        borderWidth: 2,
        flex: 1,
    },
    iconText: {
        color: '#b2b2b2',
        fontWeight: 'bold',
        fontSize: 10,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
});



export default CustomActions;