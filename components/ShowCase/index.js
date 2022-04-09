import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Box, Image } from "@chakra-ui/react"

const CallMe = ({ showCaseImage, showCaseVideo }) => {
  return (
    <div>
      <video
        width={showCaseVideo.width}
        height={showCaseVideo.height}
        src={showCaseVideo.source}
        type={showCaseVideo.type}
        controls={showCaseVideo.controls}
        autoPlay={showCaseVideo.autoplay}
      ></video>

      <Box mt="4">
        <Swiper spaceBetween={50} slidesPerView={3}>
          {showCaseImage.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <Image src={data} alt="test" />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </div>
  )
}

export default CallMe
