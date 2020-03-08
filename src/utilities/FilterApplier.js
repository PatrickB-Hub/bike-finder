export const filterApplier = (filter, cases) => {
  const newCases = [];
  const dateFilter = filter.dateRangeFilter;
  const descriptionFilter = filter.searchFilter;
  const imageFilter = filter.radioFilter;
  const colorFilter = filter.checkboxFilter;

  for (const element of cases) {
    if (!element.hasOwnProperty("details")) {
      const [title, details] = titleParser(element.title);
      element.title = title;
      element.details = details;
    }

    if (
      isInDateRange(
        dateFilter.startDate,
        dateFilter.endDate,
        element.occurred_at
      ) &&
      matchesDescriptionFilter(descriptionFilter, element.description) &&
      matchesImageFilter(imageFilter, element.media.image_url) &&
      matchesColorFilter(colorFilter, element.details)
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
  return description && description.includes(filter);
};

const matchesImageFilter = (filter, image) => {
  if (filter === "All") return true;
  if (filter === "Image") return image !== null;
  if (filter === "No Image") return image === null;
};

const matchesColorFilter = (filter, details) => {
  if (filter.length === 0) return true;
  for (const color of filter) {
    if (!details.includes(color.toLowerCase())) return false;
  }
  return true;
};

// clean title and extract details
const titleParser = title => {
  let detailsStartIndex = title.indexOf("(");
  detailsStartIndex =
    detailsStartIndex !== -1 ? detailsStartIndex : title.length;
  let newTitle = title.includes("Stolen")
    ? title.slice(7, detailsStartIndex)
    : title;
  let details =
    detailsStartIndex === title.length
      ? "No details"
      : title.slice(detailsStartIndex);
  return [newTitle, details];
};
