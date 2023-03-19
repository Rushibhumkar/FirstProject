import React from 'react';
import { Text, View } from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
const RohitPackage = () => {

    const buttonTextStyle = {
        color: '#393939'
    };
    state = {
        isValid: false,
        errors: false
    };

    onNextStep = () => {
        if (!this.state.isValid) {
            this.setState({ errors: true });
        } else {
            this.setState({ errors: false });
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ProgressSteps >
                <ProgressStep label="Vehicle Picked">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 1!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Vehicle reach at Garage">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Service Start">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Service Completed">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Vehicle Start from Garage">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep label="Vehicle react at Home">
                    <View style={{ alignItems: 'center' }}>
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>

    )
}
export default RohitPackage;