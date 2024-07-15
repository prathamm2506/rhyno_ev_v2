import React from 'react'
import Prodland from '../components/prodland/Prodland'
import Spec from '../components/specs/Specs'
import ColorPicker from '../components/colorpicker/ColorPicker'
import Model_L1 from '../components/Model_L1/Model_L1'
import Img from '../assets/side77-1@2x.png'
import Img1 from '../assets/side63-2@2x.png'
import Img2 from '../assets/side76-1@2x.png'
import Img3 from '../assets/side77-2@2x.png'

const SE03MAX = () => {

  const mainImg = Img;
  const sideImgs = [
    Img1,
    Img2,
    Img3
  ];
  const productTitle = 'GTX MAX';
  const description = 'Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhino. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!';
  const battery = {
    capacity: '2.7 KWH',
    features: ['LFP WITH 1500 CYCLES', 'ACTIVE BALANCING', 'WATERPROOF (IP67)'],
    warranty: '3 YEARS',
    chargingTime: '4 HOURS (12 A)'
  };
  const motor = {
    power: '1500 W',
    warranty: '1 YEAR',
    range: [
      { label: 'MAX RANGE ( @30KM/H )', value: '150 KM' },
      { label: 'MAX RANGE ( @45KM/H )', value: '110 KM' },
      { label: 'MAX RANGE ( @FULL SPEED )', value: '90 KM' }
    ]
  };
  const maxSpeed = '55 KM/H';

  return (
    <div>
      {/* <Prodland/> */}
      <Model_L1
        mainImg={mainImg}
        sideImgs={sideImgs}
        productTitle={productTitle}
        description={description}
        battery={battery}
        motor={motor}
        maxSpeed={maxSpeed}
      />
      <Spec/>
      <ColorPicker/>
    </div>
  )
}

export default SE03MAX
