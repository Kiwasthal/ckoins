import { DOTS, usePagination } from '../hooks/usePagination';
import StyledPagination from './styledComponents/paginations';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <StyledPagination.PaginationContainer>
      <StyledPagination.PaginationItem
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <StyledPagination.PaginationArrowLeft />
      </StyledPagination.PaginationItem>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return (
            <StyledPagination.PaginationItemDots className="dots">
              &#8230;
            </StyledPagination.PaginationItemDots>
          );
        }

        return (
          <StyledPagination.PaginationItem
            selected={pageNumber === currentPage}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </StyledPagination.PaginationItem>
        );
      })}
      <StyledPagination.PaginationItem
        disabled={currentPage === lastPage}
        onClick={onNext}
      >
        <StyledPagination.PaginationArrowRight />
      </StyledPagination.PaginationItem>
    </StyledPagination.PaginationContainer>
  );
};

export default Pagination;
