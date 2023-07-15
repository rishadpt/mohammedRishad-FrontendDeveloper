export const getFilterdData = (selected, data) => {
  let modifiedarr = [...data];
  console.log(modifiedarr, 'all data');
  selected?.forEach((filter) => {
    if (filter.type === 'multiple') {
      if (filter.key === 'salary') {
        modifiedarr = modifiedarr?.filter((item) => {
          const salary = `${item?.salary?.from}-${item?.salary?.to}`;
          console.log(filter?.values.includes(salary), salary);
          return filter?.values?.includes(salary);
        });
      } else if (filter.key === 'skills') {
        modifiedarr = modifiedarr?.filter((item) => {
          let matchFound = false;
          filter?.values?.forEach((filterItem) => {
            if (item.skills.includes(filterItem)) {
              matchFound = true;
            }
          });
          return matchFound;
        });
      } else {
        modifiedarr = modifiedarr?.filter((item) =>
          filter?.values?.includes(item[filter.key])
        );
      }
      console.log(modifiedarr);
    } else if (filter.type === 'single') {
      modifiedarr = modifiedarr?.filter(
        (item) => filter?.values === item[filter.key]
      );
    } else if (filter.type === 'range') {
      // if (filter.key === 'salary') {
      //   console.log(modifiedarr, data, 'modified');

      //   modifiedarr = modifiedarr?.filter((item) => {
      //     console.log(
      //       filter.values?.from,
      //       'from <',
      //       item.salary?.from,
      //       'to',
      //       '\n',
      //       filter.values?.to,
      //       'to>',
      //       item.salary?.from
      //     );
      //     return (
      //       Number(filter?.values?.from) <= Number(item.salary?.from) && // 1000 - 2200
      //       Number(filter?.values?.to) >= Number(item.salary?.from)
      //     );
      //   });
      // } else if (filter.key == 'age') {
      modifiedarr = modifiedarr?.filter(
        (item) => filter.values.from < item.age && filter?.values?.to > item.age
      );
      // }
    }
  });
  console.log(modifiedarr);
  return modifiedarr;
};
