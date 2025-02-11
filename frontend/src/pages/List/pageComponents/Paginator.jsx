import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const Paginator = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };
  return (
    <main className="">
      <div className="paginator">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            <MdNavigateBefore size={24} color="white" />
        </button>
        {currentPage > 3 && (
          <>
            <button onClick={() => handlePageChange(1)}>1</button>
            <span>...</span>
          </>
        )}
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => currentPage - 2 + i).map((page) =>
          page > 0 && page <= totalPages ? (
            <button key={page} onClick={() => handlePageChange(page)} className={page === currentPage ? "active" : ""}>
              {page}
            </button>
          ) : null
        )}
        {currentPage <= totalPages - 2 && (
          <>
            <span>...</span>
            <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button>
          </>
        )}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <MdNavigateNext size={24} color="white" />
        </button>
      </div>
    </main>
  );
};
export default Paginator;
