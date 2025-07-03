import React, { useRef } from "react"
import { View, Text, FlatList } from "react-dom";

export const Carousel = () => {
    const refFlatList = useRef()

    const renderListItem = ({ item }) => {
        return (
            <View style={{ height: 200, width: 200, justifyContent: "center", alignItems: "center", margin: 20, backgroundColor: "pink" }}>
                <Text>
                    {item}
                </Text>
            </View>
        )
    }

    const handleEndReached = (e) => {
        const index = Math.round(e.nativeEvent.contentOffset.x / 220);
        console.log("🚀 ~ handleEndReached ~ index:", index)

        if (index == 9) {
            refFlatList.current?.scrollToIndex?.({ index: 1, animated: true })
        } else if (index === 0) {
            refFlatList.current?.scrollToIndex?.({ index: 9, animated: true })
        }

    }

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ paddingTop: 20, }}>
                carousel
            </Text>
            <FlatList
                initialScrollIndex={1}
                ref={refFlatList}
                horizontal
                data={[9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1]}
                renderItem={renderListItem}
                onMomentumScrollEnd={handleEndReached}
                onEndReachedThreshold={0}
                getItemLayout={(data, index) => (
                    { length: 220, offset: 220 * index, index }
                )}
                keyExtractor={(item, index) => `${item}-${index}`}
            />
        </View>
    )
}

