import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  LogBox,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const flatlistRef = useRef();
  const widthCarousel = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: widthCarousel,
    offset: widthCarousel * index, // for first image - 300 * 0 = 0pixels, 300 * 1 = 300, 300*2 = 600
    index: index,
  });

  const carouselData = [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/IkkiRama/AppSoed/main/src/assets/Images/s3.jpeg",
    },
    {
      id: 2,
      image:
        "https://raw.githubusercontent.com/IkkiRama/AppSoed/main/src/assets/Images/porsoed.png",
    },
    {
      id: 3,
      image:
        "https://raw.githubusercontent.com/IkkiRama/AppSoed/main/src/assets/Images/fosa.png",
    },
    {
      id: 4,
      image:
        "https://raw.githubusercontent.com/IkkiRama/AppSoed/main/src/assets/Images/desa.png",
    },
  ];

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View key={index}>
        <Image
          source={{ uri: item.image }}
          style={{ height: 200, width: widthCarousel }}
        />
      </View>
    );
  };

  const handleScroll = (event) => {
    // get user scroll position
    const scrollPosition = event.nativeEvent.contentOffset.x;

    const index = parseInt((scrollPosition / widthCarousel).toFixed());
    setActiveIndex(index);
  };

  const renderDotIndicators = (activeIndex) =>
    carouselData.map((dot, index) => {
      // if activeIndex === index
      if (activeIndex === index) {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "green",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 3,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "red",
              height: 10,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 3,
            }}
          ></View>
        );
      }
    });

  return (
    <View>
      <Text>Carousel</Text>
      <FlatList
        horizontal
        ref={flatlistRef}
        key={carouselData}
        data={carouselData}
        pagingEnabled={true}
        onScroll={handleScroll}
        getItemLayout={getItemLayout}
        renderItem={renderCarouselItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <View
        style={{
          flexDirection: "row",
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderDotIndicators(activeIndex)}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
