import React, {useState, useEffect} from 'react';
import {useSpring, animated, useTransition} from 'react-spring';
import {Transition} from 'react-spring/renderprops';
import '../../assets/styles.css';

export default {title:'Spring'};

const pages = [
    style => (
      <animated.div style={{ ...style, background: '#b3FFBD' }}>A</animated.div>
    ),
    style => (
      <animated.div style={{ ...style, background: '#B2DBBF' }}>B</animated.div>
    ),
    style => (
      <animated.div style={{ ...style, background: '#12DBBF' }}>C</animated.div>
    ),
  ]

  //transform (x,y,z)
export function Transitions() {
    const [index, setIndex] = useState(0);

    return (
        <div onClick={()=> setIndex(index === 2? 0: index + 1)}>
            <Transition
                native
                reset
                unique
                items={index}
                from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
                enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
                leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}>
                {index => pages[index]}
            </Transition>
        </div>
    )
}

// export function animtedNumbers() {
//   const [items, set] = useState([1,2,3,4]);
//   const transitions = useTransition(items, item => item.key, {
//     from: {transform: 'translate3d(0, -40px, 0)'},
//     enter: {transform: 'translate3d(0,0px,0)'},
//     leave: {transform: 'translate3d(0, -40px,0)'},
//   });
//   return transitions.map(({item, props, key}) => {
//   <animated.div key={key} style={props}>{item.text}</animated.div>
//   })
// }

export function Spring() {
  const props = useSpring({opacity: 0, from: {opacity: 1}});
  return (
      <animated.h1 style={props}>i will fade</animated.h1>
  )
}

export function guideSpring() {
  const animation = useSpring({
    from: {opacity: 0},
    to: {opacity: 1}
  });

  const colorAnimation = useSpring({
    from: {color: 'blue'},
    to: {color: `rbg(255,0,0)`}
  });

  const multiAnimation = useSpring({
    from: {opacity:0, color: 'red'},
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 1, color: 'red' },
      { opacity: .5, color: '#008000' },
      { opacity: .8, color: 'black' }
    ]
  });
  return (
  <div>
    <animated.h1 style={animation}>Hello World</animated.h1>
    <animated.h1 style={colorAnimation}>Hello World</animated.h1>
    <animated.h1 style={multiAnimation}>Hello World</animated.h1>
  </div>
  )
}

//transitions will actually remove the component from the dom
export function transitionsII() {
  // set a variable to useTransition, it needs items, their keys, and an object with from, enter and leave properties
  // our item can be an array of what we want applied or a boolean
  // if the item is an array, we need a set a key (item => item.key), if boolean the key can be false

  const [on, toggle] = useState(false);

  const transition = useTransition(on, null, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0}
  });
  
  return (
    <div>
      {transition.map(({item, key, props}) => (
        item && <animated.div stlye={props}>Hello World</animated.div>
      ))}

      <button onClick={()=> toggle(!on)}>Change</button>
    </div>
  )
} 

// export function transitionIII() {
//   const pages = [
//     ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
//     ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
//     ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
//   ]
//   const [index, set] = useState(0)
//   const onClick = useCallback(()=> set(state => (state + 1) % 3), [])
//   const transitions = useTransition(index, p => p, {
//     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//   })
//   return (
//     <div className="simple-trans-main" onClick={() => onClick}>
//       {transitions.map(({ item, props, key }) => {
//         const Page = pages[item]
//         return <Page key={key} style={props} />
//       })}
//     </div>
//   )
// }