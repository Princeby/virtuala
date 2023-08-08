import properties from './index.json';

// export const getAllProperty = () => {
//     return {
//         data: properties,
//         propertyMap: properties.reduce((a, c, i) => {
//           a[c.id] = c
//           a[c.id].index = i
//           return a
//         }, {})
//       }
// };
export const getAllProperty = () => {
    const propertyMap = properties.reduce((map, property, index) => {
      map[property.id] = { ...property, index };
      return map;
    }, {});
  
    return {
      data: properties,
      propertyMap: propertyMap
    };
  };
  





