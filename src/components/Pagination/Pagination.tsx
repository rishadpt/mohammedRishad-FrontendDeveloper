import { Flex, Box, Text } from '@chakra-ui/react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [visiblePages, setVisiblePages] = useState<number[]>([]);

  const updateVisiblePages = (page: number) => {
    let newVisiblePages: number[] = [];

    if (totalPages <= 7) {
      newVisiblePages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else if (page < totalPages - 3) {
      newVisiblePages = [page, page + 1, -1, totalPages - 1, totalPages];
    } else {
      newVisiblePages = [
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    setVisiblePages(newVisiblePages);
  };

  const handlePageChange = (page: number) => {
    if (page === -1) {
      const newPage = currentPage + 2;
      onPageChange(newPage);
      updateVisiblePages(newPage);
      return;
    }
    onPageChange(page);
    updateVisiblePages(page);
  };

  useEffect(() => {
    updateVisiblePages(currentPage);
  }, [currentPage, totalPages]);
  return (
    <Flex justify='center' p='2rem'>
      <Box border='1px solid #D0D5DD' borderRadius='6px' display='flex'>
        <Flex
          align='center'
          w='1.8rem'
          h='2rem'
          justify='center'
          // variant='normal'
          borderLeft='0'
          onClick={() => handlePageChange(currentPage - 1)}
          style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
          opacity={currentPage === 1 ? 0.5 : 1}
        >
          <AiOutlineArrowLeft />
        </Flex>

        {visiblePages.map((page, index) => (
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            w='1.8rem'
            h='2rem'
            bg={currentPage === page ? '#F9FAFB' : '#ffff'}
            borderLeft='1px solid #D0D5DD'
            key={index}
            onClick={() => handlePageChange(page)}
            // variant={currentPage === page ? 'active' : 'normal'}
            style={{ cursor: currentPage === page ? 'not-allowed' : 'pointer' }}
            opacity={currentPage === page ? 0.5 : 1}
          >
            {page === -1 ? (
              <Text color='#1D2939'>&hellip;</Text>
            ) : (
              <Text fontSize='xs' color='#1D2939'>
                {page}
              </Text>
            )}
          </Box>
        ))}

        <Flex
          align='center'
          w='1.8rem'
          h='2rem'
          justify='center'
          borderLeft={'1px solid #D0D5DD'}
          // variant='normal'
          onClick={() => handlePageChange(currentPage + 1)}
          style={{
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
          }}
          opacity={currentPage === totalPages ? 0.5 : 1}
          borderRight='0'
        >
          <AiOutlineArrowRight />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Pagination;
