/// <reference types="react" />
import type { ParamListBase, StackNavigationState } from '@react-navigation/native';
import type { NativeStackDescriptorMap, NativeStackNavigationHelpers } from '../types';
type Props = {
    state: StackNavigationState<ParamListBase>;
    navigation: NativeStackNavigationHelpers;
    descriptors: NativeStackDescriptorMap;
};
export declare function NativeStackView({ state, descriptors }: Props): JSX.Element;
export {};
//# sourceMappingURL=NativeStackView.d.ts.map