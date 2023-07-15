export const getFilterdDataByCountry = (country, data) => {
  return data.filter((item: any) => item.nationality === country);
};

export const getFilterdDatabyLocationAndService = (location, service, data) => {
  console.log('called,.....', data, service, location);
  return data.filter(
    (item: any) =>
      item.location?.toLowerCase() === location.toLowerCase() &&
      item.service?.toLowerCase() === service?.toLowerCase()
  );
};
