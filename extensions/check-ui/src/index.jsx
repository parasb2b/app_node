import React from 'react';
import {
  useExtensionApi,
  render,
  Banner,
  useTranslate,
} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Dynamic::Render', () => <App />);

function App() {
  const { extensionPoint } = useExtensionApi();
  const translate = useTranslate();
  return (
    <Banner title="check_ui">{translate('welcome', { extensionPoint })}</Banner>
  );
}

// import React, { useEffect } from 'react';
// import Bhoopi from 'C:UsersHPAppDataLocalProgramsMicrosoft VS Code\resourcesappextensions\node_modules\typescriptliblib.dom.d.ts';
// import {
//   Heading,
//   render,
//   BlockSpacer,
//   Button,
//   Form,
//   Grid,
//   GridItem,
//   TextField,
//   View,
// } from '@shopify/checkout-ui-extensions-react';

// render('Checkout::Dynamic::Render', () => <App />);
// console.log(Bhoopi);

// function App() {
//   prompt('Checkout::Dynamic::');
//   // EffectCallback(() => {
//   // const textField6 = Document.querySelector('input#TextField6');
//   // textField6.addEventListener('change', () => {
//   //   let inputString = textField6.value;
//   //   const address1 = Document.querySelector('input#address1');
//   //   address1.value = inputString;
//   //   Storage.setItem('myAddress1', inputString);
//   //   console.log('hello');
//   //   // classList.add(address1);
//   // });

//   // localStorage.getItem("myAddress1");

//   // const textField7 = document.querySelector('input#TextField7');
//   // textField7.addEventListener('change', () => {
//   //   const inputString2 = textField7.value;
//   //   const address2 = document.querySelector('input#TextField3');
//   //   address2.value = inputString2;
//   // });
//   // return () => {

//   // }
//   // }, []);

//   return (
//     <>
//       {/* <h1>hello</h1> */}
//       <Heading>Store name</Heading>
//       <Form onSubmit={() => console.log('onSubmit event')}>
//         <Grid spacing="base">
//           <View>
//             <TextField label="Addreess" />
//           </View>
//           <View>
//             <TextField label="Apartment" />
//           </View>
//         </Grid>
//         <BlockSpacer spacing="base" />
//         <Button accessibilityRole="submit">Submit</Button>
//       </Form>

//       {}
//     </>
//   );
// }

// // import {
// //   Heading,
// //   render,
// //   BlockSpacer,
// //   Button,
// //   Form,
// //   Grid,
// //   GridItem,
// //   TextField,
// //   View,
// // } from '@shopify/checkout-ui-extensions-react';

// // render('Checkout::Dynamic::Render', () => <App />);

// // function App() {
// //   const handleSubmit = () => {
// //     const textField6 = document.querySelector('input#TextField6')[0];
// //     textField6.addEventListener('change', () => {
// //       const inputString = textField6.value;
// //       const address1 = document.querySelector('input#address1')[0];
// //       address1.value = inputString;
// //     });
// //   };

// //   return (
// //     <>
// //       {/* <h1>hello</h1> */}
// //       {/* <Heading>Store name</Heading> */}
// //       <Form onSubmit={handleSubmit}>
// //         <Grid spacing="base">
// //           <View>
// //             <TextField label="Address" id="address1" />
// //           </View>
// //           <View>
// //             <TextField label="Apartment" />
// //           </View>
// //         </Grid>
// //         <BlockSpacer spacing="base" />
// //         <Button accessibilityRole="submit">Submit</Button>
// //       </Form>
// //     </>
// //   );
// // }

// // import {
// //   Heading,
// //   render,
// //   BlockSpacer,
// //   Button,
// //   Form,
// //   Grid,
// //   GridItem,
// //   TextField,
// //   View,
// // } from '@shopify/checkout-ui-extensions-react';

// // render('Checkout::Dynamic::Render', () => <App />);

// // function App() {
// // const textField6 = document.querySelector('input#TextField6');
// // textField6.addEventListener('change', () => {
// //   const inputString = textField6.value;
// //   const address1 = document.querySelector('input#address1');
// //   address1.value = inputString;
// //   });

// //   return (
// //     <>
// //       {/* <h1>hello</h1> */}
// //       {/* <Heading>Store name</Heading> */}
// //       <Form onSubmit={() => console.log('onSubmit event')}>
// //         <Grid spacing="base">
// //           <View>
// //             <TextField label="Address" id="address1" />
// //           </View>
// //           <View>
// //             <TextField label="Apartment" id="TextField6" />
// //           </View>
// //         </Grid>
// //         <BlockSpacer spacing="base" />
// //         <Button accessibilityRole="submit">Submit</Button>
// //       </Form>
// //     </>
// //   );
// // }

// // import React, { useEffect } from 'react';
// // import {
// //   Heading,
// //   render,
// //   BlockSpacer,
// //   Button,
// //   Form,
// //   Grid,
// //   GridItem,
// //   TextField,
// //   View,
// // } from '@shopify/checkout-ui-extensions-react';

// // render('Checkout::Dynamic::Render', () => <App />);

// // function App() {
// //   useEffect(() => {
// //     const textField6 = document.querySelector('input#TextField6');
// //     textField6.addEventListener('change', () => {
// //       const inputString = textField6.value;
// //       const address1 = document.querySelector('input#address1');
// //       address1.value = inputString;
// //     });

// //     return () => {
// //       textField6.removeEventListener('change', () => {
// //         const inputString = textField6.value;
// //         const address1 = document.querySelector('input#address1');
// //         address1.value = inputString;
// //       });
// //     };
// //   }, []);

// //   return (
// //     <>
// //       {/* <h1>hello</h1> */}
// //       {/* <Heading>Store name</Heading> */}
// //       <Form onSubmit={() => console.log('onSubmit event')}>
// //         <Grid spacing="base">
// //           <View>
// //             <TextField label="Address" id="address1" />
// //           </View>
// //           <View>
// //             <TextField label="Apartment" id="TextField6" />
// //           </View>
// //         </Grid>
// //         <BlockSpacer spacing="base" />
// //         <Button accessibilityRole="submit">Submit</Button>
// //       </Form>
// //     </>
// //   );
// // }

// // export default App;
