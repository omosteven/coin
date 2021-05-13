import React, { useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import { InView } from 'react-intersection-observer';

import { Layer4Card, Layer5CardCircleText, Layer5CardText, LayerContainer, LayerFlexBoxBG } from '../../styles/home/BodyStyle';

const AutoIncrement = (from, to, step, time) => {
    const [currentValue, setCurrentValue] = useState(from);

    if (currentValue < to) {
        setTimeout(() => {
            setCurrentValue(currentValue + step);
        }, time)
    }

    return currentValue;

}

// const useLayersValue = () => {
//     const [state, setState] = useState([
//         {
//             no: 0,
//             text: 'Successful Projects'
//         }, {
//             no: '02',
//             text: 'Office Locations'
//         },
//         {
//             no: '2',
//             text: 'Years in Business'
//         },
//         {
//             no: '100%',
//             text: 'Fueled by Passion'
//         }]
//     );
//     const timeOutId = useRef(0);

//     useEffect(() => {


//       timeOutId.current = setTimeout(() =>{
//           setState((prevState) =>{
//               const newValues = [...prevState];
//               newValues[0] = {...prevState[0], no : prevState[0].no + 1};
//               console.log({newValues, prevState});
//               return newValues;
//           });
//       }, 1000);

//       return () =>{
//           clearTimeout(timeOutId.current)
//       }
//     }, [state]);

//     return state;
// }

const SuccessCategory = () => {
    AOS.init();

    // const [layer3, setLayer3] = useState([
    //     {
    //         no: 0,
    //         text: 'Successful Projects'
    //     }, {
    //         no: 0,
    //         text: 'Office Locations'
    //     },
    //     {
    //         no: 0,
    //         text: 'Years in Business'
    //     },
    //     {
    //         no: 0 + '%',
    //         text: 'Fueled by Passion'
    //     }]);

    // let layer3 = [
    //     {
    //         no: 0,
    //         text: 'Successful Projects'
    //     }, {
    //         no: 0,
    //         text: 'Office Locations'
    //     },
    //     {
    //         no: 0,
    //         text: 'Years in Business'
    //     },
    //     {
    //         no: 0 + '%',
    //         text: 'Fueled by Passion'
    //     }]

    const layer3 = [
        {
            no: AutoIncrement(0, 15, 1, 200),
            text: 'Successful Projects'
        }, {
            no: AutoIncrement(0, 2, 1, 1000),
            text: 'Office Locations'
        },
        {
            no: AutoIncrement(0, 2, 1, 1000),
            text: 'Years in Business'
        },
        {
            no: AutoIncrement(0, 100, 10, 250) + '%',
            text: 'Fueled by Passion'
        }]

    // const onCheck = (inView) => {
    //     if (inView) {
    //         setLayer3(layerD)
    //     } else {
    //         setLayer3([{
    //             no: 0,
    //             text: 'Successful Projects'
    //         }, {
    //             no: 0,
    //             text: 'Office Locations'
    //         },
    //         {
    //             no: 0,
    //             text: 'Years in Business'
    //         },
    //         {
    //             no: 0 + '%',
    //             text: 'Fueled by Passion'
    //         }])
    //     }
    //     // console.log({ layer3 });
    //     console.log('seen', inView)
    // }

    return (

        <>

            {/* <InView as="div" onChange={(inView, entry) => onCheck(inView)}> */}

            <LayerContainer style={{ marginTop: '10em', marginBottom: '10em', width: '100%' }}>
                <LayerFlexBoxBG>
                    {layer3.map(eachOurValue => (
                        <Layer4Card key={eachOurValue.text} data-aos="zoom-in" data-aos-duration="6000" data-aos-easing="linear">
                            <Layer5CardCircleText style={{ color: 'rgba(255,255,255,1)', marginBottom: '0em' }}>{eachOurValue.no}</Layer5CardCircleText>
                            <Layer5CardText style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 'bolder' }}>{eachOurValue.text}</Layer5CardText>
                        </Layer4Card>
                    ))}
                </LayerFlexBoxBG>
            </LayerContainer>
            {/* </InView> */}
        </>
    )
}

export default SuccessCategory;