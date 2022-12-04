import React, { ReactElement } from "react";
import { Image } from "react-native";
import { getIconProps, IconListKeyType } from "constants/icon";

export interface Props {
    iconName: IconListKeyType;
}

const Icon: React.FC<Props> = ({ iconName }: Props): ReactElement => {
    return <Image { ...getIconProps(iconName) } />;
};
export default Icon;