export const filterApplier = (filter, cases) => {
  const newCases = [];
  const dateFilter = filter.dateRangeFilter;
  const descriptionFilter = filter.searchFilter;
  const imageFilter = filter.radioFilter;

  for (const element of cases) {
    if (
      isInDateRange(
        dateFilter.startDate,
        dateFilter.endDate,
        element.date_stolen
      ) &&
      matchesDescriptionFilter(descriptionFilter, element.description) &&
      matchesImageFilter(imageFilter, element.thumb)
    )
      newCases.push(element);
  }

  return newCases;
};

const isInDateRange = (startDate, endDate, caseDate) => {
  if (startDate === null || endDate === null) return true;
  return startDate / 1000 <= caseDate && caseDate <= endDate / 1000;
};

const matchesDescriptionFilter = (filter, description) => {
  if (filter === "") return true;
  return (
    description && description.toLowerCase().includes(filter.toLowerCase())
  );
};

const matchesImageFilter = (filter, image) => {
  if (filter === "All") return true;
  if (filter === "Image") return image !== null;
  if (filter === "No Image") return image === null;
};
