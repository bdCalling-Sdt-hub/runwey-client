const ShowingPegination = ({ pagination }) => {

    // if pageSize is 5 this size change also slice and page components
    const pageSize = 10;
    const startIndex = (pagination?.page - 1) * pageSize + 1;
    const endIndex = Math.min(
      startIndex + pageSize - 1,
      pagination?.totalResults
    );
  
    const displayRange = `Showing ${startIndex}-${endIndex} OF ${pagination?.totalResults}`;
  
    return <>{displayRange}</>;
  };
  
  export default ShowingPegination;
  