import {ImageSourcePropType, ImageStyle, StyleProp} from 'react-native';

interface IconListProps {
    source: ImageSourcePropType;
    width: number;
    height: number;
}

interface IconReturnProps {
    source: ImageSourcePropType;
    style: StyleProp<ImageStyle>;
}

export type IconListKeyType = keyof typeof ICON_LIST;

type IconInfo = { [key: string]: IconListProps };
type EnforceObjectType<T> = <V extends T>(v: V) => V;
const enforceObjectType: EnforceObjectType<IconInfo> = v => v;

const ICON_LIST = enforceObjectType({
    btn_cat_on: {
        source: require('assets/images/btn_on.png'), width: 24, height: 24
    }
});

// 아이콘 기본 props 조회
export const getIconProps = (key: IconListKeyType): IconReturnProps => {
    const icon = ICON_LIST[key];
    return { source: icon.source, style: { height: icon.height, width: icon.width }};
};
